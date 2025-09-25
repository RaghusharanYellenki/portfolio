import React from 'react';
import { Briefcase } from 'lucide-react';
import data from '../data/portfolio.json';

interface ExperienceProps {
  reference: React.RefObject<HTMLDivElement>;
}

export const Experience: React.FC<ExperienceProps> = ({ reference }) => {
  return (
    <section ref={reference} className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <Briefcase size={32} className="text-blue-400" />
          Work Experience
        </h2>
        <div className="space-y-12">
          {data.experience.map((job, index) => (
            <div 
              key={index}
              className={`relative pl-8 border-l-2 ${
                index === 0 ? 'border-blue-400' : 'border-gray-600'
              }`}
            >
              <div className={`absolute w-4 h-4 rounded-full -left-[9px] top-0 ${
                index === 0 ? 'bg-blue-400' : 'bg-gray-600'
              }`}></div>
              <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
              <p className="text-blue-400 mb-2">{job.company} · {job.period}</p>
              <p className="text-gray-300 mb-4">{job.description}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};