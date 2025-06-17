import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="relative bg-black flex flex-col items-center pt-[150px] pb-[120px] text-center overflow-hidden">
        {/* Glowing Background Ring */}
        <div className="absolute w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl top-20 z-0 animate-pulse" />

        {/* Contact Icon */}
        <motion.img
          src="contact.png"
          className="w-[100px] md:w-[120px] mb-6 animate-bounce z-10"
          alt="Contact Icon"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Profile Picture with Glow */}
        <motion.img
          src="Myprofilepic.jpg"
          alt="Frontend Developer"
          className="w-40 h-40 rounded-full object-cover shadow-[0_0_25px_rgba(0,255,0,0.4)] hover:scale-105 transition duration-500 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* Headline */}
        <motion.h2
          className="text-white pt-6 font-outfit text-4xl sm:text-6xl text-center font-bold tracking-tight z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          LET’S BUILD SOMETHING AWESOME.
        </motion.h2>

        {/* Short Bio */}
        <motion.p
          className="text-white/60 w-[90%] max-w-xl mt-4 mb-6 text-center font-roboto text-base font-light leading-7 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          I’m actively seeking a Frontend Developer role. I love crafting pixel-perfect, smooth, animated UIs using React.js, Tailwind CSS, and Framer Motion.
        </motion.p>

 
        <motion.a
          href="mailto:pradeepkumar17301@gmail.com"
          className="z-10 mt-2 text-orange-500 bg-orange-500/10 border border-orange-500 rounded-full px-6 py-3 font-semibold hover:bg-orange-500 hover:text-black transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          📩 pradeepkumar17301@gmail.com
        </motion.a>

        <motion.p
          className="text-white mt-3 text-sm z-10 hover:scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          📞 +91-78240-09946
        </motion.p>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white/30 text-xs text-center py-4 font-roboto border-t border-white/10">
        © {new Date().getFullYear()} Pradeep Kumar — React Frontend Developer.
      </footer>
    </>
  );
};

export default Contact;
