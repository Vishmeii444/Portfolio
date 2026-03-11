import { motion } from 'framer-motion';

// 1. Define an interface for the props
interface PixelCharacterProps {
  isJumping: boolean;
}

// 2. Apply the interface to the component
const PixelCharacter: React.FC<PixelCharacterProps> = ({ isJumping }) => {
  return (
    <motion.div
      animate={isJumping ? { y: [0, -25, 0] } : { y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-3xl select-none"
    >
      👾
    </motion.div>
  );
};

export default PixelCharacter;