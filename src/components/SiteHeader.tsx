"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { projectNavigation, serviceNavigation, siteNav } from "../data/site";
import { asset } from "../lib/assets";

type SiteHeaderProps = {
  /** Text colour for the hero behind the header: "dark" heroes get light text. */
  tone?: "dark" | "light";
};

export function SiteHeader({ tone = "dark" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setIsFixed(window.scrollY > 140);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const closeOutside = (event: PointerEvent) => {
      if (!(event.target as Element).closest(".masthead__services")) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [openMenu]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setIsOpen(false); setOpenMenu(null); }
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
            onClick={() => { setIsOpen((open) => !open); setOpenMenu(null); }}>
            <span /><span /><span />
          </button>
          <nav className="masthead__nav" id="site-navigation" aria-label="Main navigation">
            {siteNav.map((item) => {
              const isActive = !item.href.includes("#") && (pathname === item.href || pathname.startsWith(`${item.href}/`));
              const submenu = item.href === "/our-services" ? serviceNavigation : item.href === "/projects" ? projectNavigation : null;
              if (submenu) {
                const menuOpen = openMenu === item.href;
                const menuId = item.href === "/projects" ? "projects-navigation" : "services-navigation";
                const serviceActive = submenu.some((service) => pathname === service.href);
                return <div className="masthead__services" key={item.href}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse" && window.matchMedia("(min-width: 1101px)").matches) setOpenMenu(item.href);
                  }}
                  onPointerLeave={(event) => { if (!event.currentTarget.contains(document.activeElement)) setOpenMenu(null); }}
                  onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null); }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape" && menuOpen) {
                      event.stopPropagation();
                      setOpenMenu(null);
                      event.currentTarget.querySelector("button")?.focus();
                    }
                  }}>
                  <div className="masthead__services-heading">
                    <a className={`masthead__link${isActive || serviceActive ? " is-active" : ""}`} href={item.href} aria-current={isActive ? "page" : undefined}
                      onClick={() => { setIsOpen(false); setOpenMenu(null); }}>{item.label}</a>
                    <button className="masthead__submenu-toggle" type="button" aria-label={`${item.label} submenu`}
                      aria-expanded={menuOpen} aria-controls={menuId} onClick={() => setOpenMenu((open) => open === item.href ? null : item.href)}>
                      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7 5 5 5-5" /></svg>
                    </button>
                  </div>
                  <div className="masthead__submenu" id={menuId} hidden={!menuOpen}>
                    {submenu.map((service) => <a href={service.href} key={service.label} aria-current={pathname === service.href ? "page" : undefined}
                      onClick={() => { setOpenMenu(null); setIsOpen(false); }}>{service.label}</a>)}
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
