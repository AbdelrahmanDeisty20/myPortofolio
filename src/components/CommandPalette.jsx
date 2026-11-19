import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Terminal, Folder, Cpu, User, Mail, Github, Twitter, Linkedin, Sparkles, X, Copy, Check, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';

export const CommandPalette = ({ isOpen, onClose }) => {
  const { lang } = useApp();
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'home',
      title: lang === 'ar' ? 'الذهاب إلى الصفحة الرئيسية' : 'Navigate to Home Overview',
      category: lang === 'ar' ? 'صفحات' : 'Pages',
      icon: Terminal,
      action: () => {
        navigate('/');
        onClose();
      }
    },
    {
      id: 'about',
      title: lang === 'ar' ? 'سيرة وخبرات عبدالرحمن الديسطي' : 'About Abdelrahman Eldeisty',
      category: lang === 'ar' ? 'صفحات' : 'Pages',
      icon: User,
      action: () => {
        navigate('/about');
        onClose();
      }
    },
    {
      id: 'projects',
      title: lang === 'ar' ? 'استعراض سابقة الأعمال والمشاريع الحقيقية' : 'Explore Real Projects & Systems',
      category: lang === 'ar' ? 'صفحات' : 'Pages',
      icon: Folder,
      action: () => {
        navigate('/projects');
        onClose();
      }
    },
    {
      id: 'skills',
      title: lang === 'ar' ? 'عرض مصفوفة المهارات والتقنيات البرمجية' : 'View Skills & Technical Matrix',
      category: lang === 'ar' ? 'صفحات' : 'Pages',
      icon: Cpu,
      action: () => {
        navigate('/skills');
        onClose();
      }
    },
    {
      id: 'terminal',
      title: lang === 'ar' ? 'فتح شاشة الترمينال التفاعلي' : 'Open Interactive Terminal IDE',
      category: lang === 'ar' ? 'صفحات' : 'Pages',
      icon: Terminal,
      action: () => {
        navigate('/terminal');
        onClose();
      }
    },
    {
      id: 'contact',
      title: lang === 'ar' ? 'التواصل المباشر والتوظيف' : 'Contact & Hire Abdelrahman',
      category: lang === 'ar' ? 'صفحات' : 'Pages',
      icon: Mail,
      action: () => {
        navigate('/contact');
        onClose();
      }
    },
    {
      id: 'copy-email',
      title: lang === 'ar' ? `نسخ البريد الإلكتروني (${portfolioData.profile.email})` : `Copy Email (${portfolioData.profile.email})`,
      category: lang === 'ar' ? 'إجراء سريع' : 'Quick Action',
      icon: copied ? Check : Copy,
      action: () => {
        navigator.clipboard.writeText(portfolioData.profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    },
    {
      id: 'whatsapp',
      title: lang === 'ar' ? `محادثة واتساب مباشرة (${portfolioData.profile.phone})` : `Chat on WhatsApp (${portfolioData.profile.phone})`,
      category: lang === 'ar' ? 'إجراء سريع' : 'Quick Action',
      icon: MessageSquare,
      action: () => {
        window.open(portfolioData.profile.whatsapp, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'github',
      title: lang === 'ar' ? 'زيارة حساب GitHub (AbdelrahmanDeisty20)' : 'Visit GitHub (AbdelrahmanDeisty20)',
      category: lang === 'ar' ? 'حسابات' : 'Social',
      icon: Github,
      action: () => {
        window.open(portfolioData.profile.github, '_blank');
        onClose();
      }
    },
  ];

  const filteredActions = actions.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 dark:bg-[#06080d]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl glass-panel-glow border border-emerald-500/40 overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-[#0a0d14]/90 gap-3">
          <Search className="w-4 h-4 text-emerald-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={lang === 'ar' ? 'ابحث عن صفحة أو إجراء...' : 'Search pages or quick actions...'}
            className="flex-1 bg-transparent text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-black dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-72 sm:max-h-80 overflow-y-auto p-2 space-y-1 bg-white dark:bg-[#06080d]/90 font-mono text-xs">
          {filteredActions.length === 0 ? (
            <div className="p-8 text-center text-slate-500 font-sans">
              {lang === 'ar' ? 'لا توجد نتائج مطابقة.' : 'No matching pages or actions found.'}
            </div>
          ) : (
            filteredActions.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-emerald-500/10 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors group text-start"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] text-slate-500 group-hover:text-emerald-500 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-xs font-medium">{item.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] shrink-0">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-slate-100 dark:bg-[#0a0d14]/95 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>{lang === 'ar' ? 'اضغط بالماوس أو ابحث بالكلمات' : 'Click or search with keyboard'}</span>
          <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700 rounded text-[10px]">
            ESC
          </kbd>
        </div>

      </div>
    </div>
  );
};
