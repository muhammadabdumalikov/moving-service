import { Boxes, Building2, MapPin, Truck } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Content } from "@/content/site";

const icons = [MapPin, Truck, Boxes, Building2];

export function Services({ t }: { t: Content }) {
  return (
    <section id="services" className="-mt-24 scroll-mt-24 px-2 pb-16 sm:px-3 sm:pb-20">
      <div className="rounded-[28px] bg-brand px-6 pt-38 pb-14 sm:px-10 sm:pt-42 sm:pb-16">
        <div className="mx-auto w-full max-w-[1200px]">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            text={t.services.text}
            tone="light"
            className="mx-auto"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((item, index) => {
              const Icon = icons[index] ?? MapPin;
              return (
                <Reveal key={item.slug} delay={index * 0.08}>
                  <article className="group h-full rounded-2xl bg-brand-100/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon size={20} strokeWidth={1.9} />
                    </span>
                    <h3 className="mt-5 text-[17px] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink/65">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-white/20 pt-10 sm:grid-cols-4">
            {t.services.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "px-2 sm:px-8",
                  index > 0 && "sm:border-l sm:border-white/20",
                  index === 0 && "sm:pl-0",
                )}
              >
                <dt className="font-display text-[clamp(1.75rem,3vw,2.4rem)] leading-none font-semibold text-white">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-[13px] leading-snug text-white/75">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
