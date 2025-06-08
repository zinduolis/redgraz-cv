'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { FC } from 'react';

interface ScrollProgressProps {
  className?: string;
  height?: string;
  color?: string;
  position?: 'top' | 'bottom';
  smooth?: boolean;
}

const ScrollProgress: FC<ScrollProgressProps> = ({
  className = '',
  height = 'h-1',
  color = 'bg-lime-600',
  position = 'top',
  smooth = true,
}) => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = smooth 
    ? useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      })
    : scrollYProgress;

  const positionClasses = position === 'top' 
    ? 'fixed top-0 left-0 right-0 z-50' 
    : 'fixed bottom-0 left-0 right-0 z-50';

  return (
    <div className={`w-full ${height} bg-gray-200 ${positionClasses} ${className}`}>
      <motion.div
        className={`${height} ${color} origin-left`}
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;