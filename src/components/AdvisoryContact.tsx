import { contactDetails } from "../data/site";
import { ContactForm } from "./ContactForm";

const contactIcons: Record<string, React.ReactNode> = {
  pin: <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />,
  phone: <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6a1 1 0 0 0-1 .25l-2.2 2.2a15 15 0 0 1-6.6-6.6l2.2-2.2a1 1 0 0 0 .25-1A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" />,
  mail: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.2 7H3.9v.8L12 13.9l8.1-6.1V7h-.3Z" />
};

type AdvisoryContactProps = {
  id?: string;
};

/** Confidential advisory block shared by the homepage and the contact page. */
export function AdvisoryContact({ id = "contact" }: AdvisoryContactProps) {
  return (
    <section className="advisory-contact" id={id}>
      <div className="advisory-contact__grid">
        <div className="advisory-contact__copy">
          <div className="advisory-contact__title" data-reveal="up">
            <span className="advisory-contact__eyebrow">Confidential Advisory</span>
            <h2>
              Let&apos;s Talk About Your
              <br />
              <em>Next Opportunity.</em>
            </h2>
            <p>
              Whether you are looking to lease Grade-A office space, acquire commercial assets,
              develop prime land, or unlock strategic value, our advisory desk is ready to assist.
            </p>
          </div>

          <ul className="contact-details">
            {contactDetails.map((detail, index) => (
              <li data-reveal="left" style={{ transitionDelay: `${index * 110}ms` }} key={detail.title}>
                <svg viewBox="0 0 24 24" aria-hidden="true">{contactIcons[detail.icon]}</svg>
                <div>
                  <h3>{detail.title}</h3>
                  {detail.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <a className="whatsapp-connect" href="https://wa.me/919820000000" target="_blank" rel="noreferrer" data-reveal="up">
            <span>
              <strong>Instant WhatsApp Connect</strong>
              <small>Chat directly with an executive partner.</small>
            </span>
            <span className="whatsapp-connect__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 7.5c-2 1 0 6 4 7.5 2 .7 3-.5 2-2l-2-.8-.9 1c-1.4-.7-2.4-1.7-3-3l.9-.7Z" /></svg>
            </span>
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
