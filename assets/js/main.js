/**
 * Abdelrahman El-Deisty - Developer Portfolio & Product Lab
 * Core Interactive Client Engine (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  init() {
    this.initTheme();
    this.initNav();
    this.initCommandPalette();
    this.initMobileDrawer();
    this.initTerminal();
    this.initGlobalListeners();
  },

  // ==========================================
  // Theme Management (Dark / Light / System)
  // ==========================================
  initTheme() {
    // Theme initialization and 1-click toggle is handled exclusively by window.Theme
  },

  updateThemeToggleIcons(theme) {
    if (window.Theme) {
      window.Theme.updateIcons(window.Theme.getSetting(), window.Theme.getEffectiveTheme());
      return;
    }
    const icons = document.querySelectorAll('.theme-icon-slot');
    icons.forEach(el => {
      if (theme === 'light') {
        el.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      } else {
        el.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      }
    });
  },

  // ==========================================
  // Navigation & Active State
  // ==========================================
  initNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === currentPath || href === `./${currentPath}`)) {
        link.classList.add('active');
      }
    });
  },

  // ==========================================
  // Command Palette (Ctrl + K)
  // ==========================================
  initCommandPalette() {
    let backdrop = document.querySelector('.command-palette-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'command-palette-backdrop';
      backdrop.innerHTML = `
        <div class="command-palette-modal">
          <div class="command-palette-input-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" class="command-palette-input" placeholder="Type a command or search projects, stack, notes..." autofocus />
            <span class="search-shortcut-badge">ESC</span>
          </div>
          <div class="command-palette-results" id="paletteResults">
            <!-- Dynamic Items -->
          </div>
          <div class="command-palette-footer">
            <span>Navigation: <kbd>↑</kbd> <kbd>↓</kbd> to select, <kbd>ENTER</kbd> to open</span>
            <span>Shortcut: <kbd>Ctrl</kbd> + <kbd>K</kbd></span>
          </div>
        </div>
      `;
      document.body.appendChild(backdrop);
    }

    const input = backdrop.querySelector('.command-palette-input');
    const resultsContainer = backdrop.querySelector('#paletteResults');

    const openPalette = () => {
      backdrop.classList.add('active');
      input.value = '';
      input.focus();
      this.renderCommandResults('', resultsContainer);
    };

    const closePalette = () => {
      backdrop.classList.remove('active');
    };

    // Keyboard trigger (Ctrl+K or Cmd+K)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (backdrop.classList.contains('active')) {
          closePalette();
        } else {
          openPalette();
        }
      }
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closePalette();
      }
    });

    // Trigger button clicks
    document.querySelectorAll('.search-trigger-btn').forEach(btn => {
      btn.addEventListener('click', openPalette);
    });

    // Close on clicking backdrop
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closePalette();
    });

    // Real-time input search
    input.addEventListener('input', (e) => {
      this.renderCommandResults(e.target.value, resultsContainer);
    });

    // Keyboard Arrow navigation inside results
    input.addEventListener('keydown', (e) => {
      const items = resultsContainer.querySelectorAll('.command-item');
      if (!items.length) return;
      let currentIndex = -1;
      items.forEach((it, idx) => {
        if (it.classList.contains('selected')) currentIndex = idx;
      });

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIdx = (currentIndex + 1) % items.length;
        items.forEach(i => i.classList.remove('selected'));
        items[nextIdx].classList.add('selected');
        items[nextIdx].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIdx = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
        items.forEach(i => i.classList.remove('selected'));
        items[prevIdx].classList.add('selected');
        items[prevIdx].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = resultsContainer.querySelector('.command-item.selected') || items[0];
        if (selected) {
          selected.click();
        }
      }
    });
  },

  async renderCommandResults(query, container) {
    if (!query || query.trim() === '') {
      // Default Quick Actions
      container.innerHTML = `
        <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); padding: 0.4rem 0.75rem;">QUICK NAVIGATION</div>
        <div class="command-item selected" data-url="./work.html">
          <div class="command-item-left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            <div>
              <div style="font-weight: 600;">View Selected Work</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Explore production Laravel & SaaS systems</div>
            </div>
          </div>
          <span class="badge">Go</span>
        </div>
        <div class="command-item" data-url="./skills.html">
          <div class="command-item-left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <div>
              <div style="font-weight: 600;">Technical Stack & Architecture</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Laravel, PHP 8.3, MySQL, Redis, Sanctum</div>
            </div>
          </div>
          <span class="badge">Go</span>
        </div>
        <div class="command-item" data-url="./resume.html">
          <div class="command-item-left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <div>
              <div style="font-weight: 600;">View Resume / CV</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Print-ready engineering resume</div>
            </div>
          </div>
          <span class="badge">CV</span>
        </div>
        <div class="command-item" data-url="./contact.html">
          <div class="command-item-left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <div>
              <div style="font-weight: 600;">Contact Abdelrahman</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Available for backend & Laravel opportunities</div>
            </div>
          </div>
          <span class="badge badge-cyan">Email</span>
        </div>
        <div class="command-item" data-url="./dashboard/index.html">
          <div class="command-item-left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <div>
              <div style="font-weight: 600;">Open Private CMS Dashboard</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Manage portfolio content & view analytics</div>
            </div>
          </div>
          <span class="badge badge-indigo">Admin</span>
        </div>
      `;
    } else {
      const results = await PortfolioAPI.searchAll(query);
      if (results.length === 0) {
        container.innerHTML = `
          <div style="padding: 2.5rem 1rem; text-align: center; color: var(--text-muted);">
            <p>No results found for "<strong>${escapeHtml(query)}</strong>"</p>
            <p style="font-size: 0.8rem; margin-top: 0.35rem;">Try searching for "Laravel", "MySQL", "SaaS", or "API"</p>
          </div>
        `;
        return;
      }

      container.innerHTML = results.map((res, idx) => `
        <div class="command-item ${idx === 0 ? 'selected' : ''}" data-url="${res.url}">
          <div class="command-item-left">
            <div class="badge badge-cyan">${res.type}</div>
            <div>
              <div style="font-weight: 600;">${escapeHtml(res.title)}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(res.subtitle)}</div>
            </div>
          </div>
          <span class="badge">${res.badge}</span>
        </div>
      `).join('');
    }

    container.querySelectorAll('.command-item').forEach(item => {
      item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) window.location.href = url;
      });
    });
  },

  // ==========================================
  // Mobile Navigation Drawer
  // ==========================================
  initMobileDrawer() {
    let drawer = document.querySelector('.mobile-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.className = 'mobile-drawer';
      const isAr = window.I18n && window.I18n.getLanguage() === 'ar';
      drawer.innerHTML = `
        <div class="mobile-drawer-header">
          <div class="brand-link">
            <span class="brand-badge">AE</span>
            <span class="brand-name" data-i18n="brand.name">Abdelrahman El-Deisty</span>
          </div>
          <div class="mobile-drawer-actions">
            <button class="lang-switcher-btn" aria-label="Switch Language">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span class="lang-label-slot">${isAr ? 'English' : 'العربية'}</span>
            </button>
            <button class="theme-toggle-btn" aria-label="Toggle Theme">
              <span class="theme-icon-slot"></span>
            </button>
            <button class="mobile-drawer-close" aria-label="Close Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
        <div class="mobile-drawer-scroll">
          <nav class="mobile-drawer-nav">
            <a href="./index.html" class="mobile-drawer-link" data-i18n="nav.home">Home</a>
            <a href="./work.html" class="mobile-drawer-link" data-i18n="nav.projects">Work / Projects</a>
            <a href="./skills.html" class="mobile-drawer-link" data-i18n="nav.skills">Tech Stack</a>
            <a href="./experience.html" class="mobile-drawer-link" data-i18n="nav.experience">Experience</a>
            <a href="./services.html" class="mobile-drawer-link" data-i18n="nav.services">Services</a>
            <a href="./about.html" class="mobile-drawer-link" data-i18n="nav.about">About & Philosophy</a>
            <a href="./articles.html" class="mobile-drawer-link" data-i18n="nav.articles">Engineering Notes</a>
            <a href="./resume.html" class="mobile-drawer-link" data-i18n="nav.resume">Resume</a>
            <a href="./contact.html" class="mobile-drawer-link" data-i18n="nav.contact">Contact</a>
          </nav>
          <div class="mobile-drawer-footer">
            <a href="./contact.html" class="btn btn-primary" style="width: 100%; justify-content: center;" data-i18n="hero.ctaContact">Contact Me</a>
          </div>
        </div>
      `;
      document.body.appendChild(drawer);
      if (window.I18n) {
        window.I18n.translateDOM(drawer);
        window.I18n.updateSwitcherButtons();
      }
      if (window.Theme) {
        window.Theme.updateIcons(window.Theme.getSetting(), window.Theme.getEffectiveTheme());
      }
    }

    const toggleBtns = document.querySelectorAll('.mobile-nav-toggle');
    const closeBtn = drawer.querySelector('.mobile-drawer-close');

    const openDrawer = () => {
      drawer.classList.add('active');
      document.body.classList.add('drawer-open');
      document.documentElement.classList.add('drawer-open');
      if (window.I18n) window.I18n.translateDOM(drawer);
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      document.body.classList.remove('drawer-open');
      document.documentElement.classList.remove('drawer-open');
    };

    toggleBtns.forEach(btn => btn.addEventListener('click', openDrawer));
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    drawer.querySelectorAll('.mobile-drawer-link').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  },

  // ==========================================
  // Hero Terminal Micro-Interaction
  // ==========================================
  initTerminal() {
    const termBody = document.getElementById('heroTerminalBody');
    if (!termBody) return;

    const sequence = [
      { cmd: 'whoami', output: 'Abdelrahman El-Deisty — Software Engineer & Backend Developer' },
      { cmd: 'php artisan --version', output: 'Laravel Framework 11.28.0 (PHP v8.3.12)' },
      { cmd: 'cat core_stack.json', output: `["Laravel 11", "MySQL 8", "REST APIs", "Hostinger (hPanel)", "Redis", "Sanctum", "Git"]` },
      { cmd: 'systemctl status engineer.service', output: '● ACTIVE (Ready for software engineering & backend opportunities)' }
    ];

    let currentStep = 0;

    const renderStep = () => {
      if (currentStep >= sequence.length) return;
      const step = sequence[currentStep];

      const line = document.createElement('div');
      line.className = 'terminal-line';
      line.innerHTML = `<span class="prompt-symbol">$</span> <span class="terminal-cmd"></span><span class="cursor-blink"></span>`;
      termBody.appendChild(line);

      const cmdSpan = line.querySelector('.terminal-cmd');
      const cursor = line.querySelector('.cursor-blink');

      let charIdx = 0;
      const typeInterval = setInterval(() => {
        if (charIdx < step.cmd.length) {
          cmdSpan.textContent += step.cmd[charIdx];
          charIdx++;
        } else {
          clearInterval(typeInterval);
          cursor.remove();
          
          // Show output
          const outDiv = document.createElement('div');
          outDiv.className = 'terminal-output';
          outDiv.textContent = step.output;
          termBody.appendChild(outDiv);

          currentStep++;
          setTimeout(renderStep, 1000);
        }
      }, 45);
    };

    setTimeout(renderStep, 600);
  },

  initGlobalListeners() {
    window.addEventListener('portfolio-db-updated', () => {
      // Allow pages to re-render if needed
      if (typeof window.refreshPageData === 'function') {
        window.refreshPageData();
      }
    });

    window.addEventListener('language-changed', () => {
      if (window.I18n) {
        window.I18n.translateDOM();
        window.I18n.updateSwitcherButtons();
      }
      const drawer = document.querySelector('.mobile-drawer');
      if (drawer && window.I18n) {
        window.I18n.translateDOM(drawer);
      }
      if (typeof window.refreshPageData === 'function') {
        window.refreshPageData();
      }
    });
  }
};

// ==========================================
// Toast Notification Engine
// ==========================================
window.Toast = window.Toast || {
  container: null,

  getContainer() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
    return this.container;
  },

  show(message, type = 'info', duration = 3500) {
    const container = this.getContainer();
    const toast = document.createElement('div');
    toast.className = 'toast';

    let icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    if (type === 'success') {
      icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    } else if (type === 'error') {
      icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    }

    toast.innerHTML = `
      ${icon}
      <span>${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }
};

window.Toast = Toast;

// Utility to escape HTML strings safely
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
