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
      menu.classList.toggle('opacity-0', !open);
      menu.classList.toggle('pointer-events-none', !open);
      menu.classList.toggle('opacity-100', open);
      menu.classList.toggle('pointer-events-auto', open);
      bars[0].classList.toggle('rotate-45', open);
      bars[0].classList.toggle('translate-y-[7px]', open);
      bars[1].classList.toggle('opacity-0', open);
      bars[2].classList.toggle('-rotate-45', open);
      bars[2].classList.toggle('-translate-y-[7px]', open);
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

    function render() {
      if (selected.length === 0) {
        feedback.innerHTML = '<p class="italic text-xs" style="opacity: 0.5;">Please click to select services above.</p>';
        return;
      }
      feedback.innerHTML =
        '<div class="banner-in bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">' +
          '<p class="text-sm text-[#1C2E1E]">Ready to inquire about: <span class="font-medium">' + selected.join(', ') + '</span></p>' +
          '<button type="button" class="text-[#4D6D47] uppercase text-xs font-semibold tracking-wide inline-flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0">Let\'s Go ' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>' +
          '</button>' +
        '</div>';
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
