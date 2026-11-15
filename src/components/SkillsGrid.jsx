import React from 'react';
import { Cpu, Terminal, Shield, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsGrid = () => {
  return (
    <section id="skills" className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute left-1/4 bottom-10 w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Cpu className="w-4 h-4" />
            <span>// 03. TECHNICAL CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering & Framework Mastery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Specialized in ultra-clean component architectures, rock-solid TypeScript systems, and high-frequency real-time web UI.
          </p>
        </div>

        {/* 3-Column Bento Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Frontend Core */}
          <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>Frontend Engineering</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  CORE
                </span>
              </div>

              <div className="space-y-4">
                {portfolioData.skills.frontend.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">{skill.highlight}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture & State */}
          <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold">
                  <Terminal className="w-4 h-4" />
                  <span>Architecture & Real-Time</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  SYSTEMS
                </span>
              </div>

              <div className="space-y-4">
                {portfolioData.skills.architecture.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">{skill.highlight}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] hover:border-purple-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>Tools, QA & Delivery</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  WORKFLOW
                </span>
              </div>

              <div className="space-y-4">
                {portfolioData.skills.tools.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">{skill.highlight}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

