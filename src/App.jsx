import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Cpu, GraduationCap, Briefcase } from 'lucide-react';
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
      <Sidebar activeSection={activeSection} />

      <main className="lg:ml-72 transition-all">
        
        {/* Home Section */}
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl lg:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">SATYENDRA</h1>
            <p className="text-xl lg:text-3xl text-gray-400 font-medium">
              Expert in <span className="text-[#0ea5e9] border-b-4 border-[#0ea5e9]">{typedText}</span>
            </p>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="p-12 lg:p-24 border-t border-[#161b22]">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-extrabold text-white mb-8 border-b-4 border-white/10 inline-block pb-2">About</h2>
            <div className="space-y-8">
              <p className="text-gray-400 text-lg leading-relaxed">{PORTFOLIO_DATA.profile.bio}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {PORTFOLIO_DATA.profile.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-gray-400">
                    <span className="text-[#0ea5e9] font-bold mt-1">▹</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section (Exact Layout like Chetan's) */}
        <section id="skills" className="p-12 lg:p-24 border-t border-[#161b22] bg-[#030a1c]/20">
          <h2 className="text-4xl font-extrabold text-white mb-4 border-b-4 border-white/10 inline-block pb-2">Technical Skills</h2>
          <p className="text-gray-500 mb-12">I have proactively pursued self-learning and leveraged various online learning platforms to acquire a diverse set of skills.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 max-w-6xl">
            {PORTFOLIO_DATA.skills.map((skill, idx) => (
              <div key={idx} className="flex gap-4">
                <ChevronRight className="text-[#0ea5e9] shrink-0" size={20} />
                <div className="flex gap-4 w-full">
                  <span className="font-bold text-white min-w-[100px]">{skill.category}:</span>
                  <span className="text-gray-400">{skill.items.join(", ")}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="p-12 lg:p-24 border-t border-[#161b22]">
          <h2 className="text-4xl font-extrabold text-white mb-16 border-b-4 border-white/10 inline-block pb-2">Experience & Education</h2>
          
          {/* Experience Timeline */}
          <div className="max-w-4xl space-y-12 mb-20">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-10 pb-8 border-l-2 border-[#30363d]">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0ea5e9] border-4 border-[#010409]" />
                <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">{exp.company}</h3>
                <p className="text-[#0ea5e9] font-bold text-sm mb-4 uppercase">{exp.role} | {exp.period}</p>
                <ul className="space-y-3">
                  {exp.tasks.map((task, tidx) => (
                    <li key={tidx} className="text-gray-400 flex gap-3"><span className="text-[#0ea5e9] font-bold">→</span> {task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education Block (Integrated like Chetan's layout) */}
          <div className="max-w-4xl pt-12 border-t border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-[#0ea5e9]" size={28} /> Education
            </h3>
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="bg-[#0d1117] p-8 rounded-2xl border border-[#30363d] group hover:border-[#0ea5e9] transition-all">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <span className="text-[#0ea5e9] font-bold text-sm bg-sky-500/10 px-3 py-1 rounded-full">{edu.period}</span>
                </div>
                <p className="text-gray-400 font-medium mb-2">{edu.institution}</p>
                <p className="text-[#0ea5e9] text-sm font-black uppercase tracking-widest">{edu.score}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-12 lg:p-24 border-t border-[#161b22]">
          <h2 className="text-4xl font-extrabold text-white mb-12 border-b-4 border-white/10 inline-block pb-2">Featured Projects</h2>
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