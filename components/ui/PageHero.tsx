import Image from "next/image";
import { Placeholder } from "./Placeholder";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "warm" | "deep" | "soft";
  image?: string;
  imageAlt?: string;
  className?: string;
  /** 이미지·그라데이션 없이 텍스트만 보여주는 헤더 */
  plain?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = "warm",
  image,
  imageAlt,
  className,
  plain,
}: PageHeroProps) {
  if (plain) {
    return (
      <section
        className={cn(
          "bg-bone pt-32 lg:pt-40 pb-12 lg:pb-16 border-b border-line",
          className,
        )}
      >
        <div className="container-content">
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

  return (
    <section
      className={cn(
        "relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <Placeholder
          aspect="wide"
          tone={tone}
          className="absolute inset-0 w-full h-full"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-bone/40 via-bone/20 to-bone" />
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
