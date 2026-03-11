import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('home');

  const handleClick = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] 
                    bg-white/5 backdrop-blur-2xl border border-white/20 
                    p-1 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      <div className="flex items-center relative">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative px-8 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 min-w-[110px] ${
                isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {/* THE LIQUID OVAL */}
              {isActive && (
                <motion.div
                  layoutId="liquid-pill"
                  className="absolute inset-0 z-0 bg-white/10 backdrop-blur-md border border-white/30"
                  style={{ borderRadius: 9999 }}
                  transition={{
                    type: "spring",
                    stiffness: 150, // Lower stiffness for "heavy" liquid feel
                    damping: 18,    // Lower damping for a slight "overshoot" wobble
                    mass: 1.2       // Added mass to make it feel fluid
                  }}
                >
                  {/* Inner shine for the glass look */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
                </motion.div>
              )}
              
              <span className="relative z-10">{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;