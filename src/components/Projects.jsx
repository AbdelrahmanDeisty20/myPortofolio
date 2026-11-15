import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend & AI', 'Web Apps', 'Fintech', 'Design System'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      
      {/* Background Accent */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Layers className="w-4 h-4" />
              <span>// 02. PROVEN PORTFOLIO DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Work & Systems
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_-3px_rgba(16,185,129,0.5)]'
                    : 'glass-panel text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl glass-panel hover:glass-panel-glow border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-500 overflow-hidden flex flex-col"
            >
              
              {/* Project Card Header & Visual Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950/80 border-b border-white/[0.06]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Visual Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d121d] via-transparent to-transparent opacity-90" />

                {/* Floating Status Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#080a0f]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{project.status}</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#080a0f]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                  {project.category}
                </div>
              </div>

              {/* Project Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Performance Metrics Pill */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/[0.05] border border-emerald-500/20 text-xs font-mono text-emerald-400">
                  <Activity className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{project.metrics}</span>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

