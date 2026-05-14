// =============================================================
// Neko Studio — Lógica das páginas individuais de produto
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("[data-product-id]");
  if (!root) return;

  const id = root.getAttribute("data-product-id");
  const product = NEKO_PRODUCTS.find(p => p.id === id);
  if (!product) {
    root.innerHTML = `<div class="container" style="padding: 160px 0;"><h1>Produto não encontrado</h1><p><a class="btn btn-secondary" href="../index.html">Voltar</a></p></div>`;
    return;
  }

  // Define cor (CSS var --card-glow) com base no produto
  const corMap = {
    purple: "var(--neon-purple)",
    blue: "var(--neon-blue)",
    pink: "var(--neon-pink)"
  };
  root.style.setProperty("--card-glow", corMap[product.cor] || corMap.purple);

  // Ícone grande
  const icoEl = root.querySelector("[data-product-icon]");
  if (icoEl) icoEl.innerHTML = ICONS[product.icone] || ICONS.cog;

  // Nome / tagline / descrição
  root.querySelectorAll("[data-product-name]").forEach(el => el.textContent = product.nome);
  root.querySelectorAll("[data-product-tagline]").forEach(el => el.textContent = product.tagline);
  root.querySelectorAll("[data-product-description]").forEach(el => el.textContent = product.descricaoLonga || product.descricao);

  // Status
  root.querySelectorAll("[data-product-status]").forEach(el => {
    el.innerHTML = `<span class="status-badge status-${product.statusTipo}"><span class="dot"></span>${product.status}</span>`;
  });

  // Lista de recursos
  const featuresEl = root.querySelector("[data-product-features]");
  if (featuresEl) {
    featuresEl.innerHTML = (product.recursos || []).map(r => `<li>${r}</li>`).join("");
  }

  // Info lateral
  const infoEl = root.querySelector("[data-product-info]");
  if (infoEl) {
    infoEl.innerHTML = `
      <div class="info-row"><span class="label">Status</span><span class="value">${product.status}</span></div>
      <div class="info-row"><span class="label">Tipo</span><span class="value">${tipoLegivel(product.id)}</span></div>
      <div class="info-row"><span class="label">Disponibilidade</span><span class="value">${product.statusTipo === "consulta" ? "Sob consulta" : "Em desenvolvimento"}</span></div>
    `;
  }

  // Galeria — usa imagens cadastradas ou placeholders
  const galleryEl = root.querySelector("[data-product-gallery]");
  if (galleryEl) {
    if (product.imagens && product.imagens.length) {
      galleryEl.innerHTML = product.imagens.map((src, i) => `
        <div class="gallery-item">
          <img src="${src}" alt="${product.nome} — imagem ${i + 1}" loading="lazy">
        </div>
      `).join("");
    } else {
      // 3 placeholders elegantes — substitua adicionando imagens no products-data.js
      galleryEl.innerHTML = Array.from({ length: 3 }).map((_, i) => `
        <div class="gallery-item">
          <div class="gallery-placeholder">
            ${ICONS.image}
            <div>Imagem demonstrativa #${i + 1}<br><small style="opacity:0.7">Adicione em <code>assets/images/products/</code></small></div>
          </div>
        </div>
      `).join("");
    }
  }

  // Atualiza o title da página
  document.title = `${product.nome} — Neko Studio`;
});

function tipoLegivel(id) {
  if (id.startsWith("orgah")) return "Produto próprio";
  if (id === "sites-personalizados") return "Serviço";
  if (id === "automacoes") return "Serviço sob demanda";
  return "Solução";
}
