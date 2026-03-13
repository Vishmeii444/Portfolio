import SpotlightCard from "../components/bits/SpotlightCard";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "Personal Portfolio",
      description: "Built using react bits",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      link: "#"
    },
    {
      title: "Cookimate",
      description: "SDGP Project",
      tech: ["Next.js", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "BookFour",
      description: "A book store website",
      tech: ["React Native", "Firebase", "Node.js"],
      link: "#"
    },
    {
      title: "Estate Management Application",
      description: "Advanced Client-Side Development Coursework",
      tech: ["Node.js", "Express", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1E3226] pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* BIG PAGE HEADING */}
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-[#CCB363] uppercase tracking-tighter"
          >
            Projects
          </motion.h1>
          <div className="h-1 w-20 bg-[#CCB363] mx-auto mt-4" />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#fbedc3]/50 font-mono mt-6 text-sm tracking-widest uppercase"
          >
            // Selected digital experiences and engineering works
          </motion.p>
        </header>

        {/* PROJECTS GRID (Now centered and full width) */}
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
                <div className="p-8 h-full flex flex-col justify-between min-h-[320px]">
                  <div>
                    <h3 className="text-white font-bold text-3xl mb-4 italic font-['Outfit']">
                      {project.title}
                    </h3>
                    <p className="text-[#fbedc3]/70 leading-relaxed text-lg mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#CCB363] text-xs font-mono tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.link}
                      className="group inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-[0.2em] hover:text-[#CCB363] transition-all"
                    >
                      View Project 
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
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