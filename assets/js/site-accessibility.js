/* Keep accessible state in sync with the existing theme/menu behavior. */
(() => {
  const init = () => {
    const root = document.documentElement;
    const theme = document.querySelector('#theme-toggle [role="button"]');
    const navButton = document.querySelector('.greedy-nav > button');
    const navMenu = document.getElementById('overflow-menu');
    const contactButton = document.querySelector('.author__urls-wrapper > button');
    const contactMenu = document.getElementById('author-contact-links');
    const sync = () => {
      if (theme) theme.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'dark'));
      if (navButton && navMenu) navButton.setAttribute('aria-expanded', String(!navMenu.classList.contains('hidden')));
      if (contactButton && contactMenu) contactButton.setAttribute('aria-expanded', String(getComputedStyle(contactMenu).display !== 'none'));
    };
    if (theme) theme.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); theme.click(); }
    });
    new MutationObserver(sync).observe(root, {attributes:true, attributeFilter:['data-theme']});
    if (navMenu) new MutationObserver(sync).observe(navMenu, {attributes:true, attributeFilter:['class','style']});
    if (contactMenu) new MutationObserver(sync).observe(contactMenu, {attributes:true, attributeFilter:['class','style']});
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      if (navButton && navMenu && !navMenu.classList.contains('hidden')) { navButton.click(); navButton.focus(); }
      if (contactButton && contactButton.offsetParent && contactButton.classList.contains('open')) { contactButton.click(); contactButton.focus(); }
    });
    window.addEventListener('resize', sync, {passive:true});
    sync();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
