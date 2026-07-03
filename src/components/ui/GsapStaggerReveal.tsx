"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapStaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

/**
 * Avvolge i figli in un contenitore e li rivela con stagger 3D cinematografico GSAP.
 * Ogni figlio entra scalato dal basso con rotation3D e fade + blur.
 */
export function GsapStaggerReveal({
  children,
  className = "",
  staggerDelay = 0.08,
}: GsapStaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const items = gsap.utils.toArray<HTMLElement>(
        container.querySelectorAll(":scope > *")
      );

      gsap.fromTo(
        items,
        {
          y: 80,
          opacity: 0,
          scale: 0.92,
          rotateX: 12,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.75,
          stagger: staggerDelay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ perspective: "1000px" }}
    >
      {children}
    </div>
  );
}
