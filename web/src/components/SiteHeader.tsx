import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

const nav = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 pt-3 sm:pt-4 print:hidden">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-hz-steel/80 bg-white/90 px-3 py-2 backdrop-blur-md sm:px-5">
        <a href="#" className="group flex min-w-0 items-center gap-2 text-hz-navy" onClick={() => setOpen(false)}>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-hz-mist/80 text-[11px] font-bold text-hz-primary ring-1 ring-hz-steel/80"
            aria-hidden
          >
            H&Z
          </span>
          <span
            className="hidden min-w-0 sm:block"
            style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}
          >
            <span className="block truncate text-sm font-bold leading-tight">H&Z Consulting</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-hz-slate">Engineers</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-hz-slate transition hover:bg-hz-mist/60 hover:text-hz-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton className="!py-2 !text-sm" onClick={() => document.getElementById("contact")?.scrollIntoView()}>
            Request Consultation
          </PrimaryButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:7185698677"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-hz-steel bg-white text-sm font-semibold text-hz-navy"
          >
            Call
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-hz-steel bg-white text-sm font-semibold text-hz-navy"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="pointer-events-auto mx-4 mt-2 rounded-2xl border border-hz-steel bg-white/95 p-3 shadow-sm backdrop-blur md:hidden"
        >
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-hz-navy hover:bg-hz-mist/70"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <PrimaryButton className="w-full justify-center" onClick={() => { setOpen(false); document.getElementById("contact")?.scrollIntoView(); }}>
                Request Consultation
              </PrimaryButton>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
