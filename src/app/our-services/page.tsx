import type { Metadata } from "next";
import { SegmentStack } from "../../components/SegmentStack";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { benefitCards } from "../../data/services";
import { asset } from "../../lib/assets";

export const metadata: Metadata = {
  title: "Our Services | Corporate Lion",
  description:
    "Luxury residential, industrial, SEZ and commercial properties designed around location, quality and long-term value."
};

export default function OurServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero" id="top">
        <img className="services-hero__image" src={asset("da1c390093512c8aeb2f507352d412551c65835b.png")} alt="" />
        <SiteHeader tone="dark" />

        <div className="services-hero__content">
          <span className="eyebrow">Our Services</span>
          <h1>
            Spaces Designed
            <br />
            for Every Ambition
          </h1>
          <p>
            From refined residences to strategic business destinations, we create opportunities
            across real estate spectrum.
          </p>
          <div className="services-hero__actions">
            <a className="button button--primary" href="#service-segments">
              Our Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="services-intro" id="about-us">
        <div className="services-container services-intro__grid">
          <div className="services-title services-title--left" data-reveal="left">
            <h2>
              One vision.
              <br />
              <em>Four possibilities.</em>
            </h2>
          </div>
          <div className="services-intro__content" data-reveal="right">
            <p>
              Whether you are looking for a sophisticated home, a strategic commercial address, an
              industrial opportunity or a business-ready Special Economic Zone, our portfolio is
              designed around location, quality and long-term value.
            </p>
            <div className="services-stats" aria-label="Service summary">
              <div>
                <strong data-count="4" aria-label="4">4</strong>
                <span>Property Segments</span>
              </div>
              <div>
                <strong data-count="1" aria-label="1">1</strong>
                <span>Integrated Vision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relationship-section" id="service-segments">
        <div className="services-container">
          <div className="services-title" data-reveal="up">
            <span className="eyebrow">Synergistic Growth</span>
            <h2>
              Spaces that reflect
              <br />
              <em>Relationships</em>
            </h2>
            <p>
              Discover curated luxury residences, sky-high apartments, iconic penthouses, elegant
              bungalows, weekend villas, and premium plots crafted for those who seek exceptional
              living, timeless design, and lasting value.
            </p>
          </div>
        </div>
        <SegmentStack />
      </section>

      <section className="possibilities-section">
        <div className="services-container">
          <div className="services-title" data-reveal="up">
            <span className="eyebrow">More Than Property</span>
            <h2>
              We create
              <br />
              <em>possibilities.</em>
            </h2>
          </div>

          <div className="benefit-grid">
            {benefitCards.map((card, index) => (
              <article
                className="benefit-card"
                data-reveal="card"
                style={{ transitionDelay: `${index * 100}ms` }}
                key={card.title}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="benefit-card__image">
                  <img src={asset(card.image)} alt="" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="property-cta" id="projects">
        <div className="services-container services-title" data-reveal="up">
          <span className="eyebrow">List Your Property</span>
          <h2>
            Your property deserves more than a listing.{" "}
            <br />
            <em>It deserves the right tenant.</em>
          </h2>
          <p>
            Share your property details, location, availability, and leasing preferences. Our team
            will connect you with suitable businesses looking for the right space.
          </p>
          <a className="button button--primary" href="/contact">
            Submit Property Details <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
