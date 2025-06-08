import { motion } from 'framer-motion';
import { FC } from 'react';

// Simple SVG shape for fly-through effect (can be replaced with a more complex asset)
const FlyThroughAnimation: FC = () => {
  return (
    <motion.div
      initial={{ y: 100, scale: 0.7, opacity: 0.7 }}
      animate={{ y: -200, scale: 2.2, opacity: 0 }}
      transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
      style={{ position: 'absolute', left: '50%', bottom: 0, zIndex: 20, transform: 'translateX(-50%)' }}
    >
      <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="30" rx="55" ry="18" fill="white" fillOpacity="0.15" />
        <ellipse cx="60" cy="30" rx="35" ry="10" fill="white" fillOpacity="0.25" />
        <ellipse cx="60" cy="30" rx="15" ry="5" fill="white" fillOpacity="0.5" />
      </svg>
    </motion.div>
  );
};

export default FlyThroughAnimation;
