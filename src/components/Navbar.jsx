import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Terminal, Command, Sun, Moon, Languages, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ onOpenCommandPalette }) => {
  const { lang, toggleLang, theme, toggleTheme, isRTL } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = portfolioData[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.home, path: '/' },
    { label: t.about, path: '/about' },
    { label: t.projects, path: '/projects' },
    { label: t.skills, path: '/skills' },
    { label: t.terminal, path: '/terminal' },
    { label: t.contact, path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-2.5 bg-white/90 dark:bg-[#080a0f]/90 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.06] shadow-glass' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo / Real Name */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group font-mono text-sm tracking-tight text-slate-900 dark:text-slate-100 hover:text-emerald-500 shrink-0 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 group-hover:border-emerald-400 transition-all shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex items-center">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">eldeisty</span>
              <span className="text-slate-500 dark:text-slate-400">.exe</span>
              <span className="inline-block w-2 h-3.5 bg-emerald-500 dark:bg-emerald-400 ms-1 animate-pulse"></span>
            </div>
          </Link>

          {/* Desktop Multi-page Navigation (Clean & Compact) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/60 p-1 rounded-full border border-black/[0.06] dark:border-white/[0.06] backdrop-blur-md">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `px-3 py-1.5 text-xs font-mono rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_-2px_rgba(16,185,129,0.5)]'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Tools (Language, Theme, Command Palette, Mobile Toggle) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Live Status Pill - Visible on extra large screens */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.available}</span>
            </div>

            {/* Language Switcher (AR / EN) */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/70 hover:bg-slate-200 dark:hover:bg-slate-800 border border-black/10 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors shadow-sm"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Languages className="w-3.5 h-3.5 text-emerald-500" />
              <span className="font-bold text-[11px]">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Theme Switcher (Dark / Light) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-900/70 hover:bg-slate-200 dark:hover:bg-slate-800 border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
              title={theme === 'dark' ? 'الوضع المضيء (Light)' : 'الوضع الليلي (Dark)'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/70 hover:bg-slate-200 dark:hover:bg-slate-800 border border-black/10 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 transition-all shadow-sm"
              title="Search Command Bar (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-emerald-500" />
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700 rounded font-bold">⌘K</kbd>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/70 border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-rose-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Touch-Optimized & Responsive) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl glass-panel space-y-2 border border-emerald-500/20 shadow-2xl animate-in fade-in slide-in-from-top-2">
            <div className="pb-2 mb-2 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {t.available}
              </span>
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1 px-2 py-1 rounded bg-black/[0.04] dark:bg-white/[0.04] text-[11px]"
              >
                <Command className="w-3 h-3 text-emerald-500" />
                <span>⌘K</span>
              </button>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3.5 py-2.5 text-sm font-mono rounded-xl transition-colors ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:bg-emerald-500/10'
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
