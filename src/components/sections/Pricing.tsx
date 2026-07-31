import { Check, Info } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Content } from "@/content/site";

export function Pricing({ t }: { t: Content }) {
  return (
    <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          text={t.pricing.text}
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.pricing.tiers.map((tier, index) => (
            <Reveal key={tier.crew} delay={index * 0.08}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[22px] p-7 transition-transform duration-300 hover:-translate-y-1",
                  tier.best
                    ? "bg-ink text-white shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]"
                    : "bg-cream text-ink",
                )}
              >
                {tier.best ? (
                  <span className="absolute -top-3 right-6 rounded-full bg-brand px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                    ★
                  </span>
                ) : null}

                <p
                  className={cn(
                    "text-[13.5px] font-semibold",
                    tier.best ? "text-white/70" : "text-muted",
                  )}
                >
                  {tier.crew}
                </p>
                <p className="mt-3 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "font-display text-[40px] leading-none font-semibold",
                      tier.best ? "text-white" : "text-brand",
                    )}
                  >
                    {tier.rate}
                  </span>
                  <span
                    className={cn(
                      "text-[14px]",
                      tier.best ? "text-white/60" : "text-muted",
                    )}
                  >
                    {tier.unit}
                  </span>
                </p>
                <p
                  className={cn(
                    "mt-3 text-[14px] leading-relaxed",
                    tier.best ? "text-white/70" : "text-muted",
                  )}
                >
                  {tier.text}
                </p>
                <Button
                  href="#quote"
                  variant={tier.best ? "primary" : "light"}
                  className="mt-6 w-full"
                >
                  {t.cta.book}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 rounded-[22px] bg-brand-50 p-6 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.pricing.includes.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check size={12} strokeWidth={3.2} />
                </span>
                <span className="text-[14px] text-ink/85">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-2 border-t border-brand/15 pt-5 text-[13px] leading-relaxed text-muted">
            <Info size={15} className="mt-0.5 shrink-0 text-brand" />
            {t.pricing.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
