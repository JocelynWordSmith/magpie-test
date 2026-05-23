(() => {
  // Relative so the app works under a subpath (e.g. user.github.io/magpie/).
  const RESEARCH_BASE = 'research/';
  const app = document.getElementById('app');
  const crumb = document.getElementById('crumb');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCap = document.getElementById('lightbox-cap');

  // -------- storage --------

  const Storage = {
    _get(key, def) {
      try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; }
    },
    _set(key, val) { localStorage.setItem(key, JSON.stringify(val)); },

    getFavorites()      { return new Set(this._get('magpie:favorites', [])); },
    isFavorite(slug)    { return this.getFavorites().has(slug); },
    toggleFavorite(slug) {
      const favs = this.getFavorites();
      favs.has(slug) ? favs.delete(slug) : favs.add(slug);
      this._set('magpie:favorites', [...favs]);
      return favs.has(slug);
    },

    getTags()           { return this._get('magpie:tags', {}); },
    getTagsFor(slug)    { return this.getTags()[slug] || []; },
    setTagsFor(slug, tags) {
      const all = this.getTags();
      if (tags.length) all[slug] = tags; else delete all[slug];
      this._set('magpie:tags', all);
    },
    getAllTags() {
      return [...new Set(Object.values(this.getTags()).flat())].sort();
    },

    getCollections()    { return this._get('magpie:collections', []); },
    setCollections(c)   { this._set('magpie:collections', c); },
    createCollection(name) {
      const cols = this.getCollections();
      const col = { id: Date.now().toString(36), name: name.trim(), slugs: [] };
      cols.push(col);
      this.setCollections(cols);
      return col;
    },
    deleteCollection(id) {
      this.setCollections(this.getCollections().filter(c => c.id !== id));
    },
    isInCollection(id, slug) {
      return (this.getCollections().find(c => c.id === id)?.slugs || []).includes(slug);
    },
    toggleInCollection(id, slug) {
      const cols = this.getCollections();
      const col = cols.find(c => c.id === id);
      if (!col) return;
      const i = col.slugs.indexOf(slug);
      i >= 0 ? col.slugs.splice(i, 1) : col.slugs.push(slug);
      this.setCollections(cols);
    },
  };

  // -------- categories --------

  const Categories = {
    _map: null,

    async load() {
      try {
        const r = await fetch(RESEARCH_BASE + 'apps-index.md', { cache: 'no-store' });
        if (!r.ok) throw new Error();
        this._map = this._parse(await r.text());
      } catch { this._map = new Map(); }
    },

    _parse(md) {
      const map = new Map();
      let cat = null;
      for (const line of md.split('\n')) {
        const h = line.match(/^##\s+(.+)/);
        if (h) { cat = h[1].trim(); continue; }
        if (!cat) continue;
        const link = line.match(/\[report\]\([^)]*?([^/)\s]+)\.md\)/);
        if (link) map.set(link[1], cat);
      }
      return map;
    },

    getAll()      { return this._map ? [...new Set(this._map.values())] : []; },
    getFor(slug)  { return this._map?.get(slug) || null; },
  };

  // -------- filter state --------

  let filterState = { category: null, favoritesOnly: false, collectionId: null, tag: null, sort: 'default' };
  let allReports = [];

  const hasActiveFilter = () =>
    !!(filterState.category || filterState.favoritesOnly || filterState.collectionId ||
       filterState.tag || filterState.sort !== 'default');

  const applyFilters = (reports) => {
    let out = [...reports];
    if (filterState.favoritesOnly)  out = out.filter(r => Storage.isFavorite(r.slug));
    if (filterState.category)       out = out.filter(r => Categories.getFor(r.slug) === filterState.category);
    if (filterState.collectionId) {
      const slugSet = new Set(Storage.getCollections().find(c => c.id === filterState.collectionId)?.slugs || []);
      out = out.filter(r => slugSet.has(r.slug));
    }
    if (filterState.tag)            out = out.filter(r => Storage.getTagsFor(r.slug).includes(filterState.tag));
    if (filterState.sort === 'az')  out.sort((a, b) => a.name.localeCompare(b.name));
    if (filterState.sort === 'za')  out.sort((a, b) => b.name.localeCompare(a.name));
    return out;
  };

  // -------- utility --------

  const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  const resolveImg = (src) => {
    if (/^https?:\/\//.test(src)) return src;
    if (src.startsWith('/')) return src;
    return RESEARCH_BASE + src;
  };

  const inlineMd = (tokens) => {
    if (!tokens) return '';
    return tokens.map((t) => {
      switch (t.type) {
        case 'text':    return escapeHtml(t.text);
        case 'escape':  return escapeHtml(t.text);
        case 'strong':  return `<strong>${inlineMd(t.tokens)}</strong>`;
        case 'em':      return `<em>${inlineMd(t.tokens)}</em>`;
        case 'codespan':return `<code>${escapeHtml(t.text)}</code>`;
        case 'br':      return '<br/>';
        case 'del':     return `<del>${inlineMd(t.tokens)}</del>`;
        case 'link':    return `<a href="${escapeHtml(t.href)}" target="_blank" rel="noopener">${inlineMd(t.tokens)}</a>`;
        case 'image':   return `<img src="${escapeHtml(resolveImg(t.href))}" alt="${escapeHtml(t.text || '')}" loading="lazy" />`;
        default:        return escapeHtml(t.raw || '');
      }
    }).join('');
  };

  const paragraphIsOnlyImages = (tok) => {
    if (tok.type !== 'paragraph' || !tok.tokens?.length) return false;
    return tok.tokens.every((t) => t.type === 'image' || (t.type === 'text' && !t.text.trim()));
  };

  const paragraphImages = (tok) => tok.tokens.filter((t) => t.type === 'image');

  // -------- routing --------

  const renderRoute = async () => {
    const hash = location.hash || '#/';
    const m = hash.match(/^#\/(.+)$/);
    if (m) {
      await renderReport(decodeURIComponent(m[1].replace(/\/$/, '')));
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
      const [md] = await Promise.all([
        fetch(RESEARCH_BASE + 'README.md', { cache: 'no-store' }).then(r => r.text()),
        Categories.load(),
      ]);

      let discovered = [];
      try {
        let listing;
        try {
          const r = await fetch(RESEARCH_BASE + 'index.json', { cache: 'no-store' });
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          listing = await r.json();
        } catch (_) {
          listing = await fetch(RESEARCH_BASE, { cache: 'no-store' }).then(r => r.json());
        }
        discovered = listing
          .filter(e => e.type === 'file' && /\.md$/i.test(e.name) && e.name.toLowerCase() !== 'readme.md')
          .map(e => e.name.replace(/\.md$/i, ''));
      } catch (_) {}

      allReports = await mergeReports(parseReadmeReports(md), discovered);

      app.innerHTML = `
        <section class="home-hero">
          <h1>Magpie</h1>
          <p>${escapeHtml(parseReadmeIntro(md) || 'A nest of shiny things — screenshots, notes, and design moves collected from other apps.')}</p>
        </section>
        <div id="controls-wrapper"></div>
        <section class="report-grid" id="report-grid"></section>
      `;

      refreshHomeControls();
      renderGrid();
      lazyLoadPreviews();
    } catch (err) {
      app.innerHTML = `<div class="status error">Failed to load index: ${escapeHtml(err.message)}</div>`;
    }
  };

  const buildCollectionsBar = () => {
    const cols = Storage.getCollections();
    const pills = cols.map(col => `
      <span class="col-pill${filterState.collectionId === col.id ? ' active' : ''}" data-col-id="${escapeHtml(col.id)}">
        <span class="col-pill-name">${escapeHtml(col.name)}</span>
        <button class="col-pill-delete" data-col-id="${escapeHtml(col.id)}" title="Delete collection">×</button>
      </span>`).join('');
    return `
      <div class="collections-bar" id="collections-bar">
        ${pills}
        <button class="col-new-btn" id="col-new-btn">＋ New collection</button>
        <input class="col-new-input" id="col-new-input" type="text" placeholder="Collection name…" />
      </div>`;
  };

  const buildFilterBar = () => {
    const cats = Categories.getAll();
    const allTags = Storage.getAllTags();
    return `
      <div class="filter-bar" id="filter-bar">
        ${cats.length ? `
          <select class="filter-select" id="filter-category">
            <option value="">All categories</option>
            ${cats.map(c => `<option value="${escapeHtml(c)}"${filterState.category === c ? ' selected' : ''}>${escapeHtml(c)}</option>`).join('')}
          </select>` : ''}
        <button class="filter-btn${filterState.favoritesOnly ? ' active' : ''}" id="filter-favs" title="Show favorites only">★ Favorites</button>
        ${allTags.length ? `
          <select class="filter-select" id="filter-tag">
            <option value="">All tags</option>
            ${allTags.map(t => `<option value="${escapeHtml(t)}"${filterState.tag === t ? ' selected' : ''}>${escapeHtml(t)}</option>`).join('')}
          </select>` : ''}
        <select class="filter-select" id="filter-sort">
          <option value="default"${filterState.sort === 'default' ? ' selected' : ''}>Default order</option>
          <option value="az"${filterState.sort === 'az' ? ' selected' : ''}>A → Z</option>
          <option value="za"${filterState.sort === 'za' ? ' selected' : ''}>Z → A</option>
        </select>
        ${hasActiveFilter() ? '<button class="filter-btn filter-clear" id="filter-clear">✕ Clear</button>' : ''}
      </div>`;
  };

  const refreshHomeControls = () => {
    const wrapper = document.getElementById('controls-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = buildCollectionsBar() + buildFilterBar();
    wireHomeControls();
  };

  const wireHomeControls = () => {
    // Collections bar — toggle filter + delete
    document.getElementById('collections-bar')?.addEventListener('click', (e) => {
      const del = e.target.closest('.col-pill-delete');
      if (del) {
        e.stopPropagation();
        const id = del.dataset.colId;
        const col = Storage.getCollections().find(c => c.id === id);
        if (col && confirm(`Delete collection "${col.name}"?`)) {
          Storage.deleteCollection(id);
          if (filterState.collectionId === id) filterState.collectionId = null;
          refreshHomeControls();
          renderGrid();
        }
        return;
      }
      const pill = e.target.closest('.col-pill');
      if (pill) {
        const id = pill.dataset.colId;
        filterState.collectionId = filterState.collectionId === id ? null : id;
        refreshHomeControls();
        renderGrid();
      }
    });

    // New collection
    const colNewBtn   = document.getElementById('col-new-btn');
    const colNewInput = document.getElementById('col-new-input');
    colNewBtn?.addEventListener('click', () => {
      colNewBtn.style.display = 'none';
      colNewInput.style.display = '';
      colNewInput.focus();
    });

    const saveNewCol = () => {
      const name = colNewInput?.value.trim();
      if (name) Storage.createCollection(name);
      if (colNewInput) colNewInput.value = '';
      refreshHomeControls();
    };
    colNewInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter')  { e.preventDefault(); saveNewCol(); }
      if (e.key === 'Escape') { colNewInput.value = ''; refreshHomeControls(); }
    });
    colNewInput?.addEventListener('blur', () => setTimeout(saveNewCol, 100));

    // Filter controls
    document.getElementById('filter-category')?.addEventListener('change', (e) => {
      filterState.category = e.target.value || null;
      refreshHomeControls(); renderGrid();
    });
    document.getElementById('filter-favs')?.addEventListener('click', () => {
      filterState.favoritesOnly = !filterState.favoritesOnly;
      refreshHomeControls(); renderGrid();
    });
    document.getElementById('filter-tag')?.addEventListener('change', (e) => {
      filterState.tag = e.target.value || null;
      refreshHomeControls(); renderGrid();
    });
    document.getElementById('filter-sort')?.addEventListener('change', (e) => {
      filterState.sort = e.target.value;
      refreshHomeControls(); renderGrid();
    });
    document.getElementById('filter-clear')?.addEventListener('click', () => {
      filterState = { category: null, favoritesOnly: false, collectionId: null, tag: null, sort: 'default' };
      refreshHomeControls(); renderGrid();
    });
  };

  const renderCardTagPills = (slug) => {
    const tags = Storage.getTagsFor(slug);
    if (!tags.length) return '';
    return `<div class="card-tags">${tags.map(t => `<span class="tag-pill">${escapeHtml(t)}</span>`).join('')}</div>`;
  };

  const renderCard = (r) => {
    const isFav    = Storage.isFavorite(r.slug);
    const category = Categories.getFor(r.slug);
    const meta     = [
      r.images ? r.images + ' images' : '',
      category ? `<span class="category-badge">${escapeHtml(category)}</span>` : '',
      'Open report →',
    ].filter(Boolean).join(' · ');

    return `
      <a class="report-card${r.orphan ? ' orphan' : ''}" href="#/${encodeURIComponent(r.slug)}" data-slug="${escapeHtml(r.slug)}">
        <button class="fav-btn${isFav ? ' active' : ''}" data-fav-slug="${escapeHtml(r.slug)}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">★</button>
        <div class="preview" data-preview="${escapeHtml(r.slug)}"></div>
        <div class="card-body">
          <div class="card-title">${escapeHtml(r.name)}</div>
          <div class="standout">${r.standout}</div>
          ${renderCardTagPills(r.slug)}
          <div class="meta">${meta}</div>
        </div>
        <button class="col-add-btn" data-col-slug="${escapeHtml(r.slug)}" data-col-name="${escapeHtml(r.name)}" title="Add to collection">⊕</button>
      </a>`;
  };

  const renderGrid = () => {
    const grid = document.getElementById('report-grid');
    if (!grid) return;
    const filtered = applyFilters(allReports);
    if (!filtered.length) {
      grid.innerHTML = '<p class="no-results">No reports match the current filters.</p>';
      return;
    }
    grid.innerHTML = filtered.map(renderCard).join('');
    // Populate cached previews immediately
    filtered.forEach(r => {
      if (r.cachedPreviewSrc) {
        const slot = grid.querySelector(`.preview[data-preview="${CSS.escape(r.slug)}"]`);
        if (slot) slot.innerHTML = `<img src="${escapeHtml(r.cachedPreviewSrc)}" alt="" loading="lazy" />`;
      }
    });
    // Wire card buttons once per grid element (not once per render).
    if (!grid.dataset.wired) { grid.dataset.wired = '1'; wireCardButtons(grid); }
  };

  const wireCardButtons = (grid) => {
    grid.addEventListener('click', (e) => {
      // Favorite toggle
      const favBtn = e.target.closest('.fav-btn');
      if (favBtn?.dataset.favSlug) {
        e.preventDefault();
        const slug = favBtn.dataset.favSlug;
        const isFav = Storage.toggleFavorite(slug);
        favBtn.classList.toggle('active', isFav);
        favBtn.title = isFav ? 'Remove from favorites' : 'Add to favorites';
        // Update tag pills on this card (in case favorites filter is active)
        if (filterState.favoritesOnly) renderGrid();
        return;
      }
      // Add to collection
      const colBtn = e.target.closest('.col-add-btn');
      if (colBtn?.dataset.colSlug) {
        e.preventDefault();
        openCollectionModal(colBtn.dataset.colSlug, colBtn.dataset.colName);
      }
    });
  };

  const lazyLoadPreviews = () => {
    allReports.forEach(async (r) => {
      if (r.cachedPreviewSrc !== undefined) return;
      try {
        const md = r.cachedMd || await fetch(`${RESEARCH_BASE}${encodeURIComponent(r.slug)}.md`, { cache: 'no-store' }).then(res => res.text());
        r.cachedMd = md;
        const first = findFirstImage(md);
        r.cachedPreviewSrc = first ? resolveImg(first.src) : null;
        if (!r.cachedPreviewSrc) return;
        const slot = document.querySelector(`.preview[data-preview="${CSS.escape(r.slug)}"]`);
        if (slot) slot.innerHTML = `<img src="${escapeHtml(r.cachedPreviewSrc)}" alt="" loading="lazy" />`;
      } catch { r.cachedPreviewSrc = null; }
    });
  };

  // -------- home page — data helpers --------

  const mergeReports = async (readmeEntries, discoveredSlugs) => {
    const discovered = new Set(discoveredSlugs);
    const knownFromReadme = readmeEntries.filter(r => discovered.size === 0 || discovered.has(r.slug));
    const knownSlugs = new Set(knownFromReadme.map(r => r.slug));
    const orphanSlugs = discoveredSlugs.filter(s => !knownSlugs.has(s)).sort();

    const orphans = await Promise.all(orphanSlugs.map(async (slug) => {
      try {
        const md = await fetch(`${RESEARCH_BASE}${encodeURIComponent(slug)}.md`, { cache: 'no-store' }).then(r => r.text());
        const titleMatch = md.match(/^#\s+(.+?)\s*$/m);
        return { name: titleMatch ? titleMatch[1] : slug, slug, images: '', standout: '<em class="hint">Not yet in README</em>', orphan: true, cachedMd: md };
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
    const lines = md.split('\n');
    let inIntro = false;
    const buf = [];
    for (const ln of lines) {
      if (/^#\s+/.test(ln))                         { inIntro = true; continue; }
      if (!inIntro)                                   continue;
      if (/^##\s+/.test(ln) || /^\*\*Total/.test(ln)) break;
      if (ln.trim())  buf.push(ln.trim());
      else if (buf.length) break;
    }
    return buf.join(' ').replace(/\*\*(.+?)\*\*/g, '$1');
  };

  const parseReadmeReports = (md) => {
    const lines = md.split('\n');
    const rows = [];
    let inTable = false;
    for (const ln of lines) {
      if (/^\|\s*\*\*[A-Z]/i.test(ln) || /^\|\s*App\s*\|/i.test(ln)) inTable = true;
      if (inTable) {
        if (!ln.startsWith('|')) { inTable = false; continue; }
        const cells = ln.split('|').slice(1, -1).map(c => c.trim());
        if (cells.length < 4) continue;
        if (/^-+$/.test(cells[0]) || /^:?-+:?$/.test(cells[0])) continue;
        if (/^app$/i.test(cells[0].replace(/\*/g, ''))) continue;
        rows.push(cells);
      }
    }
    return rows.map(cells => {
      const name     = cells[0].replace(/\*\*/g, '').trim();
      const linkMatch = cells[1].match(/\[(.+?)\]\((.+?)\.md\)/);
      const slug     = linkMatch ? linkMatch[2] : name.toLowerCase();
      const images   = cells[2].replace(/[^\d]/g, '');
      const standout = renderInlineMdString(cells[3]);
      return { name, slug, images, standout };
    });
  };

  const renderInlineMdString = (s) => {
    const tokens = marked.lexer(s).flatMap(t => t.tokens || (t.text ? [{ type: 'text', text: t.text }] : []));
    return inlineMd(tokens);
  };

  // -------- report page --------

  const renderReport = async (slug) => {
    crumb.textContent = slug;
    app.innerHTML = '<div class="status">Loading…</div>';
    try {
      const md = await fetch(`${RESEARCH_BASE}${encodeURIComponent(slug)}.md`, { cache: 'no-store' })
        .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); });

      const doc = parseReport(md);
      crumb.textContent = doc.title || slug;

      const isFav = Storage.isFavorite(slug);
      const html = [];
      html.push(`
        <div class="report-header">
          <h1 class="report-title">${escapeHtml(doc.title || slug)}</h1>
          <div class="report-actions">
            <button class="fav-btn report-fav${isFav ? ' active' : ''}" data-fav-slug="${escapeHtml(slug)}">${isFav ? '★' : '☆'} ${isFav ? 'Favorited' : 'Favorite'}</button>
            <button class="col-add-btn report-col-btn" data-col-slug="${escapeHtml(slug)}" data-col-name="${escapeHtml(doc.title || slug)}">⊕ Add to collection</button>
          </div>
        </div>
        ${renderTagEditor(slug)}`);

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
                </figure>`);
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
      wireTagEditor(slug);
      wireReportActions(slug, doc.title);
    } catch (err) {
      app.innerHTML = `<div class="status error">Failed to load report "${escapeHtml(slug)}": ${escapeHtml(err.message)}</div>`;
    }
  };

  const renderTagEditor = (slug) => {
    const tags = Storage.getTagsFor(slug);
    const chips = tags.map(t => `
      <span class="tag-chip">
        ${escapeHtml(t)}<button class="tag-remove" data-tag="${escapeHtml(t)}" aria-label="Remove ${escapeHtml(t)}">×</button>
      </span>`).join('');
    const allTags = Storage.getAllTags();
    return `
      <div class="tag-editor" id="tag-editor" data-slug="${escapeHtml(slug)}">
        ${chips}
        <button class="tag-add-btn" id="tag-add-btn">＋ tag</button>
        <input class="tag-input" id="tag-input" list="tag-datalist" placeholder="tag name…" />
        <datalist id="tag-datalist">${allTags.map(t => `<option value="${escapeHtml(t)}">`).join('')}</datalist>
      </div>`;
  };

  const wireTagEditor = (slug) => {
    const editor   = document.getElementById('tag-editor');
    const addBtn   = document.getElementById('tag-add-btn');
    const input    = document.getElementById('tag-input');
    if (!editor) return;

    // Remove tag
    editor.addEventListener('click', (e) => {
      const btn = e.target.closest('.tag-remove');
      if (!btn) return;
      const tag  = btn.dataset.tag;
      Storage.setTagsFor(slug, Storage.getTagsFor(slug).filter(t => t !== tag));
      editor.outerHTML = renderTagEditor(slug);
      wireTagEditor(slug);
    });

    // Show input
    addBtn?.addEventListener('click', () => {
      addBtn.style.display = 'none';
      if (input) { input.style.display = ''; input.focus(); }
    });

    const saveTag = () => {
      const val = input?.value.trim().toLowerCase();
      if (val) {
        const tags = Storage.getTagsFor(slug);
        if (!tags.includes(val)) Storage.setTagsFor(slug, [...tags, val]);
      }
      if (input) input.value = '';
      const el = document.getElementById('tag-editor');
      if (el) { el.outerHTML = renderTagEditor(slug); wireTagEditor(slug); }
    };

    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter')  { e.preventDefault(); saveTag(); }
      if (e.key === 'Escape') {
        if (input) input.value = '';
        const el = document.getElementById('tag-editor');
        if (el) { el.outerHTML = renderTagEditor(slug); wireTagEditor(slug); }
      }
    });
    // Delay blur so datalist option clicks register first
    input?.addEventListener('blur', () => setTimeout(() => {
      if (document.getElementById('tag-input') === input) saveTag();
    }, 150));
  };

  const wireReportActions = (slug, title) => {
    const favBtn = app.querySelector('.report-fav');
    favBtn?.addEventListener('click', () => {
      const isFav = Storage.toggleFavorite(slug);
      favBtn.classList.toggle('active', isFav);
      favBtn.textContent = (isFav ? '★' : '☆') + (isFav ? ' Favorited' : ' Favorite');
    });

    app.querySelector('.report-col-btn')?.addEventListener('click', () => {
      openCollectionModal(slug, title || slug);
    });
  };

  const parseReport = (md) => {
    const tokens = marked.lexer(md);
    const doc = { title: '', intro: [], sections: [] };
    let current = null;
    for (const tok of tokens) {
      if (tok.type === 'heading' && tok.depth === 1) { doc.title = tok.text; continue; }
      if (tok.type === 'heading' && tok.depth === 2) {
        current = { heading: tok.text, blocks: [] };
        doc.sections.push(current);
        continue;
      }
      if (tok.type === 'hr' || tok.type === 'space') continue;
      if (!current) {
        if (tok.type === 'paragraph') doc.intro.push(tok);
        continue;
      }
      if (tok.type === 'paragraph') {
        if (paragraphIsOnlyImages(tok)) {
          for (const img of paragraphImages(tok)) {
            current.blocks.push({ kind: 'image', src: resolveImg(img.href), alt: img.text || '' });
          }
        } else {
          current.blocks.push({ kind: 'text', html: `<p>${inlineMd(tok.tokens)}</p>` });
        }
      } else if (tok.type === 'list') {
        for (const item of tok.items) {
          const inner = item.tokens.map(sub => {
            if (sub.type === 'text')      return `<p>${inlineMd(sub.tokens || [{ type: 'text', text: sub.text }])}</p>`;
            if (sub.type === 'paragraph') return `<p>${inlineMd(sub.tokens)}</p>`;
            if (sub.type === 'list') {
              const tag = sub.ordered ? 'ol' : 'ul';
              return `<${tag}>${sub.items.map(it2 => `<li>${inlineMd(it2.tokens?.[0]?.tokens || [{ type: 'text', text: it2.text }])}</li>`).join('')}</${tag}>`;
            }
            return '';
          }).join('');
          current.blocks.push({ kind: 'text', fromList: true, html: inner });
        }
      } else if (tok.type === 'blockquote') {
        current.blocks.push({ kind: 'text', html: `<blockquote>${escapeHtml(tok.text)}</blockquote>` });
      } else if (tok.type === 'table') {
        const headers = (tok.header || []).map(h => `<th>${escapeHtml(h.text || '')}</th>`).join('');
        const rows    = (tok.rows   || []).map(r => `<tr>${r.map(c => `<td>${escapeHtml(c.text || '')}</td>`).join('')}</tr>`).join('');
        current.blocks.push({ kind: 'text', html: `<table>${headers ? `<thead><tr>${headers}</tr></thead>` : ''}<tbody>${rows}</tbody></table>` });
      }
    }
    return doc;
  };

  // -------- collection modal --------

  let colModal = null;

  const ensureColModal = () => {
    if (colModal) return;
    colModal = document.createElement('dialog');
    colModal.id = 'col-modal';
    colModal.innerHTML = `
      <div class="col-modal-inner">
        <h3 class="col-modal-title">Add to collection</h3>
        <p class="col-modal-subtitle"></p>
        <div class="col-modal-list"></div>
        <div class="col-modal-new">
          <input type="text" class="col-modal-input" placeholder="New collection name…" />
          <button class="col-modal-create">Create & add</button>
        </div>
        <button class="col-modal-close">Close</button>
      </div>`;
    document.body.appendChild(colModal);

    // Close on backdrop click
    colModal.addEventListener('click', e => { if (e.target === colModal) colModal.close(); });
    colModal.querySelector('.col-modal-close').addEventListener('click', () => colModal.close());

    const input     = colModal.querySelector('.col-modal-input');
    const createBtn = colModal.querySelector('.col-modal-create');

    const createAndAdd = () => {
      const name = input.value.trim();
      if (!name) return;
      const col = Storage.createCollection(name);
      Storage.toggleInCollection(col.id, colModal._slug);
      input.value = '';
      refreshColModalList();
      refreshHomeControls();
    };

    createBtn.addEventListener('click', createAndAdd);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); createAndAdd(); } });
  };

  const refreshColModalList = () => {
    const slug = colModal._slug;
    const list = colModal.querySelector('.col-modal-list');
    const cols = Storage.getCollections();
    if (!cols.length) {
      list.innerHTML = '<p class="col-modal-empty">No collections yet — create one below.</p>';
      return;
    }
    list.innerHTML = cols.map(col => `
      <label class="col-modal-item">
        <input type="checkbox" data-col-id="${escapeHtml(col.id)}" ${Storage.isInCollection(col.id, slug) ? 'checked' : ''} />
        ${escapeHtml(col.name)}
      </label>`).join('');

    list.querySelectorAll('input[type=checkbox]').forEach(cb => {
      cb.addEventListener('change', () => {
        Storage.toggleInCollection(cb.dataset.colId, slug);
        // If currently filtering by this collection, re-render the grid
        if (filterState.collectionId === cb.dataset.colId) renderGrid();
        refreshHomeControls();
      });
    });
  };

  const openCollectionModal = (slug, name) => {
    ensureColModal();
    colModal._slug = slug;
    colModal.querySelector('.col-modal-subtitle').textContent = name;
    refreshColModalList();
    colModal.showModal();
  };

  // -------- lightbox --------

  const wireImages = () => {
    app.querySelectorAll('.tile.image').forEach(tile => {
      tile.addEventListener('click', () => {
        lightboxImg.src = tile.dataset.src;
        lightboxImg.alt = tile.dataset.cap || '';
        lightboxCap.textContent = tile.dataset.cap || '';
        lightbox.hidden = false;
      });
    });
  };

  lightbox.addEventListener('click', () => { lightbox.hidden = true; lightboxImg.src = ''; });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hidden) { lightbox.hidden = true; lightboxImg.src = ''; }
  });

  // -------- boot --------

  renderRoute();
})();
