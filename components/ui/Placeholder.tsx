import { cn } from "@/lib/cn";

type PlaceholderProps = {
  label?: string;
  aspect?: "square" | "video" | "portrait" | "wide" | "tall";
  tone?: "warm" | "deep" | "soft";
  className?: string;
};

export function Placeholder({
  label,
  aspect = "video",
  tone = "warm",
  className,
}: PlaceholderProps) {
  const aspectMap = {
    square: "aspect-square",
    video: "aspect-[16/10]",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
    tall: "aspect-[2/3]",
  };
  const toneMap = {
    warm: "bg-gradient-to-br from-sand via-beige/70 to-taupe/40",
    deep: "bg-gradient-to-br from-mocha via-cocoa to-charcoal",
    soft: "bg-gradient-to-br from-bone via-ivory to-sand",
  };
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        aspectMap[aspect],
        toneMap[tone],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,rgba(62,52,43,0.18),transparent_55%)]" />
      <div className="absolute inset-0 mix-blend-overlay opacity-30 [background:repeating-linear-gradient(45deg,transparent_0_2px,rgba(255,255,255,0.06)_2px_3px)]" />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "font-serif italic tracking-[0.2em] text-sm",
              tone === "deep" ? "text-bone/60" : "text-cocoa/40",
            )}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
