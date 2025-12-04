"use client";

import { useEffect, useRef } from "react";

interface Wave {
  y: number;
  length: number;
  amplitude: number;
  frequency: number;
  speed: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let increment = 0;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse movement tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    // Scroll tracking
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Wave configurations
    const waves: Wave[] = [
      {
        y: canvas.height * 0.7,
        length: 0.015,
        amplitude: 100,
        frequency: 0.015,
        speed: 0.3,
        opacity: 0.05,
      },
      {
        y: canvas.height * 0.6,
        length: 0.02,
        amplitude: 80,
        frequency: 0.02,
        speed: 0.4,
        opacity: 0.08,
      },
      {
        y: canvas.height * 0.5,
        length: 0.025,
        amplitude: 60,
        frequency: 0.025,
        speed: 0.5,
        opacity: 0.1,
      },
      {
        y: canvas.height * 0.4,
        length: 0.03,
        amplitude: 40,
        frequency: 0.03,
        speed: 0.6,
        opacity: 0.12,
      },
    ];

    // Draw wave
    const drawWave = (wave: Wave, increment: number) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `rgba(34, 211, 238, ${wave.opacity})`); // cyan
      gradient.addColorStop(0.5, `rgba(59, 130, 246, ${wave.opacity * 0.8})`); // blue
      gradient.addColorStop(1, `rgba(147, 51, 234, ${wave.opacity * 0.6})`); // purple

      ctx.fillStyle = gradient;

      // Mouse influence
      const mouseInfluence = {
        x: (mouseRef.current.x - 0.5) * 20,
        y: (mouseRef.current.y - 0.5) * 20,
      };

      // Scroll influence
      const scrollInfluence = (scrollRef.current * 0.1) % height;

      // Draw wave points
      for (let x = 0; x < width; x++) {
        const radians = x * wave.length + increment * wave.speed;
        const mouseEffect = Math.sin((x / width) * Math.PI) * mouseInfluence.y;
        const scrollEffect = Math.sin((x / width) * Math.PI * 2) * scrollInfluence * 0.05;

        const y =
          wave.y +
          Math.sin(radians * wave.frequency) * wave.amplitude +
          mouseEffect +
          scrollEffect;

        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
    };

    // Draw floating particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3,
      });
    }

    const drawParticles = () => {
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, `rgba(34, 211, 238, ${particle.opacity})`);
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)");

        ctx.fillStyle = gradient;
        ctx.fill();

        // Update position
        particle.x += particle.speedX + mouseRef.current.x * 0.5;
        particle.y += particle.speedY + mouseRef.current.y * 0.5;

        // Wrap around edges
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;
      });
    };

    // Draw grid effect
    const drawGrid = () => {
      const gridSize = 100;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.strokeStyle = "rgba(34, 211, 238, 0.02)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + (mouseRef.current.x * 10), 0);
        ctx.lineTo(x - (mouseRef.current.x * 10), height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + (mouseRef.current.y * 10));
        ctx.lineTo(width, y - (mouseRef.current.y * 10));
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid first (background layer)
      drawGrid();

      // Draw waves
      waves.forEach((wave) => drawWave(wave, increment));

      // Draw particles on top
      drawParticles();

      increment += 0.02;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
