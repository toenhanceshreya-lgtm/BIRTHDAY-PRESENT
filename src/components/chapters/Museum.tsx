import { motion } from "framer-motion";
import photo1 from "../../assests/museum/firstpic.jpg";
import photo2 from "../../assests/museum/latenightdrive.jpg";
import photo3 from "../../assests/museum/firsttrip.mp4";
import photo4 from "../../assests/museum/candle nightdinner.jpg";
import photo5 from "../../assests/museum/quitmorning.mp4";
import photo6 from "../../assests/museum/ustbeacuuse.jpg";
const FRAMES = [
  {
    title: "The First Photo",
    date: "Spring, Year One",
    caption: "Before we knew what we were becoming.",
    media: photo1,
    type: "image",
  },
  {
    title: "Late Night Drives",
    date: "Summer, Year One",
    caption: "You, me, the city lights, no destination.",
    media: photo2,
    type: "image",
  },
  {
    title: "Our First Trip",
    date: "Autumn, Year Two",
    caption: "New places always felt like home with you.",
    media: photo3,
    type: "video",
  },
  {
    title: "That One Sunset",
    date: "Winter, Year Two",
    caption: "The sky matched the way I felt.",
    media: photo4,
    type: "image",
  },
  {
    title: "A Quiet Morning",
    date: "Spring, Year Three",
    caption: "The ordinary became extraordinary.",
    media: photo5,
    type: "video",
  },
  {
    title: "Just Because",
    date: "Year Four",
    caption: "Still falling. Every single day.",
    media: photo6,
    type: "image",
  },
];

export function Museum() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-midnight-deep via-midnight to-midnight-deep px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-hand text-lg text-gold">Chapter Three</p>
        <h2 className="mt-2 font-display text-5xl font-light text-ivory sm:text-6xl">The Museum of Us</h2>
        <p className="mt-3 max-w-xl font-serif italic text-ivory/60">
          A private gallery. No crowds. Just moments we curated together.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {FRAMES.map((f, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-sm border-[10px] border-ivory/90 bg-midnight-deep p-1 transition-shadow"
                style={{
                  boxShadow: "0 30px 60px rgba(0,0,0,.7), 0 0 30px rgba(233,199,124,.1)",
                }}
              >
                {f.type === "image" ? (
                  <img
                    src={f.media}
                    alt={f.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={f.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay transition group-hover:opacity-70"
                  style={{ background: "radial-gradient(ellipse at top, rgba(233,199,124,.4), transparent 60%)" }}
                />
              </div>
              <figcaption className="mt-5 text-center">
                <h3 className="font-display text-2xl text-ivory">{f.title}</h3>
                <p className="mt-1 font-hand text-sm text-gold">{f.date}</p>
                <p className="mt-2 font-serif text-sm italic text-ivory/60">{f.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}