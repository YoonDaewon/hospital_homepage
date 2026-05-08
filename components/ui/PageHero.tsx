import { Placeholder } from "./Placeholder";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "warm" | "deep" | "soft";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = "warm",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden",
        className,
      )}
    >
      <Placeholder
        aspect="wide"
        tone={tone}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bone/30 via-bone/10 to-bone" />
      <div className="container-content relative">
        <p className="font-serif italic text-taupe tracking-[0.3em] text-xs lg:text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-5 heading-display text-cocoa text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-mocha text-base md:text-lg max-w-2xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
