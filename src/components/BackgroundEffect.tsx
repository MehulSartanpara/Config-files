"use client";
import { useEffect, useRef } from "react";

const GRID = 60;
const CURSOR_R = 220;
const RIPPLE_DURATION = 1400;
const RIPPLE_SPREAD = 320;

interface Ripple {
  x: number;
  y: number;
  startTime: number;
}

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const ripples = useRef<Ripple[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const glow = glowRef.current;
    if (!canvas || !glow) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* ── Cursor tracking (skip on pure-touch devices) ── */
    const isTouch = window.matchMedia("(hover: none)").matches;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      glow.style.opacity = "1";
      glow.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    };
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
      glow.style.opacity = "0";
    };
    const onClick = (e: MouseEvent) => {
      if (ripples.current.length >= 4) ripples.current.shift();
      ripples.current.push({ x: e.clientX, y: e.clientY, startTime: performance.now() });
    };

    if (!isTouch) {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseleave", onLeave);
      window.addEventListener("click", onClick);
    }

    /* ── Main animation loop ── */
    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      const { x: mx, y: my } = mouse.current;
      const cols = Math.ceil(w / GRID) + 2;
      const rows = Math.ceil(h / GRID) + 2;

      // Expire old ripples
      ripples.current = ripples.current.filter(
        (r) => time - r.startTime < RIPPLE_DURATION
      );

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * GRID;
          const y = j * GRID;

          /* cursor proximity */
          const cursorDist = Math.hypot(x - mx, y - my);
          const cursorProx = Math.max(0, 1 - cursorDist / CURSOR_R);

          /* ripple influence — expanding ring of light */
          let rippleProx = 0;
          for (const r of ripples.current) {
            const age = time - r.startTime;
            const progress = age / RIPPLE_DURATION;
            const ringRadius = progress * RIPPLE_SPREAD;
            const dotDist = Math.hypot(x - r.x, y - r.y);
            const ringDist = Math.abs(dotDist - ringRadius);
            const ringWidth = 55 * (1 - progress * 0.45);
            if (ringDist < ringWidth) {
              const rp = (1 - ringDist / ringWidth) * (1 - progress) * 0.9;
              rippleProx = Math.max(rippleProx, rp);
            }
          }

          const combined = Math.max(cursorProx, rippleProx);

          if (combined > 0.01) {
            /* ── Active dot (cursor / ripple area) ── */
            const alpha = 0.15 + combined * 0.85;
            const r = 1 + combined * 2.8;

            // Soft halo
            const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 5.5);
            grad.addColorStop(0, `rgba(74,222,128,${combined * 0.28})`);
            grad.addColorStop(1, "rgba(74,222,128,0)");
            ctx.beginPath();
            ctx.arc(x, y, r * 5.5, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            // Core
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(74,222,128,${alpha})`;
            ctx.fill();
          } else {
            /* ── Idle dot — slow organic pulse ── */
            const phase = (i * 3.7 + j * 5.3) % (Math.PI * 2);
            const pulse = 0.042 + 0.028 * Math.sin(time * 0.00045 + phase);
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${pulse})`;
            ctx.fill();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      if (!isTouch) {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseleave", onLeave);
        window.removeEventListener("click", onClick);
      }
    };
  }, []);

  return (
    <>
      {/* Dot-grid canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: 0 }}
      />

      {/* Cursor spotlight glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed"
        style={{
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(74,222,128,0.11) 0%, rgba(74,222,128,0.04) 35%, transparent 65%)",
          transition: "opacity 0.5s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
