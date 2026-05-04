"use client";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, UpworkIcon } from "./SocialIcons";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "sartanparamehul@gmail.com",
    hint: "Best for project inquiries",
    href: "mailto:sartanparamehul@gmail.com",
    color: "#4ade80",
    isExternal: false,
  },
  {
    icon: UpworkIcon,
    label: "Upwork",
    value: "Top Rated · 100% JSS",
    hint: "Hire me directly on Upwork",
    href: "https://www.upwork.com/freelancers/~01fc9799d190e66321",
    color: "#22d3ee",
    isExternal: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "MehulSartanpara",
    hint: "Open source & side projects",
    href: "https://github.com/MehulSartanpara",
    color: "#a78bfa",
    isExternal: true,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/mehul-sartanpara",
    hint: "Connect professionally",
    href: "https://in.linkedin.com/in/mehul-sartanpara-101a09231",
    color: "#f59e0b",
    isExternal: true,
  },
];


export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Large centred CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs px-4 py-2 rounded-full"
            style={{ color: "var(--accent)", background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)", animation: "blink 2s ease-in-out infinite" }} />
            Available for new projects
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight">
            Got a project in mind?
            <br />
            <span style={{ color: "var(--accent)" }}>Let&apos;s make it happen.</span>
          </h2>

          <p className="mt-5 max-w-md mx-auto text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Whether it&apos;s a new store build, custom app, or a tricky extension — I deliver fast, clean, and on budget. Usually respond within a few hours.
          </p>

          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
            <a href="mailto:sartanparamehul@gmail.com"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: "var(--accent)", color: "#000" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
              <Mail size={15} />
              Send me an email
            </a>
            <a href="https://www.upwork.com/freelancers/~01fc9799d190e66321"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(74,222,128,0.4)";
                e.currentTarget.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.color = "var(--muted)";
              }}>
              View Upwork Profile
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>

        {/* ── Channels + terminal ── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-5">

          {/* Contact channel cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="grid sm:grid-cols-2 gap-4 content-start"
          >
              {channels.map(({ icon: Icon, label, value, hint, href, color, isExternal }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="group flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
                  style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}40`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}0d`, border: `1px solid ${color}20` }}>
                    <Icon size={17} style={{ color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono mb-0.5" style={{ color: "var(--dim)" }}>{label}</div>
                    <div className="text-sm font-medium truncate mb-0.5 transition-colors duration-200"
                      style={{ color: "var(--text)" }}
                      ref={(el) => {
                        if (!el) return;
                        const a = el.closest("a");
                        if (!a) return;
                        a.addEventListener("mouseenter", () => (el.style.color = color));
                        a.addEventListener("mouseleave", () => (el.style.color = "var(--text)"));
                      }}>
                      {value}
                    </div>
                    <div className="text-[10px] font-mono" style={{ color: "var(--dim)" }}>{hint}</div>
                  </div>

                  <ArrowRight size={14} className="shrink-0 mt-1 transition-all duration-200" style={{ color: "var(--dim)" }}
                    ref={(el) => {
                      if (!el) return;
                      const a = el.closest("a");
                      if (!a) return;
                      a.addEventListener("mouseenter", () => { el.style.color = color; el.style.transform = "translateX(3px)"; });
                      a.addEventListener("mouseleave", () => { el.style.color = "var(--dim)"; el.style.transform = "translateX(0)"; });
                    }} />
                </motion.a>
              ))}
          </motion.div>

          {/* Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-xl overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
          >
            <div className="flex items-center gap-2 px-4 py-3"
              style={{ background: "var(--surface2)", borderBottom: "1px solid var(--line)" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", opacity: 0.65 }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", opacity: 0.65 }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", opacity: 0.65 }} />
              <span className="ml-2 font-mono text-xs" style={{ color: "var(--dim)" }}>availability.json</span>
            </div>

            <div className="p-5 font-mono text-sm leading-relaxed">
              <div className="space-y-1" style={{ color: "var(--muted)" }}>
                <div><span style={{ color: "var(--dim)" }}>{"{"}</span></div>
                <div className="pl-4">
                  <span style={{ color: "var(--dim)" }}>status: </span>
                  <span style={{ color: "#4ade80" }}>&quot;open to work&quot;</span><span style={{ color: "var(--dim)" }}>,</span>
                </div>
                <div className="pl-4">
                  <span style={{ color: "var(--dim)" }}>available_for: [</span>
                </div>
                <div className="pl-8"><span style={{ color: "var(--muted)" }}>&quot;freelance&quot;</span><span style={{ color: "var(--dim)" }}>,</span></div>
                <div className="pl-8"><span style={{ color: "var(--muted)" }}>&quot;contract&quot;</span><span style={{ color: "var(--dim)" }}>,</span></div>
                <div className="pl-8"><span style={{ color: "var(--muted)" }}>&quot;full-time&quot;</span></div>
                <div className="pl-4"><span style={{ color: "var(--dim)" }}>],</span></div>
                <div className="pl-4">
                  <span style={{ color: "var(--dim)" }}>focus: </span>
                  <span style={{ color: "var(--muted)" }}>&quot;stores, apps & integrations&quot;</span><span style={{ color: "var(--dim)" }}>,</span>
                </div>
                <div className="pl-4">
                  <span style={{ color: "var(--dim)" }}>response: </span>
                  <span style={{ color: "var(--muted)" }}>&quot;within 4–8 hours&quot;</span><span style={{ color: "var(--dim)" }}>,</span>
                </div>
                <div className="pl-4">
                  <span style={{ color: "var(--dim)" }}>timezone: </span>
                  <span style={{ color: "var(--muted)" }}>&quot;IST (UTC+5:30)&quot;</span>
                </div>
                <div><span style={{ color: "var(--dim)" }}>{"}"}</span></div>
                <div className="pt-2" style={{ color: "var(--dim)" }}>{"// Waiting for connection..."}</div>
              </div>

              <div className="pt-4 mt-4 space-y-2" style={{ borderTop: "1px solid var(--line)" }}>
                <a href="mailto:sartanparamehul@gmail.com"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={{ background: "rgba(74,222,128,0.08)", color: "var(--accent)", border: "1px solid rgba(74,222,128,0.2)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(74,222,128,0.08)";
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderColor = "rgba(74,222,128,0.2)";
                  }}>
                  <Mail size={14} />
                  Send a message
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
