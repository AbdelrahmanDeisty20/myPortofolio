import React from 'react';
import { Link } from 'react-router-dom';
import { User, Terminal, Award, Monitor, ArrowRight, Download } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';
import { Experience } from '../components/Experience';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutPage = () => {
  const { lang, isRTL } = useApp();
  const t = portfolioData[lang].aboutPage;
  const principles = portfolioData[lang].principles;
  const workstation = portfolioData[lang].workstation;

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Intro Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Bio Column */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest">
              <User className="w-4 h-4" />
              <span>{t.badge}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-3xl/[1.35] sm:text-5xl/[1.3] font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {t.p1}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.p2}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] transition-all"
              >
                <span>{t.getInTouch}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
              <a
                href="/Abdelrahman_Eldeisty_CV.pdf"
                download="Abdelrahman_Eldeisty_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl glass-panel hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-slate-800 dark:text-slate-200 font-mono text-xs flex items-center gap-2 border border-black/10 dark:border-white/10"
              >
                <Download className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t.downloadCv}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Profile Stats Matrix Card */}
        <div className="lg:col-span-5">
          <ScrollReveal delay={0.3} yOffset={30}>
            <div className="p-5 sm:p-6 rounded-2xl glass-panel-glow border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] dark:border-white/[0.08]">
                <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  {t.metricsCardTitle}
                </span>
                <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">ACTIVE</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <span className="text-slate-500">{t.location}</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{t.locationVal}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <span className="text-slate-500">{t.experience}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{t.experienceVal}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <span className="text-slate-500">{t.languages}</span>
                  <span className="text-slate-800 dark:text-slate-200">{t.languagesVal}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.04]">
                  <span className="text-slate-500">{t.weapon}</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">React, Laravel</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">{t.clearance}</span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">{t.clearanceVal}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Engineering Principles with Scroll Reveal */}
      <div className="space-y-6">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            <span>{t.philosophyTitle}</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((pr, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-5 rounded-xl glass-panel border border-black/[0.06] dark:border-white/[0.06] space-y-2 h-full">
                <div className="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  <span dir="ltr" className="inline-block">0{i + 1}.</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{pr.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">{pr.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Workstation & Environment with Scroll Reveal */}
      <div className="space-y-6">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Monitor className="w-5 h-5 text-cyan-500" />
            <span>{t.workstationTitle}</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workstation.map((w, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="p-4 rounded-xl glass-panel border border-black/[0.06] dark:border-white/[0.06] space-y-1 h-full">
                <span className="text-[11px] font-mono text-slate-500">{w.label}</span>
                <div className="text-xs font-mono text-slate-800 dark:text-slate-200 font-medium">{w.value}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Career Timeline Section */}
      <Experience />

    </div>
  );
};
