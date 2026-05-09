"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#testimonials", label: "testimonials" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 80) setActive("");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const visible = new Set<string>();

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        if (window.scrollY < 80) { setActive(""); return; }
        for (const id of ids) {
          if (visible.has(id)) { setActive("#" + id); return; }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6"
      style={{
        background: scrolled ? "rgba(9,9,11,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 select-none">
          <div className="relative shrink-0">
            <div
              className="w-8 h-8 rounded-full overflow-hidden transition-all duration-300"
              style={{ border: "2px solid var(--line)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(74,222,128,0.6)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mehul-logo-sm.png" alt="Mehul" className="w-full h-full object-cover" />
            </div>
            {/* Availability dot */}
            <span
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
              style={{
                background: "var(--accent)",
                border: "2px solid var(--bg)",
                boxShadow: "0 0 6px rgba(74,222,128,0.6)",
              }}
            />
          </div>
          <span className="font-mono text-sm">
            <span style={{ color: "var(--text)" }}>mehul</span>
            <span style={{ color: "var(--accent)" }}>.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                className="relative px-3 py-1.5 rounded-md text-sm font-mono transition-colors duration-200 hover:bg-white/5"
                style={{ color: isActive ? "var(--accent)" : "var(--muted)" }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? "var(--accent)" : "var(--muted)";
                }}
              >
                ./{label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px"
                    style={{ background: "var(--accent)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </a>
            );
          })}

          <a
            href="mailto:sartanparamehul@gmail.com"
            className="ml-3 px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-200 flex items-center gap-1.5"
            style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            hire me
            <ArrowUpRight size={12} />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 rounded transition-colors duration-200"
          style={{ color: "var(--muted)" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(9,9,11,0.96)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {links.map(({ href, label }) => {
                const isActive = active === href;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="py-2.5 font-mono text-sm transition-colors duration-200 flex items-center gap-2"
                    style={{ color: isActive ? "var(--accent)" : "var(--muted)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-200"
                      style={{ background: isActive ? "var(--accent)" : "transparent", border: isActive ? "none" : "1px solid var(--dim)" }}
                    />
                    ./{label}
                  </a>
                );
              })}
              <a
                href="mailto:sartanparamehul@gmail.com"
                className="mt-3 py-2.5 text-center rounded-md font-mono text-sm font-medium flex items-center justify-center gap-1.5"
                style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
              >
                hire me
                <ArrowUpRight size={13} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
