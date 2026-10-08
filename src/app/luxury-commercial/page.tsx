import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { ResidentialFeatureIcon } from "../../components/ResidentialFeatureIcon";
import { commercialServices } from "../../data/commercial";
import { asset } from "../../lib/assets";
import "../residential.css";
import "../luxury-commercial.css";

export const metadata: Metadata = {
  title: "Luxury Commercial | Corporate Lion",
  description: "Explore corporate offices, retail showrooms, pre-leased investments, built-to-suit spaces, corporate house leasing and commercial plots with Corporate Lion.",
};

export default function LuxuryCommercialPage() {
  return <main className="residential-page luxury-commercial-page">
    <section className="residential-hero" aria-labelledby="commercial-title">
      <img className="residential-hero__image" src={asset("commercial/hero.webp")} alt="" fetchPriority="high" />
      <SiteHeader />
      <div className="residential-container residential-hero__content">
        <span className="residential-eyebrow">Luxury Commercial</span>
        <h1 id="commercial-title">Strategic Spaces for<br />Growing Enterprises</h1>
        <p>From the first office to the next expansion, from a high-street showroom to an income-generating asset, we approach commercial real estate through the lens of business, understanding what the space needs to achieve, not simply what it needs to contain.</p>
      </div>
    </section>
    <section className="residential-collection" id="commercial-services" aria-labelledby="commercial-collection-title">
      <div className="residential-container">
        <div className="residential-heading">
          <h2 id="commercial-collection-title">Residences, <span>Curated around you.</span></h2>
          <p>Discover exceptional apartments, penthouses, villas, and residential plots selected for their distinction, location, privacy, and long-term value.</p>
        </div>
        <div className="residential-card-list">
          {commercialServices.map((service, index) => <article className={`residential-card${index % 2 ? " residential-card--reversed" : ""}`} key={service.number} tabIndex={0} aria-labelledby={`commercial-service-${service.number}`}>
            <div className="residential-card__copy">
              <div className="residential-card__heading">
                <span className="residential-card__number" aria-hidden="true">{service.number}</span>
                <h3 id={`commercial-service-${service.number}`}>{service.title}</h3>
                <span className="residential-card__tagline">{service.tagline}</span>
              </div>
              <div className="residential-card__description">{service.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className="residential-card__footer">
                <p className="residential-card__closing">{service.closing}</p>
                <ul className="residential-card__features">{service.features.map(feature => <li key={feature.lines[0]}><ResidentialFeatureIcon name={feature.icon} /><span>{feature.lines[0]}<br />{feature.lines[1]}</span></li>)}</ul>
              </div>
            </div>
            <div className="residential-card__visual"><img src={asset(service.image)} alt={service.alt} width={484} height={640} loading="lazy" /></div>
          </article>)}
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
