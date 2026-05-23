// =============================================================
// Neko Studio — JavaScript principal
// =============================================================

// ---------- Helpers ----------
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Monta link do WhatsApp com mensagem
function whatsappLink(mensagem = NEKO_CONTACT.mensagemPadrao) {
  const numero = NEKO_CONTACT.whatsapp;
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

// Monta link de e-mail
function mailtoLink(assunto = "Contato via site Neko Studio") {
  return `mailto:${NEKO_CONTACT.email}?subject=${encodeURIComponent(assunto)}`;
}

// ---------- Ícones (inline SVG) ----------
// Mapa de ícones para evitar dependência externa.
const ICONS = {
  store: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1-5h16l1 5"/><path d="M4 9v11h16V9"/><path d="M9 22V12h6v10"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>`,
  cog:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v11"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.4 8.5-8 9-4.6-.5-8-4-8-9V7l8-4z"/><path d="M9 12l2 2 4-5"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.6v12.8c0 .7.8 1.1 1.4.7l9.6-6.4c.5-.3.5-1.1 0-1.4L9.4 4.9c-.6-.4-1.4 0-1.4.7z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
  whats: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 018.413 3.488 11.82 11.82 0 013.48 8.41c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.695.247-1.29.173-1.414z"/></svg>`,
  mail:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>`,
  github:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.93 10.93 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/></svg>`,
  insta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
  chat:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 11-3.3-6.5L21 4l-1.5 3.3A8 8 0 0121 12z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5h5v5"/><path d="M19 5l-9 9"/><path d="M19 14v5H5V5h5"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>`
};

// ---------- Renderiza cards de produto na home ----------
function renderProducts() {
  const grid = $("#products-grid");
  if (!grid || typeof NEKO_PRODUCTS === "undefined") return;

  grid.innerHTML = NEKO_PRODUCTS.map(p => `
    <a href="${p.link}" class="card product-card card--${p.cor}" data-product="${p.id}">
      <div class="product-icon">${ICONS[p.icone] || ICONS.cog}</div>
      <span class="status-badge status-${p.statusTipo}">
        <span class="dot"></span>${p.status}
      </span>
      <h3 class="nome">${p.nome}</h3>
      <p class="desc">${p.descricao}</p>
      <div class="footer">
        <span class="saiba-mais">Ver produto ${ICONS.arrow}</span>
      </div>
    </a>
  `).join("");
}

// ---------- Renderiza cards da Neko Tools ----------
function renderTools() {
  const grid = $("#tools-grid");
  if (!grid || typeof NEKO_TOOLS === "undefined") return;

  grid.innerHTML = NEKO_TOOLS.map(tool => `
    <a href="${tool.link}" class="card tool-card card--${tool.cor}" data-tool="${tool.id}">
      <div class="tool-card-top">
        <div class="product-icon">${ICONS[tool.icone] || ICONS.cog}</div>
        <span class="status-badge status-${tool.statusTipo}">
          <span class="dot"></span>${tool.status}
        </span>
      </div>
      <h3 class="nome">${tool.nome}</h3>
      <p class="desc">${tool.descricao}</p>
      <div class="tool-platforms">
        ${(tool.plataformas || []).map(item => `<span>${item}</span>`).join("")}
      </div>
      <div class="footer">
        <span class="saiba-mais">Abrir ferramenta ${ICONS.arrow}</span>
      </div>
    </a>
  `).join("");
}

// ---------- Renderiza roadmap ----------
function renderRoadmap() {
  const wrapper = $("#roadmap-list");
  if (!wrapper || typeof NEKO_ROADMAP === "undefined") return;

  wrapper.innerHTML = NEKO_ROADMAP.map((item, i) => `
    <div class="card roadmap-item card--${i % 3 === 0 ? 'purple' : i % 3 === 1 ? 'pink' : 'blue'}">
      <div class="roadmap-step">${String(i + 1).padStart(2, '0')}</div>
      <div class="roadmap-body">
        <h4>${item.titulo}</h4>
        <p>${item.descricao}</p>
      </div>
      <span class="roadmap-fase">${item.fase}</span>
    </div>
  `).join("");
}

// ---------- Preenche links de contato ----------
function setupContactLinks() {
  // WhatsApp
  $$("[data-action='whatsapp']").forEach(el => {
    el.setAttribute("href", whatsappLink());
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
  // E-mail
  $$("[data-action='email']").forEach(el => {
    el.setAttribute("href", mailtoLink());
  });
  // GitHub
  $$("[data-action='github']").forEach(el => {
    if (NEKO_CONTACT.github) {
      el.setAttribute("href", NEKO_CONTACT.github);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });
  // Instagram (esconde se vazio)
  $$("[data-action='instagram']").forEach(el => {
    if (NEKO_CONTACT.instagram) {
      el.setAttribute("href", NEKO_CONTACT.instagram);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    } else {
      const card = el.closest(".contact-card");
      if (card) card.style.display = "none";
    }
  });

  // Texto visível do WhatsApp
  $$("[data-text='whatsapp']").forEach(el => { el.textContent = NEKO_CONTACT.whatsappLabel; });
  $$("[data-text='email']").forEach(el => { el.textContent = NEKO_CONTACT.email; });
}

// ---------- Injeta ícones em locais marcados ----------
function injectIcons() {
  $$("[data-icon]").forEach(el => {
    const name = el.getAttribute("data-icon");
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
}

// ---------- Navbar (scroll + menu mobile) ----------
function setupNavbar() {
  const nav = $(".navbar");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const toggle = $(".menu-toggle");
  const links = $(".navbar-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.addEventListener("click", e => {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }
}

// ---------- Assistente virtual ----------
function setupAssistant() {
  const assistant = $("#assistant");
  if (!assistant) return;

  const btn = $(".assistant-btn", assistant);
  btn.addEventListener("click", () => assistant.classList.toggle("open"));

  // Fecha ao clicar fora
  document.addEventListener("click", e => {
    if (!assistant.contains(e.target)) assistant.classList.remove("open");
  });

  // Ações das opções
  $$(".assistant-option", assistant).forEach(opt => {
    opt.addEventListener("click", () => {
      const intent = opt.getAttribute("data-intent");
      let mensagem = NEKO_CONTACT.mensagemPadrao;
      switch (intent) {
        case "contratar":
          mensagem = "Olá! Tenho interesse em contratar um sistema ou solução personalizada com a Neko Studio.";
          break;
        case "produtos":
          mensagem = "Olá! Gostaria de saber mais sobre os produtos da Neko Studio.";
          break;
        case "suporte":
          mensagem = "Olá! Preciso de suporte / tirar uma dúvida sobre a Neko Studio.";
          break;
      }
      window.open(whatsappLink(mensagem), "_blank", "noopener,noreferrer");
      assistant.classList.remove("open");
    });
  });
}

// ---------- Scroll reveal ----------
function setupReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach(el => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// ---------- Ano dinâmico no rodapé ----------
function setupYear() {
  const el = $("#year");
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- Intro animation (gatinho neon) ----------
function generateIntroParticles() {
  const container = $(".intro-particles");
  if (!container) return;

  const colors = [
    "#a8f7ff", "#7de8f7", "#67e8f9",   // ciano
    "#c084fc", "#a855f7",              // roxo
    "#f472b6", "#ec4899"               // rosa
  ];
  const TOTAL = 72;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < TOTAL; i++) {
    // Distribui em todas as direções com pequena variação
    const angle = (i / TOTAL) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const distance = 110 + Math.random() * 220;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 2 + Math.random() * 5;
    const delay = Math.random() * 220;

    const p = document.createElement("div");
    p.className = "intro-particle";
    p.style.setProperty("--x", `${x.toFixed(1)}px`);
    p.style.setProperty("--y", `${y.toFixed(1)}px`);
    p.style.setProperty("--c", color);
    p.style.setProperty("--s", `${size.toFixed(1)}px`);
    p.style.setProperty("--d", `${delay.toFixed(0)}ms`);
    frag.appendChild(p);
  }
  container.appendChild(frag);
}

function runIntro(onComplete) {
  const loader = $("#intro-loader");
  const done = () => { if (typeof onComplete === "function") onComplete(); };

  if (!loader) { done(); return; }

  // Respeita preferência de menos movimento (acessibilidade)
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    loader.remove();
    done();
    return;
  }

  // Trava o scroll durante a animação
  document.documentElement.style.overflow = "hidden";

  generateIntroParticles();

  const endIntro = () => {
    if (loader.dataset.done) return;
    loader.dataset.done = "1";
    loader.classList.add("fade-out");
    document.documentElement.style.overflow = "";
    setTimeout(() => {
      loader.remove();
      done();
    }, 700);
  };

  // Pode ser pulado clicando ou apertando Esc/Enter/Espaço
  loader.addEventListener("click", endIntro, { once: true });
  const keyHandler = (e) => {
    if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
      endIntro();
      document.removeEventListener("keydown", keyHandler);
    }
  };
  document.addEventListener("keydown", keyHandler);

  // Fases:
  // 0.00–0.90s: linhas se desenhando (efeito neon trace)
  // 0.95–1.15s: face (nariz, boca) aparece
  // 1.15s+    : olhos abrem e piscam em loop, gatinho flutua
  // 2.50–3.25s: shatter — partículas explodem, gatinho some
  // 3.25–3.95s: loader fade-out e remoção
  setTimeout(() => loader.classList.add("shattering"), 2500);
  setTimeout(endIntro, 3250);

  // Salvaguarda: se algo der errado, remove em 6s
  setTimeout(endIntro, 6000);
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  // Renderiza conteúdo enquanto o intro roda em cima
  renderProducts();
  renderTools();
  renderRoadmap();
  setupContactLinks();
  injectIcons();
  setupNavbar();
  setupAssistant();
  setupYear();

  // Reveal só começa depois do intro terminar — assim o usuário
  // vê o fade-in dos elementos no momento em que o site é revelado.
  runIntro(setupReveal);
});
