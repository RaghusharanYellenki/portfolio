import React from 'react';
import { Award } from 'lucide-react';
import data from '../data/portfolio.json';

interface CertificationsProps {
  reference: React.RefObject<HTMLDivElement>;
}

export const Certifications: React.FC<CertificationsProps> = ({ reference }) => {
  return (
    <section ref={reference} className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <Award size={32} className="text-blue-400" />
          Certifications
        </h2>
        <div className="grid gap-8">
          {data.certifications.map((cert, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-blue-400 mb-1">{cert.org}</p>
                <p className="text-gray-400">
                  Issued: {cert.date}
                  {cert.expires && ` · Expires: ${cert.expires}`}
                </p>
                <p className="text-gray-500 text-sm">Credential ID: {cert.id}</p>
              </div>
              
              {cert.description && (
                <p className="text-gray-300 mb-4">{cert.description}</p>
              )}
              
              {cert.skills && (
                <div>
                  <h4 className="font-semibold mb-2 text-gray-200">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};