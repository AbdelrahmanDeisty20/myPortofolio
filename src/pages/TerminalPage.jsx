import React, { useState } from 'react';
import { Terminal as TerminalIcon, FileCode, Activity } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';
import { InteractiveTerminal } from '../components/InteractiveTerminal';
import { ScrollReveal } from '../components/ScrollReveal';

export const TerminalPage = () => {
  const { lang } = useApp();
  const t = portfolioData[lang].terminalPage;
  const [activeTab, setActiveTab] = useState('cli');

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
      
      {/* Header with Scroll Reveal */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest mb-1.5">
              <TerminalIcon className="w-4 h-4" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.title}
            </h1>
          </div>

          {/* Workspace Tab Switcher */}
          <div className="flex items-center gap-2 bg-slate-200 dark:bg-[#06080d] p-1.5 rounded-xl border border-black/[0.08] dark:border-white/[0.08]" dir="ltr">
            <button
              onClick={() => setActiveTab('cli')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'cli' ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>{t.consoleTab}</span>
            </button>
            
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'telemetry' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{t.telemetryTab}</span>
            </button>

            <button
              onClick={() => setActiveTab('manifest')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'manifest' ? 'bg-purple-500 text-slate-950 font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{t.manifestTab}</span>
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Main Tab Screen */}
      <ScrollReveal delay={0.15}>
        {activeTab === 'cli' && (
          <div className="w-full">
            <InteractiveTerminal />
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="rounded-2xl glass-panel-glow border border-cyan-500/30 p-4 sm:p-6 font-mono text-xs space-y-4" dir="ltr">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] dark:border-white/[0.08] text-cyan-500 font-bold">
              <span>// LIVE SYSTEM TELEMETRY & DIAGNOSTICS</span>
              <span className="text-emerald-500">STATUS: 100% OPERATIONAL</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.06] space-y-2">
                <span className="text-slate-500">Virtual Processor Threads</span>
                <div className="text-2xl font-bold text-emerald-500">8 Cores</div>
                <p className="text-[10px] text-slate-400">Load average: 0.12, 0.08, 0.05</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.06] space-y-2">
                <span className="text-slate-500">Memory Heap Usage</span>
                <div className="text-2xl font-bold text-cyan-500">19.2 MB</div>
                <p className="text-[10px] text-slate-400">Zero memory leaks detected</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.06] space-y-2">
                <span className="text-slate-500">Render Latency</span>
                <div className="text-2xl font-bold text-purple-500">11.6 ms</div>
                <p className="text-[10px] text-slate-400">60 FPS Hardware Acceleration</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-slate-300 dark:bg-black/60 border border-black/[0.06] dark:border-white/[0.06] space-y-2 text-[11px]">
              <div>[KERNEL] Kernel booted successfully. Host: Abdelrahman Eldeisty Workstation</div>
              <div className="text-emerald-400">[STACK] React 19, TypeScript, Laravel 11, Tailwind CSS</div>
              <div className="text-cyan-400">[SYS] Responsive engine: Mobile, Tablet, Laptop, Ultra-Wide validated</div>
              <div className="text-purple-400">[SECURITY] TLS 1.3 Handshake completed. 0 vulnerabilities.</div>
            </div>
          </div>
        )}

        {activeTab === 'manifest' && (
          <div className="rounded-2xl glass-panel-glow border border-purple-500/30 p-4 sm:p-6 font-mono text-xs overflow-x-auto bg-slate-900 text-purple-300 dark:bg-[#06080d]/90" dir="ltr">
            <pre className="text-[11px] sm:text-xs">
{`{
  "engineer": "${portfolioData.profile.name}",
  "arabicName": "${portfolioData.profile.nameAr}",
  "handle": "${portfolioData.profile.handle}",
  "email": "${portfolioData.profile.email}",
  "github": "${portfolioData.profile.github}",
  "version": "2.4.0",
  "theme": "cyber-dual-theme",
  "languages": ["ar", "en"],
  "projects": [
    "K-CODE Korean Skincare Platform",
    "Rawnaq Al-Khaleej Services",
    "Aqar Mousa Real Estate",
    "AI Interior Staging",
    "Bynona Store",
    "SpeechClinic",
    "Sofra Food Delivery",
    "Digital Blood Bank"
  ],
  "clearance": "unrestricted"
}`}
            </pre>
          </div>
        )}
      </ScrollReveal>

    </div>
  );
};
