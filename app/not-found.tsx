import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 py-24 text-center">
      <h1 className="font-serif text-6xl font-black text-brand mb-4">404</h1>
      <p className="text-lg mb-6">Não encontrámos esta notícia.</p>
      <Link
        href="/"
        className="bg-ink text-white px-5 py-2.5 rounded text-sm font-bold uppercase tracking-widest"
      >
        Voltar à Capa
      </Link>
    </div>
  );
}
