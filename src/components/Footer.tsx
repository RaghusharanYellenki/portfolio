import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 text-center">
      <p className="text-gray-400">© {new Date().getFullYear()} Raghusharan Yellenki. All rights reserved.</p>
    </footer>
  );
};