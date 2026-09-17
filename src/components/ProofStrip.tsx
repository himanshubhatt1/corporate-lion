const proofPoints = [
  {
    label: "Grade-A Offices",
    icon: "M3 21V3h12v6h6v12h-8v-4h-2v4ZM6 6v2h2V6Zm4 0v2h2V6ZM6 10v2h2v-2Zm4 0v2h2v-2Zm-4 4v2h2v-2Zm4 0v2h2v-2Zm7-2v2h2v-2Zm0 4v2h2v-2Z"
  },
  {
    label: "Tenant Representation",
    icon: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7.5 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM1 21v-1c0-3.6 3.6-6 8-6s8 2.4 8 6v1Zm17.6 0v-1c0-1.9-.7-3.6-2-4.8 3.4.4 6.4 2.1 6.4 4.8v1Z"
  },
  {
    label: "Commercial Negotiation",
    icon: "M5 2h9l6 6v14H5Zm8 1.5V9h5.5ZM8 12h9v1.6H8Zm0 3.4h9V17H8Zm0 3.4h6v1.6H8Z"
  },
  {
    label: "End-to-End Execution",
    icon: "M15 2a7 7 0 0 0-6.7 9.1L2 17.4V22h4.6v-2.5h2.5V17h2.5l1.3-1.3A7 7 0 1 0 15 2Zm1.8 3.2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
  }
];

type ProofStripProps = {
  label?: string;
};

/** Service highlights strip shown under the commercial leasing and co-working heroes. */
export function ProofStrip({ label = "Service highlights" }: ProofStripProps) {
  return (
    <section className="proof-strip" aria-label={label}>
      <div className="proof-strip__grid">
        {proofPoints.map((item, index) => (
          <div className="proof-strip__item" data-reveal="up" style={{ transitionDelay: `${index * 90}ms` }} key={item.label}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d={item.icon} />
            </svg>
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
