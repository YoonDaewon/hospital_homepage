import Image from "next/image";
import { cn } from "@/lib/cn";

type Aspect = "square" | "video" | "portrait" | "wide" | "tall";

const aspectMap: Record<Aspect, string> = {
  square: "aspect-square",
  video: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
  tall: "aspect-[2/3]",
};

type MediaFrameProps = {
  src: string;
  alt: string;
  aspect?: Aspect;
  priority?: boolean;
  className?: string;
  sizes?: string;
  objectPosition?: string;
};

export function MediaFrame({
  src,
  alt,
  aspect = "video",
  priority,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px",
  objectPosition,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-sand",
        aspectMap[aspect],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={objectPosition ? { objectPosition } : undefined}
        className="object-cover"
      />
    </div>
  );
}
