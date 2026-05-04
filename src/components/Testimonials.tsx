"use client";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    quote:
      "Just brilliant. Genuinely the best freelancer I have worked with — on both Fiverr and Upwork. He goes above and beyond on every task, and his communication is fantastic. His knowledge of Shopify Liquid is fluent and there is nothing he can't do. 10/10 recommend, far better and far more detailed with his work than 99% of sellers on this platform.",
    project: "Continuous Shopify Liquid",
    via: "Upwork",
    rating: 5,
    color: "#4ade80",
  },
  {
    quote:
      "Exceptional developer. Mehul helped me with a very difficult task I've been struggling with for a long time. Extremely professional with great communication. 10/10",
    project: "Sticky Cart Development",
    via: "Upwork",
    rating: 5,
    color: "#22d3ee",
  },
  {
    quote:
      "Highly skilled, professional and fast. Great shopify developer. Thank you Mehul",
    project: "Shopify Banner Adjustment & Section Development",
    via: "Upwork",
    rating: 5,
    color: "#a78bfa",
  },
  {
    quote:
      "Skillful developer. Was well-rounded in Shopify and could do adjustments quite fast.",
    project: "Shopify Store Developer",
    via: "Upwork",
    rating: 5,
    color: "#f59e0b",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6">
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
            <span>cat ./reviews.json</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">What clients say.</h2>
          <p className="mt-3 text-[15px]" style={{ color: "var(--muted)" }}>
            Real reviews from real clients on Upwork — 100% Job Success Score.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.map(({ quote, project, via, rating, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}30`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
            >
              {/* stars + source */}
              <div className="flex items-center justify-between">
                <Stars count={rating} />
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                  style={{ color: "var(--dim)", border: "1px solid var(--line)" }}
                >
                  via {via}
                </span>
              </div>

              {/* large quote mark */}
              <div
                className="font-serif text-4xl leading-none select-none -mb-2"
                style={{ color, opacity: 0.3 }}
              >
                &ldquo;
              </div>

              {/* quote body */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {quote}
              </p>

              {/* project tag */}
              <div
                className="pt-3 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded"
                  style={{ color, background: `${color}10`, border: `1px solid ${color}25` }}
                >
                  {project}
                </span>
                <span className="text-xs font-mono" style={{ color: "var(--dim)" }}>
                  Client
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all on Upwork */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://www.upwork.com/freelancers/~01fc9799d190e66321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-mono font-medium transition-all duration-200"
            style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(74,222,128,0.4)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--line)";
              e.currentTarget.style.color = "var(--muted)";
            }}
          >
            View all reviews on Upwork
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
