(function () {
  // ---- Edit these two lists to change the site nav everywhere ----
  const PRIMARY_LINKS = [
    { label: 'Home', href: 'index.html' },
    { label: 'About Me', href: 'about.html' },
    { label: 'Portfolio', href: 'portfolio.html' },
    { label: 'Resume', href: 'resume.html' },
    { label: 'Contact', href: 'contact.html' }
  ];
 
  const SECONDARY_LINKS = [
    { label: 'Marketing Projects', href: 'marketing-projects.html' },
    { label: 'Sales Certificate', href: 'sales-certificate.html' },
    { label: 'Blog', href: 'blog.html' }
  ];
 
  // Build a <ul> of links for a given list, marking the current page
  function buildList(links) {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const ul = document.createElement('ul');
 
    links.forEach(function (link) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.label;
 
      if (link.href === currentPath) {
        a.setAttribute('aria-current', 'page');
      }
 
      li.appendChild(a);
      ul.appendChild(li);
    });
 
    return ul;
  }
 
  function renderNav(containerId, links) {
    const container = document.getElementById(containerId);
    if (!container) return; // page didn't include this nav bar, skip quietly
    container.innerHTML = '';
    container.appendChild(buildList(links));
  }
 
  function initNav() {
    renderNav('primary-nav', PRIMARY_LINKS);
    renderNav('secondary-nav', SECONDARY_LINKS);
  }
 
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
 
