import { asset } from "../../lib/assets";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import {
  featuredVideos,
  insightCategories,
  trendCards
} from "../../data/insights";

export default function InsightsPage() {
  return (
    <main className="insights-page">
      <div className="insights-shell">
        <section className="insights-hero" id="top">
          <img
            className="insights-hero__image"
            src={asset("insights-hero-compass.png")}
            alt=""
          />
          <SiteHeader tone="light" />

          <div className="insights-hero__content" data-reveal="left">
            <span className="insights-eyebrow">Research &amp; Perspectives</span>
            <h1>Intelligence for a market in motion.</h1>
            <p>
              Timely news, grounded analysis, and practical perspectives for leaders navigating
              India&apos;s real estate landscape.
            </p>
          </div>
        </section>

        <section className="insights-categories" aria-label="Insight categories">
          {insightCategories.map((item, index) => (
            <a href="#market-news" data-reveal="up" style={{ transitionDelay: `${index * 55}ms` }} key={item}>
              <span />
              {item}
            </a>
          ))}
        </section>

        <section className="market-news" id="market-news">
          <div className="insights-container">
            <div className="insights-title insights-title--light" data-reveal="up">
              <span>Market News &amp; Trends</span>
              <h2>What is shaping real estate now.</h2>
              <p>
                Editorial perspectives on demand, infrastructure, occupier behaviour, yields, and
                the corridors drawing tomorrow&apos;s capital.
              </p>
            </div>

            <article className="lead-story" data-reveal="image">
              <img src={asset("a.featured-story.svg")} alt="City skyline reflected from a suspension bridge" />
              <div>
                <span>Commercial Real Estate Featured</span>
                <h3>
                  India&apos;s next office cycle: why quality, flexibility, and talent access are
                  defining demand
                </h3>
                <a href="#guides">Continue Read: Corporate Lion Research</a>
              </div>
            </article>

            <div className="trend-grid">
              {trendCards.map((card, index) => (
                <article
                  className="trend-card"
                  data-reveal="card"
                  style={{ transitionDelay: `${index * 90}ms` }}
                  key={card.title}
                >
                  <img src={asset(card.image)} alt="" />
                  <div>
                    <span>{card.tag}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <a href="#guides">Read Perspective</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="property-guides" id="guides">
          <div className="insights-container">
            <div className="guide-heading">
              <div data-reveal="left">
                <span className="insights-eyebrow">Property Knowledge</span>
                <h2>
                  Guides for better
                  <em>decisions.</em>
                </h2>
              </div>
              <p data-reveal="right">
                Search-friendly, practical explainers created for occupiers, investors, developers,
                and property owners.
              </p>
            </div>

            <article className="guide-banner" data-reveal="panel">
              <div>
                <span>Featured Decision Guide</span>
                <h3>
                  Build conviction before
                  <br />
                  you commit capital.
                </h3>
                <div className="guide-banner__actions">
                  <a href="#newsletter">Enquire Now</a>
                  <a href="#videos">Watch Briefing</a>
                </div>
              </div>
              <img src={asset("div.knowledge-visual.svg")} alt="Grade A office towers" />
            </article>

            <div className="video-heading" id="videos" data-reveal="up">
              <span>Featured Videos</span>
              <h2>
                Watch. Explore. <em>Discover.</em>
              </h2>
            </div>

            <div className="featured-video-grid">
              {featuredVideos.map((video, index) => (
                <article
                  className="featured-video"
                  data-reveal="image"
                  style={{ transitionDelay: `${index * 90}ms` }}
                  key={video.title}
                >
                  <img src={asset(video.image)} alt="" />
                  <button type="button" aria-label={`Play ${video.title}`}>
                    <span />
                  </button>
                  <div>
                    <span>{video.tag}</span>
                    <h3>{video.title}</h3>
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
              <img src={asset("Watch The 5% Rule video on YouTube.svg")} alt="The Property Trap video cover" />
            </div>
            <div className="video-intelligence__copy" data-reveal="right">
              <span className="insights-eyebrow">Video Intelligence</span>
              <h2>Ideas worth watching.</h2>
              <p>
                Conversations and explainers that bring investment thinking, property strategy, and
                market dynamics into sharper focus.
              </p>
              <a href="#videos">Open Video Hub</a>
            </div>
          </div>
        </section>

        <section className="newsletter-section" id="newsletter">
          <div className="newsletter-orbits" aria-hidden="true" />
          <div className="insights-container newsletter-section__inner" data-reveal="up">
            <span className="insights-eyebrow">Coming Soon</span>
            <small>Corporate Lion Intelligence</small>
            <h2>
              Perspective, delivered with
              <em>purpose.</em>
            </h2>
            <p>
              A considered briefing of market shifts, investment signals, new research, and selected
              opportunities without the noise.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your corporate email" aria-label="Corporate email" />
              <button type="button">Notify Me</button>
            </form>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
