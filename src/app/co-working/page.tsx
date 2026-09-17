import type { Metadata } from "next";
import { ProofStrip } from "../../components/ProofStrip";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { amenities, benefitItems, journeySteps, workspaceOptions } from "../../data/coworking";
import { asset } from "../../lib/assets";

export const metadata: Metadata = {
  title: "Co-Working Spaces | Corporate Lion",
  description:
    "Flexible, fully equipped co-working spaces for freelancers, growing teams, and established businesses."
};

export default function CoWorkingPage() {
  return (
    <main className="coworking-page">
      <section className="coworking-hero" id="top">
        <img className="coworking-hero__image" src={asset("coworking-hero.png")} alt="" />
        <SiteHeader tone="light" />

        <div className="coworking-hero__content">
          <span className="eyebrow">Co-Working Spaces</span>
          <h1>
            A better way to work,
            <br />
            connect &amp; grow.
          </h1>
          <p>
            Flexible, fully equipped work spaces designed for freelancers, growing teams and
            established businesses ready when you are.
          </p>
          <div className="coworking-hero__actions">
            <a className="button button--primary" href="#workspaces">
              Explore Workspaces <span aria-hidden="true">→</span>
            </a>
            <a className="button button--outline" href="/contact">
              Book a Tour <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <ProofStrip label="Co-working service highlights" />

      <section className="coworking-benefits" id="about-us">
        <div className="coworking-container coworking-benefits__grid">
          <div className="coworking-title coworking-title--left" data-reveal="left">
            <span className="eyebrow">Workspace, Simplified</span>
            <h2>
              Everything you
              <br />
              need to do your
              <br />
              <em>best work.</em>
            </h2>
            <p>
              A great workspace should make business easier. From finding the right location to
              managing everyday essentials, we help you work without the usual office overheads.
            </p>
          </div>

          <div className="coworking-benefit-grid">
            {benefitItems.map((item, index) => (
              <article
                className="coworking-benefit-card"
                data-reveal="card"
                style={{ transitionDelay: `${index * 90}ms` }}
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coworking-options" id="workspaces">
        <div className="coworking-container">
          <div className="coworking-title" data-reveal="up">
            <span className="eyebrow">Workspace Options</span>
            <h2>
              One workplace.
              <br />
              <em>Many ways to work.</em>
            </h2>
          </div>

          <div className="coworking-card-grid">
            {workspaceOptions.map((item, index) => (
              <article
                className="coworking-card"
                data-reveal="card"
                style={{ transitionDelay: `${index * 90}ms` }}
                key={item.title}
              >
                <div className="coworking-card__image">
                  <img src={asset(item.image)} alt="" />
                </div>
                <div className="coworking-card__body">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coworking-journey">
        <div className="coworking-container">
          <div className="coworking-title" data-reveal="up">
            <span className="eyebrow">Your Workspace Journey</span>
            <h2>
              From search to
              <br />
              <em>settled in.</em>
            </h2>
          </div>

          <div className="coworking-timeline" data-reveal="up">
            <span className="coworking-timeline__line" aria-hidden="true" />
            <ol>
              {journeySteps.map((step, index) => (
                <li
                  className="coworking-step"
                  style={{ "--step": index } as React.CSSProperties}
                  key={step.number}
                >
                  <strong>{step.number}</strong>
                  <span>{step.tag}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="coworking-amenities">
        <div className="coworking-container coworking-amenities__grid">
          <div className="coworking-title coworking-title--left" data-reveal="left">
            <span className="eyebrow">Workspace Options</span>
            <h2>
              Come to work.
              <br />
              <em>
                We&apos;ll handle
                <br />
                the rest.
              </em>
            </h2>
            <p>
              Thoughtfully managed spaces with the infrastructure and everyday essentials your team
              needs to stay productive.
            </p>
          </div>

          <div className="coworking-amenity-grid">
            {amenities.map((item, index) => (
              <article
                className="coworking-amenity"
                data-reveal="card"
                style={{ transitionDelay: `${index * 70}ms` }}
                key={item.title}
              >
                <div className="coworking-amenity__head">
                  <img src={asset(item.icon)} alt="" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coworking-cta" id="projects">
        <div className="coworking-container coworking-title" data-reveal="up">
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
