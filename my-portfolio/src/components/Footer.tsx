import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="w-full bg-[#1E3226] pb-12 pt-24 px-4 md:px-8 relative z-50">
      <div className="max-w-7xl mx-auto">
        
        {/* THE CAPSULE - High contrast background */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden border border-white/20 bg-[#0D1410] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          
          {/* BRIGHT GLOW (Makes it pop against the green) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-[#CCB363]/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-[#76290B]/10 blur-[100px] rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* 1. BRANDING & CONTACT */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="font-['Outfit'] font-black text-5xl text-white uppercase tracking-tighter mb-2 leading-none">
                  Vishmi<span className="text-[#CCB363]">.</span>
                </h2>
                <p className="text-[#fbedc3]/40 font-mono text-[10px] uppercase tracking-[0.4em]">
                  Creative Developer & Designer
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a href="mailto:vishmeii444@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-[#CCB363] transition-colors group">
                  <Mail size={16} className="text-[#CCB363]" />
                  <span className="text-sm font-medium">vishmeii444@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin size={16} className="text-[#CCB363]" />
                  <span className="text-sm font-medium">Sri Lanka (GMT +5:30)</span>
                </div>
              </div>
            </div>

            {/* 2. NAVIGATION LINKS */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <p className="text-[#CCB363] font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Navigation</p>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href}
                    className="text-white/50 hover:text-[#CCB363] flex items-center gap-2 group transition-all text-xs uppercase tracking-[0.2em] font-bold"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                  </a>
                ))}
              </nav>
            </div>

            {/* 3. SOCIAL CONNECT */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
              <p className="text-[#CCB363] font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Connect</p>
              <div className="flex gap-4">
                <FooterIcon href="#" icon={<Github size={20} />} />
                <FooterIcon href="#" icon={<Linkedin size={20} />} />
                <FooterIcon href="#" icon={<Mail size={20} />} />
              </div>
              <div className="mt-8 lg:text-right">
                 <p className="text-white/20 font-mono text-[9px] uppercase tracking-widest leading-relaxed">
                   © {currentYear} Vishmi Himasha <br/>
                   Crafted with precision & gold
                 </p>
              </div>
            </div>
          </div>

          {/* ACCENT LINE */}
          <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-[#CCB363]/20 to-transparent" />
        </motion.div>
      </div>
    </footer>
  );
};

const FooterIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/5 border border-white/10 text-white/40 transition-all duration-500
               hover:bg-[#CCB363] hover:text-[#0D1410] hover:shadow-[0_0_20px_rgba(204,179,99,0.4)] hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Footer;