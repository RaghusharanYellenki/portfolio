import React, { useRef } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Interests } from './components/Interests';
import { Footer } from './components/Footer';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <Hero onScrollClick={scrollToAbout} />
      <About reference={aboutRef} />
      <Experience reference={experienceRef} />
      <Education reference={educationRef} />
      <Projects reference={projectsRef} />
      <Skills reference={skillsRef} />
      <Certifications reference={certificationsRef} />
      <Interests reference={interestsRef} />
      <Footer />
    </div>
  );
}

export default App;