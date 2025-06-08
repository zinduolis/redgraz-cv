'use client';

import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

import { slideInVariants, staggerContainer, staggerChildren } from '../../animations/variants';

interface SlideInContainerProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  stagger?: boolean;
  delay?: number;
  threshold?: number;
}

const SlideInContainer: FC<SlideInContainerProps> = ({
  children,
  className = '',
  direction = 'left',
  stagger = false,
  delay = 0,
  threshold = 0.1,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const containerVariants = stagger ? staggerContainer : undefined;
  const itemVariants = stagger 
    ? staggerChildren 
    : {
        hiddenLeft: slideInVariants.hiddenLeft,
        hiddenRight: slideInVariants.hiddenRight,
        visible: {
          opacity: 1,
          x: 0,
        },
      };

  const transition = stagger ? undefined : {
    duration: 0.6,
    ease: 'easeOut',
    delay,
  };

  const initial = stagger ? 'hidden' : direction === 'left' ? 'hiddenLeft' : 'hiddenRight';

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants || itemVariants}
      transition={transition}
    >
      {stagger ? (
        Array.isArray(children) ? (
          children.map((child, index) => (
            <motion.div key={index} variants={staggerChildren}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={staggerChildren}>
            {children}
          </motion.div>
        )
      ) : (
        children
      )}
    </motion.div>
  );
};

export default SlideInContainer;