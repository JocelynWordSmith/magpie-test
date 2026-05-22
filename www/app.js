(() => {
  // Relative so the app works under a subpath (e.g. user.github.io/magpie/).
  const RESEARCH_BASE = 'research/';
  const app = document.getElementById('app');
  const crumb = document.getElementById('crumb');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCap = document.getElementById('lightbox-cap');

  // -------- utility --------

  const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const resolveImg = (src) => {
    if (/^https?:\/\//.test(src)) return src;
    if (src.startsWith('/')) return src;
    return RESEARCH_BASE + src;
  };

  const inlineMd = (tokens) => {
    // Render marked inline tokens to HTML, rewriting image srcs
    if (!tokens) return '';
    return tokens.map((t) => {
      switch (t.type) {
        case 'text':       return escapeHtml(t.text);
        case 'escape':     return escapeHtml(t.text);
        case 'strong':     return `<strong>${inlineMd(t.tokens)}</strong>`;
        case 'em':         return `<em>${inlineMd(t.tokens)}</em>`;
        case 'codespan':   return `<code>${escapeHtml(t.text)}</code>`;
        case 'br':         return '<br/>';
        case 'del':        return `<del>${inlineMd(t.tokens)}</del>`;
        case 'link':       return `<a href="${escapeHtml(t.href)}" target="_blank" rel="noopener">${inlineMd(t.tokens)}</a>`;
        case 'image':      return `<img src="${escapeHtml(resolveImg(t.href))}" alt="${escapeHtml(t.text || '')}" loading="lazy" />`;
        default:           return escapeHtml(t.raw || '');
      }
    }).join('');
  };

  const paragraphIsOnlyImages = (tok) => {
    if (tok.type !== 'paragraph') return false;
    if (!tok.tokens || tok.tokens.length === 0) return false;
    return tok.tokens.every((t) => t.type === 'image' || (t.type === 'text' && !t.text.trim()));
  };

  const paragraphImages = (tok) => tok.tokens.filter((t) => t.type === 'image');

  // -------- routing --------

  const renderRoute = async () => {
    const hash = location.hash || '#/';
    const m = hash.match(/^#\/(.+)$/);
    if (m) {
      const slug = decodeURIComponent(m[1].replace(/\/$/, ''));
      await renderReport(slug);
    } else {
      await renderHome();
    }
    window.scrollTo(0, 0);
  };

  window.addEventListener('hashchange', renderRoute);

  // -------- home page --------

  const renderHome = async () => {
    crumb.textContent = '';
    app.innerHTML = '<div class="status">Loading…</div>';
    try {
      const md = await fetch(RESEARCH_BASE + 'README.md', { cache: 'no-store' }).then((r) => r.text());
      const intro = parseReadmeIntro(md);
      const readmeEntries = parseReadmeReports(md);

      // Discover .md files so files not in the README table still show up.
      // Try a build-time manifest first (works on static hosts like GH Pages);
      // fall back to nginx-style autoindex JSON at the directory URL.
      let discovered = [];
      try {
        let listing;
        try {
          const r = await fetch(RESEARCH_BASE + 'index.json', { cache: 'no-store' });
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          listing = await r.json();
        } catch (_) {
          listing = await fetch(RESEARCH_BASE, { cache: 'no-store' }).then((r) => r.json());
        }
        discovered = listing
          .filter((e) => e.type === 'file' && /\.md$/i.test(e.name) && e.name.toLowerCase() !== 'readme.md')
          .map((e) => e.name.replace(/\.md$/i, ''));
      } catch (_) { /* listing unavailable — fall back to README rows only */ }

      const reports = await mergeReports(readmeEntries, discovered);

      app.innerHTML = `
        <section class="home-hero">
          <h1>Magpie</h1>
          <p>${escapeHtml(intro || 'A nest of shiny things — screenshots, notes, and design moves collected from other apps.')}</p>
        </section>
        <section class="report-grid" id="report-grid"></section>
      `;
      const grid = document.getElementById('report-grid');
      grid.innerHTML = reports.map((r) => `
        <a class="report-card${r.orphan ? ' orphan' : ''}" href="#/${encodeURIComponent(r.slug)}" data-slug="${escapeHtml(r.slug)}">
          <div class="preview" data-preview="${escapeHtml(r.slug)}"></div>
          <div class="card-body">
            <div class="title">${escapeHtml(r.name)}</div>
            <div class="standout">${r.standout}</div>
            <div class="meta">${r.images ? r.images + ' images · ' : ''}Open report →</div>
          </div>
        </a>
      `).join('');

      // Lazy-load each report's first image in parallel
      reports.forEach(async (r) => {
        try {
          const fileMd = r.cachedMd || await fetch(`${RESEARCH_BASE}${encodeURIComponent(r.slug)}.md`, { cache: 'no-store' }).then((res) => res.text());
          const first = findFirstImage(fileMd);
          if (!first) return;
          const slot = grid.querySelector(`.preview[data-preview="${CSS.escape(r.slug)}"]`);
          if (!slot) return;
          slot.innerHTML = `<img src="${escapeHtml(resolveImg(first.src))}" alt="${escapeHtml(first.alt)}" loading="lazy" />`;
        } catch (_) { /* ignore — card just renders without preview */ }
      });
    } catch (err) {
      app.innerHTML = `<div class="status error">Failed to load index: ${escapeHtml(err.message)}</div>`;
    }
  };

  // Combine README table rows with auto-discovered .md files.
  // README rows whose file doesn't exist are dropped; discovered files
  // not in the README get a minimal card with title from the file itself.
  const mergeReports = async (readmeEntries, discoveredSlugs) => {
    const discovered = new Set(discoveredSlugs);
    const knownFromReadme = readmeEntries.filter((r) => discovered.size === 0 || discovered.has(r.slug));

    const knownSlugs = new Set(knownFromReadme.map((r) => r.slug));
    const orphanSlugs = discoveredSlugs.filter((s) => !knownSlugs.has(s)).sort();

    const orphans = await Promise.all(orphanSlugs.map(async (slug) => {
      try {
        const fileMd = await fetch(`${RESEARCH_BASE}${encodeURIComponent(slug)}.md`, { cache: 'no-store' }).then((r) => r.text());
        const titleMatch = fileMd.match(/^#\s+(.+?)\s*$/m);
        const name = titleMatch ? titleMatch[1] : slug;
        return { name, slug, images: '', standout: '<em class="hint">Not yet in README</em>', orphan: true, cachedMd: fileMd };
      } catch (_) {
        return { name: slug, slug, images: '', standout: '', orphan: true };
      }
    }));

    return [...knownFromReadme, ...orphans];
  };

  const findFirstImage = (md) => {
    const m = md.match(/!\[([^\]]*)\]\(([^)\s]+)\)/);
    return m ? { alt: m[1], src: m[2] } : null;
  };

  const parseReadmeIntro = (md) => {
    // Grab first paragraph after the # heading
    const lines = md.split('\n');
    let inIntro = false;
    const buf = [];
    for (const ln of lines) {
      if (/^#\s+/.test(ln)) { inIntro = true; continue; }
      if (!inIntro) continue;
      if (/^##\s+/.test(ln) || /^\*\*Total/.test(ln)) break;
      if (ln.trim()) buf.push(ln.trim());
      else if (buf.length) break;
    }
    return buf.join(' ').replace(/\*\*(.+?)\*\*/g, '$1');
  };

  const parseReadmeReports = (md) => {
    // Find the markdown table under "## Reports"
    const lines = md.split('\n');
    const rows = [];
    let inTable = false;
    for (const ln of lines) {
      if (/^\|\s*\*\*[A-Z]/i.test(ln) || /^\|\s*App\s*\|/i.test(ln)) {
        // Header or row line — table is active
        inTable = true;
      }
      if (inTable) {
        if (!ln.startsWith('|')) { inTable = false; continue; }
        const cells = ln.split('|').slice(1, -1).map((c) => c.trim());
        // Skip header/divider rows
        if (cells.length < 4) continue;
        if (/^-+$/.test(cells[0]) || /^:?-+:?$/.test(cells[0])) continue;
        if (/^app$/i.test(cells[0].replace(/\*/g, ''))) continue;
        rows.push(cells);
      }
    }
    return rows.map((cells) => {
      const name = cells[0].replace(/\*\*/g, '').trim();
      const linkMatch = cells[1].match(/\[(.+?)\]\((.+?)\.md\)/);
      const slug = linkMatch ? linkMatch[2] : name.toLowerCase();
      const images = cells[2].replace(/[^\d]/g, '');
      const standout = renderInlineMdString(cells[3]);
      return { name, slug, images, standout };
    });
  };

  // Render a small inline-md string (bold + italic + code) to safe HTML
  const renderInlineMdString = (s) => {
    // Use marked's inline lexer
    const tokens = marked.lexer(s).flatMap((t) => t.tokens || (t.text ? [{ type: 'text', text: t.text }] : []));
    return inlineMd(tokens);
  };

  // -------- report page --------

  const renderReport = async (slug) => {
    crumb.textContent = slug;
    app.innerHTML = '<div class="status">Loading…</div>';
    try {
      const md = await fetch(`${RESEARCH_BASE}${encodeURIComponent(slug)}.md`, { cache: 'no-store' })
        .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); });

      const doc = parseReport(md);
      crumb.textContent = doc.title || slug;

      const html = [];
      html.push(`<h1 class="report-title">${escapeHtml(doc.title || slug)}</h1>`);
      if (doc.intro.length) {
        html.push('<div class="report-intro">');
        for (const tok of doc.intro) {
          if (tok.type === 'paragraph') html.push(`<p>${inlineMd(tok.tokens)}</p>`);
        }
        html.push('</div>');
      }

      doc.sections.forEach((sec, i) => {
        const isTakeaways = /takeaway|design language/i.test(sec.heading);
        const num = String(i + 1).padStart(2, '0');
        html.push('<section class="section">');
        html.push(`<h2 class="section-heading"><span class="num">${num}</span><span>${escapeHtml(sec.heading)}</span></h2>`);

        // Section lead: first run of non-image text paragraphs
        const lead = [];
        let restStart = 0;
        for (let j = 0; j < sec.blocks.length; j++) {
          const b = sec.blocks[j];
          if (b.kind === 'text' && !b.fromList) { lead.push(b); restStart = j + 1; }
          else break;
        }
        const rest = sec.blocks.slice(restStart);

        if (lead.length) {
          html.push('<div class="section-lead">');
          for (const b of lead) html.push(b.html);
          html.push('</div>');
        }

        if (rest.length) {
          html.push('<div class="masonry">');
          for (const b of rest) {
            if (b.kind === 'image') {
              html.push(`
                <figure class="tile image" data-src="${escapeHtml(b.src)}" data-cap="${escapeHtml(b.alt || '')}">
                  <img src="${escapeHtml(b.src)}" alt="${escapeHtml(b.alt || '')}" loading="lazy" />
                  ${b.alt ? `<figcaption class="caption">${escapeHtml(b.alt)}</figcaption>` : ''}
                </figure>
              `);
            } else {
              html.push(`<div class="tile text${isTakeaways ? ' takeaways' : ''}">${b.html}</div>`);
            }
          }
          html.push('</div>');
        }
        html.push('</section>');
      });

      app.innerHTML = html.join('');
      wireImages();
    } catch (err) {
      app.innerHTML = `<div class="status error">Failed to load report "${escapeHtml(slug)}": ${escapeHtml(err.message)}</div>`;
    }
  };

  const parseReport = (md) => {
    const tokens = marked.lexer(md);
    const doc = { title: '', intro: [], sections: [] };
    let current = null;
    for (const tok of tokens) {
      if (tok.type === 'heading' && tok.depth === 1) {
        doc.title = tok.text;
        continue;
      }
      if (tok.type === 'heading' && tok.depth === 2) {
        current = { heading: tok.text, blocks: [] };
        doc.sections.push(current);
        continue;
      }
      if (tok.type === 'hr' || tok.type === 'space') continue;

      if (!current) {
        // Pre-section content = report intro
        if (tok.type === 'paragraph') doc.intro.push(tok);
        continue;
      }

      // Inside a section
      if (tok.type === 'paragraph') {
        if (paragraphIsOnlyImages(tok)) {
          for (const img of paragraphImages(tok)) {
            current.blocks.push({
              kind: 'image',
              src: resolveImg(img.href),
              alt: img.text || '',
            });
          }
        } else {
          current.blocks.push({
            kind: 'text',
            html: `<p>${inlineMd(tok.tokens)}</p>`,
          });
        }
      } else if (tok.type === 'list') {
        // Each list item becomes its own tile
        for (const item of tok.items) {
          const inner = item.tokens.map((sub) => {
            if (sub.type === 'text') return `<p>${inlineMd(sub.tokens || [{ type: 'text', text: sub.text }])}</p>`;
            if (sub.type === 'paragraph') return `<p>${inlineMd(sub.tokens)}</p>`;
            if (sub.type === 'list') {
              const tag = sub.ordered ? 'ol' : 'ul';
              const inner2 = sub.items.map((it2) => `<li>${inlineMd(it2.tokens?.[0]?.tokens || [{ type: 'text', text: it2.text }])}</li>`).join('');
              return `<${tag}>${inner2}</${tag}>`;
            }
            return '';
          }).join('');
          current.blocks.push({ kind: 'text', fromList: true, html: inner });
        }
      } else if (tok.type === 'blockquote') {
        current.blocks.push({
          kind: 'text',
          html: `<blockquote>${escapeHtml(tok.text)}</blockquote>`,
        });
      } else if (tok.type === 'table') {
        // Render simple table as text tile
        const headers = (tok.header || []).map((h) => `<th>${escapeHtml(h.text || '')}</th>`).join('');
        const rows = (tok.rows || []).map((r) => `<tr>${r.map((c) => `<td>${escapeHtml(c.text || '')}</td>`).join('')}</tr>`).join('');
        current.blocks.push({
          kind: 'text',
          html: `<table>${headers ? `<thead><tr>${headers}</tr></thead>` : ''}<tbody>${rows}</tbody></table>`,
        });
      }
    }
    return doc;
  };

  // -------- lightbox --------

  const wireImages = () => {
    app.querySelectorAll('.tile.image').forEach((tile) => {
      tile.addEventListener('click', () => {
        lightboxImg.src = tile.dataset.src;
        lightboxImg.alt = tile.dataset.cap || '';
        lightboxCap.textContent = tile.dataset.cap || '';
        lightbox.hidden = false;
      });
    });
  };

  lightbox.addEventListener('click', () => { lightbox.hidden = true; lightboxImg.src = ''; });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) {
      lightbox.hidden = true; lightboxImg.src = '';
    }
  });

  // -------- boot --------

  renderRoute();
})();
