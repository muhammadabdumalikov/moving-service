import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/site/Logo";
import { company, type Content } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale, t }: { locale: Locale; t: Content }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white">
      <Container>
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:gap-12 md:py-16">
          <div className="col-span-2 flex flex-col gap-5 md:col-span-1">
            <Logo locale={locale} tone="light" />
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              {t.footer.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {company.licences.map((licence) => (
                <span
                  key={licence}
                  className="rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/85"
                >
                  {licence}
                </span>
              ))}
            </div>
          </div>

          {t.footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-[13px] font-semibold tracking-[0.16em] text-white/60 uppercase">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/85 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <h3 className="text-[13px] font-semibold tracking-[0.16em] text-white/60 uppercase">
              {t.cta.call}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/85">
              <li>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone size={15} /> {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail size={15} /> {company.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin size={15} /> {company.address}
              </li>
              <li className="text-white/60">{company.hours}</li>
            </ul>
            <div className="mt-1 flex flex-wrap gap-2">
              {company.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-white/12 px-3 py-1.5 text-[11.5px] font-medium transition-colors hover:bg-white/20"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/15 py-6 text-[13px] text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. {t.footer.rights}
          </p>
          <p>{company.licences.join(" · ")}</p>
        </div>
      </Container>
    </footer>
  );
}
