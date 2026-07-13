import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
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


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);
  const beginRef = useRef<HTMLDivElement | null>(null);

  const handleEnter = () => {
    setEntered(true);
  };

  const scrollToStory = () => {
    document.getElementById("chapter-2")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="relative min-h-screen scroll-smooth bg-midnight-deep text-ivory antialiased">


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
