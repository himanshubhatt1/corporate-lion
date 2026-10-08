type IconName = "capex" | "invoice" | "door" | "location" | "people" | "clock" | "business";

export function WorkspaceBenefitIcon({ name }: { name: IconName }) {
  const shapes: Record<IconName, React.ReactNode> = {
    capex: <><path d="M3 5h18v15H3zM6 8h12v9H6zM1 1l22 22" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M11 7h3v10h-3M9 10h6M9 14h6" fill="none" stroke="currentColor" strokeWidth="1.5" /></>,
    invoice: <><path d="M2 2h8v8H2zM13 2h8v8h-8zM2 13h8v8H2z" /><path d="M17 13v9m-4-4.5h8" fill="none" stroke="currentColor" strokeWidth="2" /></>,
    door: <><path d="m6 3 11-2v21H6zM18 4h3v18h-3zM2 23h22v1H2z" /><path d="M13 11v3" stroke="#fff" strokeWidth="1.5" /></>,
    location: <><path d="M12 1a9 9 0 0 0-9 9c0 6 9 14 9 14s9-8 9-14a9 9 0 0 0-9-9" /><path d="m12 4 1.5 3 3.5.5-2.5 2.5.6 3.5-3.1-1.6-3.1 1.6.6-3.5L7 7.5l3.5-.5z" fill="#fff" /></>,
    people: <><circle cx="12" cy="5" r="4" /><circle cx="4" cy="7" r="3" /><circle cx="20" cy="7" r="3" /><path d="M7 23V15a5 5 0 0 1 10 0v8zM1 12h4v10H1zM19 12h4v10h-4z" /></>,
    clock: <><circle cx="12" cy="12" r="11" /><path d="M12 5v7l4 3" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></>,
    business: <><path d="M8 4h12l3 15H10V9H8z" /><rect x="1.5" y="8" width="6" height="15" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M3 11h3M3 20h3" stroke="currentColor" strokeWidth="1.5" /></>,
  };
  return <svg viewBox="0 0 26 26" fill="currentColor" aria-hidden="true">{shapes[name]}</svg>;
}
