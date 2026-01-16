import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ChevronRight, GraduationCap, Mail, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState('');

  // Mouse Simulation Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const phrases = useMemo(() => ["ROS 2 Dev", "AI & Robotics", "SLAM Expert"], []);
  
  useEffect(() => {
    let i = 0, j = 0, isDeleting = false;
    const type = () => {
      const currentPhrase = phrases[i];
      setTypedText(isDeleting ? currentPhrase.substring(0, j - 1) : currentPhrase.substring(0, j + 1));
      j = isDeleting ? j - 1 : j + 1;
      if (!isDeleting && j === currentPhrase.length) setTimeout(() => isDeleting = true, 2000);
      else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % phrases.length; }
      setTimeout(type, isDeleting ? 50 : 100);
    };
    type();
  }, [phrases]);

  return (
    <div className="min-h-screen bg-[#010409] text-[#e6edf3]" onMouseMove={(e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); }}>
      
      {/* Interactive Mouse Glow Background */}
      <motion.div className="fixed top-0 left-0 w-[600px] h-[600px] bg-[#0ea5e9]/10 blur-[120px] rounded-full pointer-events-none z-0"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }} />

      <Sidebar activeSection={activeSection} />

      <main className="lg:ml-72 relative z-10">
        
        {/* Home Section */}
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8">
          <motion.h1 className="text-7xl lg:text-9xl font-black bg-gradient-to-r from-white via-[#0ea5e9] to-purple-500 bg-clip-text text-transparent">
            SATYENDRA
          </motion.h1>
          <p className="text-xl lg:text-3xl font-medium text-gray-400">
            Expert in <span className="text-[#0ea5e9] border-b-2 border-[#0ea5e9]">{typedText}</span>
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="p-12 lg:p-24 border-t border-white/5">
           <h2 className="text-4xl font-extrabold mb-10 border-b-4 border-[#0ea5e9] inline-block pb-2">About</h2>
           <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mb-10">{PORTFOLIO_DATA.profile.bio}</p>
           <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {PORTFOLIO_DATA.profile.details.map((d, i) => (
                <div key={i} className="flex gap-3 text-gray-400"><span className="text-[#0ea5e9]">▹</span>{d}</div>
              ))}
           </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="p-12 lg:p-24 border-t border-white/5">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-[#0ea5e9] inline-block pb-2">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
            {PORTFOLIO_DATA.skills.map((s, idx) => (
              <div key={idx} className="flex gap-4">
                <ChevronRight className="text-[#0ea5e9] shrink-0" />
                <div className="flex gap-4 font-semibold"><span className="text-white min-w-[100px]">{s.category}:</span><span className="text-gray-400 font-normal">{s.items.join(", ")}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="p-12 lg:p-24 border-t border-white/5">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-[#0ea5e9] inline-block pb-2">Experience</h2>
          <div className="max-w-4xl space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="pl-10 border-l-2 border-[#30363d] relative">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0ea5e9]" />
                <h3 className="text-2xl font-bold uppercase tracking-tight">{exp.company}</h3>
                <p className="text-[#0ea5e9] font-bold text-sm mb-4">{exp.role} | {exp.period}</p>
                <ul className="space-y-2">{exp.tasks.map((t, i) => <li key={i} className="text-gray-400">→ {t}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section - Timeline Layout */}
        <section id="education" className="p-12 lg:p-24 border-t border-white/5">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-[#0ea5e9] inline-block pb-2">Education</h2>
          <div className="max-w-4xl space-y-2">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="flex gap-6 relative group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-[#0ea5e9] group-hover:bg-[#0ea5e9] transition-all z-10 bg-black" />
                  {idx !== 3 && <div className="w-[2px] h-full bg-[#30363d]" />}
                </div>
                <div className="pb-10 pt-0.5">
                  <h4 className="text-2xl font-bold text-white group-hover:text-[#0ea5e9] transition-all">{edu.degree}</h4>
                  <div className="mt-2 inline-block px-3 py-1 bg-white/5 rounded text-[#0ea5e9] font-bold text-xs tracking-widest">{edu.period}</div>
                  <p className="text-gray-500 mt-2 italic">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-12 lg:p-24 border-t border-white/5">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-[#0ea5e9] inline-block pb-2">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} onClick={() => setSelectedProject(proj)} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-12 lg:p-24 border-t border-white/5 bg-[#030a1c]/20 text-center">
           <h2 className="text-4xl font-extrabold mb-6">Contact</h2>
           <p className="text-gray-400 mb-10 max-w-xl mx-auto">Inbox is always open for new opportunities!</p>
           <a href="mailto:satyendra@example.com" className="px-12 py-4 bg-[#0ea5e9] rounded-xl font-bold hover:scale-105 transition-all inline-flex items-center gap-2 shadow-lg shadow-sky-500/20">
             <Mail size={20} /> Say Hello
           </a>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
}