import classNames from 'classnames';
import { motion } from 'framer-motion';
import { FC, memo, useEffect, useState } from 'react';

import { education, SectionId, skills } from '../../data/data';
import Section from '../Layout/Section';
import FadeInSection from '../Animations/FadeInSection';
import { SkillGroup } from './Resume/Skills';

const SkillsEducation: FC = memo(() => {
  const [highlightedSkills, setHighlightedSkills] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState(0);

  // Animation cycle through skill categories
  useEffect(() => {
    const interval = setInterval(() => {
      const nextCategory = (currentCategory + 1) % skills.length;
      setCurrentCategory(nextCategory);
      
      // Highlight random skills from current category
      const categorySkills = skills[nextCategory].skills.map(skill => skill.name);
      const randomSkills = categorySkills
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(3, categorySkills.length));
      
      setHighlightedSkills(randomSkills);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentCategory, skills]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Skills}>
      <FadeInSection>
        <div className="flex flex-col gap-y-8">
          <h2 className="self-center text-xl font-bold text-white">Skills & Education</h2>
          
          {/* Skills Animation Header */}
          <motion.div 
            className="text-center mb-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p 
              className="text-lg text-gray-300 mb-4"
              variants={itemVariants}
            >
              🚀 Mastering technologies across multiple domains 💻
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mb-4"
              variants={itemVariants}
            >
              {['DevSecOps', 'Security', 'Frontend', 'Backend', 'Blockchain', 'AI/ML'].map((domain, index) => (
                <motion.span
                  key={domain}
                  className={classNames(
                    'px-3 py-1 rounded-full text-sm font-medium transition-all duration-500',
                    index === currentCategory 
                      ? 'bg-lime-600 text-white shadow-lg' 
                      : 'bg-gray-700 text-gray-300'
                  )}
                  animate={index === currentCategory ? pulseVariants.visible : pulseVariants.hidden}
                >
                  {domain}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.name}
                variants={itemVariants}
                className={classNames(
                  'rounded-xl p-6 transition-all duration-500',
                  index === currentCategory
                    ? 'bg-lime-900/20 border-2 border-lime-600/50 shadow-lg'
                    : 'bg-gray-900/50 border border-gray-700'
                )}
              >
                <div className="flex flex-col">
                  <motion.span 
                    className={classNames(
                      'text-center text-lg font-bold mb-4 transition-colors duration-500',
                      index === currentCategory ? 'text-lime-400' : 'text-white'
                    )}
                    animate={index === currentCategory ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skillGroup.name}
                  </motion.span>
                  <div className="flex flex-col gap-y-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={`${skill.name}-${skillIndex}`}
                        className={classNames(
                          'flex items-center justify-between p-2 rounded-lg transition-all duration-300',
                          highlightedSkills.includes(skill.name)
                            ? 'bg-lime-600/20 border border-lime-400/50'
                            : 'bg-gray-800/50'
                        )}
                        animate={
                          highlightedSkills.includes(skill.name)
                            ? { scale: [1, 1.02, 1], backgroundColor: ['rgba(101, 163, 13, 0.2)', 'rgba(101, 163, 13, 0.3)', 'rgba(101, 163, 13, 0.2)'] }
                            : { scale: 1 }
                        }
                        transition={{ duration: 0.6 }}
                      >
                        <span className={classNames(
                          'text-sm font-medium transition-colors duration-300',
                          highlightedSkills.includes(skill.name) ? 'text-lime-300' : 'text-gray-300'
                        )}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={classNames(
                                'h-full rounded-full transition-colors duration-300',
                                highlightedSkills.includes(skill.name) ? 'bg-lime-400' : 'bg-lime-600'
                              )}
                              initial={{ width: 0 }}
                              animate={{ width: `${(skill.level / 10) * 100}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            />
                          </div>
                          <span className="text-xs text-gray-400 w-6">{skill.level}/10</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div 
            className="mt-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-xl font-bold text-white mb-6 text-center"
              variants={itemVariants}
            >
              🎓 Education & Certifications
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
            >
              {education.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  variants={itemVariants}
                  className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 hover:border-lime-600/50 transition-all duration-300 hover:bg-lime-900/10"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(101, 163, 13, 0.1)"
                  }}
                >
                  <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-lime-400 text-sm font-medium">{item.date}</span>
                      <span className="text-gray-400 text-xs">{item.location}</span>
                    </div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <div className="text-gray-300 text-xs">{item.content}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </FadeInSection>
    </Section>
  );
});

SkillsEducation.displayName = 'SkillsEducation';
export default SkillsEducation;
