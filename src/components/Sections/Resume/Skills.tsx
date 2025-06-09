import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';
import ProgressBar from '../../Animations/ProgressBar'; // Import ProgressBar

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, Icon} = skill;

  // Define colors based on technology/category
  const getIconColor = (skillName: string) => {
    const colorMap: Record<string, string> = {
      // AWS/Cloud - Orange
      'AWS': '#FF9900',
      // Docker - Blue
      'Docker': '#2496ED',
      // Kubernetes - Blue
      'Kubernetes': '#326CE5',
      // GitHub - Dark
      'GitHub Actions': '#2088FF',
      // GitLab - Orange
      'GitLab CI/CD': '#FC6D26',
      // Terraform - Purple
      'Terraform': '#7B42BC',
      // React - Blue
      'React': '#61DAFB',
      // TypeScript - Blue
      'TypeScript': '#3178C6',
      // Next.js - Black/White
      'Next.js': '#000000',
      // JavaScript - Yellow
      'JavaScript': '#F7DF1E',
      // Tailwind - Teal
      'Tailwind CSS': '#06B6D4',
      // Angular - Red
      'Angular': '#DD0031',
      // Node.js - Green
      'Node.js': '#339933',
      // Solidity - Gray
      'Solidity': '#363636',
      // Python - Blue/Yellow
      'Python': '#3776AB',
      // C++ - Blue
      'C++': '#00599C',
      // Java - Orange/Red
      'Java': '#ED8B00',
      // Rust - Orange
      'Rust': '#000000',
      // MongoDB - Green
      'MongoDB': '#47A248',
      // PostgreSQL - Blue
      'PostgreSQL': '#4169E1',
      // Oracle - Red
      'Oracle': '#F80000',
      // Redis - Red
      'Redis': '#DC382D',
      // Elasticsearch - Yellow
      'ElasticSearch': '#005571',
      // OpenAI - Black
      'ChatGPT/LLMs': '#412991',
      // Security - Green/Blue
      'OWASP ASVS': '#00C853',
      'Penetration Testing': '#FF5722',
      'Threat Modeling': '#2196F3',
      'NIST Framework': '#4CAF50',
      'GDPR Compliance': '#9C27B0',
      'ISO 27001': '#607D8B',
      // AI/ML - Purple/Blue
      'Claude': '#8B5CF6',
      'AI Code Generation': '#6366F1',
      'Prompt Engineering': '#EC4899',
      'AutoML': '#10B981',
    };
    return colorMap[skillName] || '#10B981'; // Default to lime-500
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-lime-500/50 transition-all duration-300 hover:bg-gray-700/30">
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon 
            className="h-6 w-6 flex-shrink-0" 
            style={{ color: getIconColor(name) }}
          />
        )}
        <span className="text-sm font-medium text-white">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">{level}/10</span>
        <div className="flex gap-1">
          {Array.from({length: 10}, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i < level 
                  ? 'bg-lime-500 shadow-sm shadow-lime-500/50' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
