import React from 'react';
import { Heart } from 'lucide-react';
import data from '../data/portfolio.json';

interface InterestsProps {
  reference: React.RefObject<HTMLDivElement>;
}

export const Interests: React.FC<InterestsProps> = ({ reference }) => {
  const { personal, professional } = data.interests;

  return (
    <section ref={reference} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <Heart size={32} className="text-blue-400" />
          Interests
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Personal Interests</h3>
            <ul className="space-y-2 text-gray-300">
              {personal.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Professional Interests</h3>
            <ul className="space-y-2 text-gray-300">
              {professional.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};