import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1E3226] pb-12 pt-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* THE LIQUID CAPSULE */}
        <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-16 shadow-2xl">
          
          {/* 1. Integrated Home-style Background (Faded Grainient look) */}
          <div className="absolute inset-0 -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3226] via-[#76290B]/40 to-[#CCB363]/20" />
            {/* Moving light blob to mimic the Home grainient */}
            <motion.div 
              animate={{ 
                x: [0, 50, 0], 
                y: [0, -20, 0] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/4 w-full h-full bg-[#CCB363]/10 blur-[120px] rounded-full"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            
            {/* LEFT: IDENTITY (Matches Home Page Decrypted Style) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="font-['Outfit'] font-black text-4xl text-white uppercase tracking-tighter mb-2">
                Vishmi<span className="text-[#CCB363]">.</span>
              </h2>
              <p className="font-['Outfit'] font-light text-[9px] tracking-[0.5em] uppercase text-[#fbedc3]/50">
                Creative Developer & Designer
              </p>
            </div>

            {/* CENTER: LIQUID GLASS ICONS (Exact match to Home Page) */}
            <div className="flex gap-4">
              <FooterIcon href="#" icon={<Github size={18} />} />
              <FooterIcon href="#" icon={<Linkedin size={18} />} />
              <FooterIcon href="#" icon={<Mail size={18} />} />
            </div>

            {/* RIGHT: METADATA */}
            <div className="flex flex-col items-center md:items-end font-mono">
              <span className="text-white/20 text-[9px] tracking-widest uppercase">
                © {currentYear} All Rights Reserved
              </span>
              <span className="text-[#CCB363]/40 text-[8px] tracking-[0.3em] uppercase mt-1">
                Sri Lanka
              </span>
            </div>
          </div>
          
          {/* BOTTOM ACCENT BAR */}
          <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-[#CCB363]/20 to-transparent" />
        </div>
      </div>
    </footer>
  );
};

// Internal Icon Component (Mirroring your ContactIcon from Home)
const FooterIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/5 backdrop-blur-xl border border-white/10 
               text-white/40 transition-all duration-500
               hover:bg-[#CCB363]/20 hover:border-[#CCB363]/50 hover:text-[#CCB363] 
               hover:shadow-[0_0_15px_rgba(204,179,99,0.2)] hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Footer;