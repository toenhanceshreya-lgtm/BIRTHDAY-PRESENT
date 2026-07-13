import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photo1 from "../../assests/adv1.mp4";
import photo2 from "../../assests/adv2.mp4";
import photo3 from "../../assests/adv3.jpg";
import photo4 from "../../assests/adv4.jpg";
import photo5 from "../../assests/adv5.jpg";
import photo6 from "../../assests/adv6.mp4";
const PINS = [
  {
    name: "Where We Met",
    x: 22,
    y: 45,
    caption: "The place that started it all.",
    media: photo1,
    type: "video",
  },
  {
    name: "First Getaway",
    x: 40,
    y: 30,
    caption: "One suitcase, zero plans, all magic.",
    media: photo2,
    type: "video",
  },
  {
    name: "The Mountain Trip",
    x: 58,
    y: 22,
    caption: "Cold nights, warm blankets, endless talks.",
    media: photo3,
    type: "image",
  },
  {
    name: "Beach Days",
    x: 68,
    y: 60,
    caption: "Saltwater, sunburns, laughter.",
    media: photo4,
    type: "image",
  },
  {
    name: "That City Weekend",
    x: 80,
    y: 40,
    caption: "Lights, streets, us.",
    media: photo5,
    type: "image",
  },
  {
    name: "Our Little Corner",
    x: 32,
    y: 70,
    caption: "Not glamorous. Just ours.",
    media: photo6,
    type: "video",
  },
];

export function Adventures() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="relative min-h-screen bg-midnight-deep px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-hand text-lg text-gold">Chapter Six</p>
        <h2 className="mt-2 font-display text-5xl font-light text-ivory sm:text-6xl">Adventures Together</h2>
        <p className="mt-3 max-w-xl font-serif italic text-ivory/60">
          A map of every place you made unforgettable.
        </p>

        <div
          className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-midnight via-midnight-deep to-black"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(30,50,90,.5), transparent 50%), radial-gradient(circle at 70% 60%, rgba(60,30,80,.4), transparent 55%)",
          }}
        >
          <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="rgba(233,199,124,.3)" strokeWidth=".5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {PINS.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="absolute -translate-x-1/2 -translate-y-full group"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className="block h-4 w-4 rounded-full bg-gold transition group-hover:scale-150"
                style={{ boxShadow: "0 0 20px rgba(233,199,124,.9), 0 0 40px rgba(233,199,124,.5)" }}
              />
              <span className="mt-1 block whitespace-nowrap rounded-full bg-midnight/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-ivory/70 opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                {p.name}
              </span>
            </button>
          ))}
        </div>
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
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl border border-gold/30 bg-midnight/70 p-8 backdrop-blur-2xl sm:p-10"
            >
              <p className="font-hand text-gold">📍 Location</p>
              <h3 className="mt-1 font-display text-4xl text-ivory">{PINS[active].name}</h3>
              <p className="mt-2 font-serif italic text-ivory/60">{PINS[active].caption}</p>
              <div className="aspect-[4/5] flex items-center justify-center overflow-hidden rounded-xl border-8 border-amber-100 bg-neutral-900 shadow-2xl">
                {PINS[active].type === "image" ? (
                  <img
                    src={PINS[active].media}
                    alt={PINS[active].name}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <video
                    className="max-h-full max-w-full object-contain"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={PINS[active].media} type="video/mp4" />
                  </video>
                )}
              </div>
              <button onClick={() => setActive(null)} className="mt-6 text-xs uppercase tracking-widest text-ivory/50 hover:text-gold">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}