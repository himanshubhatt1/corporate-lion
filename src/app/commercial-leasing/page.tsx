import type { Metadata } from "next";
import { ProofStrip } from "../../components/ProofStrip";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { asset } from "../../lib/assets";
import {
  advisoryItems,
  journeySteps,
  markets,
  workspaceSolutions
} from "../../data/commercialLeasing";

export const metadata: Metadata = {
  title: "Commercial Leasing | Corporate Lion",
  description:
    "Tenant-first office leasing advisory for businesses seeking a better address, stronger commercial terms, and a workplace built for growth."
};

const icons: Record<string, string> = {
  pin: "M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 4.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z",
  search: "M10.5 3a7.5 7.5 0 0 1 5.96 12.05l4.74 4.74-1.41 1.41-4.74-4.74A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z",
  chart: "M3 3h2v16h16v2H3Zm4 9h3v5H7Zm5-4h3v9h-3Zm5-4h3v13h-3Z",
  check: "M5 2h9l6 6v14H5Zm3.4 12.3 1.2-1.2 2.2 2.2 4.6-4.6 1.2 1.2-5.8 5.8Z"
};

function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d={icons[name]} />
    </svg>
  );
}

export default function CommercialLeasingPage() {
  return (
    <main className="commercial-page">
      <section className="leasing-hero" id="top">
        <img
          className="leasing-hero__image"
          src={asset("1b524214a0f13f0c8a4128c779c9047553c8ee84.jpg")}
          alt=""
        />
        <SiteHeader tone="dark" />

        <div className="leasing-hero__content">
          <span className="eyebrow">Corporate Office Leasing</span>
          <h1>
            The right workplace
            <br />
            changes what is possible.
          </h1>
          <p>
            Tenant-first office leasing advisory for businesses seeking a better address, stronger
            commercial terms, and a workplace built around their next stage of growth.
          </p>
          <div className="leasing-hero__actions">
            <a className="button button--primary" href="#office-requirement">
              Share Your Requirement <span aria-hidden="true">→</span>
            </a>
            <a className="button button--outline" href="#approach">
              Our Approach <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <aside className="project-card" aria-label="Upcoming projects">
          <span>
            Coming{" "}
            <br />
            Soon
          </span>
          <strong>02</strong>
          <small>New Projects</small>
          <a href="#projects">
            View All <span aria-hidden="true">→</span>
          </a>
        </aside>
      </section>

      <ProofStrip label="Commercial leasing services" />

      <section className="tenant-advisory" id="approach">
        <div className="leasing-container tenant-advisory__grid">
          <div className="tenant-advisory__image" data-reveal="image">
            <img src={asset("Img_ Modern corporate office interior.svg")} alt="Modern office meeting room" />
          </div>
          <div className="tenant-advisory__content">
            <div className="leasing-title leasing-title--left" data-reveal="up">
              <span className="eyebrow">Tenant-First Advisory</span>
              <h2>
                More than a
                <br />
                property search.
              </h2>
            </div>
            <div className="advisory-grid">
              {advisoryItems.map((item, index) => (
                <article data-reveal="card" style={{ transitionDelay: `${index * 100}ms` }} key={item.title}>
                  <Icon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="workspace-solutions" id="our-services">
        <div className="leasing-container">
          <div className="leasing-title" data-reveal="up">
            <span className="eyebrow">Workspace Solutions</span>
            <h2>
              Space for every
              <br />
              <em>business ambition</em>
            </h2>
          </div>

          <div className="workspace-grid">
            {workspaceSolutions.map((item, index) => (
              <article
                className="workspace-card"
                data-reveal="card"
                style={{ transitionDelay: `${index * 90}ms` }}
                key={item.title}
              >
                <div className="workspace-card__image">
                  <img src={asset(item.image)} alt="" />
                </div>
                <div className="workspace-card__body">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="leasing-journey">
        <div className="leasing-container">
          <div className="leasing-title" data-reveal="up">
            <span className="eyebrow">Leasing Journey</span>
            <h2>
              From brief to
              <br />
              <em>business-ready.</em>
            </h2>
          </div>

          <ol className="journey" data-reveal="up">
            {journeySteps.map((step, index) => (
              <li
                className={`journey-step ${index % 2 === 0 ? "journey-step--text-top" : "journey-step--text-bottom"}`}
                style={{ "--step": index } as React.CSSProperties}
                key={step.number}
              >
                <div className="journey-step__marker" aria-hidden="true">
                  <strong>{step.number}</strong>
                  <i />
                </div>
                <span className="journey-step__phase">{step.phase}</span>
                <div className="journey-step__text">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="market-coverage">
        <img className="market-coverage__map" src={asset("Group 147.svg")} alt="" />
        <div className="leasing-container market-coverage__grid">
          <div className="leasing-title leasing-title--left" data-reveal="left">
            <span className="eyebrow">Market Coverage</span>
            <h2>
              Where business
              <br />
              <em>is moving.</em>
            </h2>
            <p>Current operational depth across Gujarat, supported by an expanding national network.</p>
          </div>

          <ol className="market-list">
            {markets.map(([city, category], index) => (
              <li data-reveal="right" style={{ transitionDelay: `${index * 100}ms` }} key={city}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{city}</h3>
                <p>{category}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="leasing-cta leasing-cta--tenant" id="office-requirement">
        <div className="leasing-container leasing-title" data-reveal="up">
          <span className="eyebrow">Begin Your Search</span>
          <h2>
            The right office doesn&apos;t just house your business. <em>It helps it grow.</em>
          </h2>
          <p>
            Share your team size, preferred location, budget, and possession timeline. Our leasing
            desk will respond with a focused next step.
          </p>
          <a className="button button--primary" href="/contact">
            Submit Office Requirement <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="leasing-cta" id="projects">
        <div className="leasing-container leasing-title" data-reveal="up">
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
