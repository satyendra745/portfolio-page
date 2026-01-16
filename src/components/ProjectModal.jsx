import React from 'react';
import { motion } from 'framer-motion';
import { X, PlayCircle, Image as ImageIcon, Cpu, Terminal } from 'lucide-react';

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
        className="bg-[#0d1117] border border-[#30363d] w-full max-w-7xl max-h-[90vh] rounded-3xl overflow-hidden relative flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-500 hover:text-white z-20 p-2 bg-white/5 rounded-full transition-all"
        >
          <X size={32} />
        </button>

        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Image & Info */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <img src={project.img} className="w-full h-[400px] object-cover rounded-2xl border border-[#30363d] shadow-2xl" alt={project.title} />
                <div className="grid grid-cols-4 gap-4">
                   {[...Array(4)].map((_, idx) => (
                     <div key={idx} className="h-20 bg-[#161b22] rounded-xl border border-[#30363d] flex items-center justify-center text-gray-700 hover:border-[#0ea5e9] transition-all cursor-pointer">
                       <ImageIcon size={24} />
                     </div>
                   ))}
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/5 space-y-6">
                <h2 className="text-4xl font-black text-white">{project.title}</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2"><Cpu size={12}/> Category</span>
                    <p className="font-bold text-[#0ea5e9]">{project.category}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest flex items-center gap-2"><Terminal size={12}/> Tech Stack</span>
                    <p className="font-bold">{project.tag}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.desc}. Implementations involve advanced SLAM optimization, real-time visual odometry, and edge deployment on NVIDIA platforms.
                </p>
              </div>
            </div>

            {/* Right Column: Video Demo Section */}
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <PlayCircle className="text-[#0ea5e9]" /> Project Live Demo
              </h3>
              
              <div className="w-full max-w-[320px] mx-auto aspect-[9/16] bg-black rounded-3xl border-4 border-[#30363d] overflow-hidden shadow-2xl shadow-sky-500/20 relative">
                {project.videoUrl ? (
                  <iframe 
                    className="w-full h-full"
                    src={`${project.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${project.videoUrl.split('/').pop()}`}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-600">
                    <PlayCircle size={48} className="mb-2 opacity-20" />
                    <p className="italic">Demo Coming Soon</p>
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-sky-500/5 border border-sky-500/10 rounded-xl">
                <p className="text-sm text-gray-400 text-center">
                  Showing real-time hardware performance and software integration.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;