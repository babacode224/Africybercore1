/* AfriCyberCore — shared "glass CTA card" footer.
   Replaces the existing <footer> on every page with one consistent design
   that borrows the hero's glass language (rounded card, dimmed glass video,
   frosted pills), tuned to sit on the dark pages. */
(function () {
  var GLASS_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4';

  function pill(href, label, svg) {
    return '<a href="' + href + '" aria-label="' + label + '" class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all">' + svg + '</a>';
  }

  var iLinkedIn = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
  var iX = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
  var iMail = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>';
  var chevron = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';

  function link(href, text) {
    return '<li><a href="' + href + '" class="text-white/70 hover:text-white transition-colors">' + text + '</a></li>';
  }

  function buildHTML() {
    return '' +
'<footer class="bg-[#101415] px-4 sm:px-6 pb-8 pt-10">' +
  '<div class="relative max-w-[1400px] mx-auto rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">' +
    '<video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"><source src="' + GLASS_VIDEO + '" type="video/mp4"></video>' +
    '<div class="absolute inset-0 bg-[#0a152d]/85"></div>' +
    '<div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a152d]/80 to-transparent"></div>' +
    '<div class="relative z-10 px-7 md:px-14 py-12 md:py-16">' +
      // CTA row
      '<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">' +
        '<div>' +
          '<h2 class="text-3xl md:text-[44px] font-semibold tracking-tight text-white leading-[1.08] max-w-xl" style="font-family:\'Hanken Grotesk\',sans-serif;">Ready to secure your future?</h2>' +
          '<p class="text-white/55 mt-4 max-w-md text-[15px] leading-relaxed">Together we protect our future &mdash; let\'s bulletproof your business and digital products.</p>' +
        '</div>' +
        '<a href="contact.html" class="shrink-0 inline-flex items-center gap-2 bg-[#ffb690] text-[#341100] font-semibold px-7 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform">Contact Us ' + chevron + '</a>' +
      '</div>' +
      // columns
      '<div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">' +
        '<div class="col-span-2 md:col-span-1">' +
          '<div class="flex items-center gap-2 mb-3">' +
            '<img src="assets/img/logo.jpg" alt="AfriCyberCore" class="w-9 h-9 rounded-full object-cover border border-white/15 shrink-0"/>' +
            '<span class="text-white font-bold text-lg tracking-tight" style="font-family:\'Hanken Grotesk\',sans-serif;">AfriCyberCore</span>' +
          '</div>' +
          '<p class="text-white/45 text-sm max-w-xs leading-relaxed">Iron-Clad Innovation for the Silicon Savannah. Lagos, Nigeria.</p>' +
        '</div>' +
        '<div>' +
          '<h4 class="text-white/40 text-[11px] uppercase tracking-[0.15em] mb-4">Company</h4>' +
          '<ul class="space-y-2.5 text-[14px]">' + link('index.html','Home') + link('about.html','About') + link('consulting.html','Consulting') + link('contact.html','Contact') + '</ul>' +
        '</div>' +
        '<div>' +
          '<h4 class="text-white/40 text-[11px] uppercase tracking-[0.15em] mb-4">Solutions</h4>' +
          '<ul class="space-y-2.5 text-[14px]">' + link('services.html','Cybersecurity') + link('services.html','Automation') + link('services.html','No-Code Web Dev') + link('products.html','AI Products') + '</ul>' +
        '</div>' +
        '<div>' +
          '<h4 class="text-white/40 text-[11px] uppercase tracking-[0.15em] mb-4">Connect</h4>' +
          '<div class="flex gap-2 mb-4">' + pill('mailto:info@africybercore.com','Email',iMail) + pill('https://www.linkedin.com/company/africybercore/','LinkedIn',iLinkedIn) + pill('https://x.com/africybercore','X / Twitter',iX) + '</div>' +
          '<p class="text-white/55 text-sm">info@africybercore.com</p>' +
          '<p class="text-white/55 text-sm">+234 (0) 810 681 8560</p>' +
        '</div>' +
      '</div>' +
      // bottom bar
      '<div class="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 mt-8 border-t border-white/10">' +
        '<span class="text-white/40 text-[13px]">&copy; 2024 AfriCyberCore. Together we protect our future.</span>' +
        '<div class="flex gap-5 text-[13px]">' +
          '<a href="#" class="text-white/40 hover:text-white/80 transition-colors">Privacy Policy</a>' +
          '<a href="#" class="text-white/40 hover:text-white/80 transition-colors">Terms of Service</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</footer>';
  }

  function inject() {
    var tmp = document.createElement('div');
    tmp.innerHTML = buildHTML().trim();
    var newFooter = tmp.firstElementChild;
    var existing = document.querySelector('footer');
    if (existing) existing.replaceWith(newFooter);
    else document.body.appendChild(newFooter);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
