/**
 * Abdelrahman El-Deisty - Developer Portfolio & Product Lab
 * API Service Layer Interface (Mock-first, 100% Laravel API-Ready)
 */

class PortfolioAPI {
  // Simulated network latency for realistic feel in dashboard actions
  static async simulateDelay(ms = 150) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Profile & Meta
  static async getProfile() {
    await this.simulateDelay(80);
    return window.PortfolioDB.get('profile');
  }

  static async updateProfile(updates) {
    await this.simulateDelay(120);
    const current = window.PortfolioDB.get('profile');
    const updated = Object.assign({}, current, updates);
    window.PortfolioDB.set('profile', updated);
    return updated;
  }

  // Projects
  static async getProjects(filter = {}) {
    await this.simulateDelay(80);
    let projects = window.PortfolioDB.get('projects') || [];
    
    if (filter.category && filter.category !== 'All') {
      projects = projects.filter(p => p.category.toLowerCase() === filter.category.toLowerCase());
    }
    if (filter.status) {
      projects = projects.filter(p => p.status.toLowerCase() === filter.status.toLowerCase());
    }
    if (filter.technology) {
      projects = projects.filter(p => p.technologies.some(t => t.toLowerCase().includes(filter.technology.toLowerCase())));
    }
    if (filter.featuredOnly) {
      projects = projects.filter(p => p.featured === true);
    }
    if (filter.query) {
      const q = filter.query.toLowerCase();
      projects = projects.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q))
      );
    }
    return projects;
  }

  static async getProjectBySlug(slug) {
    await this.simulateDelay(60);
    return window.PortfolioDB.getBySlug('projects', slug);
  }

  static async getProjectById(id) {
    await this.simulateDelay(60);
    return window.PortfolioDB.getById('projects', id);
  }

  static async saveProject(projectData) {
    await this.simulateDelay(200);
    if (projectData.id) {
      return window.PortfolioDB.update('projects', projectData.id, projectData);
    } else {
      return window.PortfolioDB.create('projects', projectData);
    }
  }

  static async deleteProject(id) {
    await this.simulateDelay(150);
    return window.PortfolioDB.delete('projects', id);
  }

  // Articles / Notes
  static async getArticles(filter = {}) {
    await this.simulateDelay(80);
    let articles = window.PortfolioDB.get('articles') || [];
    if (filter.category && filter.category !== 'All') {
      articles = articles.filter(a => a.category.toLowerCase() === filter.category.toLowerCase());
    }
    if (filter.query) {
      const q = filter.query.toLowerCase();
      articles = articles.filter(a => 
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return articles;
  }

  static async getArticleBySlug(slug) {
    await this.simulateDelay(60);
    return window.PortfolioDB.getBySlug('articles', slug);
  }

  static async saveArticle(articleData) {
    await this.simulateDelay(180);
    if (articleData.id) {
      return window.PortfolioDB.update('articles', articleData.id, articleData);
    } else {
      return window.PortfolioDB.create('articles', articleData);
    }
  }

  static async deleteArticle(id) {
    await this.simulateDelay(150);
    return window.PortfolioDB.delete('articles', id);
  }

  // Technologies / Skills
  static async getTechnologies(category = null) {
    await this.simulateDelay(60);
    let list = window.PortfolioDB.get('technologies') || [];
    if (category && category !== 'All') {
      list = list.filter(t => t.category.toLowerCase() === category.toLowerCase());
    }
    return list;
  }

  static async saveTechnology(techData) {
    await this.simulateDelay(150);
    if (techData.id) {
      return window.PortfolioDB.update('technologies', techData.id, techData);
    } else {
      return window.PortfolioDB.create('technologies', techData);
    }
  }

  static async deleteTechnology(id) {
    await this.simulateDelay(100);
    return window.PortfolioDB.delete('technologies', id);
  }

  // Experience
  static async getExperience() {
    await this.simulateDelay(60);
    return window.PortfolioDB.get('experience') || [];
  }

  static async saveExperience(expData) {
    await this.simulateDelay(150);
    if (expData.id) {
      return window.PortfolioDB.update('experience', expData.id, expData);
    } else {
      return window.PortfolioDB.create('experience', expData);
    }
  }

  static async deleteExperience(id) {
    await this.simulateDelay(100);
    return window.PortfolioDB.delete('experience', id);
  }

  // Services
  static async getServices() {
    await this.simulateDelay(60);
    return window.PortfolioDB.get('services') || [];
  }

  static async saveService(serviceData) {
    await this.simulateDelay(150);
    if (serviceData.id) {
      return window.PortfolioDB.update('services', serviceData.id, serviceData);
    } else {
      return window.PortfolioDB.create('services', serviceData);
    }
  }

  static async deleteService(id) {
    await this.simulateDelay(100);
    return window.PortfolioDB.delete('services', id);
  }

  // Code Snippets ("Behind the Code")
  static async getCodeSnippets() {
    await this.simulateDelay(50);
    return window.PortfolioDB.get('codeSnippets') || [];
  }

  // Navigation & Homepage Sections
  static async getNavigation() {
    return window.PortfolioDB.get('navigation') || [];
  }

  static async getHomepageSections() {
    return window.PortfolioDB.get('homepageSections') || {};
  }

  static async updateHomepageSections(sections) {
    window.PortfolioDB.set('homepageSections', sections);
    return sections;
  }

  // Contact & Inquiries
  static async submitContactMessage(formPayload) {
    await this.simulateDelay(300);
    const msg = {
      id: 'msg_' + Date.now(),
      name: formPayload.name,
      email: formPayload.email,
      company: formPayload.company || "Independent",
      projectType: formPayload.projectType || "General Inquiry",
      budget: formPayload.budget || "Not Specified",
      message: formPayload.message,
      date: new Date().toISOString(),
      status: "New",
      starred: false
    };
    window.PortfolioDB.create('contactMessages', msg);
    return { success: true, message: "Thank you! Your message has been routed to Abdelrahman." };
  }

  static async getContactMessages(status = null) {
    await this.simulateDelay(80);
    let messages = window.PortfolioDB.get('contactMessages') || [];
    if (status && status !== 'All') {
      messages = messages.filter(m => m.status.toLowerCase() === status.toLowerCase());
    }
    return messages;
  }

  static async updateMessageStatus(id, newStatus) {
    return window.PortfolioDB.update('contactMessages', id, { status: newStatus });
  }

  // Analytics
  static async getAnalytics() {
    await this.simulateDelay(100);
    return window.PortfolioDB.get('analytics') || {};
  }

  // Activity Logs
  static async getActivityLogs() {
    await this.simulateDelay(60);
    return window.PortfolioDB.get('activityLogs') || [];
  }

  // Global Unified Search
  static async searchAll(query) {
    if (!query || query.trim() === '') return [];
    const q = query.toLowerCase().trim();
    const results = [];
    const isAr = window.I18n && window.I18n.getLanguage() === 'ar';

    // Search Projects
    const projects = window.PortfolioDB.get('projects') || [];
    projects.forEach(p => {
      const matchEn = p.title.toLowerCase().includes(q) || 
                      p.description.toLowerCase().includes(q) || 
                      p.technologies.some(t => t.toLowerCase().includes(q));
      const matchAr = (p.title_ar && p.title_ar.includes(q)) || 
                      (p.description_ar && p.description_ar.includes(q)) ||
                      (p.subtitle_ar && p.subtitle_ar.includes(q));
      if (matchEn || matchAr) {
        results.push({
          type: isAr ? 'مشروع' : 'Project',
          title: isAr && p.title_ar ? p.title_ar : p.title,
          subtitle: (isAr && p.subtitle_ar ? p.subtitle_ar : p.subtitle) || (window.PortfolioDB ? PortfolioDB.getLocalized(p, 'category') : p.category),
          url: `./project-details.html?slug=${p.slug}`,
          badge: window.PortfolioDB ? PortfolioDB.getLocalized(p, 'category') : p.category,
          icon: 'box'
        });
      }
    });

    // Search Articles
    const articles = window.PortfolioDB.get('articles') || [];
    articles.forEach(a => {
      const matchEn = a.title.toLowerCase().includes(q) || 
                      a.excerpt.toLowerCase().includes(q) || 
                      a.tags.some(t => t.toLowerCase().includes(q));
      const matchAr = (a.title_ar && a.title_ar.includes(q)) || 
                      (a.excerpt_ar && a.excerpt_ar.includes(q));
      if (matchEn || matchAr) {
        results.push({
          type: isAr ? 'مقال' : 'Article',
          title: isAr && a.title_ar ? a.title_ar : a.title,
          subtitle: a.readTime + ' • ' + a.category,
          url: `./article-details.html?slug=${a.slug}`,
          badge: a.category,
          icon: 'file-text'
        });
      }
    });

    // Search Technologies
    const techs = window.PortfolioDB.get('technologies') || [];
    techs.forEach(t => {
      if (t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)) {
        results.push({
          type: isAr ? 'تقنية' : 'Tech Stack',
          title: t.name,
          subtitle: `${t.category} • ${t.level}`,
          url: `./skills.html?tech=${encodeURIComponent(t.name)}`,
          badge: t.level,
          icon: 'code'
        });
      }
    });

    // Search Services
    const services = window.PortfolioDB.get('services') || [];
    services.forEach(s => {
      const matchEn = s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
      const matchAr = (s.title_ar && s.title_ar.includes(q)) || (s.description_ar && s.description_ar.includes(q));
      if (matchEn || matchAr) {
        results.push({
          type: isAr ? 'خدمة' : 'Service',
          title: isAr && s.title_ar ? s.title_ar : s.title,
          subtitle: isAr && s.subtitle_ar ? s.subtitle_ar : s.subtitle,
          url: `./services.html`,
          badge: isAr ? 'خدمة' : 'Service',
          icon: 'server'
        });
      }
    });

    // Search Experience
    const exps = window.PortfolioDB.get('experience') || [];
    exps.forEach(e => {
      const matchEn = e.role.toLowerCase().includes(q) || e.company.toLowerCase().includes(q) || e.description.toLowerCase().includes(q);
      const matchAr = (e.role_ar && e.role_ar.includes(q)) || (e.company_ar && e.company_ar.includes(q)) || (e.description_ar && e.description_ar.includes(q));
      if (matchEn || matchAr) {
        results.push({
          type: isAr ? 'خبرة' : 'Experience',
          title: isAr && e.role_ar ? e.role_ar : e.role,
          subtitle: (isAr && e.company_ar ? e.company_ar : e.company) + ' (' + e.period + ')',
          url: `./experience.html`,
          badge: isAr ? 'مسيرة' : 'Career',
          icon: 'briefcase'
        });
      }
    });

    return results;
  }
}

window.PortfolioAPI = PortfolioAPI;
