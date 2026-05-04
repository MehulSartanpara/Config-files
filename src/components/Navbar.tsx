"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        <a href="#" className="flex items-center gap-2 select-none group">
          <div className="w-8 h-8 rounded-full overflow-hidden transition-all duration-200"
            style={{ border: "2px solid var(--line)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mehul-logo-sm.png" alt="Mehul" className="w-full h-full object-cover" />
          </div>
          <span className="font-mono text-sm">
            <span style={{ color: "var(--text)" }}>mehul</span>
            <span style={{ color: "var(--accent)" }}>.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-md text-sm font-mono transition-colors duration-200 hover:bg-white/5"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              ./{label}
            </a>
          ))}
          <a
            href="mailto:sartanparamehul@gmail.com"
            className="ml-3 px-4 py-1.5 rounded-md text-sm font-mono font-medium transition-all duration-200"
            style={{
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
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
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 rounded transition-colors duration-200"
          style={{ color: "var(--muted)" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

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
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-mono text-sm transition-colors duration-200"
                  style={{ color: "var(--muted)" }}
                >
                  ./{label}
                </a>
              ))}
              <a
                href="mailto:sartanparamehul@gmail.com"
                className="mt-3 py-2.5 text-center rounded-md font-mono text-sm font-medium"
                style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
              >
                hire me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
