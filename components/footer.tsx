import Link from "next/link";
import { categories } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-paper mt-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 font-sans text-sm">
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-xl font-black">Blogue Notícia</div>
          <p className="text-muted text-xs mt-2 leading-relaxed">
            Informação verificada, atualizada ao minuto, sobre Portugal e o mundo.
          </p>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest mb-3 text-muted">
            Secções
          </div>
          <ul className="space-y-2 text-[13px]">
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link href={`/categoria/${c.slug}`} className="hover:text-brand">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest mb-3 text-muted">
            Mais
          </div>
          <ul className="space-y-2 text-[13px]">
            {categories.slice(4).map((c) => (
              <li key={c.slug}>
                <Link href={`/categoria/${c.slug}`} className="hover:text-brand">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest mb-3 text-muted">
            Sobre
          </div>
          <ul className="space-y-2 text-[13px] text-muted">
            <li>Quem Somos</li>
            <li>Contactos</li>
            <li>Política de Privacidade</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 px-5 md:px-8 py-4 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-muted font-sans">
        <span>© {new Date().getFullYear()} Blogue Notícia. Todos os direitos reservados.</span>
        <span>Feito com Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
