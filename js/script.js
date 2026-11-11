(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var navLinks = document.querySelectorAll('[data-nav]');
  var mobileNavLinks = document.querySelectorAll('[data-nav-mobile]');
  var sections = document.querySelectorAll('main section[id]');
  var revealEls = document.querySelectorAll('.reveal');

  /* ---------- Sticky header on scroll ---------- */
  function updateHeaderState() {
    if (window.scrollY > 12) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  /* ---------- Mobile menu ---------- */
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Відкрити меню');
  }

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Закрити меню');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  /* ---------- Active nav link on scroll ---------- */
  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var match = link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', match);
    });
    mobileNavLinks.forEach(function (link) {
      var match = link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', match);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }
})();
