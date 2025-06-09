import {FC, memo} from 'react';

import {SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';

const Resume: FC = memo(() => {
  return (
    <Section className="" sectionId={SectionId.Resume}>
      <div className="rounded-xl bg-gray-800/40 p-6 shadow-lg backdrop-blur-sm">
        <ResumeSection title="Skills">
          <p className="pb-8 text-white">Snapshot of my skills</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
