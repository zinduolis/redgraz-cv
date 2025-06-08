'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { progressBarVariants } from '../../animations/variants';

interface ProgressBarProps {
  progress: number;
  label?: string;
  className?: string;
  barClassName?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  showPercentage?: boolean;
  animated?: boolean;
  threshold?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  label,
  className = '',
  barClassName = '',
  height = 'h-2',
  color = 'bg-lime-600',
  backgroundColor = 'bg-gray-200',
  showPercentage = true,
  animated = true,
  threshold = 0.5,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {label && (
        <div className="mb-2 flex justify-between">
          <span className="text-sm font-medium">{label}</span>
          {showPercentage && (
            <span className="text-sm font-medium">{clampedProgress}%</span>
          )}
        </div>
      )}
      
      <div className={`w-full rounded-full ${backgroundColor} ${height}`}>
        {animated ? (
          <motion.div
            className={`${height} rounded-full ${color} ${barClassName}`}
            initial={{ width: 0 }}
            animate={inView ? { width: `${clampedProgress}%` } : { width: 0 }}
            variants={progressBarVariants}
            custom={clampedProgress}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
              delay: 0.2,
            }}
          />
        ) : (
          <div
            className={`${height} rounded-full ${color} ${barClassName}`}
            style={{ width: `${clampedProgress}%` }}
          />
        )}
      </div>
    </div>
  );
};

export default ProgressBar;