import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { blogArticles, blogReadingTime, getBlogArticle } from "../../../data/blog-articles";
import { asset } from "../../../lib/assets";
import "../../blog-detail.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getBlogArticle((await params).slug);
  if (!article) notFound();
  return {
    title: `${article.title} | Corporate Lion`,
    description: article.summary,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { title: article.title, description: article.summary, type: "article" },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const article = getBlogArticle((await params).slug);
  if (!article) notFound();
  const related = blogArticles.filter(item => item.slug !== article.slug).slice(0, 3);

  return <main className="blog-detail-page">
    <section className="blog-hero" aria-labelledby="blog-hero-title">
      <img className="blog-hero__image" src={asset("blog/hero.webp")} alt="" fetchPriority="high" />
      <SiteHeader />
      <div className="blog-container blog-hero__content">
        <span className="blog-eyebrow">Insights &amp; Perspectives</span>
        <h2 id="blog-hero-title">Insights, Stories<br />and Opportunities</h2>
        <p>Ideas and perspectives on the places we live, work, and grow.</p>
      </div>
    </section>
    <article className="blog-article" aria-labelledby="blog-title">
      <div className="blog-container">
        <a className="blog-back-link" href="/insights">&larr; All Insights</a>
        <header className="blog-article__header">
          <span className="blog-article__category">{article.category}</span>
          <h1 id="blog-title">{article.title}</h1>
          <p className="blog-article__byline">By Corporate Lion Insights Team <span aria-hidden="true">&middot;</span> <span>{blogReadingTime(article)}</span></p>
        </header>
        <img className="blog-article__cover" src={asset(article.image)} alt={article.imageAlt} width={1320} height={709} />
        <div className="blog-article__body">
          <section aria-labelledby="blog-introduction">
            <h2 id="blog-introduction" className="blog-article__introduction">Introduction</h2>
            {article.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {article.sources && <p className="blog-article__sources">Further reading: {article.sources.map(source => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.title}</a>)}</p>}
          </section>
          {article.sections.map((section, index) => <section key={section.title} aria-labelledby={`blog-section-${index}`}>
            <h2 id={`blog-section-${index}`}>{index + 1}. {section.title}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {section.points && <ul className="blog-article__checklist">{section.points.map(point => <li key={point}>{point}</li>)}</ul>}
          </section>)}
        </div>
        <aside className="blog-next-steps" aria-labelledby="blog-next-title">
          <h2 id="blog-next-title">Turn perspective into a conversation.</h2>
          <p>Discuss your property requirements with our advisory team.</p>
          <a className="button button--secondary" href="/contact">Talk to an Advisor <span aria-hidden="true">&rarr;</span></a>
        </aside>
        <nav className="blog-related" aria-label="More insights">
          <h2>More Insights</h2>
          <ul>{related.map(item => <li key={item.slug}><a href={`/insights/${item.slug}`}>{item.title} <span aria-hidden="true">&rarr;</span></a></li>)}</ul>
        </nav>
      </div>
    </article>
    <SiteFooter />
  </main>;
}
