import type { CSSProperties } from "react";
﻿import { servicePartners } from "../data/services";
import { asset } from "../lib/assets";

type Partner = { name: string; image: string };

type PartnerLogoMarqueeProps = {
  label: string;
  partners?: readonly Partner[];
};

export function PartnerLogoMarquee({ label, partners = servicePartners }: PartnerLogoMarqueeProps) {
  if (!partners.length) return null;
  const midpoint = Math.ceil(partners.length / 2);
  // Fill both rows even when the selected developer list contains fewer than four logos.
  const rows = partners.length <= 4
    ? [0, 1].map(row => Array.from({ length: Math.ceil(4 / partners.length) * partners.length }, (_, index) => partners[(index + row * midpoint) % partners.length]))
    : [partners.slice(0, midpoint), partners.slice(midpoint)];

  return <div className="partner-marquee" role="group" aria-label={label}>
    {rows.map((partners, row) => (
      <div className="partner-marquee__row" key={row} style={{ "--logo-count": partners.length, "--logo-duration": `${partners.length * 7}s` } as CSSProperties}>
        <div className="partner-marquee__track">
          {[0, 1, 2].map((copy) => (
            <ul className="partner-marquee__set" key={copy} aria-label={copy === 0 ? `${label}, row ${row + 1}` : undefined} aria-hidden={copy > 0 ? true : undefined}>
              {partners.map((partner, index) => (
                <li key={`${partner.name}-${index}`}>
                  <img src={asset(partner.image)} alt={copy === 0 ? partner.name : ""} loading="lazy" width={240} height={100} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    ))}
  </div>;
}
