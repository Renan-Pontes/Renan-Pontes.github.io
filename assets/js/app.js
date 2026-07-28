/* ============================================================================
   app.js — rendering, i18n and motion
   ========================================================================== */
(function () {
  'use strict';

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let lang = localStorage.getItem('lang') || 'en';
  let filter = 'all';

  const t = (key) => (I18N[lang] && I18N[lang][key]) || (I18N.en[key] || key);

  /* ══════════════════════════ card cover art ══════════════════════════ */

  const ART = {
    radar: () => `
      <div class="art art--radar">
        <span class="ring"></span><span class="ring"></span><span class="ring"></span>
        <span class="sweep"></span>
        <i class="blip" style="--x:64%;--y:32%;--d:0s"></i>
        <i class="blip" style="--x:34%;--y:62%;--d:1.1s"></i>
        <i class="blip" style="--x:72%;--y:70%;--d:2.2s"></i>
      </div>`,

    wave: () => `
      <div class="art art--wave">
        <svg viewBox="0 0 200 90" preserveAspectRatio="none" aria-hidden="true">
          <path class="w w1" d="M0 45 Q 12.5 5 25 45 T 50 45 T 75 45 T 100 45 T 125 45 T 150 45 T 175 45 T 200 45 T 225 45 T 250 45 T 275 45 T 300 45"/>
          <path class="w w2" d="M0 45 Q 16 78 32 45 T 64 45 T 96 45 T 128 45 T 160 45 T 192 45 T 224 45 T 256 45 T 288 45 T 320 45"/>
          <path class="w w3" d="M0 45 Q 8 22 16 45 T 32 45 T 48 45 T 64 45 T 80 45 T 96 45 T 112 45 T 128 45 T 144 45 T 160 45 T 176 45 T 192 45 T 208 45 T 224 45 T 240 45 T 256 45 T 272 45 T 288 45 T 304 45"/>
        </svg>
        <span class="scanline"></span>
      </div>`,

    graph: () => {
      const nodes = [[22,30],[52,18],[78,34],[38,58],[68,68],[16,74],[88,60]];
      const edges = [[0,1],[1,2],[0,3],[3,4],[2,4],[3,5],[4,6],[2,6]];
      const e = edges.map((p, i) =>
        `<line class="e" x1="${nodes[p[0]][0]}" y1="${nodes[p[0]][1]}" x2="${nodes[p[1]][0]}" y2="${nodes[p[1]][1]}" style="--d:${i * 0.18}s"/>`).join('');
      const n = nodes.map((p, i) =>
        `<circle class="n" cx="${p[0]}" cy="${p[1]}" r="${i === 0 ? 3.6 : 2.4}" style="--d:${i * 0.22}s"/>`).join('');
      return `<div class="art art--graph"><svg viewBox="0 0 100 90" aria-hidden="true">${e}${n}</svg></div>`;
    },

    grid: () => {
      let cells = '';
      for (let i = 0; i < 32; i++) cells += `<i style="--d:${(i % 8) * 0.09 + Math.floor(i / 8) * 0.13}s"></i>`;
      return `<div class="art art--grid">${cells}</div>`;
    },

    flow: () => `
      <div class="art art--flow">
        <svg viewBox="0 0 200 90" aria-hidden="true">
          <path class="track" d="M4 70 C 50 70, 46 20, 100 20 S 150 70, 196 70"/>
          <circle class="pkt" r="3.2"><animateMotion dur="3.2s" repeatCount="indefinite" path="M4 70 C 50 70, 46 20, 100 20 S 150 70, 196 70"/></circle>
          <circle class="pkt" r="2.4"><animateMotion dur="3.2s" begin="-1.1s" repeatCount="indefinite" path="M4 70 C 50 70, 46 20, 100 20 S 150 70, 196 70"/></circle>
          <circle class="pkt" r="2.4"><animateMotion dur="3.2s" begin="-2.2s" repeatCount="indefinite" path="M4 70 C 50 70, 46 20, 100 20 S 150 70, 196 70"/></circle>
        </svg>
      </div>`,

    stack: () => `
      <div class="art art--stack">
        <i style="--i:0"></i><i style="--i:1"></i><i style="--i:2"></i><i style="--i:3"></i>
      </div>`,

    shield: () => `
      <div class="art art--shield">
        <svg viewBox="0 0 100 90" aria-hidden="true">
          <path class="sh" d="M50 10 L80 22 V46 C80 64 66 74 50 80 C34 74 20 64 20 46 V22 Z"/>
          <path class="tick" d="M38 46 l9 9 17-19"/>
        </svg>
        <span class="scanline"></span>
      </div>`,

    terminal: () => {
      const w = [70, 44, 86, 32, 62, 50];
      return `<div class="art art--terminal">${w.map((x, i) =>
        `<i style="--w:${x}%;--d:${i * 0.16}s"></i>`).join('')}<span class="cursor"></span></div>`;
    }
  };

  /* ══════════════════════════ projects ══════════════════════════ */

  function cardHTML(p, i) {
    const c = p[lang] || p.en;
    const art = p.image
      ? `<div class="art art--img"><img src="${p.image}" alt="" loading="lazy"></div>`
      : (ART[p.art] || ART.grid)();

    const badges = [];
    if (p.private) {
      badges.push(`<span class="badge badge--lock">
        <svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true"><path d="M7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><rect x="4.5" y="11" width="15" height="9.5" rx="2.2" fill="currentColor"/></svg>
        ${t('card.private')}</span>`);
    } else {
      if (p.live) {
        badges.push(`<a class="badge badge--live" href="${p.live}" target="_blank" rel="noopener">
          <i class="badge__dot"></i>${t('card.live')}</a>`);
      }
      badges.push(`<a class="badge badge--src" href="https://github.com/Renan-Pontes/${p.repo}" target="_blank" rel="noopener">
        <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true"><path fill="currentColor" d="M8 0a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.9-1.1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.9.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.2c0 .2.1.5.5.4A8 8 0 0 0 8 0Z"/></svg>
        ${t('card.source')}</a>`);
    }
    const badge = `<span class="card__badges">${badges.join('')}</span>`;

    return `
      <article class="card${p.featured ? ' card--featured' : ''}" style="--hue:${p.hue};--i:${i}" data-cat="${p.cat}">
        <div class="card__art">${art}<span class="card__glow"></span></div>
        <div class="card__body">
          <div class="card__top">
            <span class="card__kicker">${c.kicker}</span>
            ${badge}
          </div>
          <h3 class="card__title">${c.title}</h3>
          <p class="card__desc">${c.desc}</p>
          <ul class="card__points">${c.points.map(x => `<li>${x}</li>`).join('')}</ul>
          <ul class="card__tags">${p.tags.map(x => `<li>${x}</li>`).join('')}</ul>
        </div>
      </article>`;
  }

  function renderGrid() {
    const grid = $('#grid');
    const list = PROJECTS.filter(p => filter === 'all' || p.cat === filter);
    grid.innerHTML = list.map(cardHTML).join('');
    if (!REDUCED) {
      requestAnimationFrame(() => $$('.card', grid).forEach(el => el.classList.add('is-in')));
    } else {
      $$('.card', grid).forEach(el => el.classList.add('is-in'));
    }
  }

  function renderChipCounts() {
    $$('.chip').forEach(chip => {
      const f = chip.dataset.filter;
      const n = f === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.cat === f).length;
      $('.chip__n', chip).textContent = n;
    });
  }

  function renderVenture() {
    const box = $('#venture-services');
    if (!box) return;
    box.innerHTML = VENTURE.services.map((s, i) => {
      const c = s[lang] || s.en;
      return `
        <li class="svc" style="--i:${i}">
          <span class="svc__art">${(ART[s.art] || ART.grid)()}</span>
          <h4 class="svc__t">${c.t}</h4>
          <p class="svc__d">${c.d}</p>
        </li>`;
    }).join('');
  }

  /* The portrait only exists once a photo is dropped in assets/img/.
     Until then the <figure> stays hidden rather than showing a broken image. */
  function initPortrait() {
    const fig = $('#portrait');
    const img = $('#avatar');
    if (!fig || !img) return;
    const show = () => { if (img.naturalWidth > 0) fig.hidden = false; };
    if (img.complete) show(); else { img.addEventListener('load', show); }
    img.addEventListener('error', () => fig.remove());
  }

  function renderStack() {
    $('#stack-grid').innerHTML = STACK.map((g, i) => `
      <div class="stack__group reveal" style="--i:${i}">
        <h3 class="stack__title">${t('stack.' + g.group)}</h3>
        <ul class="stack__items">${g.items.map((x, j) => `<li style="--d:${j * 0.05}s">${x}</li>`).join('')}</ul>
      </div>`).join('');
    observeReveals();
  }

  /* ══════════════════════════ i18n ══════════════════════════ */

  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $$('.lang__btn').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
    renderGrid();
    renderVenture();
    renderStack();
    startTyping();
    localStorage.setItem('lang', lang);
  }

  /* ══════════════════════════ hero text motion ══════════════════════════ */

  const CHARS = '!<>-_\\/[]{}—=+*^?#01';

  function scramble(el, text, duration) {
    if (REDUCED) { el.textContent = text; return; }
    const total = duration || 900;
    const start = performance.now();
    const seeds = text.split('').map((_, i) => (i / text.length) * 0.55 + Math.random() * 0.2);
    (function frame(now) {
      const p = Math.min(1, (now - start) / total);
      el.textContent = text.split('').map((ch, i) => {
        if (ch === ' ') return ' ';
        if (p >= seeds[i] + 0.28) return ch;
        if (p < seeds[i]) return '';
        return CHARS[(Math.random() * CHARS.length) | 0];
      }).join('');
      if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
    })(start);
  }

  let typeTimer = null;
  function startTyping() {
    const el = $('#typed');
    if (!el) return;
    clearTimeout(typeTimer);
    const roles = t('hero.roles');
    if (REDUCED) { el.textContent = roles[0]; return; }
    let ri = 0, ci = 0, deleting = false;
    (function tick() {
      const word = roles[ri % roles.length];
      ci += deleting ? -1 : 1;
      el.textContent = word.slice(0, ci);
      let wait = deleting ? 34 : 62;
      if (!deleting && ci === word.length) { wait = 1700; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri++; wait = 320; }
      typeTimer = setTimeout(tick, wait);
    })();
  }

  /* ══════════════════════════ scroll reveal + counters ══════════════════════════ */

  let io;
  function observeReveals() {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          io.unobserve(e.target);
          $$('.count', e.target).forEach(runCounter);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    $$('.reveal:not(.is-in)').forEach(el => io.observe(el));
  }

  function runCounter(el) {
    const target = +el.dataset.count;
    if (REDUCED) { el.textContent = target; return; }
    const dur = 1200, start = performance.now();
    (function frame(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(frame);
    })(start);
  }

  /* ══════════════════════════ background node network ══════════════════════════ */

  function initNetwork() {
    const cv = $('#net');
    if (!cv || REDUCED) return;
    const ctx = cv.getContext('2d');
    let w = 0, h = 0, dpr = 1, nodes = [], raf = null;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // phones get a much lighter field — the pairwise link pass is O(n²)
      const cap = w < 640 ? 26 : w < 1024 ? 52 : 90;
      const count = Math.min(cap, Math.round((w * h) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const LINK = 132;
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = n.x - mouse.x, dy = n.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 15000 && d2 > 1) {
          const f = (1 - d2 / 15000) * 0.6, d = Math.sqrt(d2);
          n.x += (dx / d) * f; n.y += (dy / d) * f;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(0,229,255,${(1 - d / LINK) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(0,229,255,0.5)';
        ctx.beginPath(); ctx.arc(nodes[i].x, nodes[i].y, 1.5, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
    function play() { if (!raf) raf = requestAnimationFrame(draw); }

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    window.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; }, { passive: true });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : play()));
    resize(); play();
  }

  /* ══════════════════════════ boot sequence ══════════════════════════ */

  function boot(done) {
    const box = $('#boot');
    if (REDUCED || sessionStorage.getItem('booted')) { box.remove(); done(); return; }
    sessionStorage.setItem('booted', '1');
    const pre = $('.boot__log', box);
    let i = 0;
    (function next() {
      if (i >= BOOT_LINES.length) {
        setTimeout(() => {
          box.classList.add('is-out');
          setTimeout(() => box.remove(), 520);
          done();
        }, 260);
        return;
      }
      pre.textContent += BOOT_LINES[i++] + '\n';
      setTimeout(next, 170);
    })();
  }

  /* ══════════════════════════ chrome ══════════════════════════ */

  function initChrome() {
    const nav = $('#nav');
    const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    $('.nav__burger').addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      this.setAttribute('aria-expanded', String(open));
    });
    $$('.nav__links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));

    $$('.lang__btn').forEach(b => b.addEventListener('click', () => {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      applyLang();
    }));

    $$('.chip').forEach(c => c.addEventListener('click', () => {
      $$('.chip').forEach(x => x.classList.remove('is-active'));
      c.classList.add('is-active');
      filter = c.dataset.filter;
      renderGrid();
    }));

    const name = $('.hero__name');
    name.addEventListener('pointerenter', () => scramble(name, name.dataset.scramble, 700));

    $('#year').textContent = new Date().getFullYear();
  }

  /* ══════════════════════════ go ══════════════════════════ */

  document.addEventListener('DOMContentLoaded', () => {
    initChrome();
    initPortrait();
    renderChipCounts();
    applyLang();
    initNetwork();
    boot(() => {
      document.body.classList.add('is-ready');
      observeReveals();
      const name = $('.hero__name');
      scramble(name, name.dataset.scramble, 1100);
    });
  });
})();
