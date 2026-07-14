import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = [
  {
    title: "Open when you're happy", emoji: "💌", body: "Hello love, I always wish u to be happyyy 🩷If u r happy rn u should be grateful to me bcoz it's me after ur mother who would be praying for ur happiness in my every prayer.I always believe u will turn out in a very good and great and humble person i would have ever known.U would be such a grt ideal person for yr kidss, my love.🤌🏼🩷"
  },
  {
    title: "Open when you're stressed", emoji: "💌", body: `
Hello 
Ik u r stressed, and tm stress m idhr aaoge bhi nhi. Bcoz ik u focus more on finding solution immediately. But trust me sometimes it's good to take break and take deep breath to find better solution. Dont panic urself. Just have confidence u can cope up from anything that's d personality u have and the best thing u have me with you Who is gonna support u , motivate u and be with you always. Chilll ... lets have biryani??😌🫶🏻`},
  {
    title: "Open when you miss me", emoji: "💌", body: `What? Missing me? Then text me, let me know , yha aakr pdhne ki koi need nhi h, just let me know. What? U r blocked? Then email me , paytm me , gpay me or whatever 😒 
No excuse tht u can't express.  Do it before its too late 😌🌻🪸
Imagine u r reading this I'm no more in this world🙂` },
  {
    title: "Birthday Letter", emoji: "🎂", body: `Hello My Coral Reef,
It's your birthday todayyyy, yooyoooooo😭😌🫶🏻 . Wishing u the best years ahheaddd. I love you so much babu. 🫂🌻🫶🏻 I'm glad to be ur sunflower. 🫶🏻🌻
4 yrs ago we found each other , waise toh phle  hi u had flashback of our future but yeahh. I wish we will never regret our bond. I know we have been through a lot of things. We had toxic relationship, did mistakes , did hurt each other so badly, bit returning to each other was permanent. I know i have been so rude to u. Im really sorry babu 🫂. If for my mistakes if I will ha e chance I will apologize u by touching ur feet by totally layin on ground.
I know we did mistakes. But its our greatness that we are learning , changing our negatives for each other , and doing everything we can do for each other. As our 3rd yr of relationship starts, i think we have become more mature version of ourselves.  I will not say to forget past. Bcoz that's d reason we r becomin better  version of ourselves for each other. I will not say now more. But U should always remember this, I will always love you mycoral reef. Coral reef s yaad aaya the changes u made in urself makin me feel safe even more with you. And as same I will always try to be ur sunflower .

Infinite love 
Shundri.` },
];

export function Letters() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative min-h-screen bg-midnight px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-hand text-lg text-gold">Chapter Seven</p>
        <h2 className="mt-2 font-display text-5xl font-light text-ivory sm:text-6xl">Letters</h2>
        <p className="mt-3 max-w-xl font-serif italic text-ivory/60">
          For every mood, a letter. Open only when you need to.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {LETTERS.map((l, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6, rotate: -0.5 }}
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-lg border border-gold/25 bg-gradient-to-br from-ivory to-[oklch(0.9_0.03_80)] p-8 text-left shadow-2xl"
              style={{ boxShadow: "0 30px 60px rgba(0,0,0,.6)" }}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rotate-12 bg-blush/40 blur-2xl" />
              <div className="relative">
                <div className="text-4xl">{l.emoji}</div>
                <h3 className="mt-4 font-display text-2xl text-midnight-deep">{l.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-midnight/50 transition group-hover:text-midnight">
                  Tap to open →
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.7, rotateX: 90, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.7, rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-lg border border-gold/40 bg-gradient-to-br from-ivory to-[oklch(0.92_0.03_80)] p-10 text-midnight-deep shadow-2xl sm:p-14"
              style={{ boxShadow: "0 40px 100px rgba(0,0,0,.7), 0 0 60px rgba(233,199,124,.3)" }}
            >
              <div className="text-3xl">{LETTERS[open].emoji}</div>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl">{LETTERS[open].title}</h3>
              <div className="mt-6 border-t border-midnight/10 pt-6">
                <p className="font-serif text-lg leading-relaxed italic sm:text-xl">
                  {LETTERS[open].body}
                </p>
                <p className="mt-8 text-right font-hand text-2xl text-blush">— Always yours ❤</p>
              </div>
              <button onClick={() => setOpen(null)} className="mt-8 text-xs uppercase tracking-widest text-midnight/50 hover:text-blush">
                Fold letter back
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}