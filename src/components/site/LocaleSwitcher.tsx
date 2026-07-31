"use client";

import { usePathname, useRouter } from "next/navigation";

import { locales, localeNames, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function persistLocale(next: Locale) {
  document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000;samesite=lax`;
}

export function LocaleSwitcher({
  locale,
  tone = "dark",
}: {
  locale: Locale;
  tone?: "dark" | "light";
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    persistLocale(next);
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || `/${next}`);
    router.refresh();
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full p-0.5",
        tone === "light" ? "bg-white/10" : "bg-ink/5",
      )}
    >
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => switchTo(item)}
          aria-current={item === locale}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
            item === locale
              ? "bg-brand text-white"
              : tone === "light"
                ? "text-white/70 hover:text-white"
                : "text-muted hover:text-ink",
          )}
        >
          {localeNames[item]}
        </button>
      ))}
    </div>
  );
}
