import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Starts invisible and slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Fades in and slides up when seen
      viewport={{ once: true, margin: "-100px" }} // Triggers once when 100px into view
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Smooth "cubic-bezier" ease
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;