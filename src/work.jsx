import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    img: "ecommerce.png",
    Github: "https://github.com/pradeepkumar6382/Halleyx",
    Live: "https://ecommerce-project-u172.vercel.app/",
    description:
      "A full-stack e-commerce web application featuring separate portals for customers and admins. Customers can register, browse products, manage profiles, and place orders. Admins can manage products, customers, and orders with full CRUD capabilities, view dashboard stats, impersonate customers for support, and customize portal branding."
      "Authentication: JWT-based login for both roles with secure password hashing"
      "Admin Access: Email: admin@example.com | Password: admin123"
      "Features include pagination, filtering, order tracking, and session-based impersonation with a clear UI banner.",
    tools: ["MongoDB", "Express.js", "React.js", "Node.js","JWT","Bcrypt"],
  },
  {
    title: "Random Quote Generator",
    img: "randomquote.png",
    Github: "https://github.com/pradeepkumar6382/Randomquote",
    Live: "https://randomquote-eosin.vercel.app/",
    description:
      "A beautifully designed Random Quote Generator built with React.js, styled using Tailwind CSS, and powered by the API Ninjas Quotes API. Each visit or button click fetches a fresh, inspiring quote with a visually aesthetic background.",
    tools: ["React.js", "Tailwind CSS", "API Ninjas"],
  },
  {
    title: "Redux-based To-Do List App",
    img: "todolist.png",
    Github: "https://github.com/pradeepkumar6382/Todolist",
    Live: "https://todolist-ecru-xi.vercel.app/",
    description:
      "Simple yet powerful To-Do List App powered entirely by Redux. Uses global state for better scalability and efficient task management.",
    tools: ["React.js", "Redux", "JavaScript"],
  },
];

const Work = () => {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black py-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col items-center">
        <img
          src={"work.png"}
          className="w-20 md:w-24 mb-4 animate-bounce"
          alt="Work Icon"
        />
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 text-center font-bebas text-4xl md:text-6xl mb-16 drop-shadow-lg">
          LATEST PROJECTS
        </h2>
      </div>

      <div className="flex flex-col gap-28">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: index * 0.3 }}
            className="relative group flex flex-col lg:flex-row gap-10 items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 shadow-md hover:shadow-orange-400/30 transition duration-300"
          >
            {/* Glowing Gradient Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-lg transition-all duration-300 z-0"></div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl relative z-10">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl object-cover w-full h-[220px] md:h-[280px] lg:h-[320px] transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"></div>
            </div>

            {/* Info Section */}
            <div className="w-full lg:w-1/2 text-white space-y-4 z-10">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
              <p className="text-white/60 text-sm md:text-base">
                <span className="font-semibold text-orange-400">Tools:</span>{" "}
                {project.tools.join(", ")}
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-5 py-2 text-sm font-semibold bg-orange-600 rounded-md overflow-hidden group hover:bg-orange-700 transition"
                >
                  <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></span>
                  View Code
                </a>
                <a
                  href={project.Live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-5 py-2 text-sm font-semibold bg-green-600 rounded-md overflow-hidden group hover:bg-green-700 transition"
                >
                  <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></span>
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
