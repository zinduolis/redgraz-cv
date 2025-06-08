'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpNumberProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  threshold?: number;
}

const CountUpNumber: FC<CountUpNumberProps> = ({
  value,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0,
  threshold = 0.5,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) => {
    return (prefix + latest.toFixed(decimals) + suffix);
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{displayValue}</motion.span>
    </motion.span>
  );
};

export default CountUpNumber;