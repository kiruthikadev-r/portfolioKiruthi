import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { profile } from "../data/profile";
import { useReducedMotion } from "../hooks/useReducedMotion";
import kiruthikaPhoto from "../assets/kiruthika-photo.jpg";

const HEADLINE_WORDS = profile.heroHeadline.split(" ");

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-ink-700 pt-16"
    >
      {/* background: technical grid + restrained glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-lime-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-0">
        <div>
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono inline-block rounded-full border border-ink-700 px-4 py-1.5 text-xs tracking-[0.25em] text-lime-400"
          >
            {profile.heroStatus}
          </motion.span>

          <h1 className="font-display mt-6 text-[2.6rem] font-bold leading-[1.02] text-white sm:text-6xl md:text-7xl">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-display mt-5 text-2xl font-semibold text-ink-200 sm:text-3xl"
          >
            I'm <span className="text-lime-400">Kiruthika R</span>.
          </motion.h2>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            {profile.heroSupport}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Explore My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-lime-400 hover:text-lime-400"
            >
              <Mail size={16} /> Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-3xl border border-ink-700 bg-ink-900/60 shadow-glow" />
          <div className="absolute inset-3 overflow-hidden rounded-2xl">
            <img
              src={kiruthikaPhoto}
              alt="Portrait of Kiruthika R"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          </div>
          <div className="absolute left-6 top-6 h-2 w-2 rounded-full bg-lime-400" />
          <div className="absolute bottom-8 right-8 font-mono text-[11px] tracking-widest text-ink-200">
            &lt;dev/&gt;
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-400 hover:text-lime-400 sm:flex"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <ChevronDown size={16} className={reduced ? "" : "animate-bounce"} />
      </motion.button>
    </section>
  );
}
