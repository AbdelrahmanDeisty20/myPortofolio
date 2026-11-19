import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { portfolioData } from '../data/portfolioData';

export const InteractiveTerminal = () => {
  const { lang } = useApp();
  const t = portfolioData[lang].terminalPage;
  const projects = portfolioData[lang].projects;

  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [logs, setLogs] = useState([
    { type: 'system', text: 'EldeistyOS v2.4.0 (x86_64-pc-linux-gnu) - Cyber Kernel 6.8.0' },
    { type: 'system', text: lang === 'ar' ? 'اكتب "help" أو اضغط على الأزرار السريعة بالأسفل لتصفح البورتفوليو.' : 'Type "help" or click quick chips below to navigate portfolio.' },
    { type: 'output', text: lang === 'ar' ? 'أهلاً بك! المهندس عبدالرحمن الديسطي - جميع الأنظمة تعمل بكفاءة 100% وبزمن استجابة 12ms.' : 'Welcome! Abdelrahman Eldeisty Portfolio CLI - All systems operational (12ms latency).' },
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (cmdToRun) => {
    const rawCmd = (cmdToRun || inputVal).trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    
    setCommandHistory(prev => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const newLogs = [...logs, { type: 'input', text: `guest@eldeisty:~$ ${rawCmd}` }];

    if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    if (cmd === 'matrix') {
      newLogs.push({
        type: 'success',
        text: t.matrixText
      });
    } else if (cmd === 'help') {
      newLogs.push({ type: 'output', text: t.helpText });
    } else if (cmd === 'sudo') {
      newLogs.push({ type: 'error', text: t.sudoText });
    } else if (cmd === 'about') {
      newLogs.push({
        type: 'output',
        text: lang === 'ar'
          ? "الاسم: عبدالرحمن الديسطي (Abdelrahman Eldeisty)\nالمسمى: مهندس برمجيات وباك إند متقدم (Full-Stack & Backend)\nالتقنيات: Laravel, PHP, React, Tailwind CSS, MySQL, Redis, REST APIs\nالخبرة: +2 سنوات في بناء وتطوير الأنظمة السحابية والمنصات\nالحالة: 🟢 متاح لاستقبال المشاريع والتعاقد الفوري"
          : "Name: Abdelrahman Eldeisty\nRole: Full-Stack & Backend Software Engineer\nStack: Laravel, PHP, React, Tailwind CSS, MySQL, Redis, REST APIs\nExperience: 2+ Years shipping production platforms\nStatus: 🟢 Available for contracts & full-time roles"
      });
    } else if (cmd === 'skills') {
      newLogs.push({
        type: 'output',
        text: lang === 'ar'
          ? "المهارات الأساسية:\n[98%] React / Next.js\n[96%] Laravel & PHP\n[95%] TypeScript & JavaScript (ES6+)\n[99%] Tailwind CSS & Responsive Layouts\n[94%] REST APIs & WebSockets\n[92%] MySQL & Schema Design"
          : "CORE CAPABILITIES:\n[98%] React / Next.js Architecture\n[96%] Laravel & PHP Back-end\n[95%] TypeScript & Modern JavaScript\n[99%] Tailwind CSS & Mobile-First UX\n[94%] RESTful APIs & WebSockets\n[92%] MySQL & Database Optimization"
      });
    } else if (cmd === 'contact') {
      newLogs.push({
        type: 'output',
        text: `Email: ${portfolioData.profile.email}\nWhatsApp / Phone: +20 ${portfolioData.profile.phone}\nGitHub: github.com/AbdelrahmanDeisty20\nLocation: Mansoura, Egypt (Worldwide Remote)\nStatus: Available for hire`
      });
    } else if (cmd === 'projects') {
      const projSummary = projects
        .map((p, idx) => `[0${idx+1}] ${p.title} (${p.status})\n    -> ${p.tagline}`)
        .join('\n\n');
      newLogs.push({ type: 'output', text: projSummary });
    } else {
      newLogs.push({
        type: 'error',
        text: `zsh: command not found: ${rawCmd}. Type "help" for a list of valid commands.`
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIdx = historyIndex - 1;
        setHistoryIndex(prevIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - prevIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div id="terminal" className="w-full max-w-4xl mx-auto my-6 relative rounded-2xl glass-panel-glow overflow-hidden shadow-2xl border border-emerald-500/30" dir="ltr">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-200/90 dark:bg-[#0a0d14]/90 border-b border-black/[0.08] dark:border-white/[0.08] select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-80 cursor-pointer shadow-[0_0_8px_rgba(244,63,94,0.5)]" onClick={() => setLogs([])} title="Clear terminal" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-80 cursor-pointer shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-80 cursor-pointer shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="ms-2 font-mono text-xs text-slate-700 dark:text-slate-400 flex items-center gap-1.5 font-bold truncate">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" />
            guest@eldeisty: ~ (zsh)
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
            TLS 1.3
          </span>
          <button 
            onClick={() => setLogs([])}
            className="p-1 hover:text-rose-500 transition-colors"
            title="Clear logs"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Body Screen */}
      <div 
        onClick={() => inputRef.current?.focus()}
        className="p-3.5 sm:p-5 font-mono text-xs sm:text-sm bg-slate-900 text-slate-200 dark:bg-[#06080d]/90 backdrop-blur-md h-72 sm:h-96 overflow-y-auto space-y-2 select-text cursor-text"
      >
        {logs.map((log, i) => (
          <div key={i} className="leading-relaxed whitespace-pre-wrap break-words">
            {log.type === 'system' && (
              <span className="text-slate-500 italic block">{log.text}</span>
            )}
            {log.type === 'input' && (
              <div className="text-emerald-400 font-semibold">{log.text}</div>
            )}
            {log.type === 'output' && (
              <div className="text-slate-300 ps-2 border-s border-emerald-500/30">{log.text}</div>
            )}
            {log.type === 'success' && (
              <div className="text-emerald-300 font-bold ps-2 border-s-2 border-emerald-400 animate-pulse">{log.text}</div>
            )}
            {log.type === 'error' && (
              <div className="text-rose-400 ps-2 border-s-2 border-rose-500">{log.text}</div>
            )}
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 font-bold shrink-0">guest@eldeisty:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or click a chip below..."
            className="flex-1 bg-transparent text-emerald-200 outline-none placeholder-slate-600 font-mono text-xs sm:text-sm caret-emerald-400 min-w-0"
            autoFocus
          />
        </div>

        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Chips Bar */}
      <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-200/90 dark:bg-[#0a0d14]/95 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between flex-wrap gap-1.5 sm:gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-mono text-slate-500 me-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-500" />
            Quick:
          </span>
          {t.quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/60 dark:bg-white/[0.04] hover:bg-emerald-500/20 border border-black/10 dark:border-white/[0.08] hover:border-emerald-500/40 text-[10px] sm:text-[11px] font-mono text-slate-800 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all active:scale-95 font-medium"
            >
              ${chip}
            </button>
          ))}
        </div>
        <span className="text-[10px] font-mono text-slate-500 hidden md:inline">
          Enter ↵ to execute
        </span>
      </div>
    </div>
  );
};
