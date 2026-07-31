"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Phone, Plus } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { company, type Content } from "@/content/site";

export function Faq({ t }: { t: Content }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 pb-20 sm:pb-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <span className="text-xs font-semibold tracking-[0.18em] text-ink uppercase">
              {t.faq.eyebrow}
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.12] font-semibold text-ink">
              {t.faq.title}
            </h2>

            <div className="mt-8 rounded-[24px] bg-brand-50 p-8">
              <p className="font-display text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.25] font-semibold text-ink">
                {t.faq.cardTitle}
              </p>
              <a
                href={company.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14.5px] font-semibold text-ink transition-colors hover:bg-brand hover:text-white"
              >
                <Phone size={15} strokeWidth={2.4} />
                {company.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {t.faq.items.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 rounded-xl bg-cream px-5 py-4.5 text-left transition-colors hover:bg-cream-dark"
                  >
                    <span className="text-[15px] font-medium text-ink">
                      {item.q}
                    </span>
                    <span className="shrink-0 text-ink" aria-hidden>
                      {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-1.5 rounded-xl bg-cream px-5 py-4 text-[14px] leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
