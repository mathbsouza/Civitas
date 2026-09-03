# Civitas

Repositório minimalista de textos filosófico-políticos, construído com Astro, React, Tailwind e Markdown/MDX.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Publicar um texto

Crie `src/content/posts/meu-texto/index.md`:

```md
---
title: "Título"
subtitle: "Subtítulo opcional"
date: "2026-09-03"
author: "Nome"
cover: "/images/minha-capa.jpg"
tags: ["democracia", "instituições"]
published: true
excerpt: "Resumo breve."
---

Texto em Markdown.
```

Imagens funcionam pela sintaxe Markdown. HTML pode ser usado para mídia rica:

```html
<figure>
  <img src="/images/arquivo.jpg" alt="Descrição" />
  <figcaption>Legenda e fonte.</figcaption>
</figure>

<video controls poster="/images/poster.jpg">
  <source src="/media/video.mp4" type="video/mp4" />
</video>

<iframe src="https://www.youtube-nocookie.com/embed/ID" title="Título do vídeo" allowfullscreen></iframe>
```

Use `.mdx` quando precisar importar componentes interativos. Textos com `published: false` ficam fora do site e do RSS.
