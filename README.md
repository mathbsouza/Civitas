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

Organize os textos em pastas temáticas e crie um `index.md` para cada artigo:

```text
src/content/posts/
├── democracia/
│   └── representacao-e-voto/index.md
├── instituicoes/
│   └── instituicoes-e-confianca/index.md
└── republicanismo/
    └── liberdade-e-limites/index.md
```

Por exemplo, crie `src/content/posts/democracia/meu-texto/index.md`:

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

## Referências

Use notas Markdown com uma tag semântica e exclusiva para cada fonte. A numeração exibida é criada automaticamente pela ordem da primeira citação, no padrão Vancouver:

```md
Uma afirmação documentada.[^folha-master-cdbs-2025]

[^folha-master-cdbs-2025]: **Folha de S.Paulo.** Título da matéria [Internet]. 2025 out 16 [citado 2026 set 5]. Disponível em: <https://exemplo.com/materia>.
```

Não acrescente um segundo link depois da nota. No reader, `[1]` abre a referência completa ao passar o cursor; em telas de toque, abre ao tocar. A fonte completa contém o link externo, e a lista final mostra tanto a ordem numérica quanto a tag autoral.
