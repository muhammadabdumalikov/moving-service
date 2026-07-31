import { CalendarCheck, PencilLine, Smile } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content/site";

const icons = [PencilLine, CalendarCheck, Smile];

export function HowItWorks({ t }: { t: Content }) {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.how.eyebrow}
          title={t.how.title}
          className="mx-auto"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {t.how.steps.map((step, index) => {
            const Icon = icons[index] ?? PencilLine;
            return (
              <Reveal key={step.title} delay={index * 0.1}>
                <div className="relative flex flex-col items-center px-2 text-center">
                  {index < t.how.steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute top-9 left-[calc(50%+64px)] hidden h-px w-[calc(100%-128px)] bg-brand/60 md:block"
                    >
                      <span className="absolute -top-[3.5px] right-0 block h-2 w-2 rotate-45 border-t border-r border-brand/70" />
                    </span>
                  ) : null}

                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-brand-50 ring-8 ring-brand-50/40">
                    <Icon size={26} className="text-brand" strokeWidth={1.9} />
                  </div>

                  <h3 className="mt-6 text-[19px] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[300px] text-[14.5px] leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
