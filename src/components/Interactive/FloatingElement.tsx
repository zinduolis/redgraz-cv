'use client';

import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

import { floatingVariants } from '../../animations/variants';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  direction?: 'vertical' | 'horizontal' | 'both';
}

const FloatingElement: FC<FloatingElementProps> = ({
  children,
  className = '',
  amplitude = 10,
  duration = 4,
  delay = 0,
  direction = 'vertical',
}) => {
  const getAnimationVariants = () => {
    switch (direction) {
      case 'horizontal':
        return {
          initial: { x: 0 },
          animate: {
            x: [-amplitude, amplitude, -amplitude],
            transition: {
              duration,
              ease: 'easeInOut',
              repeat: Infinity,
              delay,
            },
          },
        };
      case 'both':
        return {
          initial: { x: 0, y: 0 },
          animate: {
            x: [-amplitude * 0.5, amplitude * 0.5, -amplitude * 0.5],
            y: [-amplitude, amplitude, -amplitude],
            transition: {
              duration,
              ease: 'easeInOut',
              repeat: Infinity,
              delay,
            },
          },
        };
      default: // vertical
        return {
          initial: { y: 0 },
          animate: {
            y: [-amplitude, amplitude, -amplitude],
            transition: {
              duration,
              ease: 'easeInOut',
              repeat: Infinity,
              delay,
            },
          },
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;