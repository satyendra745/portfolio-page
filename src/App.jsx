import React, { useState, useEffect, useMemo } from 'react';
import { 
  Home, User, Briefcase, Code, Rocket, 
  Linkedin, Github, Twitter, ExternalLink, 
  X, Play, Image as ImageIcon, Cpu, Terminal 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SATYENDRA PORTFOLIO DATA
 * Future mein updates ke liye sirf is object ko edit karein.
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "Satyendra",
    title: "Robotics & AI Engineer",
    bio: "I am a passionate AI and Robotics Engineer specialized in building autonomous systems. My expertise lies in ROS 2, SLAM, and Computer Vision. I focus on bridging the gap between high-fidelity simulations and real-world robot deployment.",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  experience: [
    {
      company: "MuksRobotics",
      role: "Robotics Engineer",
      period: "April 2025 – Present",
      tasks: [
        "Building autonomous navigation stacks for AMRs and Humanoids.",
        "Integrating LiDAR and RGB-D cameras for 3D SLAM.",
        "Developing hardware-agnostic Robot SDKs for NVIDIA Jetson."
      ]
    },
    {
      company: "MuksRobotics",
      role: "AI & Robotics Intern",
      period: "Aug 2024 – Feb 2025",
      tasks: [
        "Simulated mobile manipulators in Gazebo and Ignition.",
        "Implemented MoveIt 2 for robotic arm motion planning.",
        "Trained imitation learning policies for task automation."
      ]
    }
  ],
  projects: [
    { id: 1, title: "Autonomous AMR Navigation", category: "Robotics", tag: "SLAM & ROS 2", desc: "End-to-end navigation stack using ROS 2 and Nav2.", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=600" },
    { id: 2, title: "Humanoid Balance Control", category: "AI", tag: "Mujoco & Python", desc: "Bipedal walking simulation using reinforcement learning.", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600" },
    { id: 3, title: "Edge-AI Object Tracking", category: "Vision", tag: "PyTorch & OpenCV", desc: "Real-time detection and tracking on Jetson Nano.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600" },
    { id: 4, title: "Robot Swarm Coordination", category: "Multi-Agent", tag: "C++ & ROS", desc: "Decentralized path planning for multiple robots.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" },
    { id: 5, title: "Pick & Place Automation", category: "Manipulation", tag: "MoveIt 2", desc: "6-DOF robotic arm control for warehouse sorting.", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600" },
    { id: 6, title: "Digital Twin Environment", category: "Simulation", tag: "Gazebo Ignition", desc: "High-fidelity simulation of a smart factory.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" },
    { id: 7, title: "Telepresence Robot", category: "IoT", tag: "MQTT & ESP32", desc: "Web-controlled robot for remote monitoring.", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600" },
    { id: 8, title: "Autonomous Drone Delivery", category: "Aviation", tag: "PX4 Autopilot", desc: "GPS-based waypoint navigation for VTOL drones.", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=600" },
    { id: 9, title: "Robot Voice Command AI", category: "NLP", tag: "LangChain", desc: "Integrating GPT-4 for natural language robot control.", img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=600" },
    { id: 10, title: "Jetson-Based Quadruped", category: "Embedded", tag: "Jetson Orin", desc: "Control algorithms for a 4-legged robot dog.", img: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=600" },
  ]
};

// --- MODULAR COMPONENTS ---

const Sidebar = ({ activeSection }) => (
  <aside className="fixed left-0 top-0 w-72 h-screen bg-[#030a1c] border-r border-[#30363d] z-50 hidden lg:flex flex-col p-8 items-center text-center">
    <div className="w-32 h-32 rounded-full border-4 border-[#0ea5e9] p-1 shadow-lg shadow-sky-500/20 mb-6 overflow-hidden bg-black">
      {/* Profile Photo: Yahan apna actual image URL dalein */}
      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Satyendra" alt="Satyendra" className="w-full h-full rounded-full object-cover" />
    </div>
    <h1 className="text-2xl font-extrabold text-white mb-1 uppercase tracking-tight">{PORTFOLIO_DATA.profile.name}</h1>
    <p className="text-[#0ea5e9] text-xs font-bold uppercase tracking-widest mb-6">{PORTFOLIO_DATA.profile.title}</p>
    
    <div className="flex gap-4 mb-10">
      <a href={PORTFOLIO_DATA.profile.socials.linkedin} className="p-2 bg-[#161b22] rounded-full text-gray-400 hover:bg-[#0ea5e9] hover:text-white transition-all"><Linkedin size={18} /></a>
      <a href={PORTFOLIO_DATA.profile.socials.github} className="p-2 bg-[#161b22] rounded-full text-gray-400 hover:bg-[#0ea5e9] hover:text-white transition-all"><Github size={18} /></a>
      <a href={PORTFOLIO_DATA.profile.socials.twitter} className="p-2 bg-[#161b22] rounded-full text-gray-400 hover:bg-[#0ea5e9] hover:text-white transition-all"><Twitter size={18} /></a>
    </div>

    <nav className="w-full space-y-2">
      {[
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'about', icon: User, label: 'About' },
        { id: 'experience', icon: Briefcase, label: 'Experience' },
        { id: 'projects', icon: Rocket, label: 'Projects' }
      ].map((item) => (
        <a 
          key={item.id} 
          href={`#${item.id}`} 
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-sky-500/10 text-[#0ea5e9]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
        >
          <item.icon size={20} />
          <span className="font-semibold text-sm">{item.label}</span>
        </a>
      ))}
    </nav>
  </aside>
);

const ProjectCard = ({ project, onClick }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-[#0d1117] border border-[#30363d] rounded-2xl overflow-hidden group cursor-pointer"
    onClick={onClick}
  >
    <div className="h-48 relative overflow-hidden bg-black">
      <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80" />
      <div className="absolute inset-0 bg-[#030a1c]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-[#0ea5e9] text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
          View Details <ExternalLink size={16} />
        </button>
      </div>
    </div>
    <div className="p-5">
      <span className="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9] bg-sky-500/10 px-2 py-1 rounded">{project.category}</span>
      <h3 className="text-xl font-bold text-white mt-3 mb-1">{project.title}</h3>
      <p className="text-gray-500 text-sm line-clamp-2">{project.desc}</p>
    </div>
  </motion.div>
);

// --- MAIN APP ---

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState('');

  // Typing effect simulation
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

      {/* MODAL (Two Column Display) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-[#0d1117] border border-[#30363d] w-full max-w-7xl max-h-[90vh] rounded-3xl overflow-hidden relative flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 text-gray-500 hover:text-white z-10 p-2 bg-white/5 rounded-full transition-all"
              >
                <X size={32} />
              </button>

              <div className="flex-1 overflow-y-auto p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* Left Column: Media & Info */}
                  <div className="lg:col-span-7 space-y-8">
                    <div className="space-y-4">
                      <img src={selectedProject.img} className="w-full h-[450px] object-cover rounded-2xl border border-[#30363d] shadow-2xl" alt="" />
                      <div className="grid grid-cols-4 gap-4">
                         {[...Array(4)].map((_, idx) => (
                           <div key={idx} className="h-20 bg-[#161b22] rounded-xl border border-[#30363d] flex items-center justify-center text-gray-700 hover:border-[#0ea5e9] transition-all cursor-pointer">
                             <ImageIcon size={24} />
                           </div>
                         ))}
                      </div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/5 space-y-6">
                      <h2 className="text-4xl font-black text-white">{selectedProject.title}</h2>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2"><Cpu size={12}/> Category</span>
                          <p className="font-bold text-[#0ea5e9]">{selectedProject.category}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2"><Terminal size={12}/> Tech Stack</span>
                          <p className="font-bold">{selectedProject.tag}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-lg leading-relaxed">{selectedProject.desc} Implementations involve advanced SLAM optimization, real-time visual odometry, and edge deployment on NVIDIA platforms.</p>
                    </div>
                  </div>

                  {/* Right Column: Video Gallery */}
                  <div className="lg:col-span-5 space-y-8">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Play className="text-[#0ea5e9]" /> Learnings & Demos
                    </h3>
                    <div className="space-y-6">
                       {[
                         { title: "Simulation Demo", type: "Gazebo" },
                         { title: "Real Robot Performance", type: "Deployment" },
                         { title: "Hardware Benchmarking", type: "Profiling" }
                       ].map((vid, idx) => (
                         <div key={idx} className="bg-black rounded-2xl border border-[#30363d] overflow-hidden group relative">
                           <div className="px-4 py-3 bg-[#161b22] border-b border-[#30363d] flex justify-between items-center">
                             <span className="text-sm font-bold text-gray-300">{vid.title}</span>
                             <span className="text-[10px] font-bold text-[#0ea5e9] uppercase bg-sky-500/10 px-2 py-0.5 rounded">{vid.type}</span>
                           </div>
                           <div className="aspect-video bg-[#030a1c] flex items-center justify-center group-hover:bg-[#030a1c]/70 transition-all cursor-pointer">
                             <Play size={48} className="text-[#0ea5e9] opacity-30 group-hover:opacity-100 transition-opacity" />
                           </div>
                         </div>
                       ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}