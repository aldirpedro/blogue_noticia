# Blogue Notícia

Blogue de notícias construído com Next.js 14 (App Router), TypeScript e Tailwind CSS, com um design editorial inspirado em portais de notícias portugueses (ticker de última hora, destaque em hero, secção "mais lidas", grelha de categorias).

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Conteúdo mockado em `lib/data.ts` (sem CMS/base de dados nesta fase)

## Estrutura

```
app/
  page.tsx                  # Homepage: ticker, hero, mais lidas, categorias
  categoria/[slug]/page.tsx # Listagem por categoria
  noticia/[slug]/page.tsx   # Página de artigo
components/
  header.tsx, breaking-ticker.tsx, category-nav.tsx, footer.tsx
  hero.tsx, article-card.tsx
lib/
  data.ts                   # Artigos e categorias mockados + helpers
```

## Desenvolvimento

```bash
npm install
npm run dev
```

## Próximos passos sugeridos

- Ligar a um CMS (ex: Sanity, Contentful) ou base de dados em vez dos dados mockados em `lib/data.ts`
- Página de pesquisa
- Página de autor
- Comentários / newsletter reais
