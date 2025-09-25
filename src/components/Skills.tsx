import React from 'react';
import data from '../data/portfolio.json';

interface SkillsProps {
  reference: React.RefObject<HTMLDivElement>;
}

export const Skills: React.FC<SkillsProps> = ({ reference }) => {
  const { languages, frameworks, tools } = data.skills;

  return (
    <section ref={reference} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <ul className="space-y-2 text-gray-300">
              {languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Frameworks</h3>
            <ul className="space-y-2 text-gray-300">
              {frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-300">
              {tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};