import { getBreakingArticles } from "@/lib/data";

export function BreakingTicker() {
  const breaking = getBreakingArticles();
  if (breaking.length === 0) return null;

  return (
    <div className="bg-brand text-white h-8 flex items-center overflow-hidden text-[11px] font-semibold tracking-wide">
      <div className="bg-brand-dark px-3 h-full flex items-center gap-1.5 shrink-0 text-[10px] tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-blink" />
        Última Hora
      </div>
      <div className="flex-1 overflow-hidden whitespace-nowrap">
        <div className="inline-block ticker-track pl-8">
          {breaking.map((a, i) => (
            <span key={a.slug}>
              {a.title}
              {i < breaking.length - 1 && <span className="mx-6 opacity-60">•</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
