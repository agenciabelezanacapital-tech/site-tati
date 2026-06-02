/* ============================================================
   Studio de Pilates Tatiane Lasneaux
   main.js — Configuração central + comportamento da página
   ============================================================ */

/* ===== CONFIGURAÇÃO CENTRAL — edite aqui ===== */
const CONFIG = {
  /* Link de WhatsApp com mensagem pré-preenchida (não altere o link, só a mensagem se necessário) */
  whatsappLink: 'https://wa.me/5561992472800?text=Quero%20marcar%20minha%20aula%20experimental',

  /* Informações de contato */
  phone:      '(61) 99247-2800',
  instagram:  'lasneaux_studiopilates',
  address:    'SHIS QI 11 Bloco M, Loja 10 – Lago Sul, Brasília – DF, CEP 71625-620',

  /* ── Tracking ── Substitua pelos IDs reais antes de lançar ──────────── */
  gtmId:                 'GTM-XXXXXXX',   // Google Tag Manager
  ga4Id:                 'G-XXXXXXXXXX',  // Google Analytics 4
  googleAdsId:           'AW-XXXXXXXXX',  // Conta Google Ads
  googleAdsConversionId: 'AW-XXXXXXXXX/XXXXXXXXXXX', // ID/rótulo da conversão
  /* ─────────────────────────────────────────────────────────────────────── */
};

/* ===== CAMINHOS DE IMAGENS — edite aqui para trocar fotos ===== */
const IMAGES = {
  /* Logos */
  logoDark:  'assets/images/logo-dark.svg',   // fundo claro (header)
  logoLight: 'assets/images/logo-light.svg',  // fundo escuro (footer)

  /* Principal */
  hero:    'assets/images/hero.jpg',          // 1920×1080 — fachada ou aula
  sobre:   'assets/images/sobre.jpg',         // 800×600   — ambiente do estúdio
  fachada: 'assets/images/fachada.jpg',       // 800×600   — fachada externa

  /* Serviços (600×400 cada) */
  services: {
    clinico:         'assets/images/services/clinico.jpg',
    reabilitacao:    'assets/images/services/reabilitacao.jpg',
    alongamento:     'assets/images/services/alongamento.jpg',
    condicionamento: 'assets/images/services/condicionamento.jpg',
    qualidade:       'assets/images/services/qualidade.jpg',
    personalizado:   'assets/images/services/personalizado.jpg',
  },

  /* Avatares de depoimentos (120×120 cada) */
  testimonials: {
    elisabeth: 'assets/images/testimonials/elisabeth.jpg',
    paulo:     'assets/images/testimonials/paulo.jpg',
    patricia:  'assets/images/testimonials/patricia.jpg',
    eliane:    'assets/images/testimonials/eliane.jpg',
  },
};

/* ============================================================
   TRACKING DE CLIQUES NO WHATSAPP
   Todos os <a class="wa-btn"> disparam este evento.
   ============================================================ */
function trackWhatsAppClick(location) {
  /* Google Analytics 4 */
  if (typeof gtag !== 'undefined') {
    gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label:    location,
      value:          1,
    });

    /* Conversão Google Ads */
    if (CONFIG.googleAdsConversionId && !CONFIG.googleAdsConversionId.includes('XXXXX')) {
      gtag('event', 'conversion', {
        send_to: CONFIG.googleAdsConversionId,
      });
    }
  }

  /* Google Tag Manager dataLayer */
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({
      event:              'whatsapp_click',
      wa_button_location: location,
      wa_link:            CONFIG.whatsappLink,
    });
  }
}

/* ============================================================
   HEADER — SCROLL + MENU MOBILE
   ============================================================ */
(function initHeader() {
  const header     = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav  = document.querySelector('.mobile-nav');

  /* Sticky header */
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 60) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
    lastY = y;
  }, { passive: true });

  /* Mobile menu toggle */
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Fechar ao clicar em link */
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
})();

/* ============================================================
   SMOOTH SCROLL para âncoras internas
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const headerH = document.querySelector('.site-header')?.offsetHeight || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ============================================================
   ANIMAÇÕES DE ENTRADA (Intersection Observer)
   ============================================================ */
(function initAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();

/* ============================================================
   FAQ — ACCORDION
   ============================================================ */
(function initFAQ() {
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item     = btn.closest('.faq-item');
      const isOpen   = item.classList.contains('is-open');
      const answer   = item.querySelector('.faq-item__answer');

      /* Fecha todos */
      document.querySelectorAll('.faq-item.is-open').forEach(openItem => {
        openItem.classList.remove('is-open');
        openItem.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      /* Abre o clicado (se estava fechado) */
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

/* ============================================================
   WHATSAPP — TRACKING em todos os botões
   ============================================================ */
(function initWATracking() {
  document.querySelectorAll('.wa-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const location = this.dataset.waLocation || 'unknown';
      trackWhatsAppClick(location);
    });
  });
})();

/* ============================================================
   STICKY CTA BAR MOBILE — oculta quando hero está visível
   ============================================================ */
(function initStickyBar() {
  const bar  = document.querySelector('.sticky-cta-bar');
  const hero = document.querySelector('.hero');
  if (!bar || !hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      bar.style.display = entry.isIntersecting ? 'none' : '';
    },
    { threshold: 0.1 }
  );
  observer.observe(hero);
})();

/* ============================================================
   HELPER — substitui src de imagens se arquivo existir
   (Útil durante desenvolvimento: imagens faltando mostram placeholder)
   ============================================================ */
(function handleBrokenImages() {
  document.querySelectorAll('img[data-placeholder]').forEach(img => {
    img.addEventListener('error', function () {
      if (!this.src.includes('placeholder')) {
        this.src = this.dataset.placeholder;
      }
    }, { once: true });
  });
})();
