import { motion } from "framer-motion";
// import { motion } from "framer-motion";

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: 20,
    filter: "blur(20px)",
    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const ProfileImage = () => {
  return (
    <motion.img
      src="profile.png"
      alt="React Developer"
      className="object-contain max-h-[700px] rounded-3xl shadow-2xl"
      variants={imageVariants}
      initial="hidden"
      animate="visible"
    />
  );
};


const Mainpage = () => {
  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full lg:w-1/2 xl:w-2/5 text-center lg:text-left text-white space-y-8"
        >
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[100px] font-outfit uppercase tracking-widest leading-tight"
          >
            CODE. CRAFT.
            <br />
            <span className="text-green-400">CREATE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
          >
            I’m a React.js developer passionate about building immersive web experiences.
            I blend React, Tailwind, and Framer Motion to build beautiful, fast, and powerful UIs.
          </motion.p>

          {/* Download CV Button */}
          <motion.a
            href="/Pradeep_Kumar_Frontend_Developer_Resume.pdf"
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-8 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-colors duration-300 shadow-md"
          >
            ⬇ Download Resume
          </motion.a>
        </motion.div>

        {/* Image Side */}
    <motion.div
  initial="hidden"
  animate="visible"
  transition={{ delay: 1.5 }}
  className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
>
  <ProfileImage />
</motion.div>
      </div>
    </div>
  );
};

export default Mainpage;
