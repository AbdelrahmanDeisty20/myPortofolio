import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Sparkles, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection = () => {
  const { lang, isRTL } = useApp();
  const t = portfolioData[lang].contactPage;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#06b6d4', '#8b5cf6', '#ec4899']
      });
    } catch {
      // Ignore
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative">
      
      {/* Background Glow */}
      <div className="absolute center-x bottom-0 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-t from-emerald-500/10 via-purple-600/5 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Scroll Reveal */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Terminal className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 sm:mt-3">
              {t.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal delay={0.15}>
              <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-black/[0.08] dark:border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2 font-bold">
                    <Mail className="w-4 h-4" />
                    {t.directEmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.04] hover:bg-emerald-500/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors font-bold"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? t.copied : t.copy}</span>
                  </button>
                </div>
                <div className="text-sm font-mono text-slate-900 dark:text-white font-bold break-all" dir="ltr">
                  {portfolioData.profile.email}
                </div>
                <p className="text-xs text-slate-500">
                  {t.guaranteed}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-black/[0.08] dark:border-white/[0.08] space-y-3">
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400 flex items-center gap-2 font-bold">
                  <Sparkles className="w-4 h-4" />
                  {t.availability}
                </span>
                <div className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-medium text-xs sm:text-sm">{t.availabilityVal}</span>
                </div>
                <p className="text-xs text-slate-500">
                  Location: Egypt / Available for Worldwide Remote Contracts
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Transmission Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-8 rounded-2xl glass-panel-glow border border-emerald-500/30 space-y-4 sm:space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 dark:text-slate-400 font-bold">{t.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'ar' ? 'محمد علي' : 'Alex Morgan'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#06080d]/80 border border-black/10 dark:border-white/10 focus:border-emerald-500/60 text-slate-900 dark:text-slate-100 text-sm font-sans outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 dark:text-slate-400 font-bold">{t.emailLabel}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#06080d]/80 border border-black/10 dark:border-white/10 focus:border-emerald-500/60 text-slate-900 dark:text-slate-100 text-sm font-sans outline-none transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 dark:text-slate-400 font-bold">{t.messageLabel}</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'ar' ? 'مرحباً عبدالرحمن، نود التحدث بشأن بناء وتطوير منصة ويب جديدة...' : "Hey Abdelrahman, we'd love to discuss building a new web application..."}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-[#06080d]/80 border border-black/10 dark:border-white/10 focus:border-emerald-500/60 text-slate-900 dark:text-slate-100 text-sm font-sans outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold font-mono text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>{t.successMessage}</span>
                    </>
                  ) : (
                    <>
                      <Send className={`w-4 h-4 text-slate-950 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{t.submitButton}</span>
                    </>
                  )}
                </button>
              </form>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
