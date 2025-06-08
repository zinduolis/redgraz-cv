import classNames from 'classnames';
import {motion, useScroll, useTransform} from 'framer-motion';
import {FC, memo, useRef} from 'react';

import {heroContentVariants, floatingVariants, staggerContainer, staggerChildren} from '../../animations/variants';
import {heroData, SectionId} from '../../data/data';
import FloatingElement from '../Interactive/FloatingElement';
import Section from '../Layout/Section';
import Socials from '../Socials';
import TypewriterText from '../Animations/TypewriterText';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-screen items-center justify-center">
        {/* <Image
          alt={`${name}-image`}
          className="absolute z-0"
          fill
          style={{objectFit: 'cover'}}
          placeholder="blur"
          priority
          src={imageSrc}
        /> */}
        <motion.div 
          style={{ y, opacity }}
          className="z-10  max-w-screen-lg px-4 lg:px-0"
        >
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description && (
              typeof description === 'string' ? (
                <TypewriterText text={description} />
              ) : (
                <div className="max-w-2xl">{description}</div>
              )
            )}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-lime-600 ring-lime-600' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
