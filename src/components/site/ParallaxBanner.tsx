import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ParallaxBanner({
  image,
  imageAlt,
  overlay = "bg-gradient-to-b from-pine/80 via-pine/50 to-pine/80",
  children,
  className = "",
}: {
  image: string;
  imageAlt: string;
  overlay?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <section
      ref={ref}
      className={`relative flex min-h-[340px] items-center justify-center overflow-hidden sm:min-h-[440px] ${className}`}
    >
      <motion.img
        src={image}
        alt={imageAlt}
        style={{ y, scale }}
        className="absolute inset-0 h-[120%] w-full object-cover"
        loading="lazy"
      />
      <div aria-hidden="true" className={`absolute inset-0 ${overlay}`} />
      <div className="container-page relative z-10 py-16 text-center">{children}</div>
    </section>
  );
}
