"use client";

import { useState } from "react";
import { workspaceBenefits, workspaceOptions, type CoworkingInquiry } from "../data/coworking";
import { asset } from "../lib/assets";
import { SiteHeader } from "./SiteHeader";
import { CoworkingDialog } from "./CoworkingDialog";
import { WorkspaceBenefitIcon } from "./WorkspaceBenefitIcon";

export function CoworkingContent() {
  const [inquiry, setInquiry] = useState<CoworkingInquiry | null>(null);

  return <>
    <section className="coworking-hero" id="top">
      <img className="coworking-hero__image" src={asset("coworking-hero.png")} alt="" fetchPriority="high" />
      <SiteHeader />
      <div className="coworking-container coworking-hero__content">
        <span className="coworking-eyebrow">Co-working Spaces</span>
        <h1>Coworking Spaces for Every Industry</h1>
        <p>Flexible workspaces are reshaping how Ahmedabad’s businesses operate, offering<br className="coworking-desktop-break" /> agility, scalability and operational efficiency across every stage of growth.</p>
        <button type="button" className="coworking-button" onClick={() => setInquiry({ mode: "requirement", service: "Co-working Spaces" })}>Book a Tour <span aria-hidden="true">→</span></button>
      </div>
    </section>

    <section className="coworking-options" id="workspaces" aria-labelledby="coworking-options-title">
      <div className="coworking-container">
        <h2 id="coworking-options-title">Workspace for <span>Every Need</span></h2>
        <div className="coworking-card-grid">
          {workspaceOptions.map((workspace) => <article className="coworking-workspace" key={workspace.id}>
            <img className="coworking-workspace__image" src={asset(workspace.image)} alt={workspace.alt} width={520} height={263} loading="lazy" />
            <div className="coworking-workspace__body">
              <span className="coworking-workspace__number" aria-hidden="true">{workspace.id}</span>
              <span className="coworking-workspace__tag">{workspace.tag}</span>
              <h3>{workspace.title}</h3><p>{workspace.text}</p>
            </div>
            <button className="coworking-workspace__trigger" type="button" aria-label={`Share your requirement for ${workspace.title}`} onClick={() => setInquiry({ mode: "requirement", service: workspace.title })} />
          </article>)}
        </div>
      </div>
    </section>

    <section className="coworking-essentials" aria-labelledby="coworking-essentials-title">
      <div className="coworking-container">
        <div className="coworking-heading"><h2 id="coworking-essentials-title">Come to work.<br /><span>We’ll handle the rest.</span></h2><p>Thoughtfully managed spaces with the infrastructure and everyday essentials your team needs to stay productive.</p></div>
        <div className="coworking-essentials__grid">
          {workspaceBenefits.map((benefit) => <article className="coworking-essential" key={benefit.title}><div className="coworking-essential__heading"><WorkspaceBenefitIcon name={benefit.icon} /><h3>{benefit.title}</h3></div><p>{benefit.text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="coworking-listing" id="list-your-property" aria-labelledby="coworking-listing-title">
      <div className="coworking-container">
        <span className="coworking-eyebrow">List Your Property</span>
        <h2 id="coworking-listing-title">Your property deserves more than a listing.<br /><span>It deserves the Right Advisory.</span></h2>
        <p>Share your property details, location, availability, and leasing preferences. Our<br className="coworking-desktop-break" /> team will connect you with suitable businesses looking for the right space.</p>
        <button type="button" className="coworking-button" onClick={() => setInquiry({ mode: "listing" })}>Submit Property Details <span aria-hidden="true">→</span></button>
      </div>
    </section>
    {inquiry && <CoworkingDialog inquiry={inquiry} onClose={() => setInquiry(null)} />}
  </>;
}
