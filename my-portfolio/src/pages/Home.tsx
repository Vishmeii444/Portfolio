import React, { useRef } from "react";
import Grainient from "../components/bits/Grainient";
import VariableProximity from "../components/bits/VariableProximity.tsx";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      ref={containerRef}
    >
      {/* 1. Background */}
      <Grainient
        color1="#1E3226"
        color2="#76290B"
        color3="#CCB363"
        timeSpeed={0.2}
        grainAmount={0.05}
      />

      {/* 2. Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        {/* React Bits Variable Proximity Component */}
        <div className="mb-4 cursor-default">
          <VariableProximity
            label="Hello there, I'm Vishmi"
            className="variable-proximity-demo"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={200}
            falloff="gaussian"
            style={{
              color: "#fbedc3",
              fontSize: "clamp(3rem, 12vw, 8rem)",
              lineHeight: "1",
              fontFamily: "'Roboto Flex', sans-serif",
            }}
          />
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-[15px] tracking-[0.6em] uppercase text-white/30 mb-12"
        >
          Aspiring Frontend Developer
        </motion.p>

        {/* Liquid Glass Social Icons */}
        <div className="flex gap-6">
          <ContactIcon href="#" icon={<Github size={20} />} />
          <ContactIcon href="#" icon={<Linkedin size={20} />} />
          <ContactIcon href="#" icon={<Mail size={20} />} />
        </div>
      </div>
    </div>
  );
};

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
