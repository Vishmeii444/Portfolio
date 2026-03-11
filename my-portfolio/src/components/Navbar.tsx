import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PixelCharacter from './PixelCharacter';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isJumping, setIsJumping] = useState(false);
  const location = useLocation();

  // Find index of current path to position the character
  const activeIndex = navItems.findIndex(item => item.path === location.pathname);

  const handleHop = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 400); // Match animation duration
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-forest/80 backdrop-blur-md border-b border-bronze/30 p-4">
      <div className="max-w-4xl mx-auto relative flex justify-center items-center gap-12">
        
        {/* Animated Character Wrapper */}
        <motion.div
          className="absolute -top-10 left-0"
          animate={{ x: (activeIndex * 105) + 20 }} // Adjust 105 based on your tab spacing
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <PixelCharacter isJumping={isJumping} />
        </motion.div>

        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={handleHop}
            className={`font-mono text-sm tracking-widest uppercase transition-colors hover:text-gold ${
              location.pathname === item.path ? 'text-gold' : 'text-cream'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;