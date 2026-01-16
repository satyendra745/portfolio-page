import React from 'react';
import { Home, User, Briefcase, Rocket, Linkedin, Github, Twitter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const Sidebar = ({ activeSection }) => (
  <aside className="fixed left-0 top-0 w-72 h-screen bg-[#030a1c] border-r border-[#30363d] z-50 hidden lg:flex flex-col p-8 items-center text-center">
    <div className="w-32 h-32 rounded-full border-4 border-[#0ea5e9] p-1 shadow-lg shadow-sky-500/20 mb-6 overflow-hidden bg-black">
      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Satyendra" alt="Satyendra" className="w-full h-full rounded-full object-cover" />
    </div>
    <h1 className="text-2xl font-extrabold text-white mb-1 uppercase tracking-tight">{PORTFOLIO_DATA.profile.name}</h1>
    <p className="text-[#0ea5e9] text-xs font-bold uppercase tracking-widest mb-6">{PORTFOLIO_DATA.profile.title}</p>
    
    <div className="flex gap-4 mb-10">
      <a href={PORTFOLIO_DATA.profile.socials.linkedin} className="p-2 bg-[#161b22] rounded-full text-gray-400 hover:bg-[#0ea5e9] hover:text-white transition-all"><Linkedin size={18} /></a>
      <a href={PORTFOLIO_DATA.profile.socials.github} className="p-2 bg-[#161b22] rounded-full text-gray-400 hover:bg-[#0ea5e9] hover:text-white transition-all"><Github size={18} /></a>
      <a href={PORTFOLIO_DATA.profile.socials.twitter} className="p-2 bg-[#161b22] rounded-full text-gray-400 hover:bg-[#0ea5e9] hover:text-white transition-all"><Twitter size={18} /></a>
    </div>

    <nav className="w-full space-y-2">
      {[
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'about', icon: User, label: 'About' },
        { id: 'experience', icon: Briefcase, label: 'Experience' },
        { id: 'projects', icon: Rocket, label: 'Projects' }
      ].map((item) => (
        <a 
          key={item.id} 
          href={`#${item.id}`} 
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-sky-500/10 text-[#0ea5e9]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
        >
          <item.icon size={20} />
          <span className="font-semibold text-sm">{item.label}</span>
        </a>
      ))}
    </nav>
  </aside>
);

export default Sidebar;