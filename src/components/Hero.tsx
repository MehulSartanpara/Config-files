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

function UpworkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

function ShopifyIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
    </svg>
  );
}

const topBadges: {
  label: string;
  color: string;
  bg: string;
  border: string;
  pulse?: boolean;
  upwork?: boolean;
  shopify?: boolean;
}[] = [
  {
    label: "Top Rated · Upwork",
    upwork: true,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    label: "Shopify Plus",
    shopify: true,
    color: "#96bf48",
    bg: "rgba(150,191,72,0.08)",
    border: "rgba(150,191,72,0.25)",
  },
  {
    label: "Certified App Dev",
    shopify: true,
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
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 lg:pt-20 pb-16 overflow-hidden">

      <div className="relative max-w-6xl mx-auto w-full">
        {/* ── Badge row ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {topBadges.map(({ label, pulse, upwork, shopify, color, bg, border }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 min-[480px]:px-3 min-[480px]:py-1.5 rounded-full font-mono text-[11px] min-[480px]:text-xs font-medium"
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
              {upwork && <UpworkIcon size={11} />}
              {shopify && <ShopifyIcon size={11} />}
              {label}
            </span>
          ))}
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
              <div className="p-3 lg:p-5 overflow-x-auto">
                  <div className="font-mono text-[11px] lg:text-sm" style={{ lineHeight: "1.75" }}>
                    {codeLines.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.06, duration: 0.25 }}
                        style={{ display: "flex" }}
                      >
                        {/* line number — hidden on mobile */}
                        <span
                          className="hidden lg:inline select-none shrink-0"
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
                        {/* code tokens */}
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
                      <span className="hidden lg:inline" style={{ width: "2rem", paddingRight: "1.25rem" }} />
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
        className="flex flex-col items-center gap-1 mt-6 lg:mt-0 lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2"
        style={{ color: "var(--dim)" }}
      >
        <span className="font-mono text-xs">scroll</span>
        <ChevronDown size={14} style={{ animation: "blink 2s ease-in-out infinite" }} />
      </motion.div>
    </section>
  );
}
