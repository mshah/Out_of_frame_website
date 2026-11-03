(() => {
  'use strict';
  const data = window.OOF_HOST_DATA;
  if (!data || !Array.isArray(data.scenes) || data.scenes.length !== 13) return;
  const cards = data.scenes, sourceMap = data.sources;
  const byId = Object.fromEntries(cards.map(card => [card.id, card]));
  const filters = document.getElementById('cbChapterFilters');
  const chapterList = document.getElementById('cbChapterList');
  const panel = document.getElementById('cbResearchPanel');
  const concept = document.getElementById('cbStageConcept');
  const source = document.getElementById('cbStageSource');
  const conceptBtn = document.getElementById('cbConceptBtn');
  const sourceBtn = document.getElementById('cbSourceBtn');
  const stageCaption = document.getElementById('cbStageCaption');
  if (![filters, chapterList, panel, concept, source, conceptBtn, sourceBtn, stageCaption].every(Boolean)) return;

  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const displayName = card => card.title;
  let active = 'CB-01';
  let theme = 'All';
  let tab = 'story';

  function showImageSlot(which) {
    const sourceMode = which === 'source';
    concept.hidden = sourceMode;
    source.hidden = !sourceMode;
    conceptBtn.setAttribute('aria-pressed', String(!sourceMode));
    sourceBtn.setAttribute('aria-pressed', String(sourceMode));
    stageCaption.textContent = sourceMode
      ? 'Original CB-SRC-001 · source pixels not included in the site. The approved file will be placed intact.'
      : 'Draft panorama placeholder · No reconstructed image or spatial hotspot positions have been approved.';
  }
  conceptBtn.addEventListener('click', () => showImageSlot('concept'));
  sourceBtn.addEventListener('click', () => showImageSlot('source'));

  const matches = card => theme === 'All' || card.theme === theme;
  function renderFilters() {
    filters.replaceChildren();
    for (const name of data.themes) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'filter-chip';
      button.textContent = name;
      button.setAttribute('aria-pressed', String(name === theme));
      button.addEventListener('click', () => {
        theme = name;
        if (!matches(byId[active])) active = cards.find(matches).id;
        tab = 'story';
        renderFilters();
        renderChapters();
        renderPanel();
      });
      filters.append(button);
    }
  }

  function renderChapters() {
    chapterList.replaceChildren();
    for (const card of cards.filter(matches)) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'chapter-btn' + (active === card.id ? ' active' : '');
      button.setAttribute('aria-current', active === card.id ? 'true' : 'false');
      const number = document.createElement('span');
      number.textContent = card.id.slice(-2);
      const title = document.createElement('span');
      title.textContent = card.title;
      button.append(number, title);
      button.addEventListener('click', () => selectCard(card.id, true));
      chapterList.append(button);
    }
  }

  function sourceMarkup(keys) {
    return '<div class="cb-source-collection"><h4>Source references from the master packet</h4><ul>' +
      keys.map(key => {
        const ref = sourceMap[key];
        if (!ref) return '';
        const label = ref.url
          ? '<a href="' + esc(ref.url) + '" target="_blank" rel="noopener noreferrer">' + esc(ref.label) + ' ↗</a>'
          : '<span>' + esc(ref.label) + '</span>';
        return '<li><strong>' + esc(key) + '.</strong> ' + label + '<small>' + esc(ref.type) + '</small></li>';
      }).join('') + '</ul></div>';
  }

  function tabMarkup(card, choice) {
    if (choice === 'story') {
      return '<div class="story"><p>' + esc(card.annotation) + '</p></div>' +
        '<p class="cb-note">This is audience-facing draft text from ' + esc(data.artwork.packetVersion) + '; editorial approval is pending.</p>';
    }
    if (choice === 'evidence') {
      return '<div class="evidence-box"><strong>Historical foundation / scope</strong><p>' + esc(card.evidence) + '</p></div>' +
        '<div class="cb-subject-anchor"><strong>Planned source or contextual anchor:</strong> ' + esc(card.anchor) + '</div>' +
        '<p class="cb-note"><strong>Evidence grades are claim-specific:</strong> A = source-visible or exact-exposure fact; B = same expedition or album; C = contextual period evidence; D = openly disclosed artistic choice. A person documented elsewhere is not proven to stand beyond the edge of this photograph.</p>' + sourceMarkup(card.sourceKeys);
    }
    return '<div class="evidence-box"><strong>Do not claim or depict as fact</strong><p>' + esc(card.limits) + '</p></div>' +
      '<p class="cb-note"><strong>Visual status:</strong> ' + esc(card.visualStatus) + '. Final image coordinates and source identifications require separate verification.</p>';
  }

  function activateTab(next) {
    tab = next;
    const tabs = Array.from(panel.querySelectorAll('[role="tab"]'));
    const body = document.getElementById('cbTabContent');
    for (const button of tabs) {
      const selected = button.dataset.tab === tab;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected) body.setAttribute('aria-labelledby', button.id);
    }
    body.innerHTML = tabMarkup(byId[active], tab);
  }

  function renderPanel() {
    const card = byId[active];
    if (!card) return;
    const index = cards.indexOf(card);
    panel.innerHTML = `
      <div class="cb-panel-overline"><span>${esc(card.id)} · ${esc(card.theme)}</span><span>Annotation draft · image pending</span></div>
      <h3 id="cbPanelTitle">${esc(displayName(card))}</h3>
      <p class="cb-question">${esc(card.question)}</p>
      <div class="cb-panel-placeholder" aria-label="Unpopulated research image slots">
        <div class="cb-image-slot" role="img" aria-label="Reserved for a detail of the archival photograph or approved reconstruction">
          <span>Detail image · Reserved</span><strong>Chapter ${esc(card.id)}</strong><small>No archival image or contemporary reconstruction shown</small>
        </div>
        <div class="cb-image-slot cb-locator" role="img" aria-label="Locator preview reserved pending image review">
          <span>Locator · Pending</span><strong>Position unassigned</strong><small>No hypothetical coordinates are placed on a source image</small>
        </div>
      </div>
      <div class="research-tabs cb-tabs" role="tablist" aria-label="Read the selected chapter">
        <button class="research-tab" type="button" id="cb-tab-story" role="tab" data-tab="story" aria-controls="cbTabContent">The story</button>
        <button class="research-tab" type="button" id="cb-tab-evidence" role="tab" data-tab="evidence" aria-controls="cbTabContent">Evidence &amp; sources</button>
        <button class="research-tab" type="button" id="cb-tab-limits" role="tab" data-tab="limits" aria-controls="cbTabContent">Limits</button>
      </div>
      <div id="cbTabContent" class="cb-tabpanel" role="tabpanel"></div>
      <div class="cb-previous-next">
        <button type="button" data-step="-1" ${index === 0 ? 'disabled' : ''}>← Previous chapter</button>
        <button type="button" data-step="1" ${index === cards.length - 1 ? 'disabled' : ''}>Next chapter →</button>
      </div>
    `;
    const tabs = Array.from(panel.querySelectorAll('[role="tab"]'));
    for (const button of tabs) {
      button.addEventListener('click', () => activateTab(button.dataset.tab));
      button.addEventListener('keydown', event => {
        const start = tabs.indexOf(button);
        let next = start;
        if (event.key === 'ArrowRight') next = (start + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (start + tabs.length - 1) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        activateTab(tabs[next].dataset.tab);
        tabs[next].focus();
      });
    }
    panel.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
      const next = cards[index + Number(button.dataset.step)];
      if (next) selectCard(next.id, true, true);
    }));
    activateTab(tab);
  }

  function selectCard(id, fromClick = false, focusPanel = false) {
    if (!byId[id]) return;
    active = id;
    if (!matches(byId[id])) { theme = 'All'; renderFilters(); }
    tab = 'story';
    renderChapters();
    renderPanel();
    if (fromClick) {
      const frag = '#' + active.toLowerCase();
      if (window.location.hash !== frag) {
        try { window.history.replaceState(null, '', frag); }
        catch (_) { window.location.hash = frag; }
      }
      if (focusPanel || window.innerWidth < 850) {
        panel.focus({preventScroll: true});
        panel.scrollIntoView({behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start'});
      }
    }
  }

  function fromHash() {
    const id = window.location.hash.slice(1).toUpperCase();
    if (byId[id]) selectCard(id, false);
  }
  renderFilters();
  renderChapters();
  renderPanel();
  showImageSlot('concept');
  fromHash();
  window.addEventListener('hashchange', fromHash);
})();