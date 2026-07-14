import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photo1 from "../../assests/photo1.jpg";
import photo2 from "../../assests/photo2.jpg";
import photo3 from "../../assests/photo3.jpg";
import photo4 from "../../assests/photo4.jpg";

import love1 from "../../assests/love1.mp4";
import love2 from "../../assests/love2.mp4";
import love3 from "../../assests/love3.jpg";
import love4 from "../../assests/love4.jpg";

import together1 from "../../assests/together1.mp4";
import together2 from "../../assests/together2.mp4";
import together3 from "../../assests/together3.mp4";
import together4 from "../../assests/together4.jpg";

import little1 from "../../assests/little1.mp4";
import little2 from "../../assests/little2.mp4";
import little3 from "../../assests/little3.jpg";
import little4 from "../../assests/little4.mp4";

import special from "../../assests/special.mp4";
import special2 from "../../assests/special (1).jpg";
import special1 from "../../assests/special (2).jpg";
import special6 from "../../assests/special (3).jpg";
import special7 from "../../assests/special (4).jpg";
import special8 from "../../assests/special (5).jpg";
import special9 from "../../assests/special (6).jpg";
import special10 from "../../assests/special (7).jpg";
import special5 from "../../assests/special (8).jpg";
import special4 from "../../assests/special (9).jpg";
import special3 from "../../assests/special (10).jpg";

const EPISODES = [
  {
    n: 1,
    title: "The Beginning",
    tag: "How a hello became everything.",
    color: "from-indigo-900 to-midnight",
    message: `It started as hey and it's beautiful btt wall. But to be exact it started when we saw each other in bus...but I think it's okay we had that moment only, that's why for us universe really worked very well,we didn't get to know each other it was better for us. But the moment we got to know each other, eventually we were turning into each other back to have...nd to be continued`,
    photos: [
      { type: "image", src: photo1 },
      { type: "image", src: photo2 },
      { type: "image", src: photo3 },
      { type: "image", src: photo4 },
    ],
  },

  {
    n: 2,
    title: "Falling in Love",
    tag: "The moments we knew.",
    color: "from-rose-900 to-midnight",
    message: `Recap- we were turning into each other's back.
So it was time universe finally wanted us to meet.So it made me watch movie rockstar where he made me focus onto "Away from the concept of right and wrong doings, there is a field, I'll meet u there." 
So everything started bw us and to be continued`,

    photos: [
      { type: "video", src: love1 },
      { type: "video", src: love2 },
      { type: "image", src: love3 },
      { type: "image", src: love4 },
    ],
  },

  {
    n: 3,
    title: "Adventures Together",
    tag: "Cities, roads, sunsets.",
    color: "from-amber-900 to-midnight",
    message: `Recap - We met in real life.
So We were too attached,btt it was turning into toxic relation. We decided to meet, whenever we got to meet, eventually everything started being different.We got to understand each other in a more better, saw each other best and worst version in different cities, different streets  and to be continued...`,

    photos: [
      { type: "video", src: together1 },
      { type: "video", src: together2 },
      { type: "video", src: together3 },
      { type: "image", src: together4 },],
  },

  {
    n: 4,
    title: "Little Things About You",
    tag: "The details I adore.",
    color: "from-fuchsia-900 to-midnight",
    message: `Recap - being toxic but got to know each other.
So now I got to see ur better version when we met. That u r different how u r on d call. U treat people with kindness, respect and to enjoy with them.U r manly, athletics,and the main thing have a good heart. Jb bhi m ruthi hu in real life u did ur best to make me feel happy,safe and secure.`,

    photos: [
      { type: "video", src: little1 },
      { type: "video", src: little2 },
      { type: "image", src: little3 },
      { type: "video", src: little4 },],
  },

  {
    n: 5,
    title: "Birthday Special",
    tag: "Today. Us. Forever.",
    color: "from-yellow-800 to-midnight",
    message: `Recap - happy wid u.
These r the life moments u had, wanted to remind u.Irrespective of people who stayed and who didn't, just always remember u did whatever u could do for them.So if anyone who is not here , it was meant to be not.If universe played so well for us. Always believe universe played that too for ur goodness and wid a purpose only. U have me 🫶🏻🫂`,

    photos: [
      { type: "video", src: special },
      { type: "image", src: special1 },
      { type: "image", src: special2 },
      { type: "image", src: special3 },
      { type: "image", src: special4 },
      { type: "image", src: special5 },
      { type: "image", src: special6 },
      { type: "image", src: special7 },
      { type: "image", src: special8 },
      { type: "image", src: special9 },
      { type: "image", src: special10 },],
  },
];


export function OurStory() {
  const [open, setOpen] = useState<number | null>(null);
  const ep = EPISODES.find((e) => e.n === open);

  return (
    <section className="relative min-h-screen bg-midnight-deep px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-hand text-lg text-gold">Chapter Two</p>
        <h2 className="mt-2 font-display text-5xl font-light tracking-widest text-ivory sm:text-7xl">
          OUR STORY
        </h2>
        <p className="mt-3 max-w-xl font-serif italic text-ivory/60">
          A five-part series. Streaming now, only for you.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EPISODES.map((e, i) => (
            <motion.button
              key={e.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setOpen(e.n)}
              className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-midnight text-left shadow-2xl"
            >
              <div className={`aspect-video bg-gradient-to-br ${e.color}`}>
                <div className="flex h-full items-center justify-center text-6xl opacity-40 transition group-hover:scale-110">
                  🎬
                </div>
              </div>
              <div className="p-5">
                <p className="font-hand text-sm text-gold">Episode {e.n}</p>
                <h3 className="mt-1 font-display text-2xl text-ivory">{e.title}</h3>
                <p className="mt-1 text-sm text-ivory/60">{e.tag}</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-gold-soft opacity-0 transition group-hover:opacity-100">
                  ▶ Play episode
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {ep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent bg-midnight-deep/95 p-6 backdrop-blur-xl"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent rounded-3xl border border-gold/30 bg-midnight/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 rounded-full border border-ivory/20 px-3 py-1 text-sm text-ivory/70 hover:border-gold hover:text-gold"
              >
                ✕
              </button>
              <p className="font-hand text-gold">Episode {ep.n}</p>
              <h3 className="mt-1 font-display text-4xl text-ivory sm:text-5xl">{ep.title}</h3>
              <p className="mt-2 font-serif italic text-ivory/60">{ep.tag}</p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {ep.photos.map((file, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-2xl border border-gold/20 bg-black shadow-2xl"
                  >
                    {file.type === "video" ? (
                      <video
                        src={file.src}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-64 w-full object-contain bg-black" />
                    ) : (
                      <img
                        src={file.src}
                        alt={`Photo ${i + 1}`}
                        className="h-64 w-full object-contain bg-black" />
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-gold/20 bg-midnight-deep/60 p-6">
                <h4 className="mb-3 font-display text-2xl text-gold">
                  A Letter For You 💛
                </h4>

                <p
                  className="whitespace-pre-line font-serif leading-8 text-lg text-ivory/80"
                >
                  {ep.message}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}