import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, Cpu, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Auto-slide logic for images
  useEffect(() => {
    if (project?.images?.length > 0) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
      }, 3000); // 3 seconds mein image badlegi
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
        className="bg-[#0d1117] border border-[#30363d] w-full max-w-6xl max-h-[95vh] rounded-3xl overflow-hidden relative flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute right-6 top-6 text-white z-50 bg-white/10 p-2 rounded-full hover:bg-red-500/40">
          <X size={28} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-10">
          
          {/* 1. TOP SECTION: Video Demos (Main Highlight) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 border-l-4 border-[#0ea5e9] pl-4">
              <PlayCircle className="text-[#0ea5e9]" /> Live Project Demos
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.videoData?.map((vid, i) => (
                <div key={i} className="relative rounded-2xl border border-white/10 overflow-hidden bg-black group">
                  <div className="aspect-video">
                    {vid.url.includes('youtube') ? (
                      <iframe className="w-full h-full" src={`${vid.url}?mute=1&loop=1&playlist=${vid.url.split('/').pop()}`} frameBorder="0" allowFullScreen></iframe>
                    ) : (
                      <video controls className="w-full h-full object-cover"><source src={vid.url} type="video/mp4" /></video>
                    )}
                  </div>
                  {/* Floating Info Overlay (No Black/White) */}
                  <div className="absolute top-0 left-0 p-4 bg-gradient-to-b from-black/70 to-transparent w-full">
                    <p className="text-white font-bold text-sm uppercase">{vid.title}</p>
                    <p className="text-[#0ea5e9] text-[10px] font-black">{vid.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 border-t border-white/5 pt-10">
            {/* 2. LEFT SECTION: Auto-Scrolling Image Slider */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">Project Gallery</h3>
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 bg-[#161b22]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImgIndex}
                    src={project.images[currentImgIndex]}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full object-cover" // Grayscale hata diya gaya
                  />
                </AnimatePresence>
                {/* Dots for Slider */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, i) => (
                    <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === currentImgIndex ? 'bg-[#0ea5e9] w-4' : 'bg-white/20'} transition-all`} />
                  ))}
                </div>
              </div>
            </div>

            {/* 3. RIGHT SECTION: Details & Logic */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold flex items-center gap-2 mb-4 uppercase text-sm tracking-widest text-[#0ea5e9]">
                  <Cpu size={16} /> Technical Implementation
                </h4>
                <div className="space-y-3">
                  {project.detailedDesc?.map((point, i) => (
                    <div key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] rounded text-[10px] font-bold uppercase">{tech}</span>
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