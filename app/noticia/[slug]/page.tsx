import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  categories,
  formatRelativeTime,
  getArticleBySlug,
  getArticlesByCategory,
} from "@/lib/data";
import { ArticleCard } from "@/components/article-card";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const categorySlug = categories.find((c) => c.name === article.category)?.slug ?? "";

  return (
    <article className="max-w-3xl mx-auto px-5 md:px-8 py-8">
      <Link
        href={`/categoria/${categorySlug}`}
        className="text-[10px] font-bold uppercase tracking-widest text-brand"
      >
        {article.category}
      </Link>

      <h1 className="font-serif text-3xl md:text-4xl font-black leading-tight mt-2 mb-4">
        {article.title}
      </h1>

      <div className="flex items-center gap-2 text-[12px] text-muted mb-6 flex-wrap">
        {article.urgent && (
          <span className="bg-brand text-white px-2 py-0.5 text-[9px] font-bold uppercase rounded-sm">
            Urgente
          </span>
        )}
        <span className="text-ink font-bold">{article.author}</span>
        <span className="opacity-40">·</span>
        <span>{formatRelativeTime(article.publishedAt)}</span>
        <span className="opacity-40">·</span>
        <span>{article.reads.toLocaleString("pt-PT")} leituras</span>
      </div>

      <div className={`h-64 md:h-80 rounded-2xl mb-6 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
        <span className="text-white/10 font-serif font-black text-4xl tracking-widest uppercase">
          {article.category}
        </span>
      </div>

      <p className="text-lg font-serif leading-relaxed text-ink/90 mb-6">
        {article.excerpt}
      </p>

      <div className="space-y-4 text-[15px] leading-relaxed font-sans text-ink/90">
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {article.tags && (
        <div className="flex gap-2 mt-8 flex-wrap">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="bg-brand/10 text-brand px-3 py-1 rounded-full text-[11px] font-bold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            Notícias Relacionadas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
