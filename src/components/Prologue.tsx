import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarField } from "./StarField";

const LINES = [
  "Loading...",
  "Collecting four years of memories...",
  "Searching through billions of stars...",
  "Looking for my favorite person...",
  "Found.",
];

export function Prologue({ onEnter }: { onEnter: () => void }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [showName, setShowName] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      const t = setTimeout(() => setShowName(true), 500);
      return () => clearTimeout(t);
    }
    const line = LINES[lineIdx];
    if (typed.length < line.length) {
      const t = setTimeout(() => setTyped(line.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(t);
    }
    const pause = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setTyped("");
    }, 750);
    return () => clearTimeout(pause);
  }, [typed, lineIdx]);

  useEffect(() => {
    if (!showName) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / 2600) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setReady(true), 400);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [showName]);

  const handleEnter = () => {
    setFading(true);
    setTimeout(onEnter, 1100);
  };

  return (
    <motion.section
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-midnight-deep"
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <StarField count={180} />
      <div className="relative z-10 mx-auto w-full max-w-xl px-6 text-center">
        <div className="min-h-[9rem] font-sans text-base tracking-wide text-ivory/80 sm:text-lg">
          {LINES.slice(0, lineIdx).map((l, i) => (
            <p key={i} className="mb-2 opacity-60">
              {l}
            </p>
          ))}
          {lineIdx < LINES.length && (
            <p className="mb-2">
              {typed}
              <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-ivory align-middle" />
            </p>
          )}
        </div>

        <AnimatePresence>
          {showName && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mt-8 font-display text-5xl font-light tracking-wide text-ivory sm:text-7xl"
              style={{ textShadow: "0 0 40px rgba(233,199,124,0.5)" }}
            >
              SARTHAK  <span className="text-blush">❤</span>
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showName && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto mt-10 h-[2px] w-64 max-w-[80%] overflow-hidden rounded-full bg-ivory/10"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold-soft via-gold to-blush transition-[width] duration-100 ease-linear"
                style={{
                  width: `${progress}%`,
                  boxShadow: "0 0 12px rgba(233,199,124,0.7)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {ready && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              onClick={handleEnter}
              className="group relative mt-12 rounded-full border border-gold/40 bg-midnight/40 px-10 py-4 font-display text-lg tracking-widest text-ivory backdrop-blur-md transition hover:border-gold hover:bg-midnight/60"
              style={{ boxShadow: "0 0 40px rgba(233,199,124,0.25), inset 0 0 20px rgba(233,199,124,0.08)" }}
            >
              <span className="relative z-10">✨ Enter Our Universe</span>
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl transition group-hover:opacity-100" style={{ background: "radial-gradient(circle,rgba(233,199,124,.4),transparent 70%)" }} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}