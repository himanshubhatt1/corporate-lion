"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteNav } from "../data/site";
import { asset } from "../lib/assets";

type SiteHeaderProps = {
  /** Text colour for the hero behind the header: "dark" heroes get light text. */
  tone?: "dark" | "light";
};

export function SiteHeader({ tone = "dark" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const update = () => setIsFixed(window.scrollY > 140);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
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
          <button
            className="masthead__toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className="masthead__nav" id="site-navigation" aria-label="Main navigation">
            {siteNav.map((item) => {
              const isActive = !item.href.includes("#") && (pathname === item.href || pathname.startsWith(`${item.href}/`));
              return (
                <a
                  className={`masthead__link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  key={item.href}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>
    </div>
  );
}
