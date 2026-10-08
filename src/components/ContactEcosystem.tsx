import { asset } from "../lib/assets";

export function ContactEcosystem() {
  return (
    <div className="contact-network">
      <div className="contact-network__business"><h3>Businesses</h3><p>Businesses, brands and corporates seeking strategic real estate solutions to expand their presence, optimize occupancy costs and support long-term growth.</p></div>
      <div className="contact-network__diagram" aria-hidden="true">
        <svg viewBox="0 0 900 900" fill="none"><circle cx="450" cy="450" r="429" stroke="#cc9664" strokeWidth="1.5" /><g stroke="#b87333" strokeWidth="54"><path d="M211 315a276 276 0 0 1 478 0" /><path d="M696 325a276 276 0 0 1-233 401" /><path d="M437 726a276 276 0 0 1-233-401" /></g><g fill="#b87333"><path d="m426 125 24-28 24 28z" /><path d="m741 608 10 35-34 7z" /><path d="m159 608-10 35 34 7z" /></g></svg>
        <img className="contact-network__logo" src={asset("newlogo-e1769688001953-Photoroom 1.svg")} alt="" />
        <span className="contact-network__node contact-network__node--business"><img src={asset("business.svg")} alt="" /></span>
        <span className="contact-network__node contact-network__node--landowners"><img src={asset("landowners.svg")} alt="" /></span>
        <span className="contact-network__node contact-network__node--developers"><img src={asset("developers.svg")} alt="" /></span>
      </div>
      <div className="contact-network__landowners"><h3>Landowners</h3><p>Private landowners seeking to maximize the land value through strategic partnerships or exits.</p></div>
      <div className="contact-network__developers"><h3>Developers</h3><p>Developers and builders seeking strategic land, project advisory, and efficient capital deployment.</p></div>
    </div>
  );
}
