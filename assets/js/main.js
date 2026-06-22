/* AfriCyberCore — shared interactions */
function accInit() {
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

  // Mobile hamburger menu
  const burger = document.getElementById('acc-hamburger');
  const mobileMenu = document.getElementById('acc-mobile-menu');
  if (burger && mobileMenu) {
    const bars = burger.querySelectorAll('span');
    let open = false;
    function toggle(state) {
      open = state;
      mobileMenu.style.opacity = open ? '1' : '0';
      mobileMenu.style.pointerEvents = open ? 'auto' : 'none';
      if (bars.length >= 3) {
        bars[0].style.transform = open ? 'rotate(45deg) translateY(7px)' : '';
        bars[1].style.opacity = open ? '0' : '';
        bars[2].style.transform = open ? 'rotate(-45deg) translateY(-7px)' : '';
      }
      document.body.style.overflow = open ? 'hidden' : '';
    }
    burger.addEventListener('click', () => toggle(!open));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', accInit);
else accInit();
