(() => {
  'use strict';
  if (window.lucide) window.lucide.createIcons();

  const groups = [...document.querySelectorAll('[data-category]')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const selectCategory = (category) => {
    groups.forEach(group => {
      group.hidden = category !== 'all' && group.dataset.category !== category;
      if (!group.hidden) group.open = true;
    });
    filters.forEach(button => {
      const active = button.dataset.filter === category;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };
  filters.forEach(button => button.addEventListener('click', () => selectCategory(button.dataset.filter)));

  function showHashCategory() {
    const category = location.hash === '#papers' ? '论文阅读' : location.hash === '#basics' ? '基础知识' : null;
    if (category && groups.length) {
      selectCategory(category);
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: 'start' });
    }
  }
  window.addEventListener('hashchange', showHashCategory);
  showHashCategory();

  const dialog = document.querySelector('.search-dialog');
  const search = document.getElementById('site-search');
  const entries = [...document.querySelectorAll('[data-search-item]')];
  const status = document.querySelector('.search-status');
  let returnFocus;
  const updateSearch = () => {
    const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let found = 0;
    entries.forEach(entry => {
      const text = entry.dataset.searchText.toLocaleLowerCase();
      entry.hidden = !terms.every(term => text.includes(term));
      if (!entry.hidden) found++;
    });
    status.textContent = found ? `共 ${found} 篇文章` : terms.length ? '没有找到相关文章。' : '暂时没有文章。';
  };
  document.querySelectorAll('[data-open-search]').forEach(button => button.addEventListener('click', () => {
    returnFocus = button;
    search.value = '';
    updateSearch();
    dialog.showModal();
    document.body.classList.add('search-open');
    search.focus();
  }));
  document.querySelector('[data-close-search]')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
  dialog?.addEventListener('close', () => {
    document.body.classList.remove('search-open');
    returnFocus?.focus();
  });
  search?.addEventListener('input', updateSearch);
})();
