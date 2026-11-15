import React, { useState } from 'react';
import { Layers, Search, ExternalLink, Github, Activity, Info, X, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';

export const ProjectsPage = () => {
  const { lang, isRTL } = useApp();
  const t = portfolioData[lang].projectsPage;
  const projects = portfolioData[lang].projects;

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { key: 'all', label: t.all },
    { key: 'ecommerce', label: lang === 'ar' ? 'تجارة إلكترونية ومتاجر' : 'E-Commerce & Retail' },
    { key: 'services', label: lang === 'ar' ? 'منصات ومواقع خدمية' : 'Enterprise & Services' },
    { key: 'ai', label: lang === 'ar' ? 'ذكاء اصطناعي وابتكار' : 'AI & Innovation' },
    { key: 'management', label: lang === 'ar' ? 'أنظمة إدارة ولوحات تحكم' : 'Management Systems' },
  ];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.categoryKey === activeCategory;
    const matchesQuery = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      
      {/* Page Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest font-bold">
            <Layers className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* Filter and Search Bar */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl glass-panel border border-black/[0.08] dark:border-white/[0.08]">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap font-medium ${
                  activeCategory === cat.key
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_-2px_rgba(16,185,129,0.5)]'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.05]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute start-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full ps-9 pe-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#06080d]/80 border border-black/10 dark:border-white/10 focus:border-emerald-500/60 text-xs font-mono text-slate-800 dark:text-slate-200 placeholder-slate-400 outline-none transition-colors"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 sm:py-20 rounded-2xl glass-panel border border-black/10 dark:border-white/10 font-mono text-slate-500 text-sm">
          {lang === 'ar' ? 'لا توجد مشاريع تطابق خيارات البحث الحالية.' : 'No projects match your current search criteria.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={(idx % 2) * 0.1}>
              <TiltCard maxTilt={5} className="h-full">
                <div className="group rounded-2xl glass-panel hover:glass-panel-glow border border-black/[0.08] dark:border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full shadow-sm">
                
                {/* Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-black/[0.06] dark:border-white/[0.06]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Status Pill */}
                  <div className="absolute top-3 start-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.status}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 end-3 px-2.5 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics Badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    <Activity className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5" dir="ltr">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions & Details Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 font-bold transition-colors"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>{t.details}</span>
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
                      >
                        <span>{t.launch}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t.source}</span>
                    </a>
                  </div>

                </div>
              </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-slate-900/70 dark:bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel-glow border border-emerald-500/40 overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header Banner */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 end-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-rose-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 start-6 end-6">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-mono text-emerald-500 font-bold uppercase tracking-wider mb-1">
                  {lang === 'ar' ? 'نبذة عن المشروع' : 'PROJECT OVERVIEW'}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.features && (
                <div>
                  <h4 className="text-xs font-mono text-cyan-500 font-bold uppercase tracking-wider mb-2">
                    {lang === 'ar' ? 'أبرز المزايا والوظائف' : 'KEY CAPABILITIES & FEATURES'}
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono text-purple-500 font-bold uppercase tracking-wider mb-2">
                  {lang === 'ar' ? 'التقنيات المستخدمة' : 'TECH STACK'}
                </h4>
                <div className="flex flex-wrap gap-1.5" dir="ltr">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-sm"
                >
                  <span>{t.launch}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white font-mono text-xs flex items-center gap-2 border border-black/10 dark:border-white/10"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.source}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
