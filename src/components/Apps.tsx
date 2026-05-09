"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { UpworkIcon } from "./SocialIcons";

const apps = [
  {
    name: "Schedulify ‑ Promo Scheduler",
    tagline: "Run seasonal sales and launches without manual work.",
    description:
      "Schedule themes, products, prices, tags, discounts, and content visibility for events. Create an event once — the app handles everything at the scheduled start and end times.",
    logo: "/images/promo-scheduler.png",
    href: "https://apps.shopify.com/promo-scheduler",
    rating: 5.0,
    tags: ["Shopify Flow", "Automation", "Scheduling", "Theme Management"],
    color: "#4ade80",
  },
  {
    name: "Roleify ‑ B2B Role Manager",
    tagline: "Empower companies with self-serve team management.",
    description:
      "Manage B2B contacts and roles by location. Let buyers assign, edit, and remove contacts for each company location — with roles like Location Admin or Ordering Only. No merchant support needed.",
    logo: "/images/Roleify.png",
    href: "https://apps.shopify.com/roleify-b2b-role-manager",
    rating: 5.0,
    tags: ["B2B", "Customer Accounts", "Roles & Permissions", "Shopify Plus"],
    color: "#22d3ee",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={12} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
        ))}
      </div>
      <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>{rating.toFixed(1)}</span>
    </div>
  );
}

export default function Apps() {
  return (
    <section id="apps" className="py-28 px-6">
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
            <span>ls ./published-apps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Shopify Apps</h2>
          <p className="mt-3 max-w-xl text-[15px]" style={{ color: "var(--muted)" }}>
            Two published apps on the Shopify App Store — built under the{" "}
            <span style={{ color: "var(--text)" }}>Scaleify</span> partner account.
          </p>
        </motion.div>

        {/* App cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {apps.map(({ name, tagline, description, logo, href, rating, tags, color }, i) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col rounded-xl p-6 transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}35`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
                    style={{ border: "1px solid var(--line)", background: "var(--surface2)" }}>
                    <Image src={logo} alt={name} width={48} height={48} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm leading-tight mb-0.5 transition-colors duration-200 group-hover:text-[var(--accent)]"
                      style={{ color: "var(--text)" }}>
                      {name}
                    </h3>
                    <StarRow rating={rating} />
                  </div>
                </div>
                <ExternalLink size={15} className="shrink-0 mt-0.5 transition-colors duration-200" style={{ color: "var(--dim)" }} />
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "var(--text)" }}>{tagline}</p>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--muted)" }}>{description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{ color: "var(--muted)", border: "1px solid var(--line)" }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end pt-3" style={{ borderTop: "1px solid var(--line)" }}>
                <span className="text-xs font-mono" style={{ color: "var(--dim)" }}>Shopify App Store</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Upwork recognition banner */}
        <motion.a
          href="https://www.upwork.com/freelancers/~01fc9799d190e66321"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -3 }}
          className="group flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl p-6 transition-all duration-300"
          style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(74,222,128,0.3)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(20,186,92,0.1)", border: "1px solid rgba(20,186,92,0.25)", color: "#14ba5c" }}>
                <UpworkIcon size={20} />
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: "#14ba5c" }}>Upwork</div>
                <div className="text-[10px] font-mono" style={{ color: "var(--dim)" }}>Top Rated</div>
              </div>
            </div>

            <div style={{ width: 1, height: 36, background: "var(--line)" }} />

            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                Top Rated Freelancer · 100% Job Success Score
              </p>
              <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                Surat, India · 7+ years · 500+ hours logged · 0–4 hr avg. response
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 shrink-0">
            {[
              // { value: "10",   label: "Jobs" },
              { value: "5.0",  label: "Rating" },
              { value: "500+",  label: "Hours" },
              { value: "100%", label: "JSS" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-xl font-bold font-mono" style={{ color: "var(--accent)" }}>{value}</div>
                <div className="text-xs" style={{ color: "var(--dim)" }}>{label}</div>
              </div>
            ))}
            <ExternalLink size={15} className="ml-1 transition-colors duration-200" style={{ color: "var(--dim)" }} />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
