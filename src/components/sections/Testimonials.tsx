"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siGoogle, siThumbtack, siYelp } from "simple-icons";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Content } from "@/content/site";

function SourceIcon({ source }: { source: string }) {
  const icon = source.includes("Google")
    ? siGoogle
    : source.includes("Yelp")
      ? siYelp
      : source.includes("Thumbtack")
        ? siThumbtack
        : null;
  if (!icon) return null;
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50">
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden className="fill-brand">
        <path d={icon.path} />
      </svg>
    </span>
  );
}

export function Testimonials({ t }: { t: Content }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.clientWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section id="testimonials" className="scroll-mt-24 pb-16 sm:pb-20">
      <Container>
        <div className="rounded-[28px] bg-cream px-5 py-14 sm:px-8 sm:py-16">
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
            className="mx-auto"
          />

          <div className="relative mt-10">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous review"
              className="absolute top-1/2 left-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-brand hover:text-white sm:flex"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next review"
              className="absolute top-1/2 right-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-brand hover:text-white sm:flex"
            >
              <ChevronRight size={17} />
            </button>

            <div
              ref={trackRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 sm:mx-14"
            >
              {t.testimonials.items.map((item) => (
                <article
                  key={item.name}
                  className="flex w-[86%] shrink-0 snap-start flex-col rounded-2xl bg-white p-6 sm:w-[calc(50%-10px)]"
                >
                  <Quote size={22} className="text-brand/35" fill="currentColor" />
                  <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink/85">
                    {item.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/8 pt-4">
                    <SourceIcon source={item.source} />
                    <div>
                      <p className="text-[14px] font-semibold text-ink">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[12px] text-muted">
                        {item.source}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex justify-center gap-2 sm:hidden">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Previous review"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-brand hover:text-white"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Next review"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-brand hover:text-white"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
