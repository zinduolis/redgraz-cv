'use client';

import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

import { fadeInVariants } from '../../animations/variants';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const FadeInSection: FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const variants = {
    hidden: fadeInVariants.hidden,
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = {
    duration: 0.6,
    ease: 'easeOut',
    delay,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;