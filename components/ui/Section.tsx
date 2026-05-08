import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "bone" | "ivory" | "sand";
  size?: "sm" | "md" | "lg";
};

export function Section({
  children,
  className,
  id,
  bg = "bone",
  size = "md",
}: SectionProps) {
  const bgMap = {
    bone: "bg-bone",
    ivory: "bg-ivory",
    sand: "bg-sand",
  };
  const sizeMap = {
    sm: "py-16 md:py-20",
    md: "py-20 md:py-28 lg:py-32",
    lg: "py-28 md:py-36 lg:py-44",
  };
  return (
    <section
      id={id}
      className={cn(bgMap[bg], sizeMap[size], "relative", className)}
    >
      <div className="container-content">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  desc?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="heading-display text-cocoa text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-6 text-mocha text-base md:text-lg leading-relaxed font-light">
          {desc}
        </p>
      )}
    </div>
  );
}
