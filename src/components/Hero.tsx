"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const roles = [
  "Full-Stack Shopify Developer",
  "I build stores that convert.",
  "I craft checkout extensions.",
  "I ship Shopify apps.",
  "I architect headless storefronts.",
];

const topBadges = [
  {
    label: "Top Rated · Upwork",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    label: "Shopify Plus",
    color: "#96bf48",
    bg: "rgba(150,191,72,0.08)",
    border: "rgba(150,191,72,0.25)",
  },
  {
    label: "Certified App Dev",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.25)",
  },
    {
    label: "Available for Projects",
    pulse: true,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.25)",
  },
];

// Code lines for the right-side editor panel
const codeLines: { tokens: { text: string; color: string }[] }[] = [
  { tokens: [{ text: "// Welcome to my workspace", color: "#52525b" }] },
  { tokens: [] },
  {
    tokens: [
      { text: "import", color: "#f97316" },
      { text: " { ", color: "#a1a1aa" },
      { text: "Developer", color: "#22d3ee" },
      { text: " } from ", color: "#a1a1aa" },
      { text: "'./shopify'", color: "#4ade80" },
      { text: ";", color: "#a1a1aa" },
    ],
  },
  { tokens: [] },
  {
    tokens: [
      { text: "const", color: "#f97316" },
      { text: " Portfolio", color: "#22d3ee" },
      { text: " = () => {", color: "#a1a1aa" },
    ],
  },
  {
    tokens: [
      { text: "  return", color: "#f97316" },
      { text: " (", color: "#a1a1aa" },
    ],
  },
  {
    tokens: [
      { text: "    <", color: "#a1a1aa" },
      { text: "Developer", color: "#22d3ee" },
    ],
  },
  {
    tokens: [
      { text: "      name", color: "#96bf48" },
      { text: '="', color: "#a1a1aa" },
      { text: "Mehul Sartanpara", color: "#4ade80" },
      { text: '"', color: "#a1a1aa" },
    ],
  },
  {
    tokens: [
      { text: "      role", color: "#96bf48" },
      { text: '="', color: "#a1a1aa" },
      { text: "Full-Stack Shopify Dev", color: "#4ade80" },
      { text: '"', color: "#a1a1aa" },
    ],
  },
  // {
  //   tokens: [
  //     { text: "      platform", color: "#96bf48" },
  //     { text: '="', color: "#a1a1aa" },
  //     { text: "Shopify Plus", color: "#4ade80" },
  //     { text: '"', color: "#a1a1aa" },
  //   ],
  // },
  {
    tokens: [
      { text: "      focus", color: "#96bf48" },
      { text: '="', color: "#a1a1aa" },
      { text: "Shopify · Hydrogen · Apps", color: "#4ade80" },
      { text: '"', color: "#a1a1aa" },
    ],
  },
  {
    tokens: [
      { text: "      passion", color: "#96bf48" },
      { text: '="', color: "#a1a1aa" },
      { text: "Shipping things that actually work", color: "#4ade80" },
      { text: '"', color: "#a1a1aa" },
    ],
  },
  // {
  //   tokens: [
  //     { text: "      status", color: "#96bf48" },
  //     { text: '="', color: "#a1a1aa" },
  //     { text: "Available ✓", color: "#4ade80" },
  //     { text: '"', color: "#a1a1aa" },
  //   ],
  // },
  {
    tokens: [
      { text: "    />", color: "#a1a1aa" },
    ],
  },
  {
    tokens: [
      { text: "  );", color: "#a1a1aa" },
    ],
  },
  {
    tokens: [
      { text: "};", color: "#a1a1aa" },
    ],
  },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 25);
    } else {
      t = setTimeout(() => {
        setIsDeleting(false);
        setRoleIdx((p) => (p + 1) % roles.length);
      }, 0);
    }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 overflow-hidden">

      <div className="relative max-w-6xl mx-auto w-full">
        {/* ── Badge row ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {topBadges.map(({ label, pulse, color, bg, border }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-xs font-medium"
              style={{ color, background: bg, border: `1px solid ${border}` }}
            >
              {pulse && (
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: color,
                    boxShadow: `0 0 6px ${color}`,
                    animation: "blink 2s ease-in-out infinite",
                  }}
                />
              )}
              {label}
            </span>
          ))}
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — text + CTAs */}
          <div>
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="text-[2.6rem] min-[400px]:text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.06] mb-4"
            >
              Hello, I&apos;m{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4ade80 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Mehul
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded font-mono text-sm"
              style={{
                background: "var(--surface2)",
                border: "1px solid var(--line)",
                color: "var(--accent)",
              }}
            >
              <span style={{ color: "var(--dim)" }}>&lt;</span>
              {displayed}
              <span className="cursor-blink" />
              <span style={{ color: "var(--dim)" }}>/&gt;</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--muted)" }}
            >
              7+ years turning Shopify into a competitive advantage — custom
              themes, checkout extensions, Shopify Functions, and headless builds
              with{" "}
              <span style={{ color: "var(--text)" }}>Hydrogen</span>. I work
              with DTC brands and agencies that care about{" "}
              <span style={{ color: "var(--text)" }}>speed, conversion, and clean code</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-opacity duration-200 hover:opacity-88"
                style={{ background: "var(--accent)", color: "#000" }}
              >
                View My Work <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--line)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="flex items-center gap-2"
            >
              {[
                { href: "https://github.com/MehulSartanpara", icon: GithubIcon, label: "GitHub" },
                {
                  href: "https://in.linkedin.com/in/mehul-sartanpara-101a09231",
                  icon: LinkedinIcon,
                  label: "LinkedIn",
                },
                { href: "mailto:sartanparamehul@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — code editor panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                boxShadow: "0 0 60px rgba(74,222,128,0.06), 0 24px 48px rgba(0,0,0,0.4)",
              }}
            >
              {/* Editor chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "var(--surface2)", borderBottom: "1px solid var(--line)" }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444", opacity: 0.75 }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b", opacity: 0.75 }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e", opacity: 0.75 }} />
                <div className="flex items-center gap-1.5 ml-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--accent)", boxShadow: "0 0 4px var(--accent)" }}
                  />
                  <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                    portfolio.tsx
                  </span>
                </div>
              </div>

              {/* Line numbers + code */}
              <div className="p-5 overflow-x-auto">
                <div className="font-mono text-sm" style={{ lineHeight: "1.75" }}>
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.06, duration: 0.25 }}
                      style={{ display: "flex" }}
                    >
                      {/* line number */}
                      <span
                        className="select-none shrink-0"
                        style={{
                          color: "var(--dim)",
                          fontSize: "0.7rem",
                          width: "2rem",
                          textAlign: "right",
                          paddingRight: "1.25rem",
                          paddingTop: "2px",
                        }}
                      >
                        {i + 1}
                      </span>
                      {/* code tokens — white-space:pre preserves leading spaces */}
                      <span style={{ whiteSpace: "pre" }}>
                        {line.tokens.length === 0
                          ? " "
                          : line.tokens.map((token, j) => (
                              <span key={j} style={{ color: token.color }}>
                                {token.text}
                              </span>
                            ))}
                      </span>
                    </motion.div>
                  ))}
                  {/* blinking cursor row */}
                  <div style={{ display: "flex" }}>
                    <span style={{ width: "2rem", paddingRight: "1.25rem" }} />
                    <span className="cursor-blink" />
                  </div>
                </div>
              </div>

              {/* Bottom status bar */}
              <div
                className="flex items-center justify-between px-4 py-2 font-mono text-xs"
                style={{ background: "var(--surface2)", borderTop: "1px solid var(--line)", color: "var(--dim)" }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: "var(--accent)" }}>● TypeScript</span>
                  <span>Ln 15, Col 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span style={{ color: "var(--accent)" }}>Shopify Plus</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--dim)" }}
      >
        <span className="font-mono text-xs">scroll</span>
        <ChevronDown size={14} style={{ animation: "blink 2s ease-in-out infinite" }} />
      </motion.div>
    </section>
  );
}
