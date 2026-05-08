const content = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "خدماتنا",
    nav_contact: "تواصل معنا",
    hero_title: "نطبع كل شيء… ما عدا الجنيه الفلسطيني",
    hero_sub: "36 عاماً نطبع ثقتك في السوق",
    hero_cta: "تواصل معنا الآن",
    years_exp: "سنة خبرة",
    projects_done: "مشروع منجز",
    clients_reg: "عميل دائم",
    services_avail: "خدمة متنوعة",
    banner_cta_title: "كل حملتك من مكان واحد",
    banner_cta_btn: "ابدأ الآن",
    why_title: "لماذا",
    why_title_span: "نحن؟",
    feat_1: "36 سنة خبرة",
    feat_2: "تقنيات حديثة",
    feat_3: "سرعة التنفيذ",
    feat_4: "جودة مضمونة",
    feat_5: "كميات كبيرة",
    feat_6: "خدمة متكاملة",
    feat_7: "+12 خدمة متنوعة",
    feat_8: "أسعار منافسة",
    footer_desc: "36 عاماً في خدمة السوق | Since 1989",
    footer_copy: "© 2025 مطبعة الصخرة الحديثة. جميع الحقوق محفوظة.",

    // Services
    srv_title: "خدماتنا",
    srv_1: "اللافتات والإعلانات",
    srv_2: "الطباعة الرقمية",
    srv_3: "كروت العرس",
    srv_4: "الطباعة على المواد",
    srv_5: "الهدايا والتكريم",
    srv_6: "ألبومات الصور",
    srv_7: "القص والحفر CNC",
    srv_8: "الأختام",
    srv_btn: "اكتشف الكاتلوج",

    // About
    about_title: "قصتنا",
    about_v_title: "قيمنا",
    about_timeline_title: "رحلتنا",

    // Catalog Shared
    catalog_interest: "مهتم بهذه الخدمة؟",

    // Contact
    contact_title: "تواصل معنا",
    contact_address: "الموقع: [عنوان المطبعة]",
    contact_hours: "ساعات العمل: السبت - الخميس / 8 صباحاً - 6 مساءً"
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_title: "We Print Everything… Except Money",
    hero_sub: "36 Years of Trust in the Market",
    hero_cta: "Contact Us Now",
    years_exp: "Years Experience",
    projects_done: "Projects Done",
    clients_reg: "Regular Clients",
    services_avail: "Services Available",
    banner_cta_title: "Your Entire Campaign in One Place",
    banner_cta_btn: "Start Now",
    why_title: "Why",
    why_title_span: "Us?",
    feat_1: "36 Years Exp",
    feat_2: "Modern Tech",
    feat_3: "Fast Execution",
    feat_4: "Guaranteed Quality",
    feat_5: "Large Quantities",
    feat_6: "Full Service",
    feat_7: "12+ Diverse Services",
    feat_8: "Competitive Prices",
    footer_desc: "36 Years Serving the Market | Since 1989",
    footer_copy: "© 2025 Sakhra Modern Press. All Rights Reserved.",

    // Services
    srv_title: "Services",
    srv_1: "Banners & Ads",
    srv_2: "Digital Printing",
    srv_3: "Wedding Cards",
    srv_4: "Material Printing",
    srv_5: "Gifts & Awards",
    srv_6: "Photo Albums",
    srv_7: "CNC Cutting & Engraving",
    srv_8: "Stamps",
    srv_btn: "View Catalog",

    // About
    about_title: "Our Story",
    about_v_title: "Our Values",
    about_timeline_title: "Our Journey",

    // Catalog Shared
    catalog_interest: "Interested in this service?",

    // Contact
    contact_title: "Contact Us",
    contact_address: "Location: [Press Address]",
    contact_hours: "Hours: Sat - Thu / 8 AM - 6 PM"
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // 1. Language Toggle
  const langToggleBtn = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('sakhra_lang') || 'ar';

  function applyLanguage(lang) {
    if (lang === 'en') {
      document.body.classList.add('ltr');
      document.body.dir = 'ltr';
      if (langToggleBtn) langToggleBtn.innerText = "AR";
    } else {
      document.body.classList.remove('ltr');
      document.body.dir = 'rtl';
      if (langToggleBtn) langToggleBtn.innerText = "EN";
    }

    // Update texts
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (content[lang] && content[lang][key]) {
        if (el.tagName === 'INPUT' && el.type === 'button') {
          el.value = content[lang][key];
        } else {
          el.innerHTML = content[lang][key];
        }
      }
    });

    localStorage.setItem('sakhra_lang', lang);
  }

  // Init language
  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(currentLang);
    });
  }

  // 2. Sticky Navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 4. Counter Animation (Intersection Observer)
  const counters = document.querySelectorAll('.counter-num');
  const speed = 200;

  const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');

        const updateCount = () => {
          const count = +counter.innerText;
          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 15);
          } else {
            counter.innerText = target + (counter.hasAttribute('data-plus') ? "+" : "");
          }
        };

        updateCount();
        observer.unobserve(counter);
      }
    });
  };

  const counterObserver = new IntersectionObserver(animateCounters, {
    threshold: 0.5
  });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // 5. Lightbox for Galleries
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        lightboxImg.src = item.src;
        lightbox.classList.add('active');
      });
    });

    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // 6. Intersection Observer for FadeInUp Animation
  const animatedElements = document.querySelectorAll('.fade-in-up');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    })
  }, { threshold: 0.1 });

  animatedElements.forEach(el => fadeObserver.observe(el));
});
