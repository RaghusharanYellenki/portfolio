import React from 'react';
import data from '../data/portfolio.json';

interface ProjectsProps {
  reference: React.RefObject<HTMLDivElement>;
}

export const Projects: React.FC<ProjectsProps> = ({ reference }) => {
  return (
    <section ref={reference} className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid gap-8">
          {data.projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-400">{project.company} · {project.period}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-200">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-200">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};