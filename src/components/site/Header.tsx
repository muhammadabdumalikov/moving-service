"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { Menu, Phone, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/site/Logo";
import { company, type Content } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header({ locale, t }: { locale: Locale; t: Content }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div
          className={cn(
            "mt-3 flex h-16 items-center justify-between gap-3 rounded-full bg-white pr-2.5 pl-5 ring-1 ring-black/5 transition-shadow duration-300 sm:mt-4",
            scrolled
              ? "shadow-[0_18px_40px_-18px_rgba(21,22,26,0.28)]"
              : "shadow-[0_10px_30px_-22px_rgba(21,22,26,0.2)]",
          )}
        >
          <Logo locale={locale} />

          <nav className="hidden items-center gap-1 lg:flex">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-medium text-ink/75 transition-colors hover:bg-brand-50 hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-brand-50 px-4 py-2.5 text-[13.5px] font-semibold text-brand transition-colors hover:bg-brand-100 md:inline-flex"
            >
              <Phone size={15} strokeWidth={2.4} />
              {company.phone}
            </a>
            <Button href="#quote" size="md" className="hidden sm:inline-flex">
              {t.cta.quote}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-brand-50 hover:text-brand lg:hidden"
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden"
            >
              <div className="mt-2 max-h-[calc(100dvh-120px)] overflow-auto rounded-3xl bg-white p-3 shadow-[0_24px_50px_-20px_rgba(21,22,26,0.3)] ring-1 ring-black/5">
                <nav className="flex flex-col">
                  {t.nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-cream"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-2 flex flex-col gap-2 border-t border-black/5 p-2 pt-4">
                  <Button href="#quote" size="lg" className="w-full">
                    {t.cta.quote}
                  </Button>
                  <a
                    href={company.phoneHref}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-50 text-[15px] font-semibold text-brand transition-colors hover:bg-brand-100"
                  >
                    <Phone size={16} strokeWidth={2.4} />
                    {company.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
