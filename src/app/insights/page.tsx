import type { Metadata } from "next";
import { asset } from "../../lib/assets";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import {
  featuredVideos,
  trendCards
} from "../../data/insights";

export const metadata: Metadata = {
  title: "Insights & Perspectives | Corporate Lion",
  description: "Real estate market news, property perspectives, and conversations from Corporate Lion."
};

export default function InsightsPage() {
  return (
    <main className="insights-page">
        <section className="insights-hero" id="top">
          <img
            className="insights-hero__image"
            src={asset("insights/hero-office.webp")}
            alt=""
          />
          <SiteHeader tone="dark" />

          <div className="insights-hero__content" data-reveal="left">
            <span className="insights-eyebrow">Insights &amp; Perspectives</span>
            <h1>The Right Decision Begins<br />Before the <em>Right Property.</em></h1>
          </div>
        </section>

        <section className="market-news" id="market-news">
          <div className="insights-container">
            <div className="insights-title" data-reveal="up">
              <span>Market News &amp; Trends</span>
              <h2>The Market Never Stops.<br /><em>Neither Do We</em></h2>
              <p>What&apos;s Shaping Real Estate Today</p>
            </div>

            <article className="lead-story" data-reveal="image">
              <img src={asset("insights/market-skyline.webp")} alt="City skyline at sunset" />
              <div>
                <span>Commercial Real Estate · Featured</span>
                <h3>
                  India&apos;s next office cycle: why quality, flexibility, and talent access are
                  defining demand
                </h3>
              </div>
            </article>

            <div className="trend-grid">
              {trendCards.map((card) => (
                <article
                  className="trend-card"
                  key={card.id}
                >
                  <img src={asset(card.image)} alt={card.alt} loading="lazy" />
                  <div>
                    <span>{card.tag}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <a href={card.href} aria-label={`Read perspective: ${card.title}`}>Read Perspective</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="property-guides" id="guides">
          <div className="insights-container">
            <div className="video-heading" id="videos" data-reveal="up">
              <span>Featured Videos</span>
              <h2>
                Stories Built on <em>Trust</em>
              </h2>
            </div>

            <div className="featured-video-grid">
              {featuredVideos.map((video) => (
                <article
                  className="featured-video"
                  key={video.title}
                >
                  <img src={asset(video.image)} alt="" loading="lazy" />
                  <button type="button" aria-label={`Play ${video.title}`}>
                    <span />
                  </button>
                  <div>
                    <span>{video.tag}</span>
                    <h3>{video.titleLines[0]}<br />{video.titleLines[1]}</h3>
                    <p>{video.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="video-intelligence">
          <div className="insights-container video-intelligence__grid">
            <div className="podcast-card" data-reveal="image">
              <img src={asset("insights/property-trap.webp")} alt="The Property Trap — a conversation about real estate investment" loading="lazy" />
            </div>
            <div className="video-intelligence__copy" data-reveal="right">
              <span className="insights-eyebrow">Video Intelligence</span>
              <h2>Ideas worth watching.</h2>
              <p>
                Conversations and explainers that bring investment thinking, property strategy, and
                market dynamics into sharper focus.
              </p>
              <a href="/videos">Explore All Videos</a>
            </div>
          </div>
        </section>

        <section className="newsletter-section" id="newsletter">
          <div className="newsletter-orbits" aria-hidden="true" />
          <div className="insights-container newsletter-section__inner" data-reveal="up">
            <span className="insights-eyebrow">Corporate Lion Newsletter</span>
            <h2>Knowledge. Markets. Growth</h2>
            <p>
              A carefully curated edition featuring market insights, investment opportunities,
              policy updates, and perspectives shaping India&apos;s real estate future.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" aria-label="Email address for the Corporate Lion newsletter" />
              <button type="button">Notify Me</button>
            </form>
          </div>
        </section>
        <SiteFooter />
    </main>
  );
}
