import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, Cpu, CheckCircle2, Layout, Info } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Auto-slide logic for image gallery
  useEffect(() => {
    if (project?.images?.length > 0) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
      }, 4000); 
      return () => clearInterval(interval);
    }
  }, [project]);

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        className="bg-[#0d1117] border border-[#30363d] w-full max-w-7xl max-h-[95vh] rounded-3xl overflow-hidden relative flex flex-col shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute right-6 top-6 text-white z-[60] bg-white/10 p-2 rounded-full hover:bg-red-500/40 transition-all shadow-xl"
        >
          <X size={28} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar">
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-2">
              {project.title}
            </h2>
            <div className="flex items-center gap-4">
               <span className="text-[#0ea5e9] font-black text-xs uppercase tracking-[0.2em]">{project.category}</span>
               <div className="h-1 w-1 rounded-full bg-white/20"></div>
               <span className="text-gray-500 font-bold text-xs uppercase tracking-widest">{project.tag}</span>
            </div>
          </div>

          {/* TOP SECTION: Photo (Left) & Videos (Right) */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            
            {/* LEFT: Automatic Image Slider (No Black/White) */}
            <div className="lg:col-span-7 relative h-[300px] lg:h-[480px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#161b22] shadow-2xl shadow-sky-500/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImgIndex}
                  src={project.images[currentImgIndex]}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Slider Info Badge */}
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <p className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Layout size={12} className="text-[#0ea5e9]" /> Visualization Gallery
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {project.images.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      i === currentImgIndex ? 'bg-[#0ea5e9] w-8' : 'bg-white/20 w-2'
                    }`} 
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: Video List with Custom Clean Player */}
            <div className="lg:col-span-5 space-y-6 max-h-[480px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="flex items-center justify-between sticky top-0 bg-[#0d1117] z-10 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <PlayCircle className="text-[#0ea5e9]" /> Project Demos
                </h3>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                  {project.videoData?.length || 0} Modules
                </span>
              </div>
              
              <div className="space-y-6">
                {project.videoData?.map((vid, i) => (
                  <div key={i} className="group relative rounded-[1.5rem] border border-white/5 overflow-hidden bg-black transition-all hover:border-[#0ea5e9]/40 hover:shadow-lg hover:shadow-sky-500/5">
                    <div className="aspect-video relative">
                      {vid.url.includes('youtube') ? (
                        <iframe 
                          className="w-full h-full pointer-events-auto" 
                          // Custom Parameters: modestbranding=1 (logo chhota), rel=0 (no suggestions), controls=1 (allow sound/zoom)
                          src={`${vid.url.replace("watch?v=", "embed/")}?modestbranding=1&rel=0&controls=1&showinfo=0&iv_load_policy=3&color=white`} 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <video controls className="w-full h-full object-cover">
                          <source src={vid.url} type="video/mp4" />
                        </video>
                      )}
                      
                      {/* Logo Masking Layer (Optional: Subtle shadow on corners) */}
                      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"></div>
                    </div>

                    {/* Clean Overlay Info */}
                    <div className="p-4 bg-[#161b22] border-t border-white/5 flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">{vid.title}</p>
                        <p className="text-[#0ea5e9] text-[9px] font-black uppercase tracking-[0.1em]">{vid.type}</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg">
                        <Info size={14} className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: Logic & Technology */}
          <div className="border-t border-white/5 pt-12 grid lg:grid-cols-12 gap-12">
            {/* Implementation Details */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-8 w-1 bg-[#0ea5e9] rounded-full"></div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">System Architecture & Logic</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {project.detailedDesc?.map((point, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex gap-4 p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#0ea5e9]/20 transition-all group"
                  >
                    <CheckCircle2 className="text-[#0ea5e9] shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-6">
                    <Cpu size={20} className="text-[#0ea5e9]" /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-[#0d1117] border border-white/10 text-gray-300 rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:text-[#0ea5e9] hover:border-[#0ea5e9]/50 transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Decorative Background Element */}
                <div className="absolute -bottom-10 -right-10 text-white/[0.02] transform -rotate-12">
                  <Cpu size={150} />
                </div>
              </div>
              
              <div className="px-6">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] leading-relaxed italic">
                  * Hardware-validated simulation and real-world edge deployment results.
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