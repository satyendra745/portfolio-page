import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, Cpu, CheckCircle2, Layout } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Auto-slide logic for image gallery
  useEffect(() => {
    if (project?.images?.length > 0) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
      }, 3000); 
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
        <button onClick={onClose} className="absolute right-6 top-6 text-white z-50 bg-white/10 p-2 rounded-full hover:bg-red-500/40 transition-all">
          <X size={28} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          {/* Header Title */}
          <div className="mb-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{project.title}</h2>
            <p className="text-[#0ea5e9] font-bold text-sm tracking-widest">{project.category} // {project.tag}</p>
          </div>

          {/* TOP SECTION: Photo (Left) & Videos (Right) */}
          <div className="grid lg:grid-cols-12 gap-8 mb-10">
            
            {/* LEFT: Automatic Image Slider */}
            <div className="lg:col-span-7 relative h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-[#161b22] group shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImgIndex}
                  src={project.images[currentImgIndex]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Slider Info Overlay */}
              <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <p className="text-white text-xs font-bold flex items-center gap-2">
                  <Layout size={14} className="text-[#0ea5e9]" /> Project Gallery View
                </p>
              </div>

              {/* Progress Dots */}
              <div className="absolute bottom-6 right-8 flex gap-2">
                {project.images.map((_, i) => (
                  <div key={i} className={`h-1.5 transition-all duration-500 rounded-full ${i === currentImgIndex ? 'bg-[#0ea5e9] w-6' : 'bg-white/20 w-2'}`} />
                ))}
              </div>
            </div>

            {/* RIGHT: Video List Section */}
            <div className="lg:col-span-5 space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
              <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
                <PlayCircle className="text-[#0ea5e9]" /> Demo Recordings
              </h3>
              
              {project.videoData?.map((vid, i) => (
                <div key={i} className="relative rounded-2xl border border-white/5 overflow-hidden bg-black group hover:border-[#0ea5e9]/50 transition-all">
                  <div className="aspect-video">
                    {vid.url.includes('youtube') ? (
                      <iframe className="w-full h-full" src={`${vid.url}?mute=1&modestbranding=1`} frameBorder="0" allowFullScreen></iframe>
                    ) : (
                      <video controls className="w-full h-full object-cover"><source src={vid.url} type="video/mp4" /></video>
                    )}
                  </div>
                  {/* Video Label Overlay */}
                  <div className="absolute top-0 left-0 p-3 bg-gradient-to-b from-black/80 to-transparent w-full">
                    <p className="text-white font-bold text-[10px] uppercase tracking-wider">{vid.title}</p>
                    <p className="text-[#0ea5e9] text-[9px] font-black">{vid.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM SECTION: Full Project Description */}
          <div className="border-t border-white/5 pt-10 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-white border-l-4 border-[#0ea5e9] pl-4">Implementation & Logic</h3>
              <div className="grid gap-4">
                {project.detailedDesc?.map((point, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    key={i} 
                    className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all"
                  >
                    <CheckCircle2 className="text-[#0ea5e9] shrink-0" size={20} />
                    <p className="text-gray-300 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack Box */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Cpu size={24} className="text-[#0ea5e9]" /> Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] rounded-xl text-xs font-bold uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0ea5e9]/10 to-transparent border border-[#0ea5e9]/10 mt-8">
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  *This project was developed as part of the Robotics & AI curriculum, focusing on real-time hardware deployment and sensor fusion.
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