import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const Philosophy = () => {
  return (
    <div className="relative bg-black flex flex-col items-center pt-[200px] pb-20 px-4 text-center overflow-hidden">
      {/* Matrix-style Particles */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 25 },
            size: { value: 1.5 },
            color: { value: "#00ff00" },
            move: { speed: 0.3 },
            opacity: { value: 0.1 },
          },
          background: { color: "#000000" },
          fullScreen: { enable: false },
        }}
      />

      {/* Radial background tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a0a0a,_#000)] opacity-70 z-0" />

      {/* Icon */}
      <motion.img
        src="philosophy.png"
        alt="philosophy"
        className="w-[100px] md:w-[120px] mb-6 animate-bounce z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Main Quote */}
      <motion.h2
        className="text-white mt-6 mb-6 font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center max-w-4xl mx-auto tracking-tight z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <span className="text-green-400 font-bold text-5xl lg:text-6xl animate-pulse">“</span>
        To write code that feels... alive — that's the magic.
        <span className="text-green-400 font-bold text-5xl lg:text-6xl animate-pulse">”</span>
        <br />
        <span className="text-green-300 italic font-medium block mt-3">
          — Turning logic into emotion through UI.
        </span>
      </motion.h2>

      {/* Personal Mission */}
      <motion.div
        className="max-w-[460px] z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <p className="text-white/60 font-roboto text-base font-light leading-7 tracking-wide">
          I build interfaces that don’t just work — they resonate.
          <br className="hidden sm:block" />
          Every detail, every transition, every pixel matters.
          <br />
          This is more than a job — it's the art of interaction.
        </p>
      </motion.div>
    </div>
  );
};

export default Philosophy;
