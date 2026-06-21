/* AfriCyberCore — shared interactions */
document.addEventListener('DOMContentLoaded', () => {
  // Reveal-on-scroll for elements that opt in with .reveal-on-scroll
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach((el) => observer.observe(el));
  }

  // Subtle header shrink on scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('bg-primary-container/80');
        header.classList.remove('bg-primary-container/60');
      } else {
        header.classList.add('bg-primary-container/60');
        header.classList.remove('bg-primary-container/80');
      }
    });
  }

  // Button press micro-interaction
  document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('mousedown', () => { btn.style.transform = 'scale(0.96)'; });
    btn.addEventListener('mouseup', () => { btn.style.transform = ''; });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
});
