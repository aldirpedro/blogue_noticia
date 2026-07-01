import Link from "next/link";
import { Article, formatRelativeTime } from "@/lib/data";

export function Hero({
  featured,
  sideList,
}: {
  featured: Article;
  sideList: Article[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-8">
      <Link
        href={`/noticia/${featured.slug}`}
        className={`relative h-[340px] rounded-2xl overflow-hidden block bg-gradient-to-br ${featured.gradient}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/5 flex items-end p-6">
          <div className="text-white w-full">
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2 flex items-center gap-2 font-sans">
              {featured.category}
              <span className="w-7 h-px bg-white/25" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-black leading-tight tracking-tight mb-2 max-w-xl">
              {featured.title}
            </h2>
            <p className="text-sm text-white/85 font-light leading-relaxed max-w-lg mb-3 font-sans hidden md:block">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-white/70 font-sans flex-wrap">
              {featured.urgent && (
                <span className="bg-brand text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide rounded-sm">
                  Urgente
                </span>
              )}
              <span className="text-white font-bold">{featured.author}</span>
              <span className="opacity-40">·</span>
              <span>{formatRelativeTime(featured.publishedAt)}</span>
              <span className="opacity-40">·</span>
              <span>{featured.reads.toLocaleString("pt-PT")} leituras</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-col font-sans">
        {sideList.map((a, i) => (
          <Link
            href={`/noticia/${a.slug}`}
            key={a.slug}
            className="py-3 border-b border-black/10 last:border-none block"
          >
            <div className="text-3xl md:text-4xl font-black text-brand/10 leading-none mb-1 font-serif">
              {String(i + 2).padStart(2, "0")}
            </div>
            <div className="text-[13px] font-bold leading-snug mb-1.5">{a.title}</div>
            <div className="text-[10px] text-muted">
              {a.author} · {formatRelativeTime(a.publishedAt)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
