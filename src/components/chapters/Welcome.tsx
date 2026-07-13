import { motion } from "framer-motion";
import { StarField } from "../StarField";
// @ts-ignore: Allow importing image asset without explicit declaration
import favourite from "../../assests/favourite.jpg";

export function Welcome({ onBegin }: { onBegin: () => void }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-midnight-deep px-6 py-24 text-center">
      <StarField count={150} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(30,30,80,.4), transparent 70%)" }} />
      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="mx-auto mb-10 aspect-[4/5] w-64 overflow-hidden rounded-2xl border border-gold/30 bg-midnight/60 shadow-2xl sm:w-80"
          style={{ boxShadow: "0 30px 80px rgba(0,0,0,.6), 0 0 60px rgba(233,199,124,.15)" }}
        >
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-midnight to-midnight-deep text-xs uppercase tracking-widest text-ivory/40">
            <img
              src={favourite}
              alt="Our favorite photo"
              className="w-full h-full object-cover rounded-2xl"
            />          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 font-hand text-lg text-gold"
        >
          Chapter One
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-display text-5xl font-light leading-tight text-ivory sm:text-7xl"
          style={{ textShadow: "0 0 40px rgba(233,199,124,.3)" }}
        >
          Happy Birthday,<br />SARTHAK <span className="text-blush">❤</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-6 max-w-xl font-serif text-lg text-ivory/70 italic sm:text-xl"
        >
          "Welcome to a place built from four years of laughter, adventures, ordinary moments, and unforgettable memories."
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 font-hand text-xl text-gold-soft"
        >
          Every page you open is a little piece of my heart.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          onClick={onBegin}
          className="mt-12 rounded-full border border-gold/50 bg-transparent px-10 py-4 font-display text-lg tracking-widest text-ivory backdrop-blur-md transition hover:border-gold hover:bg-gold/10"
          style={{ boxShadow: "0 0 40px rgba(233,199,124,.2)" }}
        >
          Begin Our Story →
        </motion.button>
      </div>
    </section>
  );
}