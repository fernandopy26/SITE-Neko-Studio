# Neko Studio — Site institucional

Site institucional moderno, responsivo e tecnológico do estúdio digital **Neko Studio**.
Construído em **HTML, CSS e JavaScript puro** — sem build, sem framework, sem dependências.
100% compatível com **GitHub Pages**.

## ✨ Destaques

- Tema escuro com paleta neon (roxo, azul e rosa)
- Animações suaves e cards com efeito glow
- Totalmente responsivo
- Páginas individuais para cada produto
- Categoria **Neko Tools** com página de download para apps próprios
- Assistente virtual flutuante com opções de contato via WhatsApp
- Catálogo de produtos gerenciado por **um único arquivo JS** (fácil de editar)
- Pronto para publicar no GitHub Pages

## 📁 Estrutura

```
Site-NekoStudio/
├── index.html                  # Página principal
├── produtos/                   # Páginas individuais de cada produto
│   ├── orgah-gestao.html
│   ├── orgah-finance.html
│   ├── sites-personalizados.html
│   └── automacoes.html
├── tools/                      # Páginas da categoria Neko Tools
│   └── ytd-neko-tools.html
├── downloads/                  # Instaladores oficiais dos apps
│   └── README.md
├── assets/
│   ├── css/
│   │   ├── style.css           # Estilos globais
│   │   ├── product.css         # Estilos das páginas de produto
│   │   └── tools.css           # Estilos da categoria Neko Tools
│   ├── js/
│   │   ├── products-data.js    # ⭐ Dados de produtos / roadmap / contato
│   │   ├── main.js             # Renderização e interações da home
│   │   └── product-page.js     # Lógica das páginas de produto
│   └── images/
│       └── products/           # Coloque aqui as imagens demonstrativas
├── .nojekyll                   # Necessário para o GitHub Pages
└── README.md
```

## ▶️ Como rodar localmente

Como é um site estático, basta abrir o `index.html` em um navegador. Mas, para que
caminhos relativos e fontes funcionem 100%, o ideal é servir por HTTP local:

**Opção 1 — Python (já vem no Linux/Mac):**
```bash
cd Site-NekoStudio
python3 -m http.server 8080
```
Acesse: http://localhost:8080

**Opção 2 — VS Code:**
Instale a extensão **Live Server** e clique com o botão direito em `index.html` → *Open with Live Server*.

**Opção 3 — Node:**
```bash
npx serve .
```

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `nekostudio.github.io` ou `site-neko-studio`).
2. Suba os arquivos:
   ```bash
   git init
   git add .
   git commit -m "primeira versão do site"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages**.
4. Em **Source**, selecione **Deploy from a branch** → branch **main** → pasta **/ (root)**.
5. Salve. Em alguns minutos o site estará no ar em:
   - `https://SEU-USUARIO.github.io/SEU-REPO/` (repo comum), ou
   - `https://SEU-USUARIO.github.io/` (se o repo for `SEU-USUARIO.github.io`).

> O arquivo `.nojekyll` já está incluído para evitar que o GitHub Pages tente processar
> o site com Jekyll.

## ✏️ Como editar

### 1. Mudar informações de contato (WhatsApp, e-mail, GitHub, Instagram)

Abra `assets/js/products-data.js`, role até o final, e edite:

```js
const NEKO_CONTACT = {
  whatsapp: "5500000000000",         // seu número no formato internacional, só números
  whatsappLabel: "(00) 00000-0000",  // como aparece para o usuário
  email: "seu-email@exemplo.com",
  github: "https://github.com/seu-usuario",
  instagram: "https://instagram.com/seu-perfil", // deixe "" para esconder
  mensagemPadrao: "Olá! Vim pelo site da Neko Studio..."
};
```

> Os links em todo o site (header, contato, assistente, CTAs) são preenchidos
> automaticamente a partir desse objeto.

### 2. Adicionar / editar / remover produtos

Tudo está em `assets/js/products-data.js`, no array `NEKO_PRODUCTS`:

```js
{
  id: "novo-produto",            // identificador único (kebab-case)
  nome: "Nome do Produto",
  tagline: "Frase curta de impacto.",
  descricao: "Descrição curta usada no card.",
  descricaoLonga: "Texto detalhado mostrado na página do produto.",
  status: "Em desenvolvimento",  // texto livre
  statusTipo: "dev",             // "dev" | "consulta" | "beta" | "lancado"
  cor: "purple",                 // "purple" | "blue" | "pink"
  icone: "store",                // "store" | "chart" | "globe" | "cog"
  recursos: ["Item 1", "Item 2"],
  imagens: ["../assets/images/products/exemplo.png"],
  link: "produtos/novo-produto.html"
}
```

Para criar a página de detalhe do novo produto:
1. Duplique um arquivo existente (ex.: `produtos/orgah-gestao.html`).
2. Altere apenas três coisas:
   - O `<title>` da página
   - A `<meta name="description">`
   - O `data-product-id="..."` no `<body>` (deve bater com o `id` no JS)

Pronto. A página vai puxar nome, descrição, recursos, status e imagens automaticamente.

### 3. Adicionar imagens nas páginas de produto

Coloque a imagem em `assets/images/products/` e referencie no array `imagens` do
produto correspondente. Veja `assets/images/products/README.md` para detalhes.

### 4. Editar o roadmap

Também em `products-data.js`, no array `NEKO_ROADMAP`. Cada item tem `titulo`,
`descricao` e `fase`.

### 5. Adicionar / editar ferramentas da Neko Tools

As ferramentas ficam no array `NEKO_TOOLS`, em `assets/js/products-data.js`.
A página do YTD Neko Tools aponta para estes arquivos:

```text
downloads/ytd-neko-tools-pc.exe
https://github.com/fernandopy26/SITE-Neko-Studio/releases/download/ytd-neko-tools-v0.1.1/ytd-neko-tools.apk
```

Para publicar o APK mobile, crie a release `ytd-neko-tools-v0.1.1` no GitHub
e anexe o arquivo com o nome `ytd-neko-tools.apk`. O instalador de PC ainda
usa `downloads/ytd-neko-tools-pc.exe`; enquanto esse arquivo não existir, a
página exibe o botão em estado "em breve" para evitar link quebrado.

A página também está pronta para três imagens do produto. Coloque os arquivos em
`assets/images/products/` com estes nomes:

```text
ytd-neko-tools-1.png
ytd-neko-tools-2.png
ytd-neko-tools-3.png
```

### 6. Trocar textos da home

Os textos estão diretamente no `index.html` — basta abrir e editar. Procure por
trechos como "Sobre nós", "Como trabalhamos juntos", etc.

### 7. Trocar a paleta de cores

Abra `assets/css/style.css` e edite as variáveis no topo, dentro de `:root`:

```css
--neon-purple: #a855f7;
--neon-blue:   #38bdf8;
--neon-pink:   #ec4899;
```

## 🧱 Tecnologia

- HTML5 semântico
- CSS3 moderno (variáveis, grid, flexbox, backdrop-filter)
- JavaScript vanilla (sem dependências)
- Fontes via Google Fonts (Inter + Space Grotesk)
- SVG inline para ícones (zero requisições extras)

## 📜 Licença

Código deste site: livre para uso pessoal.
Marca, nome "Neko Studio", logotipos e textos institucionais: © Neko Studio.
