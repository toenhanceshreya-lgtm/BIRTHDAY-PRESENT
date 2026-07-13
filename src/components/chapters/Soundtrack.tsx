import { motion } from "framer-motion";
import audio3 from "../../assests/SANJU.mp3";
import audio1 from "../../assests/Aaj Se Teri.mp3";
import audio2 from "../../assests/Pikley .mp3";
import audio4 from "../../assests/Rozana .mp3";

const SONGS = [
  {
    title: "Our First Song",
    artist: "Arijit Singh",
    note: "The one that played the night everything changed.",
    audio: audio1,
  },
  {
    title: "Long Distance Anthem",
    artist: "Arijit Singh",
    note: "Miles apart, same three minutes.",
    audio: audio2,
  },
  {
    title: "Sunday Morning",
    artist: "Arijit Singh",
    note: "Sunlight, coffee, your voice.",
    audio: audio3,
  },
  {
    title: "Birthday Track",
    artist: "Arijit Singh",
    note: "For today. For you.",
    audio: audio4,
  },
];

export function Soundtrack() {
  return (
    <section className="relative min-h-screen bg-midnight px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-hand text-lg text-gold">Chapter Five</p>
        <h2 className="mt-2 font-display text-5xl font-light text-ivory sm:text-6xl">Our Soundtrack</h2>
        <p className="mt-3 max-w-xl font-serif italic text-ivory/60">
          Every relationship has a playlist. Ours has a whole B-side.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SONGS.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-gold/20 bg-midnight-deep/60 p-6 backdrop-blur-md"
              style={{ boxShadow: "0 20px 40px rgba(0,0,0,.5)" }}
            >
              <div className="relative mx-auto aspect-square w-full max-w-[220px]">
                <div
                  className="absolute inset-0 rounded-full bg-black transition-transform duration-[8s] group-hover:[transform:rotate(360deg)]"
                  style={{
                    background:
                      "radial-gradient(circle, #1a1a1a 20%, #000 22%, #0d0d0d 60%), repeating-radial-gradient(circle, #111 0 2px, #000 2px 4px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,.6), inset 0 0 20px rgba(0,0,0,.8)",
                  }}
                >
                  <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black bg-gradient-to-br from-gold to-blush" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl text-ivory">{s.title}</h3>
              <p className="text-sm text-gold-soft">{s.artist}</p>
              <p className="mt-3 font-serif text-sm italic text-ivory/60">"{s.note}"</p>
              <div className="mt-5 rounded-xl border border-gold/20 bg-black/30 p-3">
                <audio
                  controls
                  preload="metadata"
                  className="w-full rounded-lg"
                >
                  <source src={s.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}