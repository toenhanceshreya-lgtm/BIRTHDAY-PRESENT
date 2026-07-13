import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  "Thank you...",
  "For every smile.",
  "Every laugh.",
  "Every ordinary moment that became extraordinary.",
  "Happy Birthday...",
];

export function Finale() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 12,
        size: 2 + Math.random() * 3,
      })),
    [],
  );

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-[3000ms]"
        style={{
          background: visible
            ? "linear-gradient(to bottom, oklch(0.35 0.1 60), oklch(0.75 0.15 60) 40%, oklch(0.9 0.09 75) 70%, oklch(0.96 0.05 85))"
            : "linear-gradient(to bottom, #000, #0a0a1e)",
        }}
      />
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-ivory/70"
            style={{
              left: `${p.left}%`,
              bottom: -10,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 8px rgba(255,240,200,.9)",
              animation: `float ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
        <style>{`@keyframes float{0%{transform:translateY(0);opacity:0}10%{opacity:.9}100%{transform:translateY(-120vh);opacity:0}}`}</style>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        {LINES.map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.6 }}
            className={
              i === LINES.length - 1
                ? "mt-8 font-display text-5xl font-light text-midnight-deep sm:text-7xl"
                : "mt-3 font-serif text-xl italic text-midnight-deep/80 sm:text-2xl"
            }
          >
            {l}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 3.4 }}
          className="mt-4 font-hand text-4xl text-blush sm:text-5xl"
          style={{ textShadow: "0 2px 20px rgba(255,255,255,.4)" }}
        >
          Coral Reef ❤
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 5 }}
          className="mt-24 font-display text-3xl text-midnight-deep/70 sm:text-4xl"
        >
          The End?
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 6.2 }}
          className="mt-6 font-serif text-2xl italic text-midnight-deep/80"
        >
          No...
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 7.2 }}
          className="mt-4 font-display text-4xl text-midnight-deep sm:text-5xl"
        >
          To Be Continued... <span className="text-blush">❤</span>
        </motion.p>
      </div>
    </section>
  );
}