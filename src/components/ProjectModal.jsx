import React from 'react';
import { motion } from 'framer-motion';
import { X, Play, Image as ImageIcon, Cpu, Terminal } from 'lucide-react';

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
          className="absolute right-6 top-6 text-gray-500 hover:text-white z-10 p-2 bg-white/5 rounded-full transition-all"
        >
          <X size={32} />
        </button>

        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Media & Info */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <img src={project.img} className="w-full h-[450px] object-cover rounded-2xl border border-[#30363d] shadow-2xl" alt="" />
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
                <p className="text-gray-400 text-lg leading-relaxed">{project.desc} Implementations involve advanced SLAM optimization, real-time visual odometry, and edge deployment on NVIDIA platforms.</p>
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
  );
};

export default ProjectModal;