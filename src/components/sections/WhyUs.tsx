import Image from "next/image";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content/site";

export function WhyUs({ t }: { t: Content }) {
  return (
    <section className="relative z-10">
      <Container>
        <Reveal>
          <div className="grid items-center gap-8 rounded-[28px] bg-cream p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.18em] text-ink uppercase">
                {t.why.eyebrow}
              </span>
              <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.12] font-semibold text-ink">
                {t.why.title}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                {t.why.text}
              </p>

              <ul className="mt-7 flex flex-col gap-3.5">
                {t.why.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check size={13} strokeWidth={3.2} />
                    </span>
                    <span className="text-[14.5px] leading-snug text-ink/85">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Button href="#quote" size="lg" className="mt-8">
                {t.cta.quote}
              </Button>
            </div>

            <Image
              src="/images/section2.jpg"
              alt="Kometa Moving crew loading and checking boxes inside the moving van"
              width={1600}
              height={900}
              className="h-[320px] w-full rounded-[22px] object-cover sm:h-[440px] lg:h-[500px]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
