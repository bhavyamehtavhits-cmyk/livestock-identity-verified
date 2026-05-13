import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function GovUtilityBar() {
  const [lang, setLang] = useState<"EN" | "हिं">("EN");
  const [contrast, setContrast] = useState(false);
  const [size, setSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.setProperty("--app-font-size", `${size}px`);
  }, [size]);
  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", contrast);
  }, [contrast]);

  return (
    <div className="bg-gov-navy text-white text-xs">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2 px-4 py-1.5">
        <div className="flex items-center gap-3">
          <a href="#main" className="underline-offset-2 hover:underline">Skip to Main Content</a>
          <span className="opacity-40">|</span>
          <span className="hidden sm:inline opacity-80">Government of India · Ministry of Fisheries, Animal Husbandry &amp; Dairying</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button onClick={() => setSize(Math.min(20, size + 1))} className="hover:underline" aria-label="Increase font size">A+</button>
            <button onClick={() => setSize(16)} className="hover:underline" aria-label="Reset font size">A</button>
            <button onClick={() => setSize(Math.max(13, size - 1))} className="hover:underline" aria-label="Decrease font size">A-</button>
          </div>
          <span className="opacity-40">|</span>
          <button onClick={() => setContrast(!contrast)} className="hover:underline">High Contrast</button>
          <span className="opacity-40">|</span>
          <button onClick={() => setLang(lang === "EN" ? "हिं" : "EN")} className="hover:underline">
            {lang === "EN" ? "हिंदी" : "English"}
          </button>
          <span className="opacity-40">|</span>
          <Link to="/" className="hover:underline">Helpdesk</Link>
          <span className="opacity-40">|</span>
          <Link to="/" className="hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
}

export function GovHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/enrollment", label: "Enrollment" },
    { to: "/verification", label: "Verification" },
    { to: "/monitoring", label: "Pilot Monitoring" },
    { to: "/admin", label: "Administration" },
    { to: "/mobile", label: "FLW Mobile" },
  ] as const;

  return (
    <header className="bg-card border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-saffron via-white to-india-green border border-border flex items-center justify-center font-bold text-gov-navy text-sm shadow-sm">
            NDDB
          </div>
          <div className="leading-tight">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">National Dairy Development Board</div>
            <div className="text-base font-bold text-gov-navy">Bovine Biometric Identification System</div>
            <div className="text-[11px] text-muted-foreground">National Digital Livestock Mission (NDLM)</div>
          </div>
        </div>
        <div className="ml-auto hidden lg:block text-right">
          <div className="text-[11px] text-muted-foreground">सत्यमेव जयते</div>
          <div className="text-[11px] text-muted-foreground">Truth Alone Triumphs</div>
        </div>
      </div>
      <nav className="bg-gov-blue text-white">
        <div className="mx-auto max-w-7xl flex flex-wrap px-2">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-gov-navy" }}
              className="px-4 py-3 text-sm font-medium hover:bg-gov-navy transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function GovFooter() {
  return (
    <footer className="mt-12 bg-gov-navy text-white">
      <div className="mx-auto max-w-7xl grid gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="font-bold mb-2">NDDB · NDLM</div>
          <p className="text-xs text-white/70 leading-relaxed">
            National Digital Livestock Mission — bovine biometric identification platform operated by the National Dairy Development Board.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2 text-sm">Compliance</div>
          <ul className="space-y-1 text-xs text-white/80">
            <li>Digital India Standards</li>
            <li>STQC Certified Infrastructure</li>
            <li>MeitY Cloud Empanelled</li>
            <li>Data Protection (DPDP Act 2023)</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2 text-sm">Accessibility</div>
          <ul className="space-y-1 text-xs text-white/80">
            <li>GIGW 3.0 Compliant</li>
            <li>WCAG 2.1 AA</li>
            <li>Screen Reader Support</li>
            <li>Hindi / English Interface</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2 text-sm">Contact</div>
          <ul className="space-y-1 text-xs text-white/80">
            <li>NDDB, Anand, Gujarat 388001</li>
            <li>Helpdesk: 1800-XXX-NDLM</li>
            <li>support@ndlm.nddb.coop</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 text-[11px] text-white/60 flex flex-wrap justify-between gap-2">
          <div>© {new Date().getFullYear()} National Dairy Development Board. All rights reserved.</div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">RTI</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <GovUtilityBar />
      <GovHeader />
      <main id="main" className="flex-1">
        <div className="bg-gov-blue-soft border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-5">
            <div className="text-xs text-muted-foreground mb-1">Home / {title}</div>
            <h1 className="text-2xl font-bold text-gov-navy">{title}</h1>
            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
      </main>
      <GovFooter />
    </div>
  );
}
