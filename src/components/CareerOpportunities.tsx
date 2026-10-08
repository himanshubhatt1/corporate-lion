"use client";

import { useEffect, useRef, useState } from "react";
import { careerPositions, careerTabs, type CareerPosition, type CareerTab } from "../data/careers";
import { CareerIcon } from "./CareerIcon";
import { CareerApplicationForm } from "./CareerApplicationForm";
import { asset } from "../lib/assets";

export function CareerOpportunities() {
  const [tab, setTab] = useState<CareerTab>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<CareerPosition | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const tabButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const searchTerms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = careerPositions.filter((position) => {
    const matchesTab = tab === "All" || position.department === tab;
    const text = `${position.title} ${position.department} ${position.location}`.toLowerCase();
    return matchesTab && searchTerms.every((term) => text.includes(term));
  });

  useEffect(() => {
    if (!selected) return;
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  function closePosition() { dialog.current?.close(); setSelected(null); }

  return (
    <section className="career-openings" aria-labelledby="career-openings-title">
      <div className="careers-container">
        <div className="career-openings__intro">
          <div>
            <span className="careers-eyebrow">Current Opportunities</span>
            <h2 id="career-openings-title">Find your next<br /><span>opportunity.</span></h2>
            <p>Join a team that’s shaping exceptional<br />real estate experiences.</p>
          </div>
          <div className="career-stats" aria-label="Career opportunities at a glance">
            {([{ icon: "briefcase", value: "18", label: "Open Positions" }, { icon: "people", value: "6", label: "Departments" }, { icon: "pin", value: "4", label: "Cities" }] as const).map((stat) => (
              <div className="career-stat" key={stat.label}>
                <span className="career-stat__icon"><CareerIcon name={stat.icon} /></span>
                <strong>{stat.value}</strong><span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="career-filters">
          <div className="career-tabs" role="tablist" aria-label="Filter jobs by department">
            {careerTabs.map((item, index) => (
              <button type="button" role="tab" key={item} id={`career-tab-${item.toLowerCase()}`} aria-selected={tab === item} aria-controls="career-results" tabIndex={tab === item ? 0 : -1} ref={(node) => { tabButtons.current[index] = node; }} onClick={() => setTab(item)} onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % careerTabs.length;
                else if (event.key === "ArrowLeft") next = (index + careerTabs.length - 1) % careerTabs.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = careerTabs.length - 1;
                else return;
                event.preventDefault(); setTab(careerTabs[next]); tabButtons.current[next]?.focus();
              }}>{item}</button>
            ))}
          </div>
          <label className="career-search">
            <span className="career-sr-only">Search positions, departments, or locations</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search positions,keywords" aria-controls="career-results" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
          </label>
        </div>
        <p className="career-results-count" role="status">Showing {tab === "All" && !query.trim() ? "all " : ""}{String(filtered.length).padStart(2, "0")} {filtered.length === 1 ? "position" : "positions"}</p>
        <div id="career-results" role="tabpanel" aria-labelledby={`career-tab-${tab.toLowerCase()}`} tabIndex={0}>
          <table className="career-table">
            <caption className="career-sr-only">Current opportunities at Corporate Lion</caption>
            <thead><tr><th scope="col">Job Title</th><th scope="col">Department</th><th scope="col">Location</th><th scope="col">Actions</th></tr></thead>
            <tbody key={`${tab}-${query}`}>
              {filtered.map((position) => (
                <tr key={position.id}>
                  <th scope="row"><span className="career-job-number">{position.id}</span><span>{position.title}</span></th>
                  <td data-label="Department"><span className={`career-department career-department--${position.department.toLowerCase()}`}>{position.department}</span></td>
                  <td data-label="Location"><span className="career-location"><svg viewBox="0 0 16 20" fill="none" stroke="currentColor" aria-hidden="true"><path d="M8 18S2 12 2 7a6 6 0 0 1 12 0c0 5-6 11-6 11Z" /><circle cx="8" cy="7" r="2.5" /></svg>{position.location}</span></td>
                  <td><button className="career-view" type="button" onClick={() => setSelected(position)} aria-label={`View position: ${position.title}`}>View Position <span aria-hidden="true">▸</span></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <div className="career-empty"><h3>No matching positions</h3><p>Try another department or search by job title or location.</p><button type="button" onClick={() => { setTab("All"); setQuery(""); }}>Show all positions <span aria-hidden="true">→</span></button></div>}
        </div>
      </div>
      <dialog ref={dialog} className="career-dialog" aria-labelledby="career-position-title" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) closePosition(); }}>
        {selected && <>
          <div className="career-dialog__header">
            <span>Current Opportunity</span>
            <button type="button" className="career-dialog__close" aria-label="Close position" onClick={closePosition} autoFocus>×</button>
          </div>
          <div className="career-dialog__body">
            <div className="career-dialog__image"><img src={asset("careers-popup.svg")} alt="" /></div>
            <div className="career-dialog__content">
              <h2 id="career-position-title">We are hiring<span>{selected.title}</span></h2>
              <CareerApplicationForm key={selected.id} position={selected} />
            </div>
          </div>
        </>}
      </dialog>
    </section>
  );
}
