import { Transition } from 'framer-motion';

// Base transitions
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export const smoothTransition: Transition = {
  duration: 0.3,
  ease: 'easeInOut',
};

export const quickTransition: Transition = {
  duration: 0.15,
  ease: 'easeOut',
};

export const slowTransition: Transition = {
  duration: 0.8,
  ease: 'easeOut',
};

// Specialized transitions
export const bounceTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 15,
};

export const elasticTransition: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 10,
};

export const staggerTransition: Transition = {
  staggerChildren: 0.1,
  delayChildren: 0.2,
};

// Page transitions
export const pageTransition: Transition = {
  duration: 0.5,
  ease: 'easeInOut',
};

// Hover transitions
export const hoverTransition: Transition = {
  duration: 0.2,
  ease: 'easeInOut',
};

// Loading transitions
export const loadingTransition: Transition = {
  duration: 1,
  ease: 'linear',
  repeat: Infinity,
};

// Typewriter transition
export const typewriterTransition: Transition = {
  duration: 2,
  ease: 'steps(20, end)',
};

// Floating transition
export const floatingTransition: Transition = {
  duration: 4,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'reverse',
};

// Progress transition
export const progressTransition: Transition = {
  duration: 1.5,
  ease: 'easeOut',
  delay: 0.5,
};

// Modal transitions
export const modalTransition: Transition = {
  duration: 0.3,
  ease: 'easeOut',
};

export const modalExitTransition: Transition = {
  duration: 0.2,
  ease: 'easeIn',
};

// Drawer transitions
export const drawerTransition: Transition = {
  duration: 0.3,
  ease: 'easeInOut',
};

// Parallax transition
export const parallaxTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 30,
  mass: 0.8,
};