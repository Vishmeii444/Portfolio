import ProfileCard from "../components/bits/ProfileCard";
import SpotlightCard from "../components/bits/SpotlightCard";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Java",
    "Tailwind CSS",
    "MongoDB",
    "Python",
  ];

  const hobbies = [
    { name: "Reading", icon: "📚" },
    { name: "Listening to Songs", icon: "🎧" },
    { name: "Pinteresting", icon: "📌" },
    { name: "Napping", icon: "😴" },
  ];

  const volunteering = [
    { name: "Toastmasters International", role: "Secretary / Member" },
    { name: "Mozilla Campus Club", role: "Volunteer" },
    { name: "IEEE Student Branch", role: "Member" },
  ];

  const handleContact = () => {
    window.location.href = "mailto:your-email@example.com";
  };

  return (
    <div className="min-h-screen bg-[#1E3226] pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black text-[#CCB363] uppercase tracking-tighter"
          >
            About.
          </motion.h1>
          <div className="h-1 w-12 bg-[#CCB363] mt-2" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: THE PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex justify-center lg:block"
          >
            <div className="sticky top-32 w-full max-w-[350px]">
              <ProfileCard
                name="Vishmi"
                title="Frontend Developer"
                handle="Vishmeii444"
                status="Open to Work"
                contactText="Get in Touch"
                // Ensure image is in public/images/vishmi.jpeg
                avatarUrl="/images/vishmi.jpeg"
                showUserInfo={true}
                enableTilt={true}
                behindGlowEnabled={true}
                behindGlowColor="rgba(204, 179, 99, 0.25)"
                innerGradient="linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(0,0,0,0.4))"
                onContactClick={handleContact}
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CONTENT SECTIONS */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* EDUCATION */}
            <section>
              <h2 className="text-[#CCB363] font-mono text-xs tracking-[0.5em] uppercase mb-6">
                Education
              </h2>
              <SpotlightCard>
                <div className="p-2">
                  <h3 className="text-white font-bold text-xl mb-2 italic font-['Outfit']">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-[#fbedc3]/80 text-base">
                    Informatics Institute of Technology
                    <span className="block text-sm text-[#CCB363] mt-1 opacity-80">
                      Affiliated with the University of Westminster • 2024 - Present
                    </span>
                  </p>
                </div>
              </SpotlightCard>
            </section>

            {/* TECH STACK */}
            <section>
              <h2 className="text-[#CCB363] font-mono text-xs tracking-[0.5em] uppercase mb-6">
                Tech Stack
              </h2>
              <SpotlightCard>
                <div className="flex flex-wrap gap-3 p-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#fbedc3] text-sm font-medium transition-all hover:border-[#CCB363]/50 hover:bg-[#CCB363]/5 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </section>

            {/* VOLUNTEERING */}
            <section>
              <h2 className="text-[#CCB363] font-mono text-xs tracking-[0.5em] uppercase mb-6">
                Volunteering
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {volunteering.map((item) => (
                  <SpotlightCard key={item.name}>
                    <div className="py-2 px-1">
                      <h4 className="text-white font-semibold text-lg leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[#CCB363] text-xs mt-2 font-mono uppercase tracking-wider">
                        {item.role}
                      </p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </section>

            {/* HOBBIES */}
            <section>
              <h2 className="text-[#CCB363] font-mono text-xs tracking-[0.5em] uppercase mb-6">
                Hobbies & Fun Stuff
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hobbies.map((hobby) => (
                  <SpotlightCard key={hobby.name}>
                    <div className="flex flex-col items-center justify-center py-4 gap-2">
                      <span className="text-2xl">{hobby.icon}</span>
                      <span className="text-[#fbedc3] text-sm font-medium">
                        {hobby.name}
                      </span>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;