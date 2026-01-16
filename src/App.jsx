import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from './data/portfolioData';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState('');

  const phrases = useMemo(() => ["ROS 2 Development", "AI Computer Vision", "Autonomous SLAM", "Robotics Simulation"], []);
  
  useEffect(() => {
    let i = 0, j = 0, isDeleting = false;
    const type = () => {
      const currentPhrase = phrases[i];
      setTypedText(isDeleting ? currentPhrase.substring(0, j - 1) : currentPhrase.substring(0, j + 1));
      j = isDeleting ? j - 1 : j + 1;
      if (!isDeleting && j === currentPhrase.length) { setTimeout(() => isDeleting = true, 2000); }
      else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % phrases.length; }
      setTimeout(type, isDeleting ? 50 : 100);
    };
    const timeoutId = setTimeout(type, 100);
    return () => clearTimeout(timeoutId);
  }, [phrases]);

  return (
    <div className="min-h-screen bg-[#010409] text-[#e6edf3] selection:bg-[#0ea5e9]/30">
      
      {/* Tiny Particles Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#0ea5e9] rounded-full"
            animate={{ 
              x: [Math.random() * 1000, Math.random() * 1200], 
              y: [Math.random() * 1000, Math.random() * 1200],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{ duration: Math.random() * 20 + 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <Sidebar activeSection={activeSection} />

      <main className="lg:ml-72 transition-all">
        
        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
              SATYENDRA
            </h1>
            <p className="text-xl lg:text-3xl text-gray-400 font-medium">
              Expert in <span className="text-[#0ea5e9] border-b-4 border-[#0ea5e9]">{typedText}</span>
            </p>
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-4 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#0ea5e9] hover:text-white transition-all block lg:inline-block shadow-xl shadow-sky-500/10"
            >
              View Projects ↓
            </motion.a>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="p-12 lg:p-24 border-t border-[#161b22]">
           <div className="relative mb-12">
            <h2 className="text-4xl font-extrabold text-white inline-block">Professional Experience</h2>
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#0ea5e9] rounded-full"></div>
          </div>
          <div className="max-w-4xl space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-10 pb-8 border-l-2 border-[#30363d] last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0ea5e9] border-4 border-[#010409]" />
                <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                <p className="text-[#0ea5e9] font-bold text-sm mb-4">{exp.role} | {exp.period}</p>
                <ul className="space-y-3">
                  {exp.tasks.map((task, tidx) => (
                    <li key={tidx} className="text-gray-400 flex gap-3 text-md">
                      <span className="text-[#0ea5e9] font-bold">→</span> {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-12 lg:p-24 border-t border-[#161b22]">
          <div className="relative mb-12">
            <h2 className="text-4xl font-extrabold text-white inline-block">Featured Projects</h2>
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#0ea5e9] rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} onClick={() => setSelectedProject(proj)} />
            ))}
          </div>
        </section>

        <footer className="p-12 text-center text-gray-600 text-sm border-t border-[#161b22]">
          &copy; 2026 Satyendra. Built with React & Framer Motion.
        </footer>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}