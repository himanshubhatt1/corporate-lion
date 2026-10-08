import type { Metadata } from "next";
import { ProjectCollection } from "../../components/ProjectCollection";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { asset } from "../../lib/assets";

export const metadata: Metadata = {
  title: "Projects | Corporate Lion",
  description: "Explore Corporate Lion’s curated residential, commercial, industrial, and Special Economic Zone opportunities. Connect with our team about your next property.",
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <img className="projects-hero__image" src={asset("projects/hero.webp")} alt="" fetchPriority="high" />
        <SiteHeader />
        <div className="projects-container projects-hero__content">
          <h1>Opportunities worth Exploring</h1>
          <p>Discover properties across emerging and established markets with the potential to create long-term value.</p>
          <a className="projects-button" href="#project-inventory">Explore Inventory <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <section className="project-masterpiece" aria-labelledby="project-masterpiece-title">
        <div className="project-masterpiece__content">
          <span className="projects-eyebrow">The Collection</span>
          <h2 id="project-masterpiece-title">The <span>Masterpiece</span></h2>
          <p>Land is one of the few assets that stand the test of time. It doesn’t wear out, fade, or depreciate. With limited supply and rising demand, land doesn’t just hold its worth, but also grows it.</p>
          <p>Whether looking to invest in an asset for the future, create generational wealth, or just get something real to call your own, land ownership is where it all begins.</p>
        </div>
        <img src={asset("Land Valuation.svg")} alt="Golden fields at sunset" width={625} height={480} loading="lazy" />
      </section>
      <ProjectCollection />
      <SiteFooter />
    </main>
  );
}
