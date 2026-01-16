import React from 'react';
import { X, Play, Cpu, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-12 backdrop-blur-xl" onClick={onClose}>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="bg-cardBg border border-slate-800 w-full max-w-7xl max-h-[90vh] rounded-3xl overflow-hidden relative flex flex-col lg:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute right-6 top-6 text-slate-400 hover:text-white z-10 p-2 bg-white/5 rounded-full">
            <X size={32} />
          </button>

          {/* Left Side: Info */}
          <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto border-r border-slate-800">
            <img src={project.img} className="w-full rounded-2xl mb-8 border border-slate-800 shadow-2xl" alt="" />
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">{project.title}</h2>
            <div className="flex gap-6 mb-8">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex-1 text-center">
                <span className="text-slate-500 text-[10px] uppercase font-bold flex items-center justify-center gap-2 mb-1"><Cpu size={14}/> Category</span>
                <p className="text-accentBlue font-bold">{project.category}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex-1 text-center">
                <span className="text-slate-500 text-[10px] uppercase font-bold flex items-center justify-center gap-2 mb-1"><Terminal size={14}/> Tech Stack</span>
                <p className="text-white font-bold">{project.tag}</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">{project.desc}</p>
          </div>

          {/* Right Side: Videos */}
          <div className="lg:w-2/5 p-8 lg:p-12 bg-sidebarBg overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Play className="text-accentBlue" fill="currentColor" /> Demos & Learnings
            </h3>
            <div className="space-y-6 text-center">
              {project.videos?.map((vid, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-slate-800 bg-black aspect-video relative group">
                  <video controls className="w-full h-full object-cover">
                    <source src={vid} type="video/mp4" />
                  </video>
                  <p className="py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">Demo {idx + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;