/**
 * Abdelrahman El-Deisty - Developer Portfolio & Product Lab
 * Centralized Localization (i18n) & Theme Management Engine
 */

class I18nManager {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.locales = window.LOCALES || {};
  }

  detectLanguage() {
    try {
      const saved = localStorage.getItem('eldeisty_lang');
      if (saved && (saved === 'ar' || saved === 'en')) {
        return saved;
      }
    } catch (e) {}
    return 'en'; // Default English as requested
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindLanguageSwitchers();
  }

  getLanguage() {
    return this.currentLang;
  }

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ar') lang = 'en';
    this.currentLang = lang;
    try {
      localStorage.setItem('eldeisty_lang', lang);
    } catch (e) {}
    this.applyLanguage(lang);
    window.dispatchEvent(new CustomEvent('language-changed', {
      detail: { lang, dir: lang === 'ar' ? 'rtl' : 'ltr' }
    }));
  }

  toggleLanguage() {
    const next = this.currentLang === 'en' ? 'ar' : 'en';
    this.setLanguage(next);
  }

  applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.updateSwitcherButtons();
    this.translateDOM();
  }

  updateSwitcherButtons() {
    const btns = document.querySelectorAll('.lang-switcher-btn');
    btns.forEach(btn => {
      // If current is en, display "العربية", if ar, display "English"
      const labelSlot = btn.querySelector('.lang-label-slot');
      const isArabic = this.currentLang === 'ar';
      if (labelSlot) {
        labelSlot.textContent = isArabic ? 'English' : 'العربية';
      } else {
        btn.textContent = isArabic ? 'English' : 'العربية';
      }
      btn.setAttribute('aria-label', isArabic ? 'Switch to English' : 'التحويل إلى العربية');
    });
  }

  bindLanguageSwitchers() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-switcher-btn');
      if (btn) {
        e.preventDefault();
        this.toggleLanguage();
      }
    });
  }

  t(key, params = {}) {
    const dict = (window.LOCALES && window.LOCALES[this.currentLang]) || {};
    const fallbackDict = (window.LOCALES && window.LOCALES.en) || {};

    let value = this.resolveKey(dict, key);
    if (value === undefined) {
      value = this.resolveKey(fallbackDict, key);
    }
    if (value === undefined) {
      return key; // return key if untranslated
    }

    if (typeof value === 'string' && params && Object.keys(params).length > 0) {
      Object.keys(params).forEach(p => {
        value = value.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
      });
    }

    return value;
  }

  resolveKey(obj, path) {
    if (!obj || !path) return undefined;
    const parts = path.split('.');
    let curr = obj;
    for (const part of parts) {
      if (curr && typeof curr === 'object' && part in curr) {
        curr = curr[part];
      } else {
        return undefined;
      }
    }
    return curr;
  }

  translateDOM(root = document) {
    // 1. Text Content
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        const val = this.t(key);
        if (val !== undefined && val !== key) {
          el.textContent = val;
        }
      }
    });

    // 2. HTML Content
    root.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (key) {
        el.innerHTML = this.t(key);
      }
    });

    // 3. Placeholders
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) {
        const val = this.t(key);
        if (val !== undefined && val !== key) {
          el.placeholder = val;
        }
      }
    });

    // 4. Titles / Tooltips
    root.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (key) {
        el.title = this.t(key);
      }
    });

    // 5. Aria Labels
    root.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (key) {
        el.setAttribute('aria-label', this.t(key));
      }
    });
  }

  getLocalized(item, field) {
    if (!item) return '';
    const lang = this.currentLang;
    if (item[field + '_' + lang]) return item[field + '_' + lang];
    if (item[field] && typeof item[field] === 'object' && item[field][lang]) {
      return item[field][lang];
    }
    return item[field] || '';
  }
}

/**
 * Enhanced Theme Manager (Light / Dark / System)
 */
class ThemeManager {
  constructor() {
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.currentSetting = this.detectSetting();
  }

  detectSetting() {
    try {
      const saved = localStorage.getItem('eldeisty_theme');
      if (saved && (saved === 'dark' || saved === 'light' || saved === 'system')) {
        return saved;
      }
    } catch (e) {}
    return 'dark'; // Default Dark mode
  }

  init() {
    this.applyTheme(this.currentSetting);
    this.bindThemeButtons();
  }

  getSetting() {
    return this.currentSetting;
  }

  getEffectiveTheme() {
    return this.currentSetting === 'light' ? 'light' : 'dark';
  }

  setTheme(mode) {
    const valid = mode === 'light' ? 'light' : 'dark';
    this.currentSetting = valid;
    try {
      localStorage.setItem('eldeisty_theme', valid);
    } catch (e) {}
    this.applyTheme(valid);
    window.dispatchEvent(new CustomEvent('theme-changed', {
      detail: { setting: valid, effective: valid }
    }));
  }

  cycleTheme() {
    // Direct 1-click toggle: Dark <-> Light only
    const current = document.documentElement.getAttribute('data-theme') || this.currentSetting || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
    // No Toast notification on theme switch as requested
  }

  applyTheme(setting) {
    const valid = setting === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', valid);
    document.documentElement.setAttribute('data-theme-setting', valid);
    this.updateIcons(valid, valid);
  }

  updateIcons(setting, effective) {
    const isLight = effective === 'light';
    const slots = document.querySelectorAll('.theme-icon-slot');
    slots.forEach(slot => {
      if (isLight) {
        // Moon icon (currently in light mode; clicking will switch to dark)
        slot.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      } else {
        // Sun icon (currently in dark mode; clicking will switch to light)
        slot.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      }
    });

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const title = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';
      btn.title = title;
      btn.setAttribute('aria-label', title);
    });
  }

  bindThemeButtons() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.theme-toggle-btn');
      if (btn) {
        e.preventDefault();
        this.cycleTheme();
      }
    });
  }
}

// Instantiate Singletons
window.I18n = new I18nManager();
window.Theme = new ThemeManager();

// Immediate initialization before DOM rendering to eliminate theme/lang flash
(function bootstrapImmediate() {
  const lang = window.I18n.detectLanguage();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const mode = window.Theme.detectSetting();
  const valid = mode === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', valid);
  document.documentElement.setAttribute('data-theme-setting', valid);
})();

document.addEventListener('DOMContentLoaded', () => {
  window.I18n.init();
  window.Theme.init();
});
