import { motion } from "framer-motion";

const DREAMS = [
  { title: "Watch a sunrise together", where: "Somewhere quiet." },
  { title: "Take that trip we keep talking about", where: "Passports ready." },
  { title: "Build a tiny home for two", where: "With too many plants." },
  { title: "Learn to cook something ridiculous", where: "Together, badly, happily." },
  { title: "Dance at your birthday, ten years from now", where: "Same us. Slower song." },
  { title: "Grow old on the same porch", where: "Same tea. Same view." },
];

export function Future() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-midnight-deep via-midnight to-midnight-deep px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-hand text-lg text-gold">Chapter Eight</p>
        <h2 className="mt-2 font-display text-5xl font-light text-ivory sm:text-6xl">Our Future</h2>
        <p className="mt-3 max-w-xl font-serif italic text-ivory/60">
          A bucket list of small dreams and big ones. Every one waiting for us.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DREAMS.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gold/25 bg-midnight/50 p-8 backdrop-blur-md"
              style={{ boxShadow: "0 20px 40px rgba(0,0,0,.5), inset 0 0 20px rgba(233,199,124,.03)" }}
            >
              <span className="font-hand text-gold">Dream #{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-2xl leading-snug text-ivory">{d.title}</h3>
              <p className="mt-3 font-serif text-sm italic text-ivory/60">{d.where}</p>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
              <p className="mt-3 text-xs uppercase tracking-widest text-ivory/40">To be continued...</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}