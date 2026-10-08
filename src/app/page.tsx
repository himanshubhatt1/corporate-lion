import { SectionTitle } from "../components/SectionTitle";
import { HomeSezModal } from "../components/HomeSezModal";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { AdvisoryContact } from "../components/AdvisoryContact";
import { asset } from "../lib/assets";
import {
  insights,
  metrics,
  serviceCards,
  videos
} from "../data/home";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

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
          <h1>Roar Ahead in Real Estate</h1>
          <p>Shaping Tomorrow&apos;s Addresses Since 2013</p>
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
            />
            <p>
              Every successful commercial property investment, real estate expansion, and strategic
              business partnership begins with the right strategy.
            </p>
            <p>
              Whether you&apos;re investing in commercial real estate, expanding your business, or
              establishing a new presence, Corporate Lion helps you discover the right property
              investment opportunities, real estate solutions, and strategic partnerships to support
              confident decisions, sustainable growth, and long-term success.
            </p>
          </div>
          <div className="overview__media" data-reveal="image-stack">
            <img className="overview__main" src={asset("home/overview-residences.webp")} alt="Premium residential towers surrounded by landscaped gardens" />
            <img className="overview__float" src={asset("home/overview-city.webp")} alt="Commercial towers in a city skyline" />
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
            title="Solution for Every Real Estate Ambition"
            accent="Real Estate Ambition"
          >
            Discover strategic Real Estate opportunities for investment, leasing and acquisition,
            <br className="desktop-break" /> backed by Expert Property Advisory and end-to-end Real Estate services.
          </SectionTitle>

          <div className="service-grid">
            {serviceCards.map((card) => (
              <article
                className="service-card"
                key={card.title}
              >
                <img src={asset(card.image)} alt={card.alt} loading="lazy" />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <a className="button button--secondary" href={card.href} aria-label={`Explore ${card.title}`}>
                    Explore <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="metrics section-band">
        <div className="container metrics__inner">
          <div className="section-title" data-reveal="up">
            <span className="eyebrow">Proven Excellence</span>
            <h2>Built on Trust<br /><em>Measured by Results</em></h2>
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

      <section className="testimonials section-band section-band--white pattern-field">
        <div className="container">
          <SectionTitle eyebrow="Clients Endorsements" title="What our Client Says" accent="Client Says">
            Hear from businesses and investors who have partnered with Corporate Lion.
          </SectionTitle>

          <TestimonialSlider />

          <div className="center-action" data-reveal="up">
            <a className="button button--secondary" href="https://www.google.com/maps/search/?api=1&query=Corporate+Lion+Ahmedabad" target="_blank" rel="noreferrer">
              <span aria-hidden="true">G</span> View All Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="insights section-band" id="market-insights">
        <div className="container insights__grid">
          <SectionTitle eyebrow="Market Intelligence" title="Insights & Perspectives" accent="Perspectives" align="left" />

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
            <a className="button button--secondary" href="/insights">
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
