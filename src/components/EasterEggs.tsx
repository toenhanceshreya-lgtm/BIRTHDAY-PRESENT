import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EasterEggs() {
  const [modal, setModal] = useState<null | { title: string; body: string; hand?: boolean }>(null);
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      {/* Floating heart, bottom-left */}
      <button
        onClick={() =>
          setModal({
            title: "You found the heart 💗",
            body: "This one's for the days I don't say it enough: you are the best thing that has ever happened to me. Thank you for being you.",
          })
        }
        className="fixed bottom-6 left-6 z-30 text-2xl transition hover:scale-125"
        style={{ animation: "hb 2.4s ease-in-out infinite", filter: "drop-shadow(0 0 10px rgba(233,144,180,.7))" }}
        aria-label="Secret heart"
      >
        💗
      </button>
      <style>{`@keyframes hb{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}`}</style>

      {/* Tiny star, top-right */}
      <button
        onClick={() =>
          setModal({
            title: "Inside joke unlocked ⭐",
            body: "\"You know the peanut butter. Yeah — that one. Don't act like you don't remember.\" 😏",
          })
        }
        className="fixed right-6 top-24 z-30 text-lg opacity-70 transition hover:opacity-100 hover:scale-150"
        aria-label="Secret star"
      >
        ✦
      </button>

      {/* Polaroid, bottom-right */}
      <button
        onClick={() => setFlipped((v) => !v)}
        className="fixed bottom-6 right-6 z-30 h-24 w-20 [perspective:800px] sm:h-28 sm:w-24"
        aria-label="Secret polaroid"
      >
        <div
          className="relative h-full w-full rounded-sm bg-ivory shadow-2xl transition-transform duration-700 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-end p-1 [backface-visibility:hidden]">
            <div className="h-3/4 w-full bg-gradient-to-br from-blush/40 to-midnight/40" />
            <span className="mt-1 font-hand text-[9px] text-midnight-deep">flip me</span>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center p-2 text-center [backface-visibility:hidden]"
            style={{ transform: "rotateY(180deg)" }}
          >
            <span className="font-hand text-[10px] leading-tight text-midnight-deep">
              "I'll love you<br />in every version<br />of us." ❤
            </span>
          </div>
        </div>
      </button>

      {/* Hidden message trigger — tiny dot in footer area, discovered by hover */}
      <button
        onClick={() =>
          setModal({
            title: "A secret message",
            body: "\"If you found this, you know me better than anyone. ❤\"",
            hand: true,
          })
        }
        className="fixed left-1/2 bottom-2 z-30 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ivory/20 transition hover:text-gold"
        aria-label="Hidden message"
      >
        · · ·
      </button>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-gold/30 bg-midnight/80 p-8 text-center backdrop-blur-2xl"
              style={{ boxShadow: "0 0 80px rgba(233,199,124,.3)" }}
            >
              <h4 className="font-display text-2xl text-ivory">{modal.title}</h4>
              <p className={`mt-4 ${modal.hand ? "font-hand text-2xl text-gold-soft" : "font-serif italic text-ivory/80"}`}>
                {modal.body}
              </p>
              <button onClick={() => setModal(null)} className="mt-8 text-xs uppercase tracking-widest text-ivory/50 hover:text-gold">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}