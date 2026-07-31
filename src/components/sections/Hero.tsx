import Image from "next/image";
import { Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company, type Content } from "@/content/site";

export function Hero({ t }: { t: Content }) {
  return (
    <section className="relative pt-20 sm:pt-22">
      <Container className="pt-2 pb-6 sm:pt-6">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px]">
            <Image
              src="/images/section1.jpg"
              alt="Kometa Moving crew member checking the delivery list at a van full of boxes"
              width={1600}
              height={1068}
              priority
              className="h-[280px] w-full object-cover sm:h-[520px] lg:h-[560px]"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-black/20 via-transparent to-transparent sm:block" />
          </div>

          {/* Mobile: card flows under the photo and overlaps it upward.
              sm+: card floats over the photo, vertically centered. */}
          <div className="relative z-10 -mt-16 px-3 sm:absolute sm:inset-0 sm:mt-0 sm:flex sm:items-center sm:px-8 lg:px-10">
            <div className="rounded-[22px] bg-cream p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] sm:max-w-[560px] sm:rounded-[28px] sm:p-10">
              <h1 className="text-[clamp(1.9rem,4.6vw,3.2rem)] leading-[1.08] font-semibold text-ink">
                {t.hero.title}
                <br />
                {t.hero.highlight}
              </h1>

              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                {t.hero.subtitle}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
                <Button href="#quote" size="lg" className="w-full sm:w-auto">
                  {t.cta.quote}
                </Button>
                <a
                  href={company.phoneHref}
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-[15px] font-semibold text-white shadow-[0_8px_24px_-12px_rgba(195,53,47,0.8)] transition-colors hover:bg-brand-dark sm:w-auto"
                >
                  <Phone size={16} strokeWidth={2.4} />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
