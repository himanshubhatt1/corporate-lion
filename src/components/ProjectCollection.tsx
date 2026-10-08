"use client";

import { useEffect, useRef, useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "../data/projects";
import { asset } from "../lib/assets";
import { ProjectInquiryDialog } from "./ProjectInquiryDialog";

export function ProjectCollection() {
  const [category, setCategory] = useState<ProjectCategory>("Luxury Residential");
  const [inquiry, setInquiry] = useState<{ projectName: string } | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const filtered = projects.filter((project) => category === "All" || project.category === category);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("category");
    if (projectCategories.some(item => item === requested)) setCategory(requested as ProjectCategory);
  }, []);

  return (
    <>
      <section className="project-inventory" id="project-inventory" aria-labelledby="project-inventory-title">
        <div className="projects-container">
          <div className="project-inventory__heading">
            <span className="projects-eyebrow">Global Inventory</span>
            <h2 id="project-inventory-title">Curated <span>Landmarks</span></h2>
            <p>Explore a distinguished portfolio of landmark developments,<br />shaped by vision, design, and enduring value.</p>
          </div>
          <div className="project-tabs" role="tablist" aria-label="Project categories">
            {projectCategories.map((item, index) => <button type="button" role="tab" key={item} ref={(node) => { tabs.current[index] = node; }} id={`project-tab-${index}`} aria-selected={category === item} aria-controls="project-results" tabIndex={category === item ? 0 : -1} onClick={() => setCategory(item)} onKeyDown={(event) => {
              let next = index;
              if (event.key === "ArrowRight") next = (index + 1) % projectCategories.length;
              else if (event.key === "ArrowLeft") next = (index + projectCategories.length - 1) % projectCategories.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = projectCategories.length - 1;
              else return;
              event.preventDefault(); setCategory(projectCategories[next]); tabs.current[next]?.focus();
            }}>{item}</button>)}
          </div>
          <span className="project-sr-only" role="status">{filtered.length} {category === "All" ? "projects and collections" : category + " opportunities"}</span>
          <div id="project-results" role="tabpanel" aria-labelledby={`project-tab-${projectCategories.indexOf(category)}`} tabIndex={0}>
            <div className="project-grid" key={category}>
              {filtered.map((project) => <article className="inventory-card" key={project.id}>
                <div className="inventory-card__image">
                  <img src={asset(project.image)} alt={project.imageAlt} loading="lazy" width={520} height={263} />
                  {project.badge && <span className="inventory-card__badge">{project.badge}</span>}
                </div>
                <div className="inventory-card__body">
                  <h3><button type="button" onClick={() => setInquiry({ projectName: project.title })}>{project.title}<span aria-hidden="true">›</span></button></h3>
                  <span className="inventory-card__location"><svg viewBox="0 0 16 20" aria-hidden="true"><path d="M8 0a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" /></svg>{project.location}</span>
                  <div className="inventory-card__details"><p>{project.description}</p><span>{project.configuration}</span></div>
                  <div className="inventory-card__action"><button type="button" onClick={() => setInquiry({ projectName: project.title })} aria-label={`Request price for ${project.title}`}>Price on Request <span aria-hidden="true">→</span></button></div>
                </div>
              </article>)}
            </div>
          </div>
        </div>
      </section>
      <section className="project-advisory" aria-labelledby="project-advisory-title">
        <span className="projects-eyebrow">Private Advisory Desk</span>
        <h2 id="project-advisory-title">Let’s Shape Your <span>Next Legacy.</span></h2>
        <p>Engage directly with our institutional investment managers to review<br />off-market opportunities.</p>
        <button type="button" className="projects-button" onClick={() => setInquiry({ projectName: "" })}>Initiate Contact <span aria-hidden="true">→</span></button>
      </section>
      {inquiry && <ProjectInquiryDialog projectName={inquiry.projectName} onClose={() => setInquiry(null)} />}
    </>
  );
}
