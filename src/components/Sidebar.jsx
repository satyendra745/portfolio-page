import React from 'react';
import { Home, User, Code, Briefcase, Rocket, Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Sidebar = ({ activeSection }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-sidebarBg border-r border-slate-800 flex flex-col items-center py-10 z-50">
      <div className="relative w-32 h-32 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-accentBlue animate-pulse"></div>
        <img 
          src="assets/images/profile.jpg" 
          alt="Satyendra" 
          className="w-full h-full rounded-full object-cover p-1"
        />
      </div>
      <h2 className="text-xl font-bold text-white mb-2">Satyendra</h2>
      <div className="flex gap-4 mb-10">
        <a href="#" className="text-slate-400 hover:text-accentBlue transition-all"><Linkedin size={18}/></a>
        <a href="#" className="text-slate-400 hover:text-accentBlue transition-all"><Github size={18}/></a>
        <a href="#" className="text-slate-400 hover:text-accentBlue transition-all"><Instagram size={18}/></a>
      </div>
      <nav className="w-full px-6 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-all ${
              activeSection === item.id ? 'bg-sky-500/10 text-accentBlue' : 'text-slate-400 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="font-semibold text-sm">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;