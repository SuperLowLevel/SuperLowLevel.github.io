(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initHeroBrandLogoVideo();
    initAnimatedBackground();
    initScrollAnimations();
    initNavScrollState();
    initGradientTextHeadings();
    initCardTiltEffect();
    initNewsModal();
  });

  /* Animated dot-grid background on canvas */
  function initAnimatedBackground() {
    var canvas = document.createElement('canvas');
    canvas.id = 'xp-bg-canvas';
    document.body.insertBefore(canvas, document.body.firstChild);

    var ctx = canvas.getContext('2d');
    var dots = [];
    var mouse = { x: -1000, y: -1000 };
    var dotCount = 80;
    var maxDist = 150;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    for (var i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        var dx = mouse.x - d.x;
        var dy = mouse.y - d.y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        var alpha = dist < 200 ? 0.72 : 0.22;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(129, 140, 248, ' + alpha + ')';
        ctx.fill();

        for (var j = i + 1; j < dots.length; j++) {
          var d2 = dots[j];
          var ddx = d.x - d2.x;
          var ddy = d.y - d2.y;
          var dd = Math.sqrt(ddx * ddx + ddy * ddy);

          if (dd < maxDist) {
            var lineAlpha = (1 - dd / maxDist) * 0.11;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = 'rgba(56, 189, 248, ' + lineAlpha + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* Scroll-triggered reveal animations */
  function initScrollAnimations() {
    /* Note: do not include .sidebar — it is often in view on load; animating it
       causes a flash (visible HTML) then opacity:0 until scroll intersects. */
    var selectors = [
      '.xp-animate',
      '.well > .container',
      '.thumbnail:not(.thumbnail-3)',
      '.quote-2',
      '.col-lg-4 > article',
      '.col-md-6 > article',
      '.col-lg-3 > .thumbnail'
    ];

    var elements = document.querySelectorAll(selectors.join(','));
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('is-visible');
      }
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      /* Owl (and similar) carousels clone/move nodes; scroll-reveal breaks slides (invisible / “empty” stage). */
      if (el.closest && el.closest('.owl-carousel')) continue;
      if (!el.classList.contains('xp-animate')) {
        el.classList.add('xp-animate');
      }
      observer.observe(el);
    }
  }

  /* Nav scroll state */
  function initNavScrollState() {
    var body = document.body;
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          body.classList.toggle('xp-scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* Make major section headings gradient */
  function initGradientTextHeadings() {
    var titles = document.querySelectorAll('.xp-section-title');
    for (var i = 0; i < titles.length; i++) {
      titles[i].classList.add('xp-gradient-text');
    }

    var heroH1 = document.querySelector('.xp-hero .jumbotron h1');
    if (heroH1 && !heroH1.classList.contains('xp-hero-brand-heading')) {
      heroH1.classList.add('xp-gradient-text');
      heroH1.style.textShadow = 'none';
    }
  }

  /* Home hero: play logo video once; crossfade to static PNG, then drop video from layout. */
  function initHeroBrandLogoVideo() {
    var video = document.querySelector('.xp-hero-brand-logo-video');
    var img = document.querySelector('.xp-hero-brand-logo-static');
    if (!video) return;

    selectHeroVideoSource(video);

    var switched = false;
    var fallbackTimer = null;

    function clearFallback() {
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }
    }

    function hideVideoLayerInstant() {
      if (switched) return;
      switched = true;
      clearFallback();
      video.classList.remove('xp-hero-brand-logo-video--fading');
      video.classList.add('xp-hero-brand-logo-video--done');
      if (img) {
        img.classList.remove('xp-hero-brand-logo-static--hidden');
      }
    }

    function hideVideoLayerCrossfade() {
      if (switched) return;
      switched = true;
      clearFallback();
      if (img) {
        img.classList.remove('xp-hero-brand-logo-static--hidden');
      }
      video.classList.add('xp-hero-brand-logo-video--fading');

      var removed = false;
      function removeVideoFromLayout() {
        if (removed) return;
        removed = true;
        video.removeEventListener('transitionend', onOpacityEnd);
        video.classList.remove('xp-hero-brand-logo-video--fading');
        video.classList.add('xp-hero-brand-logo-video--done');
      }

      function onOpacityEnd(e) {
        if (e.target !== video || e.propertyName !== 'opacity') return;
        removeVideoFromLayout();
      }

      video.addEventListener('transitionend', onOpacityEnd);
      window.setTimeout(removeVideoFromLayout, 900);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      hideVideoLayerInstant();
      return;
    }

    fallbackTimer = window.setTimeout(function () {
      hideVideoLayerCrossfade();
    }, 15000);

    video.addEventListener('ended', hideVideoLayerCrossfade);
    video.addEventListener('error', hideVideoLayerCrossfade);

    var playTry = video.play();
    if (playTry && typeof playTry.catch === 'function') {
      playTry.catch(function () {
        hideVideoLayerCrossfade();
      });
    }

    if (video.ended) {
      hideVideoLayerCrossfade();
    }
  }

  function selectHeroVideoSource(video) {
    var sources = video.querySelectorAll('source');
    if (!sources.length) return;

    var ua = navigator.userAgent || '';
    var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var isSafari = /Safari/i.test(ua) && !/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS|SamsungBrowser/i.test(ua);

    var preferMov = isIOS || isSafari;
    var movSource = video.querySelector('source[data-format="mov"]');
    var webmSource = video.querySelector('source[data-format="webm"]');

    var selected = preferMov ? movSource : webmSource;
    var fallback = preferMov ? webmSource : movSource;

    function canPlay(sourceEl) {
      if (!sourceEl) return false;
      var type = sourceEl.getAttribute('type') || '';
      if (!type) return true;
      return !!video.canPlayType(type);
    }

    if (!canPlay(selected)) selected = fallback;
    if (!selected) return;

    var selectedSrc = selected.getAttribute('src');
    if (selectedSrc) {
      video.src = selectedSrc;
      video.load();
    }
  }

  /* Subtle tilt on card hover for depth */
  function initCardTiltEffect() {
    var cards = document.querySelectorAll('.thumbnail:not(.thumbnail-3):not(.well)');

    for (var i = 0; i < cards.length; i++) {
      (function (card) {
        card.addEventListener('mousemove', function (e) {
          var rect = card.getBoundingClientRect();
          var x = (e.clientX - rect.left) / rect.width - 0.5;
          var y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = 'translateY(-4px) perspective(800px) rotateY(' + (x * 4) + 'deg) rotateX(' + (-y * 4) + 'deg)';
        });

        card.addEventListener('mouseleave', function () {
          card.style.transform = '';
        });
      })(cards[i]);
    }
  }
  /* ── News modal ─────────────────────────────────────────── */
  function initNewsModal() {
    var overlay  = document.getElementById('xpNewsModal');
    var closeBtn = document.getElementById('xpModalClose');
    var titleEl  = document.getElementById('xpModalTitle');
    var descEl   = document.getElementById('xpModalDesc');
    var mediaEl  = document.getElementById('xpModalMedia');
    var actionsEl= document.getElementById('xpModalActions');

    if (!overlay) return;

    var cards = document.querySelectorAll('.xp-news-card');
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', openModal);
    }

    function openModal() {
      var type  = this.dataset.modalType;
      var src   = this.dataset.modalSrc;
      var title = this.dataset.modalTitle;
      var desc  = this.dataset.modalDesc;

      titleEl.textContent = title || '';
      descEl.textContent  = desc  || '';
      mediaEl.innerHTML   = '';
      actionsEl.innerHTML = '';

      if (type === 'iframe') {
        var wrap = document.createElement('div');
        wrap.className = 'xp-modal-iframe-crop';
        var frame = document.createElement('iframe');
        frame.src             = src;
        frame.title           = title || 'Video';
        frame.allowFullscreen = true;
        frame.allow           = 'autoplay; fullscreen; picture-in-picture';
        frame.setAttribute('frameborder', '0');
        wrap.appendChild(frame);
        mediaEl.appendChild(wrap);
        var ext = document.createElement('a');
        ext.href   = src;
        ext.target = '_blank';
        ext.rel    = 'noopener noreferrer';
        ext.className = 'button-link xp-modal-open-tab';
        ext.textContent = 'Open in new tab';
        actionsEl.appendChild(ext);
      } else if (type === 'video') {
        var vid = document.createElement('video');
        vid.src      = src;
        vid.controls = true;
        vid.autoplay = true;
        vid.setAttribute('playsinline', '');
        mediaEl.appendChild(vid);
      } else if (type === 'article') {
        var link = document.createElement('a');
        link.href   = src;
        link.target = '_blank';
        link.rel    = 'noopener noreferrer';
        link.className = 'button-link';
        link.textContent = 'Read More';
        actionsEl.appendChild(link);
      }

      overlay.setAttribute('aria-hidden', 'false');
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      // stop any playback
      var vid = mediaEl.querySelector('video');
      if (vid) { vid.pause(); vid.src = ''; }
      var frame = mediaEl.querySelector('iframe');
      if (frame) { frame.src = ''; }
      mediaEl.innerHTML = '';
      actionsEl.innerHTML = '';
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

})();
