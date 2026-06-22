/* AfriCyberCore — shared "concept" hero behaviour
   Drives: typewriter headline, background-video scrubbing, mobile menu, service pills. */
(function () {
  // ---------- Typewriter ----------
  function runTypewriter(el) {
    const text = el.getAttribute('data-text') || '';
    const speed = parseInt(el.getAttribute('data-speed') || '38', 10);
    const delay = parseInt(el.getAttribute('data-delay') || '600', 10);
    const cursorColor = el.getAttribute('data-cursor') || '#000';
    const cursor = '<span class="inline-block w-[2px] h-[1.1em] align-middle ml-[2px] animate-blink" style="background:' + cursorColor + ';"></span>';
    let i = 0;
    setTimeout(function tick() {
      if (i < text.length) {
        el.innerHTML = text.slice(0, i) + cursor;
        i++;
        setTimeout(tick, speed);
      } else {
        el.innerHTML = text;
      }
    }, delay);
  }
  document.querySelectorAll('[data-typewriter]').forEach(runTypewriter);

  // ---------- Background video: desktop mouse-scrub / mobile autoplay ----------
  (function () {
    const video = document.getElementById('bg-video');
    if (!video) return;
    let prevX = null, targetTime = 0, seeking = false;

    function onMove(e) {
      if (window.innerWidth < 1024) return;
      if (!video.duration || isNaN(video.duration)) return;
      if (prevX === null) { prevX = e.clientX; return; }
      const delta = e.clientX - prevX;
      prevX = e.clientX;
      targetTime += (delta / window.innerWidth) * 0.8 * video.duration;
      targetTime = Math.max(0, Math.min(video.duration, targetTime));
      if (!seeking) { seeking = true; video.currentTime = targetTime; }
    }
    video.addEventListener('seeked', function () { seeking = false; });

    function setup() {
      if (window.innerWidth < 1024) {
        video.loop = true; video.autoplay = true;
        video.play().catch(function () {});
      } else {
        video.pause();
        prevX = null;
      }
    }
    video.addEventListener('loadedmetadata', setup);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', setup);
    if (video.readyState >= 1) setup();
  })();

  // ---------- Mobile menu ----------
  (function () {
    const burger = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');
    if (!burger || !menu) return;
    const bars = burger.querySelectorAll('span');
    let open = false;
    function setOpen(state) {
      open = state;
      menu.style.opacity = open ? '1' : '0';
      menu.style.pointerEvents = open ? 'auto' : 'none';
      if (bars.length >= 3) {
        bars[0].style.transform = open ? 'rotate(45deg) translateY(7px)' : '';
        bars[1].style.opacity = open ? '0' : '';
        bars[2].style.transform = open ? 'rotate(-45deg) translateY(-7px)' : '';
      }
      document.body.style.overflow = open ? 'hidden' : '';
    }
    burger.addEventListener('click', function () { setOpen(!open); });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
  })();

  // ---------- Multi-select service pills + feedback banner ----------
  (function () {
    const pills = document.querySelectorAll('.pill');
    const feedback = document.getElementById('feedback');
    if (!pills.length || !feedback) return;
    const selected = [];
    const ACTIVE = ['bg-[#1C2E1E]', 'text-white', 'border-[#1C2E1E]', 'shadow-md', 'shadow-emerald-950/5'];
    const INACTIVE = ['bg-white', 'text-[#1C2E1E]', 'border-[#F1F3F1]', 'hover:bg-[#F1F3F1]/55'];

    var bookingCard = document.getElementById('booking-card');
    var bookingServices = document.getElementById('booking-services');
    var bookingForm = document.getElementById('booking-form');

    function render() {
      if (selected.length === 0) {
        feedback.innerHTML = '<p class="italic text-xs" style="opacity: 0.5;">Please click to select services above.</p>';
        if (bookingCard) bookingCard.classList.add('hidden');
        return;
      }
      feedback.innerHTML =
        '<div class="banner-in bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">' +
          '<p class="text-sm text-[#1C2E1E]">Ready to inquire about: <span class="font-medium">' + selected.join(', ') + '</span></p>' +
          '<button type="button" id="lets-go-btn" class="text-[#4D6D47] uppercase text-xs font-semibold tracking-wide inline-flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0">Let\'s Go ' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>' +
          '</button>' +
        '</div>';

      var btn = document.getElementById('lets-go-btn');
      if (btn && bookingCard) {
        btn.addEventListener('click', function () {
          if (bookingServices) bookingServices.textContent = selected.join(', ');
          bookingCard.classList.remove('hidden');
          bookingCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }

    if (bookingForm) {
      bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        bookingCard.innerHTML =
          '<div class="bg-[#F0F7EE] border border-[#C8DEC2] rounded-3xl p-8 md:p-10 text-center max-w-2xl">' +
            '<div class="w-14 h-14 rounded-full bg-[#4D6D47] flex items-center justify-center mx-auto mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>' +
            '<h3 class="text-2xl font-semibold text-[#1C2E1E] mb-2">Session Booked!</h3>' +
            '<p class="text-[#5A635A] text-sm">Thank you! We\'ll reach out within 24 hours to confirm your strategic session.</p>' +
          '</div>';
      });
    }

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        const service = pill.getAttribute('data-service');
        const check = pill.querySelector('.check');
        const idx = selected.indexOf(service);
        if (idx > -1) {
          selected.splice(idx, 1);
          ACTIVE.forEach(function (c) { pill.classList.remove(c); });
          INACTIVE.forEach(function (c) { pill.classList.add(c); });
          if (check) { check.classList.add('hidden'); check.classList.remove('inline-flex', 'check-pop'); }
        } else {
          selected.push(service);
          INACTIVE.forEach(function (c) { pill.classList.remove(c); });
          ACTIVE.forEach(function (c) { pill.classList.add(c); });
          if (check) { check.classList.remove('hidden'); check.classList.add('inline-flex', 'check-pop'); }
        }
        render();
      });
    });
  })();
})();
