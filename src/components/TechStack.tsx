"use client";
import { motion } from "framer-motion";

type Level = "Expert" | "Advanced" | "Proficient";

const categories: {
  label: string;
  color: string;
  level: Level;
  items: string[];
}[] = [
  {
    label: "Shopify Core",
    color: "#4ade80",
    level: "Expert",
    items: [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "Dawn / Custom Themes",
      "Theme Architecture",
      "Shopify CLI",
      "Shopify Flow",
      "Metafields",
      "Metaobjects",
      "Sections Everywhere",
      "Dynamic Sources",
    ],
  },
  {
    label: "Checkout & Extensions",
    color: "#22d3ee",
    level: "Expert",
    items: [
      "Checkout UI Extensions",
      "Shopify Functions",
      "Post-Purchase Extensions",
      "Thank You Page",
      "Order Status Page",
      "App Blocks",
      "Theme App Extensions",
      "Customer Accounts",
      "Discount Functions",
      "Payment Customization",
    ],
  },
  {
    label: "Frontend",
    color: "#96bf48",
    level: "Advanced",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "SCSS / Sass",
      "HTML5",
      "CSS3",
      "Vite",
      "esbuild",
      "Responsive Design",
      "Web Animations API",
    ],
  },
  {
    label: "APIs & Data",
    color: "#a78bfa",
    level: "Expert",
    items: [
      "Admin API (GraphQL)",
      "Storefront API",
      "REST Admin API",
      "Webhooks",
      "Bulk Operations",
      "B2B API",
      "Metaobject API",
      "Customer API",
      "Custom REST APIs",
    ],
  },
  {
    label: "Hydrogen & Headless",
    color: "#fb923c",
    level: "Advanced",
    items: [
      "Hydrogen",
      "Oxygen",
      "Remix",
      "Headless Commerce",
      "SSR / SSG",
      "Storefront API",
      "Custom Storefronts",
      "PWA Concepts",
    ],
  },
  {
    label: "App Dev & Integrations",
    color: "#f472b6",
    level: "Advanced",
    items: [
      "Node.js",
      "App Bridge",
      "Polaris",
      "OAuth 2.0",
      "Shopify App Store",
      "Klaviyo",
      "Recharge",
      "Yotpo",
      "Judge.me",
      "PageFly",
      "Git",
      "GitHub",
    ],
  },
];

const levelMeta: Record<Level, { dots: number; label: string }> = {
  Expert:     { dots: 3, label: "Expert" },
  Advanced:   { dots: 2, label: "Advanced" },
  Proficient: { dots: 1, label: "Proficient" },
};

function LevelDots({ level, color }: { level: Level; color: string }) {
  const { dots } = levelMeta[level];
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((d) => (
        <div
          key={d}
          className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
          style={{ background: d <= dots ? color : "var(--line)" }}
        />
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-sm" style={{ color: "var(--dim)" }}>
            <span style={{ color: "var(--accent)" }}>$</span>
            <span>cat ./skills.json | jq</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack</h2>
          <p className="mt-3 max-w-xl text-[15px]" style={{ color: "var(--muted)" }}>
            Tools and technologies I use daily to build production-grade Shopify solutions.
          </p>

          {/* Proficiency legend */}
          <div className="flex items-center gap-5 mt-5">
            {(Object.entries(levelMeta) as [Level, { dots: number; label: string }][]).map(
              ([level, { dots, label }]) => {
                const color =
                  level === "Expert" ? "#4ade80" : level === "Advanced" ? "#22d3ee" : "#a78bfa";
                return (
                  <div key={level} className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((d) => (
                        <div
                          key={d}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: d <= dots ? color : "var(--line)" }}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-mono" style={{ color: "var(--dim)" }}>
                      {label}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(({ label, color, level, items }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl p-5 flex flex-col gap-4 transition-all duration-300 cursor-default"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}40`;
                e.currentTarget.style.boxShadow = `0 0 32px ${color}14, 0 8px 32px rgba(0,0,0,0.25)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                  <span className="text-xs font-mono font-semibold" style={{ color }}>
                    {label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <LevelDots level={level} color={color} />
                  <span
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                    style={{
                      color,
                      background: `${color}0d`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    {levelMeta[level].label}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "var(--line)" }} />

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1.5">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono transition-all duration-200 cursor-default"
                    style={{
                      color: "var(--muted)",
                      border: "1px solid var(--line)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.borderColor = `${color}50`;
                      e.currentTarget.style.background = `${color}0d`;
                      e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
                      e.currentTarget.style.boxShadow = `0 0 12px ${color}28`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--muted)";
                      e.currentTarget.style.borderColor = "var(--line)";
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Skill count footer */}
              <div className="pt-1 text-[10px] font-mono" style={{ color: "var(--dim)" }}>
                {items.length} skills
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
