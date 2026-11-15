import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Folder, ExternalLink, Activity, Info, X, CheckCircle2, Github } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';

export const HomePage = ({ onOpenCommandPalette }) => {
  const { lang, isRTL } = useApp();
  const t = portfolioData[lang];
  const featuredProjects = t.projects.filter(p => p.featured).slice(0, 4);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16 sm:pb-20">
      
      {/* Hero Section */}
      <Hero onOpenCommandPalette={onOpenCommandPalette} />

      {/* Featured Projects Showcase with Visual Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest mb-1.5 font-bold">
                <Folder className="w-4 h-4" />
                <span>// {lang === 'ar' ? 'أبرز سابقة الأعمال' : 'FEATURED PRODUCTIONS'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {lang === 'ar' ? 'أنظمة وتطبيقات ويب معتمدة' : 'Featured Client & Enterprise Systems'}
              </h2>
            </div>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors group font-bold"
            >
              <span>{lang === 'ar' ? `استعراض كل الأعمال (${t.projects.length})` : `View All Projects (${t.projects.length})`}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((p, idx) => (
            <ScrollReveal key={p.id} delay={idx * 0.1}>
              <TiltCard maxTilt={5} className="h-full">
                <div className="group rounded-2xl glass-panel hover:glass-panel-glow border border-black/[0.08] dark:border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full shadow-sm">
                
                {/* Visual Image Banner (Clickable to open details) */}
                <div 
                  onClick={() => setSelectedProject(p)}
                  className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-black/[0.06] dark:border-white/[0.06] cursor-pointer"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
                  
                  {/* Status Pill */}
                  <div className="absolute top-3 start-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{p.status}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 end-3 px-2.5 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 font-bold">
                    {p.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 
                      onClick={() => setSelectedProject(p)}
                      className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Metrics Badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    <Activity className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{p.metrics}</span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5" dir="ltr">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-slate-700 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 flex items-center gap-1.5 font-bold transition-colors"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>{lang === 'ar' ? 'تفاصيل النظام' : 'System Specs'}</span>
                      </button>

                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
                      >
                        <span>{lang === 'ar' ? 'معاينة' : 'Live'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-slate-500 hover:text-black dark:hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

              </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Terminal Teaser Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.2}>
          <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-emerald-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-sm">
            <div className="space-y-3 max-w-xl text-center sm:text-start">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest font-bold">
                <Terminal className="w-4 h-4" />
                <span>// {lang === 'ar' ? 'الترمينال التفاعلي' : 'INTERACTIVE CLI'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'ar' ? 'تفضل استعراض الخبرات عبر سطر الأوامر؟' : 'Prefer command-line interfaces?'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                {lang === 'ar' 
                  ? 'جرب ترمينال عبدالرحمن الديسطي التفاعلي لكتابة أوامر استعراض المشاريع، المهارات، ومعلومات الاتصال المباشرة.'
                  : 'Test out Abdelrahman Eldeisty’s interactive terminal to query projects, skill capabilities, and direct dispatch channels.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                to="/terminal"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] transition-all hover:scale-105 active:scale-95"
              >
                <Terminal className="w-4 h-4" />
                <span>{lang === 'ar' ? 'تشغيل الترمينال' : 'Launch Terminal'}</span>
              </Link>
              <Link
                to="/about"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl glass-panel hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-slate-800 dark:text-slate-200 font-mono text-xs flex items-center justify-center gap-2 border border-black/10 dark:border-white/10"
              >
                <span>{lang === 'ar' ? 'السيرة الذاتية' : 'About Abdelrahman'}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Project Details Modal on HomePage */}
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
                  // {lang === 'ar' ? 'نبذة عن المشروع' : 'PROJECT OVERVIEW'}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.features && (
                <div>
                  <h4 className="text-xs font-mono text-cyan-500 font-bold uppercase tracking-wider mb-2">
                    // {lang === 'ar' ? 'أبرز المزايا والوظائف' : 'KEY CAPABILITIES & FEATURES'}
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
                  // {lang === 'ar' ? 'التقنيات المستخدمة' : 'TECH STACK'}
                </h4>
                <div className="flex flex-wrap gap-1.5" dir="ltr">
                  {selectedProject.tags.map(tagItem => (
                    <span key={tagItem} className="px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-slate-200">
                      {tagItem}
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
                  <span>{lang === 'ar' ? 'إطلاق المنصة' : 'Launch System'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white font-mono text-xs flex items-center gap-2 border border-black/10 dark:border-white/10"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'الكود المصدري' : 'Source Code'}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
