"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import type { Content } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "sent";

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-[12.5px] font-medium text-ink/70">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={label}
        className="h-11 rounded-xl bg-white px-3.5 text-[14px] text-ink ring-1 ring-black/5 transition-shadow outline-none placeholder:text-ink/30 focus:ring-2 focus:ring-brand"
      />
    </label>
  );
}

export function QuoteForm({ t }: { t: Content }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Honeypot — bots fill hidden fields, humans don't.
    if ((form.elements.namedItem("company") as HTMLInputElement)?.value) return;

    setStatus("loading");
    // TODO(phase 2): POST to /api/quotes
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="quote" className="scroll-mt-24 pb-16 sm:pb-20">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative">
            {/* Slanted top edge: a skewed cap over a straight base, so the
                card reads taller on the left like the reference. */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-16 origin-top-left skew-y-2 rounded-t-[28px] bg-brand-50" />
              <div className="absolute inset-x-0 top-6 bottom-0 rounded-[28px] bg-brand-50" />
            </div>

            <div className="relative p-7 sm:p-10">
            <span className="text-xs font-semibold tracking-[0.18em] text-ink uppercase">
              {t.quote.eyebrow}
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.4rem)] leading-[1.12] font-semibold text-ink">
              {t.quote.title}
            </h2>
            <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-muted">
              {t.quote.text}
            </p>

            {status === "sent" ? (
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white p-6">
                <CheckCircle2 className="shrink-0 text-brand" size={22} />
                <p className="text-[14.5px] text-ink">{t.quote.success}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-4">
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute h-0 w-0 opacity-0"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t.quote.fields.name} name="name" required />
                  <Field
                    label={t.quote.fields.phone}
                    name="phone"
                    type="tel"
                    required
                  />
                  <Field label={t.quote.fields.email} name="email" type="email" />
                  <Field label={t.quote.fields.date} name="date" type="date" />
                  <Field label={t.quote.fields.from} name="from" required />
                  <Field label={t.quote.fields.to} name="to" required />
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[12.5px] font-medium text-ink/70">
                    {t.quote.fields.notes}
                  </span>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder={t.quote.fields.notes}
                    className="resize-none rounded-xl bg-white px-3.5 py-3 text-[14px] text-ink ring-1 ring-black/5 transition-shadow outline-none placeholder:text-ink/30 focus:ring-2 focus:ring-brand"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex h-13 items-center justify-center gap-2 self-start rounded-full bg-ink px-8 text-[15px] font-semibold text-white transition-colors hover:bg-brand disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <Loader2 size={17} className="animate-spin" />
                  ) : null}
                  {t.quote.submit}
                </button>

                <p className="text-[12.5px] text-muted">{t.quote.disclaimer}</p>
              </form>
            )}
            </div>
          </div>

          {/* Absolutely positioned on lg so the portrait photo never stretches
              the row: the form defines the height, the photo fills it from
              top-3 (the card's slant offset) down, bottoms aligned. */}
          <div className="relative">
            <Image
              src="/images/section3.jpg"
              alt="Kometa Moving crew member carrying a box with the inventory checklist on top"
              width={900}
              height={1600}
              className="h-[320px] w-full rounded-[28px] object-cover sm:h-[440px] lg:absolute lg:inset-x-0 lg:top-6 lg:h-[calc(100%-1.5rem)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
