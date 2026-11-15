import React, { useState } from 'react';
import { Cpu, Zap, Shield, Terminal } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const SkillsPage = () => {
  const { lang } = useApp();
  const t = portfolioData[lang].skillsPage;
  const skills = portfolioData[lang].skills;

  const [filterLevel, setFilterLevel] = useState(0);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Header with Scroll Reveal */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest">
            <Cpu className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* Filter Slider with Scroll Reveal */}
      <ScrollReveal delay={0.1}>
        <div className="p-4 rounded-2xl glass-panel border border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <span>{t.sliderLabel}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">{filterLevel}%+</span>
          </div>
          <input
            type="range"
            min="0"
            max="95"
            step="5"
            value={filterLevel}
            onChange={(e) => setFilterLevel(Number(e.target.value))}
            className="w-full sm:w-60 accent-emerald-500"
          />
        </div>
      </ScrollReveal>

      {/* 3 Categories Grid with Scroll Reveal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Frontend Core */}
        <ScrollReveal delay={0.15}>
          <div className="p-6 rounded-2xl glass-panel border border-black/[0.08] dark:border-white/[0.08] space-y-6 h-full">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-sm font-semibold">
                <Zap className="w-4 h-4" />
                <span>Frontend Core</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                {t.tier1}
              </span>
            </div>

            <div className="space-y-5">
              {skills.frontend
                .filter(s => s.level >= filterLevel)
                .map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden" dir="ltr">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">{skill.highlight}</div>
                  </div>
                ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Architecture & State */}
        <ScrollReveal delay={0.25}>
          <div className="p-6 rounded-2xl glass-panel border border-black/[0.08] dark:border-white/[0.08] space-y-6 h-full">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-sm font-semibold">
                <Terminal className="w-4 h-4" />
                <span>Architecture & State</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-bold">
                {t.tier2}
              </span>
            </div>

            <div className="space-y-5">
              {skills.architecture
                .filter(s => s.level >= filterLevel)
                .map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden" dir="ltr">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">{skill.highlight}</div>
                  </div>
                ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tools & DevOps */}
        <ScrollReveal delay={0.35}>
          <div className="p-6 rounded-2xl glass-panel border border-black/[0.08] dark:border-white/[0.08] space-y-6 h-full">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono text-sm font-semibold">
                <Shield className="w-4 h-4" />
                <span>Tools & Quality</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-bold">
                {t.tier3}
              </span>
            </div>

            <div className="space-y-5">
              {skills.tools
                .filter(s => s.level >= filterLevel)
                .map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden" dir="ltr">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">{skill.highlight}</div>
                  </div>
                ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

    </div>
  );
};
