import React from 'react';
import { Code } from 'lucide-react';
import data from '../data/portfolio.json';

interface AboutProps {
  reference: React.RefObject<HTMLDivElement>;
}

export const About: React.FC<AboutProps> = ({ reference }) => {
  const { bio } = data.personalInfo;
  const { technical, professional } = data.expertise;

  return (
    <section ref={reference} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
          <Code size={32} className="text-blue-400" />
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">{bio}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {technical.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {professional.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};