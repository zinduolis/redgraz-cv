import { gsap } from 'gsap';

// GSAP default settings
export const gsapDefaults = {
  duration: 0.6,
  ease: 'power2.out',
};

// Timeline configurations
export const createFadeInTimeline = () => {
  const tl = gsap.timeline();
  return tl;
};

export const createSlideInTimeline = () => {
  const tl = gsap.timeline();
  return tl;
};

// Animation presets
export const fadeIn = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      ease: 'power2.out',
      ...options 
    }
  );
};

export const slideInLeft = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: -50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.6, 
      ease: 'power2.out',
      ...options 
    }
  );
};

export const slideInRight = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: 50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.6, 
      ease: 'power2.out',
      ...options 
    }
  );
};

export const scaleIn = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 0.4, 
      ease: 'back.out(1.7)',
      ...options 
    }
  );
};

export const staggerFadeIn = (elements: string | Element[], options = {}) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      ease: 'power2.out',
      stagger: 0.1,
      ...options 
    }
  );
};

// Complex animations
export const createHeroAnimation = () => {
  const tl = gsap.timeline();
  
  tl.fromTo('.hero-bg', 
    { scale: 1.1, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
  )
  .fromTo('.hero-content',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.5'
  )
  .fromTo('.hero-cta',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 },
    '-=0.3'
  );
  
  return tl;
};

export const createPortfolioAnimation = () => {
  const tl = gsap.timeline();
  
  tl.fromTo('.portfolio-item',
    { opacity: 0, y: 50, scale: 0.9 },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      duration: 0.6, 
      ease: 'power2.out',
      stagger: {
        amount: 0.8,
        from: 'start'
      }
    }
  );
  
  return tl;
};

export const createSkillBarAnimation = () => {
  const tl = gsap.timeline();
  
  tl.fromTo('.skill-bar',
    { width: '0%' },
    { 
      width: (index, element) => element.dataset.progress + '%',
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.2
    }
  );
  
  return tl;
};

// Hover animations
export const cardHover = (element: string | Element) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(element, {
    scale: 1.05,
    rotationY: 5,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    duration: 0.3,
    ease: 'power2.out'
  });
  
  return tl;
};

export const buttonHover = (element: string | Element) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(element, {
    scale: 1.05,
    backgroundColor: '#65a30d',
    duration: 0.2,
    ease: 'power2.out'
  });
  
  return tl;
};

// Scroll-triggered animations
export const createScrollTriggerAnimation = (trigger: string, animation: gsap.core.Timeline) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  }).add(animation);
};

// Utility functions
export const setGSAPDefaults = () => {
  gsap.defaults(gsapDefaults);
};

export const refreshScrollTriggers = () => {
  if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
    (window as any).ScrollTrigger.refresh();
  }
};