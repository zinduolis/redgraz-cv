import { Variants } from 'framer-motion';

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Fade in variants
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Slide in variants
export const slideInVariants: Variants = {
  hiddenLeft: {
    opacity: 0,
    x: -50,
  },
  hiddenRight: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Stagger container variants
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger children variants
export const staggerChildren: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Scale in variants
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Hover variants
export const hoverVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};

// Card hover variants
export const cardHoverVariants: Variants = {
  initial: {
    scale: 1,
    rotateY: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    scale: 1.02,
    rotateY: 5,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Button variants
export const buttonVariants: Variants = {
  initial: {
    scale: 1,
    backgroundColor: 'var(--initial-color)',
  },
  hover: {
    scale: 1.05,
    backgroundColor: 'var(--hover-color)',
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};

// Loading variants
export const loadingVariants: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

// Typewriter variants
export const typewriterVariants: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'steps(20, end)',
    },
  },
};

// Floating variants
export const floatingVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

// Progress bar variants
export const progressBarVariants: Variants = {
  initial: {
    width: 0,
  },
  animate: (progress: number) => ({
    width: `${progress}%`,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: 0.5,
    },
  }),
};

// Navigation variants
export const navVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Hero content variants
export const heroContentVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

// Modal variants
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

// Drawer variants
export const drawerVariants: Variants = {
  closed: {
    x: '-100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Count up variants
export const countUpVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Parallax variants
export const parallaxVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: (offset: number) => ({
    y: offset,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 30,
    },
  }),
};