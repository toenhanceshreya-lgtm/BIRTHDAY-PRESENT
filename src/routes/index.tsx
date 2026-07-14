import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Prologue } from "../components/Prologue";
import { Welcome } from "../components/chapters/Welcome";
import { OurStory } from "../components/chapters/OurStory";
import { Museum } from "../components/chapters/Museum";
import { Constellation } from "../components/chapters/Constellation";
import { Soundtrack } from "../components/chapters/Soundtrack";
import { Adventures } from "../components/chapters/Adventures";
import { Letters } from "../components/chapters/Letters";
import { Future } from "../components/chapters/Future";
import { Finale } from "../components/chapters/Finale";
import { EasterEggs } from "../components/EasterEggs";
import birthdayMusic from "../assests/birth.mp3";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const beginRef = useRef<HTMLDivElement | null>(null);

  const handleEnter = () => {
    setEntered(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 300);
  };

  const scrollToStory = () => {
    document.getElementById("chapter-2")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen scroll-smooth bg-midnight-deep text-ivory antialiased">
      <audio
        ref={audioRef}
        src={birthdayMusic}
        loop
      />

      <AnimatePresence>
        {!entered && <Prologue key="prologue" onEnter={handleEnter} />}
      </AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Persistent music toggle */}
          <button
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-50 rounded-full bg-gold px-5 py-3 text-black shadow-xl transition hover:scale-110"
          >
            {isPlaying ? "🔊 Music On" : "🔇 Music Off"}
          </button>

          <Welcome onBegin={scrollToStory} />
          <div ref={beginRef} id="chapter-2"><OurStory /></div>
          <Museum />
          <Constellation />
          <Soundtrack />
          <Adventures />
          <Letters />
          <Future />
          <Finale />
          <EasterEggs />
        </motion.div>
      )}
    </div>
  );
}
