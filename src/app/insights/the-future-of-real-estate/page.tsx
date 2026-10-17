import type { Metadata } from "next";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { featuredBlog } from "../../../data/blog";
import { asset } from "../../../lib/assets";
import "../../blog-detail.css";

export const metadata: Metadata = {
  title: `${featuredBlog.title} | Corporate Lion`,
  description: featuredBlog.summary,
  openGraph: { title: featuredBlog.title, description: featuredBlog.summary, type: "article" },
};

const emergingDestinations = "As established cities become more crowded and expensive, emerging urban centres are attracting attention from homebuyers, businesses, and investors. These destinations may offer opportunities for residential, commercial, and industrial development, depending on their infrastructure, economic activity, and planning. However, growth is not guaranteed. Investors should evaluate development timelines, local demand, legal approvals, and the credibility of the project before making a decision.";

export default function BlogDetailPage() {
  return <main className="blog-detail-page">
    <section className="blog-hero" aria-labelledby="blog-hero-title">
      <img className="blog-hero__image" src={asset("blog/hero.webp")} alt="" fetchPriority="high" />
      <SiteHeader />
      <div className="blog-container blog-hero__content">
        <span className="blog-eyebrow">Our Videos</span>
        <h2 id="blog-hero-title">Insights, Stories<br />and Opportunities</h2>
        <p>Explore our video library for project tours, market insights, client stories and the latest opportunities in real estate.</p>
      </div>
    </section>

    <article className="blog-article" aria-labelledby="blog-title">
      <div className="blog-container">
        <header className="blog-article__header">
          <h1 id="blog-title">{featuredBlog.title}</h1>
          <p className="blog-article__byline">By {featuredBlog.author} <span aria-hidden="true">·</span> <span>{featuredBlog.readingTime}</span></p>
        </header>
        <img className="blog-article__cover" src={asset(featuredBlog.image)} alt={featuredBlog.imageAlt} width={1320} height={709} />

        <div className="blog-article__body">
          <section aria-labelledby="blog-introduction">
            <h2 id="blog-introduction" className="blog-article__introduction">Introduction</h2>
            <p>Real estate has always been more than just buying land or owning a property. It is about securing your future, building long-term wealth, and finding opportunities in places where growth is just beginning.</p>
            <p>As cities expand and infrastructure develops, choosing the right location has become one of the most important factors in making a real estate investment. From emerging business districts to well-connected residential communities, the right location can shape the value and potential of a property over time.</p>
          </section>

          <section aria-labelledby="blog-location">
            <h2 id="blog-location">1. Location: The Foundation of Every Smart Investment</h2>
            <p>When it comes to real estate, location plays a crucial role in determining a property’s accessibility, demand, and long-term potential.<br />Areas with strong infrastructure, reliable transportation, educational institutions, healthcare facilities, and commercial hubs often attract homebuyers and businesses.</p>
            <p className="blog-article__list-label"><strong>Before investing, consider:</strong></p>
            <ul className="blog-article__checklist">
              <li>Connectivity to major roads, highways, and public transport.</li>
              <li>Proximity to employment hubs and business districts.</li>
              <li>Availability of essential services and social infrastructure.</li>
              <li>Planned infrastructure projects and future development.</li>
            </ul>
          </section>

          <section aria-labelledby="blog-emerging">
            <h2 id="blog-emerging">2. The Rise of Emerging Real Estate Destinations</h2>
            <p>{emergingDestinations}</p>
          </section>

          <div className="blog-article__split">
            <div>
              <section aria-labelledby="blog-emerging-detail">
                <h2 id="blog-emerging-detail">2. The Rise of Emerging Real Estate Destinations</h2>
                <p>{emergingDestinations}</p>
              </section>
              <section aria-labelledby="blog-infrastructure">
                <h2 id="blog-infrastructure">3. Infrastructure: A Catalyst for Growth</h2>
                <p>Infrastructure can influence how a location develops and how attractive it becomes to residents and businesses. Major roads, airports, metro networks, industrial corridors, and commercial centres can improve connectivity and support economic activity.</p>
                <p>When evaluating a property, look beyond announcements. Check whether infrastructure projects are approved, under construction, or already operational.</p>
              </section>
            </div>
            <img src={asset("blog/emerging-destinations.webp")} alt="Residential neighbourhood beside a lake and mountains at sunset" width={578} height={562} loading="lazy" />
          </div>

          <section aria-labelledby="blog-property-types">
            <h2 id="blog-property-types">4. Residential vs. Commercial Real Estate</h2>
            <p>Both residential and commercial properties can serve different investment goals. Residential real estate may provide rental income and long-term ownership opportunities, depending on location, property quality, and tenant demand. Commercial real estate includes offices, retail spaces, and other business properties. Returns depend on factors such as occupancy, lease terms, operating expenses, and business activity.<br />The right choice depends on your budget, risk tolerance, investment horizon, and financial objectives.</p>
          </section>
        </div>
      </div>
    </article>
    <SiteFooter />
  </main>;
}
