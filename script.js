// Smooth scrolling for internal navigation and simple UI behaviors
document.addEventListener('DOMContentLoaded', function () {
  // set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll on nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        history.replaceState(null, '', href);
      }
    });
  });

  // Simple active link on scroll
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  function onScroll(){
    const y = window.scrollY + 120;
    let current = sections[0];
    for (const s of sections){
      if (s.offsetTop <= y) current = s;
    }
    navLinks.forEach(a=> a.classList.toggle('active', a.getAttribute('href') === '#'+current.id));
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
});
