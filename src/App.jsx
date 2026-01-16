import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from './data/portfolioData';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { CheckCircle, Cpu, GraduationCap } from 'lucide-react';

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
      <Sidebar activeSection={activeSection} />

      <main className="lg:ml-72 transition-all">
        
        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl lg:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">SATYENDRA</h1>
            <p className="text-xl lg:text-3xl text-gray-400 font-medium">
              Expert in <span className="text-[#0ea5e9] border-b-4 border-[#0ea5e9]">{typedText}</span>
            </p>
          </motion.div>
        </section>

        {/* About & Skills Section */}
        <section id="about" className="p-12 lg:p-24 border-t border-[#161b22]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-8">About Me</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{PORTFOLIO_DATA.profile.bio}</p>
              <div className="space-y-4">
                {PORTFOLIO_DATA.profile.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-[#0ea5e9]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills Sub-section */}
            <div className="bg-[#0d1117] p-8 rounded-3xl border border-[#30363d]">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Cpu className="text-[#0ea5e9]" /> Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {PORTFOLIO_DATA.skills.map((skill, idx) => (
                  <div key={idx}>
                    <h4 className="text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-3">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="text-xs bg-[#161b22] px-3 py-1 rounded-full text-gray-400 border border-[#30363d]">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="p-12 lg:p-24 border-t border-[#161b22]">
          <h2 className="text-4xl font-extrabold text-white mb-12">Experience & Education</h2>
          
          {/* Experience Timeline */}
          <div className="max-w-4xl space-y-12 mb-20">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-10 pb-8 border-l-2 border-[#30363d]">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0ea5e9] border-4 border-[#010409]" />
                <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                <p className="text-[#0ea5e9] font-bold text-sm mb-4">{exp.role} | {exp.period}</p>
                <ul className="space-y-3">
                  {exp.tasks.map((task, tidx) => (
                    <li key={tidx} className="text-gray-400 flex gap-3 text-md"><span className="text-[#0ea5e9] font-bold">→</span> {task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education Sub-section */}
          <div className="max-w-4xl pt-12 border-t border-[#30363d]/50">
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <GraduationCap className="text-[#0ea5e9]" size={28} /> Education
            </h3>
            <div className="space-y-8">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="bg-[#0d1117] p-8 rounded-2xl border border-[#30363d]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <span className="text-[#0ea5e9] font-bold text-sm">{edu.period}</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-[#0ea5e9] text-sm font-black">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-12 lg:p-24 border-t border-[#161b22]">
          <h2 className="text-4xl font-extrabold text-white mb-12">Featured Projects</h2>
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
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
}