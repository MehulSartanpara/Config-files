"use client";
import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const effectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      const THREE = await import("three");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const VANTA = ((await import("vanta/dist/vanta.net.min")) as any).default;

      if (cancelled || !containerRef.current || effectRef.current) return;

      effectRef.current = VANTA({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        /* ── Colors matched to our dark theme ── */
        color: 0x4ade80,           // --accent green
        backgroundColor: 0x09090b, // --bg
        /* ── Network density — very sparse so scrim keeps it readable ── */
        points: 7.0,
        maxDistance: 18.0,
        spacing: 20.0,
        showDots: true,
      });
    };

    init();

    return () => {
      cancelled = true;
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0 }}
    />
  );
}
