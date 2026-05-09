"use client";
import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Feel",
    url: "wearefeel.com",
    href: "https://wearefeel.com",
    category: "Shopify Plus · Wellness · DTC",
    description:
      "Science-backed supplement brand selling collagen, multivitamins, and adaptogens. Built a subscription-first Shopify Plus store with Recharge, Rebuy Smart Cart, Checkout UI Extensions, Shopify Functions, and Klaviyo automation.",
    tags: [
      "Shopify Plus",
      "Checkout Extensions",
      "Shopify Functions",
      "Recharge",
      "Rebuy Smart Cart",
      "Klaviyo",
      "Smarter",
      "Liquid",
      "JavaScript",
      "AJAX",
    ],
    color: "#4ade80",
  },
  {
    id: "02",
    name: "Earthling Mushroom Farm",
    url: "earthlingmushroomfarm.com",
    href: "https://earthlingmushroomfarm.com",
    category: "D2C · Food & Wellness",
    description:
      "Urban mushroom farm selling functional supplements, fresh gourmet mushrooms, and farm workshop experiences. Built a custom Shopify theme blending e-commerce with education — Bundle app, Rebuy for recommendations, and Klaviyo for lifecycle emails.",
    tags: [
      "Liquid",
      "Custom Theme",
      "Bundle App",
      "Rebuy",
      "Klaviyo",
      "Smarter",
      "JavaScript",
      "AJAX",
    ],
    color: "#a78bfa",
  },
  {
    id: "03",
    name: "Solve Labs",
    url: "solvelabs.world",
    href: "https://solvelabs.world",
    category: "D2C · Wellness",
    description:
      "Wellness brand selling functional mushroom supplements — Lion's Mane, mushroom gummies, nootropics, and mushroom coffee — targeting focus and cognitive performance. Delivered a modular Liquid theme with Rebuy Smart Cart, metafield-driven content, and Klaviyo lifecycle emails.",
    tags: [
      "Liquid",
      "Custom Theme",
      "Rebuy Smart Cart",
      "Klaviyo",
      "Custom Sections",
      "Metafields",
      "JavaScript",
      "AJAX",
    ],
    color: "#22d3ee",
  },
];

/* ── Browser-window preview for each card ── */
function ProjectPreview({ color, url, index }: { color: string; url: string; index: number }) {
  const contents = [
    /* Feel — PDP-style layout */
    <div key="feel" style={{ padding: "12px 14px" }}>
      <div style={{ height: 20, width: "62%", background: `${color}22`, borderRadius: 4, marginBottom: 8 }} />
      <div style={{ height: 8,  width: "42%", background: "rgba(255,255,255,0.06)", borderRadius: 3, marginBottom: 12 }} />
      <div style={{ display: "flex", gap: 8 }}>
        <div style={{ flex: 1, height: 34, background: "rgba(255,255,255,0.04)", borderRadius: 6 }} />
        <div style={{ width: 80, height: 34, background: `${color}22`, borderRadius: 6 }} />
      </div>
    </div>,

    /* Earthling — product grid */
    <div key="earthling" style={{ padding: "12px 14px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 10 }}>
        {[0, 1, 2].map((j) => (
          <div
            key={j}
            style={{
              height: 38,
              background: j === 1 ? `${color}18` : "rgba(255,255,255,0.04)",
              borderRadius: 5,
            }}
          />
        ))}
      </div>
      <div style={{ height: 8, width: "55%", background: "rgba(255,255,255,0.05)", borderRadius: 3 }} />
    </div>,

    /* Solve Labs — editorial / text layout */
    <div key="solve" style={{ padding: "12px 14px" }}>
      <div style={{ height: 14, width: "50%", background: `${color}22`, borderRadius: 3, marginBottom: 10 }} />
      {[68, 82, 50].map((w, j) => (
        <div
          key={j}
          style={{ height: 7, width: `${w}%`, background: "rgba(255,255,255,0.05)", borderRadius: 2, marginBottom: 6 }}
        />
      ))}
    </div>,
  ];

  return (
    <div
      style={{
        height: 166,
        borderBottom: "1px solid var(--line)",
        background: `linear-gradient(145deg, var(--surface2) 0%, ${color}07 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "9px 14px",
          borderBottom: "1px solid var(--line)",
          background: "rgba(0,0,0,0.22)",
        }}
      >
        {(["#ef4444", "#f59e0b", "#22c55e"] as const).map((c) => (
          <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.55 }} />
        ))}
        <div
          style={{
            flex: 1,
            margin: "0 10px",
            padding: "2px 10px",
            borderRadius: 4,
            background: "rgba(255,255,255,0.05)",
            fontSize: 9,
            fontFamily: "monospace",
            color: "var(--dim)",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {url}
        </div>
      </div>

      {/* Abstract content */}
      {contents[index]}

      {/* Decorative glow blob */}
      <div
        style={{
          position: "absolute",
          right: -24,
          bottom: -24,
          width: 110,
          height: 110,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}28 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-sm" style={{ color: "var(--dim)" }}>
            <span style={{ color: "var(--accent)" }}>$</span>
            <span>git log --oneline ./projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Work</h2>
          <p className="mt-3 max-w-xl text-[15px]" style={{ color: "var(--muted)" }}>
            A selection of Shopify stores I&apos;ve built and shipped — each solving a real commercial problem.
          </p>
        </motion.div>

        {/* 3-column card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ id, name, url, href, category, description, tags, color }, i) => (
            <motion.a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}45`;
                e.currentTarget.style.boxShadow = `0 0 40px ${color}18, 0 20px 40px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <ProjectPreview color={color} url={url} index={i} />

              <div className="p-5 flex flex-col gap-3 flex-1">
                {/* id + category */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[10px]" style={{ color: "var(--dim)" }}>
                    {id}
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                    style={{ color, background: `${color}12`, border: `1px solid ${color}30` }}
                  >
                    {category}
                  </span>
                </div>

                {/* name + url */}
                <div>
                  <h3
                    className="text-base font-semibold mb-1 transition-colors duration-200"
                    style={{ color: "var(--text)" }}
                    ref={(el) => {
                      if (!el) return;
                      const a = el.closest("a");
                      if (!a) return;
                      a.addEventListener("mouseenter", () => (el.style.color = color));
                      a.addEventListener("mouseleave", () => (el.style.color = "var(--text)"));
                    }}
                  >
                    {name}
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-[10px]" style={{ color: "var(--dim)" }}>
                    <Globe size={10} />
                    {url}
                  </div>
                </div>

                {/* description */}
                <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                  {description}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono"
                      style={{ color: "var(--muted)", border: "1px solid var(--line)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* footer */}
                <div
                  className="flex items-center justify-between pt-3"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  <span className="text-[10px] font-mono transition-colors duration-200" style={{ color: "var(--dim)" }}>
                    View project
                  </span>
                  <ExternalLink
                    size={13}
                    style={{ color: "var(--dim)" }}
                    ref={(el) => {
                      if (!el) return;
                      const a = el.closest("a");
                      if (!a) return;
                      a.addEventListener("mouseenter", () => {
                        el.style.color = color;
                        el.style.transform = "translate(2px,-2px)";
                      });
                      a.addEventListener("mouseleave", () => {
                        el.style.color = "var(--dim)";
                        el.style.transform = "translate(0,0)";
                      });
                    }}
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
