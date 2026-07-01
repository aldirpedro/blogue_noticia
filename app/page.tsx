import { Hero } from "@/components/hero";
import { ArticleCard } from "@/components/article-card";
import {
  getAllArticlesSorted,
  getMostRead,
  categories,
  getArticlesByCategory,
} from "@/lib/data";

export default function HomePage() {
  const sorted = getAllArticlesSorted();
  const [featured, ...rest] = sorted;
  const sideList = rest.slice(0, 4);
  const mostRead = getMostRead(4);
  const trendingTags = Array.from(
    new Set(sorted.flatMap((a) => a.tags ?? []))
  ).slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
      <div className="flex items-center gap-3 flex-wrap bg-paper2 border border-black/10 rounded-lg px-4 py-3 mb-5">
        <span className="text-[10px] font-bold uppercase tracking-widest">
          Em Alta
        </span>
        {trendingTags.map((tag) => (
          <span
            key={tag}
            className="border border-ink px-3 py-1 rounded-full text-[10px] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <Hero featured={featured} sideList={sideList} />

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <SectionHeading title="Últimas Notícias" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {rest.slice(4, 10).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {categories.map((cat) => {
            const catArticles = getArticlesByCategory(cat.name).slice(0, 3);
            if (catArticles.length === 0) return null;
            return (
              <div key={cat.slug} className="mb-10">
                <SectionHeading title={cat.name} href={`/categoria/${cat.slug}`} />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {catArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <aside className="space-y-8">
          <div className="bg-white rounded-2xl p-5">
            <SectionHeading title="Mais Lidas" noBorder />
            <ol className="space-y-4">
              {mostRead.map((a, i) => (
                <li key={a.slug} className="flex gap-3">
                  <span className="font-serif font-black text-2xl text-brand/20 leading-none">
                    {i + 1}
                  </span>
                  <a href={`/noticia/${a.slug}`} className="text-[13px] font-bold leading-snug hover:text-brand">
                    {a.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-ink text-white rounded-2xl p-5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
              Newsletter
            </div>
            <p className="text-sm font-serif leading-snug mb-3">
              Receba o resumo das notícias mais importantes todas as manhãs.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="o-seu-email@exemplo.com"
                className="flex-1 rounded px-3 py-2 text-xs text-ink"
              />
              <button className="bg-brand text-white px-4 py-2 rounded text-xs font-bold uppercase">
                OK
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function SectionHeading({
  title,
  href,
  noBorder,
}: {
  title: string;
  href?: string;
  noBorder?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-3 mb-4">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
        {title}
      </h2>
      {!noBorder && <span className="flex-1 h-px bg-black/10" />}
    </div>
  );
  if (href) {
    return (
      <a href={href} className="hover:text-brand">
        {content}
      </a>
    );
  }
  return content;
}
