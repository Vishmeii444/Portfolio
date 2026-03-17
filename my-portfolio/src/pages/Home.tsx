import React, { useState } from "react";
import Grainient from "../components/bits/Grainient";
import DecryptedText from "../components/bits/DecryptedText";
import { Github, Linkedin, Mail, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "vishmihgangodawila@gmail.com";

  const handleEmailClick = (e: React.MouseEvent) => {
    // Copy to clipboard
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    // Reset state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

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
            text="Hello there, I'm Vishmi!"
            animateOn="view"
            revealDirection="center"
            speed={40}
            sequential={true}
            className="revealed-char"
            encryptedClassName="encrypted-char"
            parentClassName="font-['Outfit'] font-black text-[clamp(3rem,12vw,8rem)] leading-tight tracking-tighter"
          />
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-['Outfit'] font-light text-[10px] tracking-[0.8em] uppercase text-white/40 mb-12"
        >
          Aspiring Frontend Developer
        </motion.p>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex gap-6 relative"
        >
          <ContactIcon
            href="https://github.com/Vishmeii444"
            icon={<Github size={20} />}
          />
          <ContactIcon
            href="https://www.linkedin.com/in/vishmi-gangodawila/"
            icon={<Linkedin size={20} />}
          />

          <div className="relative">
            <ContactIcon
              href={`mailto:${emailAddress}`}
              onClick={handleEmailClick}
              icon={
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check size={20} className="text-[#CCB363]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mail"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Mail size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              }
            />

            {/* Tooltip */}
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: -20, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  className="absolute -top-12 left-1/2 px-3 py-1 rounded bg-[#CCB363] text-[#1E3226] text-[10px] font-bold uppercase tracking-widest whitespace-nowrap pointer-events-none shadow-lg"
                >
                  Email Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Updated Liquid Glass Icon Component
const ContactIcon = ({
  href,
  icon,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const isEmail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      onClick={onClick}
      target={isEmail ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="w-14 h-14 flex items-center justify-center rounded-full 
                 bg-white/5 backdrop-blur-xl border border-white/10 
                 text-white/60 transition-all duration-500
                 hover:bg-[#CCB363]/20 hover:border-[#CCB363]/50 hover:text-[#CCB363] 
                 hover:shadow-[0_0_20px_rgba(204,179,99,0.3)] hover:-translate-y-1 cursor-pointer"
    >
      {icon}
    </a>
  );
};

export default Home;
