"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siThumbtack, siYelp } from "simple-icons";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Content } from "@/content/site";

/* Official multicolor "G" from Google's sign-in branding assets. */
function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function SourceIcon({ source }: { source: string }) {
  const brand = source.includes("Google")
    ? null
    : source.includes("Yelp")
      ? siYelp
      : source.includes("Thumbtack")
        ? siThumbtack
        : undefined;
  if (brand === undefined) return null;
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-black/8">
      {brand === null ? (
        <GoogleG />
      ) : (
        <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden>
          <path fill={`#${brand.hex}`} d={brand.path} />
        </svg>
      )}
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
