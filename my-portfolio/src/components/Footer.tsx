import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import GradientBlinds from "./bits/GradientBlinds";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1E3226] pb-12 pt-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* THE SHUTTER CAPSULE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[400px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* 1. THE GRADIENT BLINDS LAYER */}
          <div className="absolute inset-0 z-0">
            <GradientBlinds
              gradientColors={["#1E3226", "#76290B", "#CCB363"]}
              angle={45}
              noise={0.2}
              blindCount={20}
              blindMinWidth={40}
              spotlightRadius={0.4}
              spotlightSoftness={0.8}
              spotlightOpacity={0.6}
              mouseDampening={0.1}
              distortAmount={0.02}
              shineDirection="right"
              mixBlendMode="normal"
            />
          </div>

          {/* 2. THE CONTENT OVERLAY */}
          <div className="relative z-10 h-full w-full flex flex-col justify-between p-10 md:p-16 bg-black/20 backdrop-blur-[2px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {/* Branding with Motion */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2"
              >
                <h2 className="font-['Outfit'] font-black text-5xl text-white uppercase tracking-tighter leading-none">
                  Vishmi<span className="text-[#CCB363]">.</span>
                </h2>
                <p className="font-['Outfit'] font-light text-[10px] tracking-[0.6em] uppercase text-white/60">
                  Creative Developer
                </p>
              </motion.div>

              {/* Icons with staggered fade in */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <FooterIcon href="#" icon={<Github size={20} />} />
                <FooterIcon href="#" icon={<Linkedin size={20} />} />
                <FooterIcon href="#" icon={<Mail size={20} />} />
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-white/30 font-mono text-[9px] uppercase tracking-widest">
                  © {currentYear} Handcrafted by Vishmi
                </span>
              </div>

              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="hidden md:block"
              >
                <span className="text-[#CCB363] font-mono text-[9px] uppercase tracking-[0.5em]">
                  Inspired by Motion
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const FooterIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    className="w-14 h-14 flex items-center justify-center rounded-full 
               bg-white/5 backdrop-blur-xl border border-white/10 
               text-white/60 transition-all duration-500
               hover:bg-[#CCB363]/20 hover:border-[#CCB363]/50 hover:text-[#CCB363] 
               hover:shadow-[0_0_20px_rgba(204,179,99,0.3)] hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Footer;
