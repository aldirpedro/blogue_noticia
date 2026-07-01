import Link from "next/link";
import { Article, formatRelativeTime } from "@/lib/data";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/noticia/${article.slug}`}
      className="bg-white rounded-2xl overflow-hidden font-sans block hover:shadow-lg transition-shadow"
    >
      <div className={`h-28 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
        <span className="text-white/10 font-serif font-black text-2xl tracking-widest uppercase">
          {article.category}
        </span>
      </div>
      <div className="p-4">
        {article.tags && (
          <div className="flex gap-1.5 mb-1.5 flex-wrap">
            {article.tags.map((t) => (
              <span
                key={t}
                className="bg-brand/10 text-brand px-2 py-0.5 rounded-full text-[8px] font-bold uppercase"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="text-[9px] font-bold uppercase tracking-widest text-brand mb-1.5 flex items-center gap-1.5">
          {article.category}
          {article.urgent && (
            <span className="bg-brand text-white px-1.5 py-0.5 text-[8px] font-bold uppercase rounded-sm">
              Urgente
            </span>
          )}
        </div>
        <h3 className="text-[13px] font-bold leading-snug mb-1.5 line-clamp-3">
          {article.title}
        </h3>
        <div className="text-[10.5px] text-muted flex gap-1">
          <span className="text-ink font-bold">{article.author}</span>
          <span>·</span>
          <span>{formatRelativeTime(article.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
