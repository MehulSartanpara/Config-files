"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

/* ── Upwork Top Rated badge (official SVG) ── */
function TopRatedBadge() {
  return (
    <div className="flex items-center gap-1.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 28 28"
        width={22}
        height={22}
        aria-label="Top Rated"
      >
        <path
          fill="#1F57C3"
          d="M12 1.155a4 4 0 014 0l8.124 4.69a4 4 0 012 3.464v9.382a4 4 0 01-2 3.464L16 26.845a4 4 0 01-4 0l-8.124-4.69a4 4 0 01-2-3.464V9.309a4 4 0 012-3.464L12 1.155z"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.761 7.542l1.188 3.201 3.285.184a.78.78 0 01.448.173c.13.104.226.247.277.41a.9.9 0 01.01.504.858.858 0 01-.261.422L17.15 14.6l.854 3.328a.907.907 0 01-.025.507.857.857 0 01-.291.404.785.785 0 01-.919.02L14 16.984l-2.764 1.862a.784.784 0 01-.916-.012.855.855 0 01-.294-.4.906.906 0 01-.031-.505l.847-3.314-2.55-2.18a.858.858 0 01-.26-.421.9.9 0 01.01-.504.853.853 0 01.276-.41.782.782 0 01.448-.173l3.285-.184 1.188-3.201a.86.86 0 01.302-.394.79.79 0 01.918 0 .86.86 0 01.302.394z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-xs font-semibold" style={{ color: "#1F57C3" }}>
        Top Rated
      </span>
    </div>
  );
}

/* ── 100% Job Success Score circle ── */
function JSSBadge() {
  const r = 19;
  const circ = 2 * Math.PI * r; // ≈ 119.38
  return (
    <div className="flex items-center gap-1.5">
      {/* composite: progress ring + medal icon stacked */}
      <div style={{ position: "relative", width: 22, height: 22 }}>
        <svg viewBox="0 0 40 40" width={22} height={22} aria-label="100% Job Success" aria-hidden="true">
          <circle cx="20" cy="20" r={r} fill="none" stroke="#27272a" strokeWidth="2.5" />
          <circle
            cx="20" cy="20" r={r}
            fill="none"
            stroke="#4ade80"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${circ} ${circ}`}
            strokeDashoffset="0"
            transform="rotate(-90 20 20)"
          />
        </svg>
        {/* medal icon centered inside the ring */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 12,
            height: 12,
          }}
        >
          <path
            fill="#4ade80"
            fillRule="evenodd"
            d="M18.37 19.002H5.63v-1.867h12.74v1.867zm.02-3.736H5.608L3 8.314l4.992 1.664L12 5l4.008 4.978L21 8.314l-2.61 6.952z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-xs font-semibold" style={{ color: "#4ade80" }}>
        100% JSS
      </span>
    </div>
  );
}

const stats = [
  { value: "7+",   label: "Years" },
  { value: "100%", label: "Job Success" },
  { value: "500+",  label: "Hours Logged" },
  { value: "5.0",  label: "Avg. Rating" },
];

const certifications = [
  { name: "Shopify Certified Program", issuer: "Shopify",    year: "2023" },
  { name: "Ecommerce Marketing",       issuer: "HubSpot",    year: "2024" },
  { name: "AI Fluency Framework",      issuer: "Anthropic",  year: "2026" },
  { name: "Claude Code in Action",     issuer: "Anthropic",  year: "2026" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <div className="flex items-center gap-2 mb-3 font-mono text-sm" style={{ color: "var(--dim)" }}>
            <span style={{ color: "var(--accent)" }}>$</span>
            <span>cat about.txt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">

          {/* ── LEFT: identity card ── */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col items-center text-center gap-5">

            {/* Circular photo with gradient ring */}
            <div className="relative">
              {/* gradient ring wrapper */}
              <div
                className="p-[3px] rounded-full"
                style={{
                  background: "linear-gradient(135deg, #1F57C3 0%, #4ade80 50%, #f97316 100%)",
                }}
              >
                {/* inner bg gap ring */}
                <div
                  className="p-[3px] rounded-full"
                  style={{ background: "var(--bg)" }}
                >
                  {/* photo */}
                  <div className="w-40 h-40 rounded-full overflow-hidden">
                    <Image
                      src="/images/mehul-profile.png"
                      alt="Mehul Sartanpara"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Online indicator dot */}
              <span
                className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2"
                style={{
                  background: "var(--accent)",
                  borderColor: "var(--bg)",
                  boxShadow: "0 0 10px var(--accent)",
                }}
              />
            </div>

            {/* Name + role + location */}
            <div>
              <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                Mehul Sartanpara
              </h3>
              <p className="text-sm font-mono mt-1" style={{ color: "var(--accent)" }}>
                Full-Stack Shopify Developer
              </p>
              <div
                className="flex items-center justify-center gap-1 mt-2 text-xs"
                style={{ color: "var(--dim)" }}
              >
                <MapPin size={11} />
                <span>Surat, Gujarat, India</span>
              </div>
            </div>

            {/* Upwork badges */}
            <div
              className="flex items-center gap-4 px-5 py-3 rounded-xl w-full justify-center"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
              }}
            >
              <TopRatedBadge />
              <div style={{ width: "1px", height: "20px", background: "var(--line)" }} />
              <JSSBadge />
            </div>

            {/* Current work */}
            <div
              className="rounded-xl px-4 py-3 w-full text-left"
              style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
            >
              <div className="text-[10px] font-mono mb-1.5" style={{ color: "var(--dim)" }}>
                {"// current role"}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                Senior Shopify Developer at a{" "}
                <span style={{ color: "var(--text)" }}>world&apos;s top Shopify Plus agency</span>
                , while freelancing globally on Upwork.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: bio + stats + certs ── */}
          <div className="space-y-8">

            {/* Bio */}
            <motion.div
              {...fadeUp(0.15)}
              className="space-y-4 text-[15px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              <p>
                I&apos;m a{" "}
                <span style={{ color: "var(--text)" }}>Full-Stack Shopify Developer</span> with{" "}
                <span style={{ color: "var(--accent)" }}>7+ years</span> of experience building
                high-performing, conversion-focused e-commerce solutions on{" "}
                <span style={{ color: "var(--accent)" }}>Shopify Plus</span>.
              </p>
              <p>
                I specialize in Shopify theme development, checkout extensions, Shopify Functions,
                and headless builds with Hydrogen — helping brands stand out with{" "}
                <span style={{ color: "var(--text)" }}>clean code</span>,{" "}
                <span style={{ color: "var(--text)" }}>fast load times</span>, and{" "}
                <span style={{ color: "var(--text)" }}>pixel-perfect execution</span>. Whether
                you&apos;re a startup, DTC brand, or agency, I bring both the technical skill and
                problem-solving mindset to deliver results — on time, every time.
              </p>
              <p>
                Always open to challenging Shopify projects — full-time, contract, or one-off.
                If you&apos;ve got a hard problem, I&apos;d love to hear about it.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div {...fadeUp(0.22)} className="grid grid-cols-4 gap-3">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  className="rounded-xl p-4 text-center transition-all duration-300"
                  style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(74,222,128,0.35)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--line)")
                  }
                >
                  <div
                    className="text-2xl font-bold font-mono"
                    style={{ color: "var(--accent)" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--dim)" }}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div {...fadeUp(0.3)}>
              <div className="text-xs font-mono mb-3" style={{ color: "var(--dim)" }}>
                {"// certifications & licenses"}
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {certifications.map(({ name, issuer, year }) => (
                  <div
                    key={name}
                    className="flex items-start gap-3 rounded-lg px-4 py-3 transition-all duration-200"
                    style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(74,222,128,0.25)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--line)")
                    }
                  >
                    <span
                      className="text-[10px] font-mono mt-0.5 shrink-0 px-1.5 py-0.5 rounded"
                      style={{
                        background: "rgba(74,222,128,0.08)",
                        color: "var(--accent)",
                        border: "1px solid rgba(74,222,128,0.2)",
                      }}
                    >
                      ✓
                    </span>
                    <div>
                      <div className="text-xs font-medium leading-tight" style={{ color: "var(--text)" }}>
                        {name}
                      </div>
                      <div className="text-[10px] font-mono mt-0.5" style={{ color: "var(--dim)" }}>
                        {issuer} · {year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
