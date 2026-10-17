import { servicePartners } from "../data/services";
import { asset } from "../lib/assets";

export function PartnerLogoMarquee({ label }: { label: string }) {
  const midpoint = Math.ceil(servicePartners.length / 2);
  const rows = [servicePartners.slice(0, midpoint), servicePartners.slice(midpoint)];

  return <div className="partner-marquee" role="group" aria-label={label}>
    {rows.map((partners, row) => (
      <div className="partner-marquee__row" key={row}>
        <div className="partner-marquee__track">
          {[0, 1, 2].map((copy) => (
            <ul className="partner-marquee__set" key={copy} aria-label={copy === 0 ? `${label}, row ${row + 1}` : undefined} aria-hidden={copy > 0 ? true : undefined}>
              {partners.map((partner) => (
                <li key={partner.name}>
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
