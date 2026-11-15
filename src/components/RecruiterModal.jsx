import React from 'react';
import { X, CheckCircle2, Download, Briefcase, Zap, ShieldCheck, Mail, MessageSquare, ExternalLink, Code2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RecruiterModal = ({ isOpen, onClose }) => {
  const { lang, isRTL } = useApp();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/80 dark:bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel-glow border border-emerald-500/50 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest font-bold">
              <Zap className="w-4 h-4 animate-pulse" />
              <span>// {lang === 'ar' ? 'ملخص التوظيف السريع' : 'RECRUITER EXECUTIVE SUMMARY'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {lang === 'ar' ? 'عبدالرحمن الديسطي // ملخص الكفاءات التقنية' : 'Abdelrahman Eldeisty // Engineering Dossier'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Full-Stack & Frontend Software Engineer • Cairo / Remote Worldwide
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/[0.05] dark:bg-white/[0.05] text-slate-500 hover:text-black dark:hover:text-white hover:bg-rose-500/20 hover:text-rose-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">{lang === 'ar' ? 'الحالة الحالية' : 'STATUS'}</div>
            <div className="font-bold text-slate-900 dark:text-white mt-0.5">{lang === 'ar' ? 'متاح للعمل الفوري' : 'Open for Hire'}</div>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25">
            <div className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold">{lang === 'ar' ? 'طبيعة العمل' : 'WORK TYPE'}</div>
            <div className="font-bold text-slate-900 dark:text-white mt-0.5">{lang === 'ar' ? 'عن بُعد / Full-Time' : 'Remote / Full-Time'}</div>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/25">
            <div className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">{lang === 'ar' ? 'الخبرة العملية' : 'EXPERIENCE'}</div>
            <div className="font-bold text-slate-900 dark:text-white mt-0.5">+2 Years Production</div>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25">
            <div className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">{lang === 'ar' ? 'كفاءة الكود' : 'CODE EFFICIENCY'}</div>
            <div className="font-bold text-slate-900 dark:text-white mt-0.5">99/100 Vitals</div>
          </div>
        </div>

        {/* Core Value Proposition */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider">
            // {lang === 'ar' ? 'لماذا تختارني لفريقك الهندسي؟' : 'ENGINEERING VALUE PROPOSITION'}
          </h4>
          <div className="space-y-2 font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                {lang === 'ar'
                  ? 'خبرة مثبتة في إطلاق أنظمة إنتاجية حقيقية (K-CODE, Wasly, Bynona, Aqar Mousa) تخدم آلاف المنتجات والمستخدمين.'
                  : 'Proven track record shipping production systems (K-CODE, Wasly, Bynona, Aqar Mousa) managing thousands of SKUs and users.'}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                {lang === 'ar'
                  ? 'إتقان عميق للواجهات الحديثة (React, Next.js, Tailwind, Framer Motion) مع باكد إند قوي (Laravel 12, Filament, MySQL, Redis, REST APIs).'
                  : 'Mastery of modern frontends (React, Next.js, Tailwind, Framer Motion) coupled with solid backend mastery (Laravel, Filament, Redis, REST APIs).'}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                {lang === 'ar'
                  ? 'بناء أنظمة ذكية ومعمارية خوارزمية (مثل محرك تشخيص الروتين لـ 728 سيناريو تحليلي، وأنظمة التسعير المزدوج B2B & B2C).'
                  : 'Algorithmic engineering mindset (e.g. 728-scenario diagnostic routine engine, B2B/B2C dual-pricing middleware).'}
              </span>
            </div>
          </div>
        </div>

        {/* Production Stack Pills */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-wider">
            // {lang === 'ar' ? 'الحزمة التقنية للإنتاج' : 'PRODUCTION TOOLCHAIN'}
          </h4>
          <div className="flex flex-wrap gap-1.5" dir="ltr">
            {['React', 'Next.js', 'TypeScript', 'Laravel 12', 'PHP 8.3', 'Filament v5', 'MySQL', 'Redis', 'Tailwind CSS', 'Docker', 'REST APIs', 'Firebase FCM', 'Git / CI-CD'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
          <a
            href="/Abdelrahman_Eldeisty_CV.pdf"
            download="Abdelrahman_Eldeisty_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تحميل السيرة الذاتية الرسمية (PDF)' : 'Download Official CV (PDF)'}</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="https://wa.me/201026040846"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:abdeisty33@gmail.com"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl glass-panel hover:bg-black/[0.06] dark:hover:bg-white/[0.06] text-slate-700 dark:text-slate-300 font-mono text-xs flex items-center justify-center gap-1.5 border border-black/10 dark:border-white/10 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-500" />
              <span>Email</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
