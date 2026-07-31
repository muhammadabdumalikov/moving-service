import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span
        className={cn(
          "text-xs font-semibold tracking-[0.18em] uppercase",
          tone === "light" ? "text-white/70" : "text-ink",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.12] font-semibold",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "max-w-2xl text-[15px] leading-relaxed",
            tone === "light" ? "text-white/80" : "text-muted",
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
