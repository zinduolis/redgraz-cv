'use client';

import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

import { cardHoverVariants } from '../../animations/variants';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotation?: number;
  glowEffect?: boolean;
  tiltEffect?: boolean;
}

const HoverCard: FC<HoverCardProps> = ({
  children,
  className = '',
  hoverScale = 1.02,
  hoverRotation = 5,
  glowEffect = false,
  tiltEffect = false,
}) => {
  const variants = {
    initial: {
      scale: 1,
      rotateY: 0,
    },
    hover: {
      scale: hoverScale,
      rotateY: tiltEffect ? hoverRotation : 0,
    },
  };

  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      style={{
        transformPerspective: '1000px',
        transformStyle: 'preserve-3d',
        boxShadow: glowEffect
          ? '0 0 30px rgba(101, 163, 13, 0.3), 0 20px 40px rgba(0, 0, 0, 0.1)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;