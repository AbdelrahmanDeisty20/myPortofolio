import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Experience = () => {
  const { lang, isRTL } = useApp();
  const experienceList = portfolioData[lang].experience;

  return (
    <section id="experience" className="py-12 relative">
      <div>
        
        {/* Section Heading with Scroll Reveal */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2">
              <Briefcase className="w-4 h-4" />
              <span>// {lang === 'ar' ? 'سجل الخبرات والمسيرة المهنية' : 'CHRONOLOGICAL LOGS'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {lang === 'ar' ? 'الخبرات العملية والقيادة التقنية' : 'Career Experience & Leadership'}
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline List */}
        <div className={`relative border-s border-black/[0.08] dark:border-white/[0.08] ${isRTL ? 'mr-4 sm:mr-8 pr-6 sm:pr-10' : 'ml-4 sm:ml-8 pl-6 sm:pl-10'} space-y-12`}>
          {experienceList.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div className="relative group">
                
                {/* Timeline Illuminated Node */}
                <div className={`absolute ${isRTL ? '-right-[31px] sm:-right-[47px]' : '-left-[31px] sm:-left-[47px]'} top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#080a0f] border-2 border-emerald-500 group-hover:bg-emerald-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(16,185,129,0.8)]`} />

                {/* Experience Card */}
                <div className="p-6 rounded-2xl glass-panel hover:glass-panel-glow border border-black/[0.06] dark:border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-black/[0.03] dark:bg-white/[0.03] px-3 py-1 rounded-full border border-black/[0.06] dark:border-white/[0.06] w-fit">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2" dir="ltr">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-[11px] font-mono text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
