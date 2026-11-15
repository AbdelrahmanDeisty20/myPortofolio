import React from 'react';
import { ArrowUp, Terminal, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { lang } = useApp();
  const t = portfolioData[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.06] bg-slate-100/90 dark:bg-[#05070a]/90 backdrop-blur-md py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-start">
          
          {/* Brand & Security Status */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <div className="font-mono text-xs text-slate-700 dark:text-slate-300">
              <span className="text-emerald-500 font-bold">{t.brand}</span> // 2026
            </div>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>{t.security}</span>
            </div>
          </div>

          {/* Credits */}
          <div className="text-xs font-mono text-slate-500">
            {t.credits}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] hover:bg-emerald-500/10 border border-black/[0.06] dark:border-white/[0.06] hover:border-emerald-500/30 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-all active:scale-95 font-medium"
          >
            <span>{t.top}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
};
