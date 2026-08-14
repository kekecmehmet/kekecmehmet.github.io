document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            pageTitle: 'Mehmet Kekeç — Software Engineer',
            pageDescription: 'Mehmet Kekeç is a software engineer and Computer Engineering student at METU working across robotics, autonomous systems, AI, and optimization.',
            switchLanguage: 'Switch to Turkish',
            menu: 'Menu',
            closeMenu: 'Close',
            skipToContent: 'Skip to content',
            navAria: 'Primary navigation',
            navWork: 'Work',
            navExperience: 'Experience',
            navCapabilities: 'Capabilities',
            navContact: 'Contact',
            heroEyebrow: '<span>01</span> Software engineering · research · systems',
            heroTitle: 'Software engineering across <em>robotics</em>, <em>autonomous systems</em>, and <em>AI</em>.',
            heroIntro: 'I am a Computer Engineering student at METU. My work includes robotics, autonomous vehicles, human–robot interaction research, machine learning, and mathematical optimization.',
            downloadCv: 'Download CV',
            panelAria: 'Current focus and selected work',
            currentFocus: 'Current focus',
            researchIntern: 'Research Intern',
            hriSummary: 'HRI research · 17 sessions · 900 GB',
            selectedWork: 'Selected work',
            airlineOptimization: 'Airline optimization',
            thyShortcut: 'Istanbul, TR · 1st place',
            autonomousVehicle: 'Autonomous vehicle',
            alazShortcut: 'RDW · Lelystad, NL · 4th place',
            immunoShortcut: 'CENTURI · Marseille, FR · 2nd place',
            focusAreasAria: 'Focus areas',
            softwareEngineering: 'Software Engineering',
            optimization: 'Optimization',
            autonomousSystems: 'Autonomous Systems',
            machineLearning: 'Machine Learning',
            research: 'Research',
            technicalLeadership: 'Technical Leadership',
            workEyebrow: '<span>02</span> Selected work',
            selectedProjects: 'Selected projects.',
            selectedProjectsIntro: 'Optimization, autonomous systems, machine learning, and application development projects.',
            finalPresentation: 'Final presentation',
            thyAward: '1st place · TEKNOFEST 2026',
            thyDate: 'Jul–Aug 2026',
            thyTitle: 'Airline network optimization',
            thyDescription: 'Built an end-to-end mixed-integer optimization pipeline in a three-person team to improve Istanbul hub connections under capacity, aircraft rotation, regularity, and route-balance constraints. Connected-component decomposition reduced the measured solve time from 102.6 minutes to 3.55 minutes on the same problem scope.',
            fasterThanMonolithic: 'faster than monolithic',
            objectiveUplift: 'objective uplift',
            selectedConnections: 'selected connections',
            teamProfile: 'Team profile',
            repository: 'Repository',
            alazAward: '4th place · RDW',
            alazLocation: 'Lelystad, Netherlands',
            alazDate: '2025–Present',
            alazTitle: 'Alaz autonomous vehicle',
            alazDescription: 'Co-founded the team and led six software engineers across perception, planning, ROS 2, simulation, deployment, and CI/CD.',
            immunoAward: '2nd place · CENTURI',
            immunoLocation: 'Marseille, France',
            immunoDate: 'Jun 2026',
            immunoDescription: 'Built a T-cell receptor embedding pipeline in a six-person international team during a three-day sprint, leading high-dimensional data visualization.',
            foodageDescription: 'Led a sustainable food-planning app that predicts meal quantities from historical demand and supports user-provided datasets and multiple languages.',
            experienceEyebrow: '<span>03</span> Experience',
            experienceTitle: 'Research, technical teams, and communities.',
            romerDate: 'JAN 2026 — NOW',
            romerOrganization: 'METU Robotics and Artificial Intelligence Center',
            romerRole: 'Research Intern <span>Previously Undergraduate Researcher</span>',
            romerDescription: 'Operate synchronized multimodal recording environments in a three-person research team. Collected 900 GB across 17 sessions totaling 3.5 hours and developed a gaze-and-pose taxonomy for upcoming human–robot interaction analysis.',
            gdgDate: 'OCT 2023 — JUN 2026',
            gdgRole: 'Director of Technical Affairs <span>Previously Assistant AI/ML Team Lead</span>',
            gdgDescription: 'Built and led a 30–40-member active technical contributor pool, expanded unique community reach to 400+ members, and coordinated programs issuing 200+ certificates.',
            capabilitiesEyebrow: '<span>04</span> Capabilities',
            capabilitiesTitle: 'Technical focus areas.',
            softwareEngineeringDetails: 'Python, C++, Linux, Git/GitHub, Docker, algorithms, data structures, CI/CD.',
            optimizationDetails: 'Pyomo, HiGHS, mixed-integer programming, graph decomposition, validation pipelines.',
            autonomousSystemsDetails: 'ROS 2, Autoware, CARLA, Lanelet2, path planning, mission control, deployment.',
            aiResearch: 'AI & Research',
            aiResearchDetails: 'PyTorch, TensorFlow, YOLO, OpenCV, multimodal data, PCA, UMAP, t-SNE.',
            educationEyebrow: '<span>05</span> Education',
            university: 'Middle East Technical University',
            degree: 'B.Sc. in Computer Engineering',
            educationDate: 'Oct 2023 — Present',
            cgpa: 'CGPA 3.13 / 4.00',
            contactEyebrow: '<span>06</span> Contact',
            contactTitle: 'Get in touch.',
            contactIntro: 'For software engineering opportunities, project discussions, or research collaboration.',
            footerRole: 'Software Engineer · Ankara, Türkiye',
            footerCredit: '© <span id="year">2026</span> · Designed and developed by Mehmet Kekeç.'
        },
        tr: {
            pageTitle: 'Mehmet Kekeç — Yazılım Mühendisi',
            pageDescription: 'Mehmet Kekeç; robotik, otonom sistemler, yapay zekâ ve optimizasyon alanlarında çalışan ODTÜ Bilgisayar Mühendisliği öğrencisi ve yazılım mühendisidir.',
            switchLanguage: 'İngilizceye geç',
            menu: 'Menü',
            closeMenu: 'Kapat',
            skipToContent: 'İçeriğe geç',
            navAria: 'Ana navigasyon',
            navWork: 'Projeler',
            navExperience: 'Deneyim',
            navCapabilities: 'Yetkinlikler',
            navContact: 'İletişim',
            heroEyebrow: '<span>01</span> Yazılım mühendisliği · araştırma · sistemler',
            heroTitle: '<em>Robotik</em>, <em>otonom sistemler</em> ve <em>yapay zekâ</em> alanlarında yazılım mühendisliği.',
            heroIntro: 'ODTÜ Bilgisayar Mühendisliği öğrencisiyim. Çalışmalarım robotik, otonom araçlar, insan–robot etkileşimi araştırmaları, makine öğrenmesi ve matematiksel optimizasyonu kapsıyor.',
            downloadCv: "CV'yi indir",
            panelAria: 'Güncel odak ve seçili projeler',
            currentFocus: 'Güncel odak',
            researchIntern: 'Araştırma Stajyeri',
            hriSummary: 'İnsan–robot etkileşimi · 17 kayıt · 900 GB',
            selectedWork: 'Seçili projeler',
            airlineOptimization: 'Havayolu optimizasyonu',
            thyShortcut: 'İstanbul, TR · 1. sıra',
            autonomousVehicle: 'Otonom araç',
            alazShortcut: 'RDW · Lelystad, NL · 4. sıra',
            immunoShortcut: 'CENTURI · Marsilya, FR · 2. sıra',
            focusAreasAria: 'Odak alanları',
            softwareEngineering: 'Yazılım Mühendisliği',
            optimization: 'Optimizasyon',
            autonomousSystems: 'Otonom Sistemler',
            machineLearning: 'Makine Öğrenmesi',
            research: 'Araştırma',
            technicalLeadership: 'Teknik Liderlik',
            workEyebrow: '<span>02</span> Seçili projeler',
            selectedProjects: 'Seçili projeler.',
            selectedProjectsIntro: 'Optimizasyon, otonom sistemler, makine öğrenmesi ve uygulama geliştirme projeleri.',
            finalPresentation: 'Final sunumu',
            thyAward: '1. sıra · TEKNOFEST 2026',
            thyDate: 'Tem–Ağu 2026',
            thyTitle: 'Havayolu ağı optimizasyonu',
            thyDescription: 'Üç kişilik ekipte; kapasite, uçak rotasyonu, düzenlilik ve rota dengesi kısıtları altında İstanbul aktarma bağlantılarını iyileştiren uçtan uca bir karma tamsayılı optimizasyon hattı geliştirdik. Bağlı bileşen ayrıştırması, aynı problem kapsamında ölçülen çözüm süresini 102,6 dakikadan 3,55 dakikaya indirdi.',
            fasterThanMonolithic: 'monolitik modele göre daha hızlı',
            objectiveUplift: 'amaç değerinde iyileşme',
            selectedConnections: 'seçilen bağlantı',
            teamProfile: 'Takım sayfası',
            repository: 'Repo',
            alazAward: '4. sıra · RDW',
            alazLocation: 'Lelystad, Hollanda',
            alazDate: '2025–Günümüz',
            alazTitle: 'Alaz otonom aracı',
            alazDescription: 'Takımın kuruluşunda yer aldım ve algılama, planlama, ROS 2, simülasyon, dağıtım ve CI/CD alanlarında çalışan altı yazılım mühendisini yönettim.',
            immunoAward: '2. sıra · CENTURI',
            immunoLocation: 'Marsilya, Fransa',
            immunoDate: 'Haz 2026',
            immunoDescription: 'Üç günlük çalışma boyunca altı kişilik uluslararası ekipte T hücresi reseptörü gömme hattı geliştirdim ve yüksek boyutlu veri görselleştirme çalışmalarını yönettim.',
            foodageDescription: 'Geçmiş talep verilerinden öğün miktarı tahmin eden, kullanıcı veri kümelerini ve çoklu dil desteğini işleyen sürdürülebilir gıda planlama uygulamasının geliştirilmesine liderlik ettim.',
            experienceEyebrow: '<span>03</span> Deneyim',
            experienceTitle: 'Araştırma, teknik ekipler ve topluluklar.',
            romerDate: 'OCA 2026 — GÜNÜMÜZ',
            romerOrganization: 'ODTÜ Robotik ve Yapay Zekâ Merkezi',
            romerRole: 'Araştırma Stajyeri <span>Öncesinde Lisans Araştırmacısı</span>',
            romerDescription: 'Üç kişilik araştırma ekibinde senkronize çok modlu kayıt ortamlarını işletiyorum. 17 oturumda toplam 3,5 saatlik 900 GB veri topladım ve yaklaşan insan–robot etkileşimi analizi için bakış ve poz sınıflandırması geliştirdim.',
            gdgDate: 'EKİ 2023 — HAZ 2026',
            gdgRole: 'Teknik İşler Direktörü <span>Öncesinde AI/ML Takım Lider Yardımcısı</span>',
            gdgDescription: '30–40 kişilik aktif teknik katkıcı havuzunu kurup yönettim, topluluğun ulaştığı tekil üye sayısını 400+ seviyesine çıkardım ve 200+ sertifika verilen programları koordine ettim.',
            capabilitiesEyebrow: '<span>04</span> Yetkinlikler',
            capabilitiesTitle: 'Teknik odak alanları.',
            softwareEngineeringDetails: 'Python, C++, Linux, Git/GitHub, Docker, algoritmalar, veri yapıları, CI/CD.',
            optimizationDetails: 'Pyomo, HiGHS, karma tamsayılı programlama, grafik ayrıştırma, doğrulama hatları.',
            autonomousSystemsDetails: 'ROS 2, Autoware, CARLA, Lanelet2, yol planlama, görev kontrolü, dağıtım.',
            aiResearch: 'Yapay Zekâ ve Araştırma',
            aiResearchDetails: 'PyTorch, TensorFlow, YOLO, OpenCV, çok modlu veri, PCA, UMAP, t-SNE.',
            educationEyebrow: '<span>05</span> Eğitim',
            university: 'Orta Doğu Teknik Üniversitesi',
            degree: 'Bilgisayar Mühendisliği Lisans Programı',
            educationDate: 'Eki 2023 — Günümüz',
            cgpa: 'GNO 3,13 / 4,00',
            contactEyebrow: '<span>06</span> İletişim',
            contactTitle: 'İletişime geçin.',
            contactIntro: 'Yazılım mühendisliği fırsatları, proje görüşmeleri veya araştırma iş birlikleri için.',
            footerRole: 'Yazılım Mühendisi · Ankara, Türkiye',
            footerCredit: '© <span id="year">2026</span> · Mehmet Kekeç tarafından tasarlandı ve geliştirildi.'
        }
    };

    const header = document.getElementById('site-header');
    const nav = document.getElementById('site-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLabel = menuToggle.querySelector('[data-menu-label]');
    const languageToggle = document.querySelector('.language-toggle');
    const progress = document.querySelector('.scroll-progress span');
    const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    let currentLanguage = 'en';

    const updateYear = () => {
        const year = document.getElementById('year');
        if (year) year.textContent = new Date().getFullYear();
    };

    const applyLanguage = (language) => {
        const dictionary = translations[language];
        currentLanguage = language;
        document.documentElement.lang = language;
        document.title = dictionary.pageTitle;
        document.querySelector('meta[name="description"]').setAttribute('content', dictionary.pageDescription);

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            if (dictionary[key]) element.textContent = dictionary[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach((element) => {
            const key = element.dataset.i18nHtml;
            if (dictionary[key]) element.innerHTML = dictionary[key];
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
            const key = element.dataset.i18nAriaLabel;
            if (dictionary[key]) element.setAttribute('aria-label', dictionary[key]);
        });

        const menuIsOpen = nav.classList.contains('is-open');
        menuLabel.textContent = menuIsOpen ? dictionary.closeMenu : dictionary.menu;
        languageToggle.querySelector('span').textContent = language === 'en' ? 'TR' : 'EN';
        languageToggle.setAttribute('aria-label', dictionary.switchLanguage);
        languageToggle.title = dictionary.switchLanguage;
        updateYear();
    };

    const closeMenu = () => {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuLabel.textContent = translations[currentLanguage].menu;
        menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    };

    menuToggle.addEventListener('click', () => {
        const willOpen = !nav.classList.contains('is-open');
        nav.classList.toggle('is-open', willOpen);
        menuToggle.setAttribute('aria-expanded', String(willOpen));
        menuLabel.textContent = willOpen ? translations[currentLanguage].closeMenu : translations[currentLanguage].menu;
        menuToggle.querySelector('i').className = willOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    languageToggle.addEventListener('click', () => {
        applyLanguage(currentLanguage === 'en' ? 'tr' : 'en');
    });

    navLinks.forEach((link) => link.addEventListener('click', closeMenu));

    window.addEventListener('resize', () => {
        if (window.innerWidth > 980) closeMenu();
    });

    const updateScrollState = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
        progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
        header.classList.toggle('is-scrolled', window.scrollY > 24);

        let current = '';
        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 180) current = `#${section.id}`;
        });
        navLinks.forEach((link) => {
            const isCurrent = link.getAttribute('href') === current;
            if (isCurrent) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
        });
    };

    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    applyLanguage('en');
});
