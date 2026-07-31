import Link from "next/link";

import { company } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Logo({
  locale,
  tone = "dark",
  className,
}: {
  locale: Locale;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={`/${locale}`}
      aria-label={company.name}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M17 3.2 30.2 10v14L17 30.8 3.8 24V10L17 3.2Z"
          stroke={tone === "light" ? "#fff" : "#C3352F"}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M3.8 10 17 16.8 30.2 10M17 16.8v14"
          stroke={tone === "light" ? "#fff" : "#C3352F"}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M10.4 6.6 23.6 13.4"
          stroke={tone === "light" ? "#ffffff88" : "#C3352F88"}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={cn(
          "font-display text-[19px] leading-none font-semibold tracking-tight whitespace-nowrap",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        Kometa <span className="font-normal opacity-70">Moving</span>
      </span>
    </Link>
  );
}
