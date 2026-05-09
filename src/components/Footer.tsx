
export default function Footer() {
  return (
    <footer
      className="py-8 px-4 sm:px-6"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-3 font-mono text-xs text-center sm:text-left"
        style={{ color: "var(--dim)" }}
      >
        <a href="#" className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden" style={{ border: "1px solid var(--line)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mehul-logo-sm.png" alt="Mehul" className="w-full h-full object-cover" />
          </div>
          <span>
            <span style={{ color: "var(--muted)" }}>mehul</span>
            <span style={{ color: "var(--accent)" }}>.dev</span>
          </span>
        </a>

        <span className="leading-relaxed">
          Next.js · TypeScript · Tailwind · Framer Motion
        </span>

        <span>© 2025 Mehul Sartanpara</span>
      </div>
    </footer>
  );
}
