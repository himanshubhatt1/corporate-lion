import { advisoryPractice, footerNavigation, legalLinks } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <p>
            Corporate Lion is a premier corporate real estate advisory firm delivering strategic consulting,
            asset monetization, and tenant representation for India&apos;s most discerning enterprises and investors.
          </p>
          <div className="footer__socials" aria-label="Social profiles">
            <span title="LinkedIn" aria-label="LinkedIn">in</span>
            <span title="Instagram" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" /></svg></span>
            <span title="YouTube" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3" /><path d="m10 9 5 3-5 3Z" /></svg></span>
            <span aria-hidden="true" />
          </div>
        </div>
        <div>
          <h3>Navigation</h3>
          {footerNavigation.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Advisory Practice</h3>
          {advisoryPractice.map((item) => (
            <a href="/our-services" key={item}>
              {item}
            </a>
          ))}
        </div>
        <div>
          <h3>Stay Ahead of the Market</h3>
          <p>Subscribe to our quarterly intelligence briefing on commercial absorption rates and valuation shifts.</p>
          <div className="subscribe">
            <input type="email" aria-label="Corporate email for market updates" placeholder="Enter corporate email" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>Corporate Lion is a premier corporate real estate advisory firm delivering strategic consulting.</p>
        <div className="footer__legal">
          {legalLinks.map((item) => (
            <span key={item}>{item}</span>
          ))}
          <a href="/">Sitemap</a>
        </div>
      </div>
      <a className="site-whatsapp" href="https://wa.me/919820000000" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 7.5c-2 1 0 6 4 7.5 2 .7 3-.5 2-2l-2-.8-.9 1c-1.4-.7-2.4-1.7-3-3l.9-.7Z" /></svg>
      </a>
    </footer>
  );
}
