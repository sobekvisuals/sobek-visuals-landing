"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);

            const startTime = Date.now();
            const endTime = startTime + duration;

            const updateCounter = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);

              // Easing function for smooth animation
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(easeOutCubic * end);

              setCount(currentCount);

              if (now < endTime) {
                requestAnimationFrame(updateCounter);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(updateCounter);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [end, duration, hasStarted]);

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
}
