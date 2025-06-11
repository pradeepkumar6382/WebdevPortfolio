import { motion } from "framer-motion";

const projects = [
  {
    title: "YouTube Video",
    videoSrc: 'https://www.youtube.com/embed/Q5wtDX4HYWM?si=kRH6UgJtVvqa2n2k',
    description:
      "A fast-paced YouTube video combining random but engaging topics. Utilized visual pacing, smart cuts, and smooth transitions to keep the viewer hooked throughout.",
    tools: ["Premiere Pro"],
    clientReview: "“Exactly what I was looking for. Super engaging and flows perfectly!”",
    client: "— Praveen, Content Creator (India)",
  },
  {
    title: "Cat video",
    videoSrc: 'https://www.youtube.com/embed/HsBgkjY6pOM?si=0eBGuQN879d_YthG',
    description:
      "A playful video created using cat content. The edit emphasized cuteness, emotion, and virality potential, tailored for social media impact.",
    tools: ["CapCut Pro", "Runway ML"],
    clientReview: "“Absolutely adorable! You nailed the pacing and mood.”",
    client: "— Emily Shaw, Pet Influencer (UK)",
  },
  {
    title: "WaterSaver: Product Ad for Africa",
    videoSrc: 'https://www.youtube.com/embed/uw5hPp0P2tA?si=8YLP9vO9f1KR0JbP',
    description:
      "A product advertisement crafted to highlight water-saving solutions for rural African communities. Focused on emotional storytelling with powerful visuals and messaging.",
    tools: ["CapCut Pro"],
    clientReview: "“Thank you for bringing our mission to life. Professional and meaningful.”",
    client: "— Daniel Okeke, Founder of AquaAid (Nigeria)",
  },
  {
    title: "Life is Now: A Motivational Visual",
    videoSrc: 'https://www.youtube.com/embed/dIdNJb06rZs?si=rX5h68dQGJVHy3FA',
    description:
      "A motivational video project combining cinematic footage, energetic typography, and an uplifting message about living life to the fullest.",
    tools: ["CapCut Pro", "Premiere Pro"],
    clientReview: "“This gave me goosebumps. Loved the visual storytelling!”",
    client: "— Kavya Iyer, Mindset Coach (India)",
  },
  {
    title: "YouTube Scripted: Path to Success",
    videoSrc: 'https://www.youtube.com/embed/NFVi4eNNtXU?si=UGL_Wczm_dbJ_dTy',
    description:
      "A structured and cleanly edited YouTube video focused on tips to grow on YouTube. Included cutaways, lower-thirds, and voice-sync techniques.",
    tools: ["CapCut Pro"],
    clientReview: "“Clean edits, great flow — exactly what I envisioned!”",
    client: "— Lucas Thompson, Growth Strategist (USA)",
  },
];

const Work = () => {
  return (
    <div className="bg-black flex flex-col items-center py-20 px-4 md:px-10 lg:px-20">
      <img
        src={"../src/work.png"}
        className="w-[80px] md:w-[100px] mb-4 animate-bounce"
        alt="work"
      />
      <h2 className="text-white font-bebas text-[36px] md:text-[48px] lg:text-[64px] mb-12 text-center">
        LATEST PROJECTS
      </h2>

      <div className="flex flex-col gap-20 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col lg:flex-row gap-8 items-start lg:items-center"
          >
            {/* Video with hover animation */}
            <div className="w-full lg:w-1/2 aspect-video transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden">
              <iframe
                src={project.videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            </div>

            {/* Text content */}
            <div className="text-white lg:w-1/2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bebas text-orange-500">{project.title}</h3>
              <p className="text-white/80 text-sm md:text-base">{project.description}</p>
              <p className="text-white/60 text-sm md:text-base">
                <span className="font-semibold text-orange-400">Tools:</span> {project.tools.join(", ")}
              </p>
              <p className="italic text-white/50 text-sm">Client Review: {project.clientReview} ⭐⭐⭐⭐⭐</p>
              <p className="text-white/30 text-xs">{project.client}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
