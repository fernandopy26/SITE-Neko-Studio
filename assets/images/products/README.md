# Imagens dos produtos

Coloque aqui as imagens demonstrativas (telas, mockups, fotos) de cada produto.

## Como referenciar

1. Salve a imagem nesta pasta. Exemplo:
   ```
   assets/images/products/orgah-gestao-dashboard.png
   ```

2. Abra `assets/js/products-data.js` e adicione o caminho ao array `imagens` do produto correspondente:
   ```js
   {
     id: "orgah-gestao",
     // ...
     imagens: [
       "../assets/images/products/orgah-gestao-dashboard.png",
       "../assets/images/products/orgah-gestao-pdv.png"
     ]
   }
   ```

> Observação: os caminhos usam `../` porque as páginas de produto ficam em `produtos/`.
> Se a galeria estiver vazia, o site mostra placeholders automaticamente.

## Dicas

- Formato recomendado: `.png`, `.jpg` ou `.webp`.
- Proporção sugerida: **16:10** (combina com a aspect-ratio da galeria).
- Tamanho recomendado: largura entre 1200 e 1600px para boa qualidade sem pesar.
