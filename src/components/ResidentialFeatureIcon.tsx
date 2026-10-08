import type { ResidentialFeatureIcon as IconName } from "../data/residential";

export function ResidentialFeatureIcon({ name }: { name: IconName }) {
  return <svg viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
    {name === "building" && <><path d="M3 24h22v2H3zM6 5l11-2v21H6zM18 12l6 2v10h-6z" /><path d="M10 8h2v3h-2zm0 5h2v3h-2zm0 5h2v6h-2zm10-2h2v3h-2z" fill="#fff" /></>}
    {name === "garden" && <><path d="M5 16h18l-3 10H8zM13 16V2h2v14zM13 10C6 10 5 6 5 3c6 0 9 3 9 7M15 13c6 0 8-4 8-8-6 0-9 4-9 8M12 15C5 15 2 12 2 8c6 0 10 2 10 7" /></>}
    {name === "escape" && <><path d="M14 25 3 14C-4 4 8-3 14 5c6-8 18-1 11 9Z" /><path d="M5 13h5l2-4 3 9 2-5h6" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></>}
    {name === "celebrate" && <><path d="m5 2 7 2-2 10c-.5 2-2 3-4 2s-3-2-2-4zm13 2 7-2 1 10c1 2-1 4-3 4s-4-1-4-3zM5 16l2 .5-2 8 4 1-.5 2L0 25l.5-2 3 1zm17 0 2-.5 2 8 2-.5V25l-8 2-.5-2 4-1z" /><path d="m13 1 1 3m2-3-1 3" stroke="currentColor" /></>}
  </svg>;
}
