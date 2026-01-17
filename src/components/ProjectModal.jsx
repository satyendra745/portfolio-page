import React from 'react';
import { motion } from 'framer-motion';
import { X, PlayCircle, Info, Cpu, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        className="bg-[#0d1117] border border-[#30363d] w-full max-w-7xl max-h-[92vh] rounded-3xl overflow-hidden relative flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-6 top-6 text-white z-50 bg-white/10 hover:bg-red-500/20 p-2 rounded-full transition-all">
          <X size={28} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* LEFT SIDE: Project Info & Images */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">{project.title}</h2>
                <div className="flex gap-3">
                   <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-md text-xs font-bold uppercase">{project.category}</span>
                   <span className="px-3 py-1 bg-white/5 text-gray-400 border border-white/10 rounded-md text-xs font-bold uppercase">{project.tag}</span>
                </div>
              </div>

              {/* Multi-Image Preview */}
              <div className="grid grid-cols-2 gap-4">
                {project.images?.map((img, i) => (
                  <img key={i} src={img} className="w-full h-44 object-cover rounded-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-500" alt="Robot setup" />
                ))}
              </div>

              {/* Implementation Logic Section */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu size={18} className="text-sky-500" /> Core Implementation
                </h3>
                <ul className="space-y-3">
                  {project.detailedDesc?.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 text-sm">
                      <CheckCircle2 size={16} className="text-sky-500 shrink-0" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE: Video Gallery with OVERLAYS */}
            <div className="lg:col-span-6 space-y-8">
              <h3 className="text-xl font-bold text-white border-l-4 border-sky-500 pl-4">Demos & Recordings</h3>
              
              <div className="space-y-8">
                {project.videoData?.map((vid, i) => (
                  <div key={i} className="group relative rounded-3xl border border-white/10 overflow-hidden bg-black shadow-2xl">
                    
                    {/* VIDEO OVERLAY: Header */}
                    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-start opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>
                        <h4 className="text-white font-bold text-lg leading-none">{vid.title}</h4>
                        <span className="text-[10px] text-sky-400 font-black uppercase tracking-widest">{vid.type}</span>
                      </div>
                      <Info size={18} className="text-white/40" />
                    </div>

                    {/* THE VIDEO */}
                    <div className="aspect-video relative">
                       {vid.url.includes('youtube') ? (
                          <iframe className="w-full h-full" src={`${vid.url}?mute=1&playlist=${vid.url.split('/').pop()}&loop=1`} frameBorder="0" allowFullScreen></iframe>
                       ) : (
                          <video controls className="w-full h-full object-cover">
                             <source src={vid.url} type="video/mp4" />
                          </video>
                       )}
                    </div>

                    {/* VIDEO OVERLAY: Footer/Description */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-md border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                       <p className="text-xs text-gray-300 italic">“{vid.desc}”</p>
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