/**
 * RUX CLEANING & SHINE - VISUAL EFFECTS & ANIMATIONS ENGINE
 * Ambient Soap Bubbles, Iridescent Glass, 3D Perspective Tilts, Cleanliness Sparkles, and Scroll Dynamics
 * 200% Ready Production Build
 */

(function () {
  'use strict';

  // 1. Ambient Floating Iridescent Soap & Glass Bubbles
  function initAmbientBubbles() {
    const heroes = document.querySelectorAll('.hero-section, .wholesale-section, .page-banner, .about-hero');
    if (!heroes.length) return;

    heroes.forEach(hero => {
      const compStyle = window.getComputedStyle(hero);
      if (compStyle.position === 'static') {
        hero.style.position = 'relative';
      }
      hero.style.overflow = 'hidden';

      // Create container for floating glass bubbles
      const bubbleContainer = document.createElement('div');
      bubbleContainer.className = 'rux-bubble-container';
      bubbleContainer.setAttribute('aria-hidden', 'true');
      hero.appendChild(bubbleContainer);

      const isMainHero = hero.classList.contains('hero-section');
      const bubbleCount = isMainHero ? 16 : 8;

      for (let i = 0; i < bubbleCount; i++) {
        createBubble(bubbleContainer, false);
      }

      // Interactive mouse movement spawns subtle baby bubbles
      let lastSpawn = 0;
      hero.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSpawn > 220) {
          lastSpawn = now;
          const rect = hero.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          createInteractiveBubble(bubbleContainer, x, y);
        }
      });
    });
  }

  function createBubble(container, isInteractive = false) {
    const bubble = document.createElement('div');
    bubble.className = 'glass-bubble';

    const size = Math.random() * 40 + 18; // 18px to 58px
    const left = Math.random() * 94 + 3; // 3% to 97%
    const duration = Math.random() * 8 + 7; // 7s to 15s
    const delay = Math.random() * 5; // 0s to 5s
    const wobble = (Math.random() - 0.5) * 55; // horizontal drift

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `-60px`;
    bubble.style.animationDuration = `${duration}s, 3.2s`;
    bubble.style.animationDelay = `${delay}s, 0s`;
    bubble.style.setProperty('--wobble-x', `${wobble}px`);

    // Click to pop bubble with pop chime & sparkle
    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      popBubble(bubble);
    });

    container.appendChild(bubble);

    // Remove and recycle when cycle finishes
    setTimeout(() => {
      if (bubble.parentElement) {
        bubble.remove();
        createBubble(container);
      }
    }, (duration + delay) * 1000);
  }

  function createInteractiveBubble(container, x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'glass-bubble interactive-bubble';

    const size = Math.random() * 24 + 12;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.animation = 'interactiveFloat 3.8s ease-out forwards';

    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      popBubble(bubble);
    });

    container.appendChild(bubble);
    setTimeout(() => bubble.remove(), 3800);
  }

  function popBubble(bubble) {
    if (bubble.classList.contains('popping')) return;
    bubble.classList.add('popping');
    playPopSound();
    setTimeout(() => bubble.remove(), 230);
  }

  // Soft pop audio chime using Web Audio API (Zero external assets needed!)
  let audioCtx = null;
  function playPopSound() {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1300, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.09);
    } catch (e) {
      // AudioContext unavailable or restricted by autoplay policy
    }
  }

  // 2. 3D Card Hover Perspective Tilt Effect
  function initCard3DTilt() {
    const cards = document.querySelectorAll('.product-card, .calc-card, .feature-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // 3. Twinkling Cleanliness Sparkles
  function initSparkles() {
    const targets = document.querySelectorAll('.hero-main-card, .section-title, .pdp-main-img-wrap, .before-after-card');
    targets.forEach(target => {
      const comp = window.getComputedStyle(target);
      if (comp.position === 'static') {
        target.style.position = 'relative';
      }
      setInterval(() => {
        if (Math.random() > 0.42) {
          const sparkle = document.createElement('div');
          sparkle.className = 'clean-sparkle';
          const top = Math.random() * 75 + 12;
          const left = Math.random() * 80 + 10;
          sparkle.style.top = `${top}%`;
          sparkle.style.left = `${left}%`;
          target.appendChild(sparkle);
          setTimeout(() => sparkle.remove(), 1200);
        }
      }, 1500);
    });
  }

  // 4. Scroll Reveal Animations (Silky Fade & Rise on Scroll)
  function initScrollReveal() {
    const elements = document.querySelectorAll('.feature-card, .product-card, .comparison-card, .calc-card, .footer-col, .testimonial-card');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('rux-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rux-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    elements.forEach(el => {
      el.classList.add('rux-reveal');
      observer.observe(el);
    });
  }

  // 5. Floating Back-to-Top Button with Circular SVG Progress Ring
  function initBackToTop() {
    if (document.querySelector('.rux-back-to-top')) return;
    const btn = document.createElement('button');
    btn.className = 'rux-back-to-top';
    btn.setAttribute('aria-label', 'Scroll back to top');
    btn.innerHTML = `
      <svg class="progress-ring" width="48" height="48" viewBox="0 0 48 48">
        <circle class="progress-ring-bg" stroke="#e2e8f0" stroke-width="3" fill="transparent" r="21" cx="24" cy="24"/>
        <circle class="progress-ring-circle" stroke="#0056b3" stroke-width="3" stroke-dasharray="131.9" stroke-dashoffset="131.9" fill="transparent" r="21" cx="24" cy="24" stroke-linecap="round"/>
      </svg>
      <span class="arrow-up">↑</span>
    `;
    document.body.appendChild(btn);

    const circle = btn.querySelector('.progress-ring-circle');
    const circumference = 2 * Math.PI * 21;

    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / (scrollTotal || 1)));

      if (window.scrollY > 280) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }

      const offset = circumference - (scrollProgress * circumference);
      circle.style.strokeDashoffset = offset;
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 6. Header Sticky Frosted Glass Transition on Scroll
  function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 35) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Initialize all effects upon DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllEffects);
  } else {
    initAllEffects();
  }

  function initAllEffects() {
    initAmbientBubbles();
    initCard3DTilt();
    initSparkles();
    initScrollReveal();
    initBackToTop();
    initHeaderScroll();
  }

  // Expose sound chime globally for store actions
  window.ruxPlayChime = playPopSound;

})();
