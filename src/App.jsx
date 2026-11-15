import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { MouseSpotlight } from './components/MouseSpotlight';
import { CyberCanvas } from './components/CyberCanvas';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { TerminalPage } from './pages/TerminalPage';
import { ContactPage } from './pages/ContactPage';

// Helper component to reset scroll on route transition
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function MainLayout() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const { theme } = useApp();

  return (
    <div className="relative min-h-screen bg-[#f8fafc] dark:bg-[#080a0f] text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-500 flex flex-col justify-between transition-colors duration-300">
      
      {/* Subtle Scanlines, Interactive Cyber Particle Canvas & Mouse Spotlight */}
      <div className="fixed inset-0 scanlines pointer-events-none z-20 opacity-40" />
      <CyberCanvas />
      <MouseSpotlight />
      <ScrollToTop />

      {/* Floating Multi-Page Header */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Dynamic Multi-Page Router Outlet */}
      <main className="relative z-10 flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenCommandPalette={() => setCommandPaletteOpen(true)} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage onOpenCommandPalette={() => setCommandPaletteOpen(true)} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Action Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </AppProvider>
  );
}
