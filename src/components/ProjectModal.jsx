import React from 'react';
import { motion } from 'framer-motion';
import { X, PlayCircle, Cpu, Terminal, CheckCircle2, Image as ImageIcon } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9 }} animate={{ scale: 1 }}
        className="bg-[#0d1117] border border-[#30363d] w-full max-w-7xl max-h-[90vh] rounded-3xl overflow-hidden relative flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-white z-50 bg-white/5 p-2 rounded-full">
          <X size={28} />
        </button>

        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* LEFT: Description & Tech */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-4xl font-black text-white">{project.title}</h2>
              
              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-4">
                {project.images?.map((img, i) => (
                  <img key={i} src={img} className="w-full h-48 object-cover rounded-2xl border border-white/10 hover:scale-[1.02] transition-transform" alt="Gallery" />
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-sky-400">Implementation Details</h3>
                <div className="space-y-3">
                  {project.detailedDesc?.map((point, i) => (
                    <div key={i} className="flex gap-3 text-gray-300 bg-white/5 p-3 rounded-xl">
                      <CheckCircle2 size={18} className="text-sky-500 shrink-0" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Video Gallery */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <PlayCircle className="text-sky-500" /> Demos & Simulations
              </h3>
              
              <div className="space-y-6">
                {project.videos?.map((vid, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 overflow-hidden bg-black shadow-xl">
                    {vid.includes('youtube') ? (
                      <iframe className="w-full aspect-video" src={vid} title="YT Video" frameBorder="0" allowFullScreen></iframe>
                    ) : (
                      <video controls className="w-full aspect-video">
                        <source src={vid} type="video/mp4" />
                      </video>
                    )}
                    <p className="p-3 text-xs text-gray-500 text-center bg-white/5 font-mono">Demo Module 0{i+1}</p>
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