import Link from "next/link";
import { categories } from "@/lib/data";

export function CategoryNav({ active }: { active?: string }) {
  return (
    <nav className="bg-paper border-b border-black/10 px-5 md:px-8 flex gap-0 overflow-x-auto font-sans">
      <Link
        href="/"
        className={`px-3.5 py-2.5 text-[11px] font-bold tracking-wider uppercase whitespace-nowrap border-b-[3px] ${
          !active
            ? "text-ink border-brand"
            : "text-muted border-transparent hover:text-ink"
        }`}
      >
        Todas
      </Link>
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/categoria/${c.slug}`}
          className={`px-3.5 py-2.5 text-[11px] font-bold tracking-wider uppercase whitespace-nowrap border-b-[3px] ${
            active === c.slug
              ? "text-ink border-brand"
              : "text-muted border-transparent hover:text-ink"
          }`}
        >
          {c.name}
        </Link>
      ))}
    </nav>
  );
}
