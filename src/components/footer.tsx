import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { navLinks, site } from "@/lib/site";

const services = [
  "Telecommunications Infrastructure",
  "Business Support Systems (BSS)",
  "Core Network Solutions",
  "MVNO & MVNE Enablement",
];

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white/70">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo invert />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Telecommunications infrastructure and technology solutions for
              operators and enablers across Africa, since {site.founded}.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#solutions" className="transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Linkserve. All rights reserved.</p>
          <p>Connecting Africa&apos;s telecommunications future.</p>
        </div>
      </div>
    </footer>
  );
}
