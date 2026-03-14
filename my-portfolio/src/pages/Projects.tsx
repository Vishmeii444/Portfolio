import SpotlightCard from "../components/bits/SpotlightCard";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "Personal Portfolio",
      description: "Built using react bits",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      link: "#",
    },
    {
      title: "Cookimate",
      description: "SDGP Project",
      tech: ["Next.js", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "BookFour",
      description: "A book store website",
      tech: ["React Native", "Firebase", "Node.js"],
      link: "#",
    },
    {
      title: "CabinThree ",
      description:
        "An estate agent application used to handle properties with functionalities such as liking and unliking properties as well as filtering out property options.",
      tech: ["React", "HTML", "CSS"],
      link: "https://cabinthree.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E3226] pt-32 pb-20 px-4 md:px-8">
      {" "}
      {/* Reduced horizontal padding */}
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Keep consistent max-width */}
        {/* LEFT-ALIGNED HEADER */}
        <header className="mb-12 text-left">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black text-[#CCB363] uppercase tracking-tighter"
          >
            Projects.
          </motion.h1>

          <div className="h-[2px] w-12 bg-[#CCB363] mt-2 ml-0" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#fbedc3]/50 font-mono mt-4 text-[10px] tracking-[0.3em] uppercase block"
          >
            // Digital Portfolio 2026
          </motion.p>
        </header>
        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SpotlightCard>
                <div className="p-8 h-full flex flex-col justify-between min-h-[300px]">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-4 italic font-['Outfit']">
                      {project.title}
                    </h3>
                    <p className="text-[#fbedc3]/70 leading-relaxed text-base mb-8">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#CCB363] text-[10px] font-mono tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="group inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] hover:text-[#CCB363] transition-all"
                    >
                      View Project{" "}
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
