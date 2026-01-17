import React from 'react';
import { motion } from 'framer-motion';
import { X, PlayCircle, Cpu, Terminal, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        className="bg-[#0d1117] border border-[#30363d] w-full max-w-7xl max-h-[95vh] rounded-3xl overflow-hidden relative flex flex-col shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-500 hover:text-white z-30 p-2 bg-white/5 rounded-full transition-all">
          <X size={32} />
        </button>

        <div className="flex-1 overflow-y-auto p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Info & Description */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <h2 className="text-5xl font-black text-white leading-tight">{project.title}</h2>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 text-[#0ea5e9] rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Cpu size={14}/> {project.category}
                  </span>
                  <span className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Terminal size={14}/> {project.tag}
                  </span>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative group">
                <img src={project.img} className="w-full h-[400px] object-cover rounded-3xl border border-[#30363d] shadow-2xl transition-transform duration-500" alt={project.title} />
              </div>

              {/* Detailed Features List */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 border-l-4 border-[#0ea5e9] pl-4">
                  Key Features & Implementation
                </h3>
                <div className="grid gap-4">
                  {project.detailedDesc ? project.detailedDesc.map((point, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all"
                    >
                      <CheckCircle2 className="text-[#0ea5e9] shrink-0" size={22} />
                      <p className="text-gray-300 text-lg leading-relaxed">{point}</p>
                    </motion.div>
                  )) : (
                    <p className="text-gray-400 italic">Description details coming soon...</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Demo & Tech Stack */}
            <div className="lg:col-span-5 space-y-10">
              <div className="sticky top-0 space-y-10">
                {/* Video Container */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <PlayCircle className="text-[#0ea5e9]" /> Video Demonstration
                  </h3>
                  <div className="w-full max-w-[300px] mx-auto aspect-[9/16] bg-black rounded-[2.5rem] border-[8px] border-[#161b22] overflow-hidden shadow-2xl relative">
                    {project.videoUrl ? (
                      <iframe 
                        className="w-full h-full"
                        src={`${project.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${project.videoUrl.split('/').pop()}`}
                        title="Project Demo" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-gray-700 bg-[#0d1117]">
                        <PlayCircle size={60} className="mb-4 opacity-10" />
                        <span className="text-sm font-medium">Demo coming soon</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 space-y-6">
                  <h4 className="text-lg font-bold text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#010409] border border-[#30363d] text-gray-400 text-sm rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;