import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REASONS = [
  "The way you laugh with your whole body.",
  "How you make ordinary Tuesdays feel like holidays.",
  "The way you say my name when you're sleepy.",
  "You remember the smallest things I mention.",
  "Your hand always finds mine.",
  "You're my safest place.",
  "You dance even when there's no music.",
  "You believe in me louder than I do.",
  "The face you make when food is really good.",
  "You forgive fast and love slow and steady.",
  "You listen — actually listen.",
  "Your kindness to strangers.",
  "The way you say 'good morning' like it matters.",
  "You make me want to be better, softly.",
  "You're funny even when you don't try.",
  "You cry at movies and pretend you didn't.",
  "You taught me what home means.",
  "Your patience with my chaos.",
  "You're the calm in every storm.",
  "You still text me things you think of.",
  "You make me feel chosen, every day.",
  "The little sounds you make when you're focused.",
  "You give the world's best hugs.",
  "You're brave in ways you don't see.",
  "You remember the coffee order.",
  "You're my favorite conversation.",
  "You are proof the universe is on my side.",
  "You feel like a warm room in winter.",
  "You are my favorite hello and my hardest goodbye.",
  "Because it's you. It's always been you.",
];

export function Constellation() {
  const stars = useMemo(
    () =>
      REASONS.map((r, i) => ({
        id: i,
        top: 8 + Math.random() * 84,
        left: 6 + Math.random() * 88,
        size: 6 + Math.random() * 8,
        reason: r,
      })),
    [],
  );
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-hand text-lg text-gold">Chapter Four</p>
        <h2 className="mt-2 font-display text-5xl font-light text-ivory sm:text-6xl">
          The Constellation of You
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-serif italic text-ivory/60">
          Thirty stars. Thirty reasons. Tap one — I wrote them all for you.
        </p>
      </div>

      <div className="relative mx-auto mt-14 h-[70vh] min-h-[500px] w-full max-w-5xl overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-b from-midnight-deep via-black to-midnight-deep">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {stars.map((s, i) => {
            const n = stars[(i + 1) % stars.length];
            return (
              <line
                key={i}
                x1={`${s.left}%`}
                y1={`${s.top}%`}
                x2={`${n.left}%`}
                y2={`${n.top}%`}
                stroke="rgba(233,199,124,.12)"
                strokeWidth="1"
              />
            );
          })}
        </svg>
        {stars.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory transition hover:scale-150"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              boxShadow: "0 0 12px rgba(255,240,200,.9), 0 0 24px rgba(233,199,124,.6)",
              animation: `pulse ${2 + (s.id % 4)}s ease-in-out infinite`,
            }}
            aria-label={`Star ${s.id + 1}`}
          />
        ))}
        <style>{`@keyframes pulse{0%,100%{opacity:.7;transform:translate(-50%,-50%) scale(.9)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.2)}}`}</style>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-gold/30 bg-midnight/70 p-10 text-center shadow-2xl backdrop-blur-2xl"
              style={{ boxShadow: "0 0 80px rgba(233,199,124,.25)" }}
            >
              <div className="text-3xl">✨</div>
              <p className="mt-4 font-hand text-gold">Reason #{active + 1}</p>
              <p className="mt-4 font-serif text-2xl italic leading-relaxed text-ivory">
                {stars[active].reason}
              </p>
              <button onClick={() => setActive(null)} className="mt-8 text-xs uppercase tracking-widest text-ivory/50 hover:text-gold">
                Close star
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}