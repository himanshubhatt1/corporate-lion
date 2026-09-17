import { SectionTitle } from "../components/SectionTitle";
import { HomeSezModal } from "../components/HomeSezModal";
import { EcosystemDiagram } from "../components/EcosystemDiagram";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { AdvisoryContact } from "../components/AdvisoryContact";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { asset } from "../lib/assets";
import {
  insights,
  metrics,
  serviceCards,
  stakeholders,
  videos
} from "../data/home";

function countParts(value: string) {
  const [, number = "0", suffix = ""] = value.match(/^([\d.]+)(.*)$/) ?? [];
  return { count: number, suffix, decimals: number.split(".")[1]?.length ?? 0 };
}

export default function Home() {
  return (
    <main className="home-page" id="top">
      <HomeSezModal />
      <section
        className="hero"
      >
        <SiteHeader tone="dark" />

        <div className="hero__content">
          <span className="eyebrow eyebrow--light">Prime Commercial Advisory</span>
          <h1>The Right Address Starts<br />with the Right Advisor</h1>
          <p>
            Corporate Lion connects businesses, investors, landowners and developers through
            strategic real estate solutions, market intelligence and meaningful relationships.
          </p>
          <a className="button button--primary" href="#contact">
            Let&apos;s Connect <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="overview section-band pattern-corner" id="home">
        <span className="overview__pattern overview__pattern--left" aria-hidden="true" />
        <span className="overview__pattern overview__pattern--bottom" aria-hidden="true" />
        <span className="overview__pattern overview__pattern--right" aria-hidden="true" />
        <div className="container overview__grid">
          <div className="overview__copy">
            <SectionTitle
              eyebrow="Strategic Overview"
              title="Property. Partnership. Progress."
              accent="Progress."
              align="left"
            >
              Every landmark investment, successful expansion, and long-term partnership begins
              with the right strategy. Whether you&apos;re expanding, investing, or establishing a new
              presence, Corporate Lion helps you move forward with confidence, clarity, and the right opportunities.
            </SectionTitle>
          </div>
          <div className="overview__media" data-reveal="image-stack">
            <img className="overview__main" src={asset("Rectangle 30.svg")} alt="Modern commercial facade" />
            <img className="overview__float" src={asset("Rectangle 31.svg")} alt="Premium villa property" />
            <div className="experience-card" data-reveal="scale">
              <strong>15+</strong>
              <span>Years of Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-band section-band--white" id="our-services">
        <div className="container">
          <SectionTitle
            eyebrow="Synergistic Growth"
            title="Spaces that reflect Relationships"
            accent="Relationships"
          >
            Discover curated luxury residences, sky-high apartments, iconic penthouses, elegant
            bungalows, weekend villas, and premium plots crafted for those who seek exceptional
            living, timeless design, and lasting value.
          </SectionTitle>

          <div className="service-grid">
            {serviceCards.map((card, index) => (
              <article
                className="service-card"
                data-reveal="card"
                style={{ transitionDelay: `${index * 80}ms` }}
                key={card.title}
              >
                <img src={asset(card.image)} alt="" />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="center-action" data-reveal="up">
            <a className="button button--secondary" href="#commercial-leasing">
              Explore Luxury Living <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="metrics section-band">
        <div className="container metrics__inner">
          <div className="section-title" data-reveal="up">
            <span className="eyebrow">Proven Excellence</span>
            <h2>Built on Trust<br />Measured by Results</h2>
          </div>
          <div className="metric-panel" data-reveal="panel">
            {metrics.map((metric, index) => {
              const { count, suffix, decimals } = countParts(metric.value);
              return (
              <div className="metric" data-reveal="scale" style={{ transitionDelay: `${index * 110}ms` }} key={metric.label}>
                <img src={asset(metric.icon)} alt="" />
                <strong data-count={count} data-suffix={suffix} data-decimals={decimals} aria-label={metric.value}>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ecosystem section-band pattern-corner" id="co-working">
        <div className="container ecosystem__grid">
          <SectionTitle
            eyebrow="Synergistic Growth"
            title="An Ecosystem Built on Relationships"
            accent="Relationships"
            align="left"
          >
            A great workspace should make business easier. From finding the right location to
            managing everyday essentials, we help you work without the usual office overheads.
          </SectionTitle>

          <div className="ecosystem__map" data-reveal="up">
            <div className="ecosystem__visual" data-reveal="scale">
              <EcosystemDiagram />
            </div>
            {stakeholders.map((item, index) => (
              <article
                className={`stakeholder stakeholder--${index + 1}`}
                tabIndex={0}
                data-reveal="left"
                style={{ transitionDelay: `${index * 100}ms` }}
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials section-band section-band--white pattern-field">
        <div className="container">
          <SectionTitle eyebrow="Clients Endorsements" title="What our Client Says" accent="Client Says">
            Hear from businesses and investors who have partnered with Corporate Lion.
          </SectionTitle>

          <TestimonialSlider />

          <div className="center-action" data-reveal="up">
            <a className="button button--secondary" href="#reviews">
              <span aria-hidden="true">G</span> View All Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="stories section-band section-band--white pattern-field">
        <div className="container">
          <SectionTitle eyebrow="Video Endorsements" title="Stories From Our Clients" />

          <div className="video-grid">
            {videos.map((video, index) => (
              <article className="video-card" data-reveal="image" style={{ transitionDelay: `${index * 90}ms` }} key={video.title}>
                <img src={asset(video.image)} alt={video.title} />
                <button aria-label={`Play ${video.title}`}>
                  <span />
                </button>
                <div className="video-card__caption">
                  <span>{video.client}</span>
                  <h3>&quot;{video.title}&quot;</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="insights section-band" id="commercial-leasing">
        <div className="container insights__grid">
          <SectionTitle eyebrow="Market Intelligence" title="Insights & Perspectives" align="left" />

          <article className="featured-insight" data-reveal="image">
            <img src={asset("Office Absorption Trends 2026.svg")} alt="Office towers viewed from below" />
            <div className="featured-insight__body">
              <span className="featured-insight__badge">Market Outlook</span>
              <h3>The Flight to Quality: Why Grade-A+ ESG Office Spaces Are Dominating Absorption in 2026</h3>
              <p>
                An analysis of corporate consolidation patterns across India&apos;s Tier-1 cities, revealing how
                sustainability mandates and hybrid workflows are driving demand for premium commercial real estate.
              </p>
              <div className="featured-insight__meta">
                <time>July 18, 2026 &bull; 6 min read</time>
                <a href="/insights">
                  Read Featured Analysis <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>

          <div className="insight-list">
            {insights.map((item, index) => (
              <a className="insight-item" href="/insights" data-reveal="right" style={{ transitionDelay: `${index * 90}ms` }} key={item.title}>
                <div className="insight-item__thumb">
                  <img src={asset(item.image)} alt="" />
                </div>
                <div className="insight-item__body">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <time>{item.date} &bull; {item.readTime}</time>
                </div>
              </a>
            ))}
          </div>

          <div className="center-action insights__action" data-reveal="up">
            <a className="button button--secondary" href="#market-insights">
              Explore All Insights
            </a>
          </div>
        </div>
      </section>

      <AdvisoryContact />

      <SiteFooter />
    </main>
  );
}
