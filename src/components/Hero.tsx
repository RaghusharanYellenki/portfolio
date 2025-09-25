import React from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import data from '../data/portfolio.json';

interface HeroProps {
  onScrollClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollClick }) => {
  const { name, title, tagline, contact } = data.personalInfo;

  return (
    <header className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          {name}
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">{title}</h2>
        <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
          {tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href={contact.github}
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
            <Github size={20} />
            GitHub
          </a>
          <a href={contact.linkedin}
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a href={`mailto:${contact.email}`}
             className="flex items-center gap-2 px-6 py-3 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
            <Mail size={20} />
            Email
          </a>
          <a href={`tel:${contact.phone}`}
             className="flex items-center gap-2 px-6 py-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors">
            <Phone size={20} />
            Call
          </a>
        </div>
      </div>
      <button 
        onClick={onScrollClick}
        className="absolute bottom-10 animate-bounce"
      >
        <ChevronDown size={40} />
      </button>
    </header>
  );
};