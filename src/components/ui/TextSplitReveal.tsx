"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface TextSplitRevealProps {
  text: string | React.ReactNode;
  className?: string;
  delay?: number;
}

export function TextSplitReveal({ text, className = "", delay = 0 }: TextSplitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".split-word");
    if (!words.length) return;

    gsap.fromTo(
      words,
      {
        yPercent: 120,
        rotateX: -65,
        opacity: 0,
      },
      {
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        delay: delay / 1000,
        ease: "power3.out",
      }
    );
  }, [text, delay]);

  if (typeof text === "string") {
    return (
      <div ref={containerRef} className={`inline-block perspective-[1000px] ${className}`}>
        {text.split(" ").map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden pb-1 mr-[0.25em] align-top">
            <span className="split-word inline-block will-change-transform transform-gpu">
              {word}
            </span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`inline-block perspective-[1000px] ${className}`}>
      <span className="inline-block overflow-hidden pb-1">
        <span className="split-word inline-block will-change-transform transform-gpu">
          {text}
        </span>
      </span>
    </div>
  );
}
