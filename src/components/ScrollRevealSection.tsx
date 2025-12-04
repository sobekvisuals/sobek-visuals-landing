"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  className?: string;
}

export default function ScrollRevealSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("reveal-visible");
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return "reveal-up";
      case "down":
        return "reveal-down";
      case "left":
        return "reveal-left";
      case "right":
        return "reveal-right";
      case "fade":
        return "reveal-fade";
      default:
        return "reveal-up";
    }
  };

  return (
    <div ref={ref} className={`reveal ${getDirectionClass()} ${className}`}>
      {children}
    </div>
  );
}
