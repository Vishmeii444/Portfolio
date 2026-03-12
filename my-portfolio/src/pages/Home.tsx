import React from "react";
import Grainient from "../components/bits/Grainient";
import DecryptedText from "../components/bits/DecryptedText";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 1. Background Layer */}
      <Grainient
        color1="#1E3226"
        color2="#76290B"
        color3="#CCB363"
        timeSpeed={0.2}
        grainAmount={0.05}
      />

      {/* 2. Content Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
        {/* Decrypted Name Section */}
        <div className="mb-2">
          <DecryptedText
            text="Hello there, I'm Vishmi"
            animateOn="view"
            revealDirection="center"
            speed={40}
            sequential={true}
            className="revealed-char"
            encryptedClassName="encrypted-char"
            parentClassName="font-['Outfit'] font-black text-[clamp(3rem,12vw,8rem)] leading-tight tracking-tighter"
          />
        </div>

        {/* Subtext with a simple fade */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-['Outfit'] font-light text-[10px] tracking-[0.8em] uppercase text-white/40 mb-12"
        >
          Creative Developer & Designer
        </motion.p>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex gap-6"
        >
          <ContactIcon href="#" icon={<Github size={20} />} />
          <ContactIcon href="#" icon={<Linkedin size={20} />} />
          <ContactIcon href="#" icon={<Mail size={20} />} />
        </motion.div>
      </div>
    </div>
  );
};

// Liquid Glass Icon Component
const ContactIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 flex items-center justify-center rounded-full 
               bg-white/5 backdrop-blur-xl border border-white/10 
               text-white/60 transition-all duration-500
               hover:bg-[#CCB363]/20 hover:border-[#CCB363]/50 hover:text-[#CCB363] 
               hover:shadow-[0_0_20px_rgba(204,179,99,0.3)] hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Home;
