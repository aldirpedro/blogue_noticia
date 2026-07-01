import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { categories, getArticlesByCategory, getCategoryBySlug } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.name);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
        <h1 className="font-serif text-3xl font-black mb-1">{category.name}</h1>
        <p className="text-muted text-sm mb-6">
          {articles.length} {articles.length === 1 ? "notícia" : "notícias"}
        </p>

        {articles.length === 0 ? (
          <p className="text-muted">Sem notícias nesta categoria de momento.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
