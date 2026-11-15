import React, { useState, useEffect } from 'react';
import { Terminal, Code, Cpu, ArrowRight, Github, Twitter, Linkedin, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { RecruiterModal } from './RecruiterModal';
import { TiltCard } from './TiltCard';

export const Hero = ({ onOpenCommandPalette }) => {
  const { lang, isRTL } = useApp();
  const [typedCode, setTypedCode] = useState('');
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  
  const t = portfolioData[lang].hero;
  const metrics = portfolioData[lang].metrics;

  const fullCode = `const engineer = {
  name: "Abdelrahman Eldeisty",
  handle: "@eldeisty",
  status: "ONLINE • Available for hire",
  specialization: "Full-Stack & Frontend Architecture",
  coreStack: ["React", "Next.js", "Laravel", "TypeScript", "Tailwind"],
  provenProjects: ["K-CODE", "Rawnaq Al-Khaleej", "Aqar Mousa", "AI Interior"],
  executeVision: () => true
};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode(fullCode.slice(0, index));
      index += 2;
      if (index > fullCode.length) {
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[85vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden">
      
      {/* Ambient Radial Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-purple-600/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Status Ribbon & Recruiter Fast-Track */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="truncate">{t.statusRibbon}</span>
            </div>

            <button
              onClick={() => setRecruiterModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-purple-500/15 hover:from-emerald-500/25 hover:to-cyan-500/25 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold tracking-wide transition-all shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
              <span>{lang === 'ar' ? 'ملخص التوظيف للشركات • Recruiter HUD' : 'Recruiter Fast-Track • Executive HUD'}</span>
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Big Typography & Bio */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <ScrollReveal delay={0.2}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.25]">
                {t.headingStart}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-purple-500 dark:from-emerald-400 dark:via-cyan-300 dark:to-purple-400">
                  {t.headingGradient}
                </span>{' '}
                {t.headingEnd}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-sans">
                {t.bio}
              </p>
            </ScrollReveal>

            {/* Metric Chips Grid */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                {metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl glass-panel border border-black/[0.06] dark:border-white/[0.06] hover:border-emerald-500/40 transition-all group">
                    <div className="text-lg sm:text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                      {m.value}
                    </div>
                    <div className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-0.5 truncate">{m.label}</div>
                    <div className="text-[10px] font-mono text-slate-500 mt-0.5 truncate">{m.change}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/projects"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] transition-all hover:scale-105 active:scale-95"
                >
                  <span>{t.viewProjects}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>

                <Link
                  to="/terminal"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl glass-panel hover:bg-black/[0.05] dark:hover:bg-white/[0.06] border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 font-mono text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95"
                >
                  <Terminal className="w-4 h-4 text-emerald-500" />
                  <span>{t.openTerminal}</span>
                </Link>

                <button
                  onClick={onOpenCommandPalette}
                  className="px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-600 dark:text-purple-300 font-mono text-xs flex items-center gap-2 transition-all"
                  title="Command Palette"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                  <span>{t.commandPalette}</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Social Links Ribbon */}
            <ScrollReveal delay={0.6}>
              <div className="flex items-center gap-3 pt-1 text-slate-500 text-xs font-mono">
                <span>{t.connect}</span>
                <a 
                  href={portfolioData.profile.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:text-emerald-500 transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={portfolioData.profile.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:text-cyan-500 transition-colors"
                  title="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href={portfolioData.profile.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:text-purple-500 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sleek Frosted Glass Code Editor Hero with 3D Tilt */}
          <div className="lg:col-span-5" dir="ltr">
            <ScrollReveal delay={0.3} yOffset={35}>
              <TiltCard maxTilt={6}>
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-purple-600/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

                  <div className="rounded-2xl glass-panel-glow border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl">
                    {/* Editor Tab Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-200/90 dark:bg-[#0a0d14]/90 border-b border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-mono text-xs text-slate-700 dark:text-slate-400 flex items-center gap-1.5 font-bold">
                          <Code className="w-3.5 h-3.5 text-cyan-500" />
                          {t.codeFile}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                        {t.editorBadge}
                      </span>
                    </div>

                    {/* Editor Content Area */}
                    <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed bg-slate-900 dark:bg-[#06080d]/90 text-slate-300 overflow-x-auto min-h-[260px] sm:min-h-[290px]">
                      <pre className="text-emerald-400 dark:text-emerald-300 whitespace-pre font-mono text-[11px] sm:text-xs">
                        {typedCode}
                        <span className="inline-block w-2 h-4 bg-emerald-400 ml-0.5 animate-pulse align-middle" />
                      </pre>
                    </div>

                    {/* Editor Bottom Status Bar */}
                    <div className="px-4 py-2 bg-slate-200/90 dark:bg-[#0a0d14]/95 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-bold">
                          <Cpu className="w-3 h-3" />
                          React 19 + Laravel
                        </span>
                        <span>UTF-8</span>
                      </div>
                      <span>Ln 14, Col 2</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Recruiter Executive Dossier Modal */}
      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
      />
    </section>
  );
};
