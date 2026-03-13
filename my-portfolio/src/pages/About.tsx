import ProfileCard from "../components/bits/ProfileCard";
import SpotlightCard from "../components/bits/SpotlightCard";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Framer Motion",
    "Tailwind CSS",
    "MongoDB",
  ];

  return (
    <div className="min-h-screen bg-[#1E3226] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN: THE PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // Animates when it comes into view
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-4 flex justify-center lg:block"
        >
          <div className="sticky top-32">
            <ProfileCard
              name="Vishmi"
              title="Frontend Developer"
              handle="Vishmeii444"
              status="Open to Work"
              contactText="Get in Touch"
              avatarUrl="/your-photo.png" // Best with transparent background
              showUserInfo={true}
              enableTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(204, 179, 99, 0.2)"
              innerGradient="linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(0,0,0,0))"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: CONTENT */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* EDUCATION SECTION */}
          <section>
            <h2 className="text-[#CCB363] font-mono text-xs tracking-[0.5em] uppercase mb-6">
              Education
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <SpotlightCard>
                <h3 className="text-white font-bold text-xl mb-2 italic font-['Outfit']">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-[#fbedc3]/80 text-base leading-relaxed">
                  Informatics Institute of Technology
                  <span className="block text-sm text-[#CCB363] mt-1 opacity-80">
                    Affiliated with the University of Westminster • 2024 -
                    Current
                  </span>
                </p>
              </SpotlightCard>
            </div>
          </section>

          {/* TECH STACK SECTION */}
          <section>
            <h2 className="text-[#CCB363] font-mono text-xs tracking-[0.5em] uppercase mb-6">
              Tech Stack
            </h2>
            <SpotlightCard>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#fbedc3] text-sm font-medium transition-all hover:border-[#CCB363]/50 hover:bg-[#CCB363]/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[#fbedc3]/50 text-xs italic font-mono">
                // Constantly evolving and exploring new frameworks
              </p>
            </SpotlightCard>
          </section>

          {/* HOBBIES AND FUN STUFF*/}
          
        </div>
      </div>
    </div>
  );
};

export default About;
