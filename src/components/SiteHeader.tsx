"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { serviceNavigation, siteNav } from "../data/site";
import { asset } from "../lib/assets";

type SiteHeaderProps = {
  /** Text colour for the hero behind the header: "dark" heroes get light text. */
  tone?: "dark" | "light";
};

export function SiteHeader({ tone = "dark" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesMenu = useRef<HTMLDivElement>(null);
  const servicesToggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setIsFixed(window.scrollY > 140);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!servicesMenu.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [servicesOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setIsOpen(false); setServicesOpen(false); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const headerClass = ["masthead", isFixed && "is-fixed", isOpen && "is-open"].filter(Boolean).join(" ");

  return (
    <div className={`masthead-slot masthead-slot--${tone}`}>
      <header className={headerClass}>
        <div className="masthead__inner">
          <a className="masthead__brand" href="/" aria-label="Corporate Lion home">
            <img src={asset("newlogo-e1769688001953-Photoroom 1.svg")} alt="Corporate Lion" />
          </a>
          <button className="masthead__toggle" type="button" aria-expanded={isOpen} aria-controls="site-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => { setIsOpen((open) => !open); setServicesOpen(false); }}>
            <span /><span /><span />
          </button>
          <nav className="masthead__nav" id="site-navigation" aria-label="Main navigation">
            {siteNav.map((item) => {
              const isActive = !item.href.includes("#") && (pathname === item.href || pathname.startsWith(`${item.href}/`));
              if (item.href === "/our-services") {
                const serviceActive = serviceNavigation.some((service) => pathname === service.href);
                return <div className="masthead__services" ref={servicesMenu} key={item.href}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse" && window.matchMedia("(min-width: 901px)").matches) setServicesOpen(true);
                  }}
                  onPointerLeave={() => { if (!servicesMenu.current?.contains(document.activeElement)) setServicesOpen(false); }}
                  onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape" && servicesOpen) {
                      event.stopPropagation();
                      setServicesOpen(false);
                      servicesToggle.current?.focus();
                    }
                  }}>
                  <div className="masthead__services-heading">
                    <a className={`masthead__link${isActive || serviceActive ? " is-active" : ""}`} href={item.href} aria-current={isActive ? "page" : undefined}
                      onClick={() => { setIsOpen(false); setServicesOpen(false); }}>{item.label}</a>
                    <button ref={servicesToggle} className="masthead__submenu-toggle" type="button" aria-label="Our Services submenu"
                      aria-expanded={servicesOpen} aria-controls="services-navigation" onClick={() => setServicesOpen((open) => !open)}>
                      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7 5 5 5-5" /></svg>
                    </button>
                  </div>
                  <div className="masthead__submenu" id="services-navigation" hidden={!servicesOpen}>
                    {serviceNavigation.map((service) => <a href={service.href} key={service.href} aria-current={pathname === service.href ? "page" : undefined}
                      onClick={() => { setServicesOpen(false); setIsOpen(false); }}>{service.label}</a>)}
                  </div>
                </div>;
              }
              return <a className={`masthead__link${isActive ? " is-active" : ""}`} aria-current={isActive ? "page" : undefined}
                href={item.href} onClick={() => setIsOpen(false)} key={item.href}>{item.label}</a>;
            })}
          </nav>
        </div>
      </header>
    </div>
  );
}
