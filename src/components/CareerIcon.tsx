type CareerIconName = "briefcase" | "people" | "pin" | "industry" | "network" | "growth" | "award" | "expand";

export function CareerIcon({ name }: { name: CareerIconName }) {
  const paths: Record<CareerIconName, React.ReactNode> = {
    briefcase: <><path d="M9 5V3h6v2M3 10h18M10 10v4h4v-4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M3 6h18v14H3z" /><path d="M3 11h18M10 10v4h4v-4" fill="none" stroke="var(--icon-detail, #fff8ed)" strokeWidth="1.5" /></>,
    people: <><circle cx="9" cy="7" r="4" /><circle cx="18" cy="8" r="3" /><path d="M1 21v-3a8 8 0 0 1 16 0v3zM17 13a6 6 0 0 1 6 6v2h-4v-3a10 10 0 0 0-2-5" /></>,
    pin: <><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8" /><circle cx="12" cy="10" r="2.6" fill="var(--icon-detail, #fff8ed)" /></>,
    industry: <><path d="M8 11V5l7-4 7 4v12l-6-2v-3l-8-2M1 12h4v11H1zM7 13h5l5 3v2h-6v1h8l4-2 1 3-9 4-8-3z" /><path d="M12 5v2m4-2v2m-4 1v2m4-2v2m3-5v2m0 1v2" stroke="var(--icon-detail, #fffcfa)" /></>,
    network: <><circle cx="7" cy="6" r="4" /><circle cx="18" cy="7" r="3.5" /><path d="M0 19v-2a7 7 0 0 1 12-5 6 6 0 0 0-1 9H3zM17 12a6 6 0 0 1 7 5v1h-2a5 5 0 0 0-5-6" /><path d="M16 16h-2a3 3 0 0 0 0 6h2m4-6h1a3 3 0 0 1 0 6h-1m-5-3h5" fill="none" stroke="currentColor" strokeWidth="2" /></>,
    growth: <><path d="M2 14h4v10H2zM9 10h4v14H9zM16 7h4v17h-4z" /><path d="m1 10 7-6 5 2 8-6m-5 0h5v5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></>,
    award: <><path d="m6 15-5 8 5-1 2 3 4-8 4 8 2-3 5 1-5-8" /><circle cx="12" cy="9" r="8" /><path d="m12 3 1.6 3.4 3.8.5-2.7 2.7.6 3.7-3.3-1.8-3.3 1.8.6-3.7-2.7-2.7 3.8-.5z" fill="var(--icon-detail, #fffcfa)" /></>,
    expand: <><path d="M7 23c0-10 12-10 12-20M17 23c0-10-12-10-12-20" fill="none" stroke="currentColor" strokeWidth="2.5" /><path d="m1 5 4-5 4 5zM15 5l4-5 4 5z" /></>,
  };
  return <svg viewBox="0 0 24 26" fill="currentColor" aria-hidden="true">{paths[name]}</svg>;
}
