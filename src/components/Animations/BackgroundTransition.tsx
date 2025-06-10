import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, memo, useEffect, useState } from 'react';
import Image from 'next/image';

import heroImage from '../../images/Sea_Landscape.webp';
import testimonialImage from '../../images/testimonial.webp';

const BackgroundTransition: FC = memo(() => {
  const [resumeSectionOffset, setResumeSectionOffset] = useState(0);
  const [testimonialsSectionOffset, setTestimonialsSectionOffset] = useState(0);
  const { scrollY } = useScroll();

  // Find the Resume and Testimonials sections on mount
  useEffect(() => {
    const resumeSection = document.getElementById('resume');
    const testimonialsSection = document.getElementById('testimonials');
    
    if (resumeSection) {
      setResumeSectionOffset(resumeSection.offsetTop - window.innerHeight * 0.5);
    }
    
    if (testimonialsSection) {
      setTestimonialsSectionOffset(testimonialsSection.offsetTop - window.innerHeight * 0.3);
    }
  }, []);

  // Animation values based on scroll position
  const testimonialOpacity = useTransform(
    scrollY,
    [resumeSectionOffset - 200, resumeSectionOffset + 100],
    [0, 1]
  );

  const seaLandscapeOpacity = useTransform(
    scrollY,
    [0, resumeSectionOffset - 300, resumeSectionOffset, resumeSectionOffset + 400],
    [1, 1, 0.8, 0]
  );

  return (
    <div className="fixed inset-0 z-0">
      {/* Testimonial background - fades in when reaching resume section */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: testimonialOpacity }}
      >
        <Image
          src={testimonialImage}
          alt="Testimonial background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </motion.div>

      {/* Sea Landscape - only fades out, no shrinking */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: seaLandscapeOpacity,
        }}
      >
        <Image
          src={heroImage}
          alt="Sea landscape background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </motion.div>

      {/* Overlay to ensure content is visible over backgrounds */}
      <div className="absolute inset-0 bg-black/10 z-10" />
    </div>
  );
});

BackgroundTransition.displayName = 'BackgroundTransition';
export default BackgroundTransition;
