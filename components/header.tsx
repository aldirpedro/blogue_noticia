import Link from "next/link";
import { BreakingTicker } from "./breaking-ticker";
import { CategoryNav } from "./category-nav";

export function Header() {
  const now = new Date();
  const dateLabel = now.toLocaleDateString("pt-PT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <BreakingTicker />

      <div className="bg-paper border-b-[3px] border-ink px-5 md:px-8 grid grid-cols-[1fr_auto_1fr] items-center h-[76px]">
        <div className="text-[11px] text-muted tracking-wide uppercase leading-relaxed hidden sm:block">
          {dateLabel}
          <br />
          Edição Digital
        </div>
        <Link href="/" className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-black tracking-tight leading-none">
            Blogue Notícia
          </h1>
          <div className="text-[10px] tracking-[0.3em] uppercase text-brand font-bold mt-1">
            Informação Sem Filtros
          </div>
        </Link>
        <div className="flex justify-end items-center gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-blink" />
            Em direto
          </div>
          <button className="hidden sm:flex items-center gap-1.5 bg-ink text-paper px-3.5 py-2 rounded text-[10px] font-bold tracking-widest uppercase">
            Assinar
          </button>
        </div>
      </div>

      <CategoryNav />

      <div className="h-[34px] bg-ink text-white flex justify-between items-center px-5 md:px-8 text-[10px] font-sans">
        <div className="flex items-center gap-2">
          <span className="bg-brand text-white px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase">
            Ao Vivo
          </span>
          <span className="text-white/60">Atualizações em tempo real</span>
        </div>
        <div className="hidden md:flex gap-4 text-white/60">
          <span>
            EUR/USD <span className="text-green-400 font-bold">1.09</span>
          </span>
          <span>
            PSI-20 <span className="text-green-400 font-bold">+0.6%</span>
          </span>
        </div>
      </div>
    </header>
  );
}
