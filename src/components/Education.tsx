import React from 'react';
import { GraduationCap } from 'lucide-react';
import data from '../data/portfolio.json';

interface EducationProps {
  reference: React.RefObject<HTMLDivElement>;
}

export const Education: React.FC<EducationProps> = ({ reference }) => {
  const { degree, institution, period, gpa, activities, highlights } = data.education;

  return (
    <section ref={reference} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <GraduationCap size={32} className="text-blue-400" />
          Education
        </h2>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">{degree}</h3>
          <p className="text-blue-400 mb-4">{institution} · {period}</p>
          <p className="text-gray-300 mb-6">GPA: {gpa}</p>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">Activities</h4>
              <ul className="list-disc list-inside text-gray-300">
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Course Highlights</h4>
              <ul className="list-disc list-inside text-gray-300">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};