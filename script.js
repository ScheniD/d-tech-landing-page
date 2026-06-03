document.addEventListener('DOMContentLoaded', () => {
    // Translations
    const translations = {
        de: {
            title: "D-Tech Solutions | Web-Erstellung, Hosting & Management",
            desc: "Premium Webseiten-Erstellung, zuverlässiges Hosting und Experten-Management für Unternehmen.",
            navServices: "Dienstleistungen",
            navPortfolio: "Referenzen",
            navWhyUs: "Warum Wir",
            navGetStarted: "Loslegen",
            navAbout: "Über Mich",
            heroTitle: 'Stärken Sie Ihr Unternehmen mit <span class="text-accent">Premium Web-Lösungen</span>',
            heroSubtitle: "Wir entwerfen, hosten und verwalten atemberaubende Websites maßgeschneidert für Unternehmen, damit Sie sich auf das konzentrieren können, was Sie am besten können.",
            titleAbout: "Über Mich",
            aboutText: "Hi, ich bin Dominik, ein 29-jähriger Informatikstudent. Ich habe D-Tech Solutions gegründet, um meine Leidenschaft für Technologie und Webentwicklung mit echten Unternehmensbedürfnissen zu verbinden. Mein Ziel ist es, moderne und leistungsstarke Weblösungen zu schaffen, die Ihnen helfen, in der digitalen Welt erfolgreich zu sein.",
            titlePortfolio: "Projekte / Referenzen",
            proj1Title: "Haarprofi Frankfurt",
            proj1Desc: "Ein modernes, luxuriöses Redesign für einen erstklassigen Salon auf der Zeil. Fokus auf Ästhetik, Benutzerfreundlichkeit und Online-Terminbuchung.",
            proj1Feat1: "Premium Branding",
            proj1Feat2: "Responsive Design",
            proj1Feat3: "Cal.com Integration",
            proj2Title: "idee. Creativmarkt",
            proj2Desc: "Ein inspirierender Workspace für Kunst und DIY im Herzen von Frankfurt. Modernes Bento-Grid Design mit Fokus auf Workshops und Kreativität.",
            proj2Feat1: "Vibrant Branding",
            proj2Feat2: "Bento Grid Layout",
            proj2Feat3: "Workshop Integration",
            proj3Title: "Muthmedia Filmproduktion",
            proj3Desc: "High-End Filmstudio-Website mit cineastischer Ästhetik und Neon-Akzenten. Optimiert für emotionales Video-Marketing.",
            proj3Feat1: "Cinematic Design",
            proj3Feat2: "Video Portfolio",
            proj3Feat3: "Dark Mode Aesthetic",
            proj4Title: "Top Magazin Frankfurt",
            proj4Desc: "Luxuriöses Lifestyle-Magazin mit kontrastreichem Editorial-Design. Anspruchsvolles Layout für High-Society Inhalte.",
            proj4Feat1: "Editorial Layout",
            proj4Feat2: "High Contrast Design",
            proj4Feat3: "Lifestyle Portfolio",
            btnStart: "Projekt Starten",
            btnExplore: "Dienstleistungen Entdecken",
            titlePackages: "Service-Pakete",
            pkg1Title: "Starter",
            pkg1Desc: "Fokus auf Landing Pages & Local SEO",
            pkg1Feat1: "Benutzerdefiniertes Web-Design",
            pkg1Feat2: "Responsive Entwicklung",
            pkg1Feat3: "Basis SEO-Optimierung",
            pkg2Title: "Business",
            pkg2Desc: "Rundum-Sorglos: All-in-One Webpräsenz & Management (Lösung für Zeitmangel)",
            pkg2Feat1: "Alles im Starter-Paket",
            pkg2Feat2: "CMS Integration",
            pkg2Feat3: "All-in-One: High-Speed Hosting & Wartung",
            pkg3Title: "Custom",
            pkg3Desc: "E-Commerce & komplexe Apps",
            pkg3Feat1: "Maßgeschneiderte Web-Apps",
            pkg3Feat2: "E-Commerce Systeme",
            pkg3Feat3: "API-Integrationen",
            titleLocalServices: "Fokus: KMU & Lokale Dienstleister",
            localServiceTitle: "Praxen & Dienstleister",
            localServiceDesc: "Ein professionelles, vertrauensbildendes Webdesign für Praxen, Kanzleien und lokale Dienstleister. Die integrierte Terminbuchung entlastet Ihr Team im Alltag.",
            localBusinessTitle: "Kleine & mittlere Betriebe",
            localBusinessDesc: "Ein moderner, maßgeschneiderter Webauftritt, der die Qualität Ihres Handwerks oder Fachbetriebs hebt. Digitalisieren Sie Anfragen und sparen Sie wertvolle Zeit.",
            localSEOTitle: "Lokale Sichtbarkeit (SEO)",
            localSEODesc: "Optimiert für Suchmaschinen und Google Maps, damit Kunden in Ihrer Region Sie sofort finden, wenn sie nach Ihren Dienstleistungen suchen.",
            trustTitle: "Der Informatik-Studenten Bonus",
            trustPoint1: "<strong>Modernstes Wissen:</strong> Direkt aus dem universitären Studium in Ihre Web-Architektur.",
            trustPoint2: "<strong>Ehrlichkeit & Fairness:</strong> Transparente studentische Preise ohne aufgeblähten Agentur-Overhead.",
            trustPoint3: "<strong>Zukunftssicherer Code:</strong> Strukturierte Programmierung nach höchsten akademischen Softwarestandards.",
            pkgBtnStarter: "Kostenloses Erstgespräch",
            pkgBtnBusiness: "Kostenlose Analyse buchen",
            pkgBtnCustom: "Kostenloses Erstgespräch",
            backLink: "← Zurück zur Startseite",
            titleBooking: "Bereit für den nächsten Schritt? Jetzt Erstgespräch buchen.",
            bookingDescTitle: "Potenzialanalyse",
            bookingDescText: "Lass uns in einem unverbindlichen Gespräch herausfinden, wie wir deine digitale Präsenz auf das nächste Level heben können.",
            bookingFeat1: "Analyse deiner aktuellen Website",
            bookingFeat2: "Konkrete Handlungsempfehlungen",
            bookingFeat3: "Vorstellung passender Lösungen",
            titleWhyUs: "Warum Wir",
            why1Title: "Fokus auf Ihren Erfolg:",
            why1Desc: "Wir verstehen Ihre einzigartigen Herausforderungen und Budgetbeschränkungen.",
            why2Title: "Alles-aus-einer-Hand Service:",
            why2Desc: "Sie müssen nicht mit mehreren Anbietern für Design, Domains und Hosting jonglieren.",
            why4Title: "Dedizierter Support:",
            why4Desc: "Wir sind immer nur eine E-Mail oder einen Anruf entfernt, wann immer Sie ein Update benötigen.",
            titleContact: "Kontakt",
            contactDesc: "Bereit, Ihre digitale Präsenz zu verbessern? Kontaktieren Sie uns noch heute.",
            formName: "Ihr Name",
            formEmail: "Ihre E-Mail",
            formMessage: "Erzählen Sie uns von Ihrem Projekt...",
            formBtn: "Nachricht Senden",
            bookingPlaceholderTitle: "Interaktiver Kalender",
            bookingPlaceholderDesc: "Wählen Sie Ihren Wunschtermin direkt in unserem interaktiven Kalender aus. Klicken Sie unten, um freie Termine zu laden.",
            bookingPlaceholderBtn: "Jetzt Kalender laden",
            footerText: "&copy; 2026 D-Tech Solutions. Alle Rechte vorbehalten.",
            langBtn: "EN"
        },
        en: {
            title: "D-Tech Solutions | Web Creation, Hosting & Management",
            desc: "Premium webpage creation, reliable hosting, and expert management businesses.",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navWhyUs: "Why Us",
            navGetStarted: "Get Started",
            navAbout: "About Me",
            heroTitle: 'Empower Your Business with <span class="text-accent">Premium Web Solutions</span>',
            heroSubtitle: "We design, host, and manage stunning websites tailored for businesses so you can focus on what you do best.",
            titleAbout: "About Me",
            aboutText: "Hi, I'm Dominik, a 29-year-old Computer Science student. I founded D-Tech Solutions to combine my passion for technology and web development with real business needs. My goal is to create modern and high-performance web solutions that help you succeed in the digital world.",
            titlePortfolio: "Projects / References",
            proj1Title: "Haarprofi Frankfurt",
            proj1Desc: "A modern, luxurious redesign for a premium salon on the Zeil. Focus on aesthetics, user experience, and online booking integration.",
            proj1Feat1: "Premium Branding",
            proj1Feat2: "Responsive Design",
            proj1Feat3: "Cal.com Integration",
            proj2Title: "idee. Creativmarkt",
            proj2Desc: "An inspiring workspace for art and DIY in the heart of Frankfurt. Modern bento-grid design focused on workshops and creativity.",
            proj2Feat1: "Vibrant Branding",
            proj2Feat2: "Bento Grid Layout",
            proj2Feat3: "Workshop Integration",
            proj3Title: "Muthmedia Film Production",
            proj3Desc: "High-end film studio website with cinematic aesthetics and neon accents. Optimized for emotional video marketing.",
            proj3Feat1: "Cinematic Design",
            proj3Feat2: "Video Portfolio",
            proj3Feat3: "Dark Mode Aesthetic",
            proj4Title: "Top Magazin Frankfurt",
            proj4Desc: "Luxury lifestyle magazine with high-contrast editorial design. Sophisticated layout for high-society content.",
            proj4Feat1: "Editorial Layout",
            proj4Feat2: "High Contrast Design",
            proj4Feat3: "Lifestyle Portfolio",
            btnStart: "Start Your Project",
            btnExplore: "Explore Services",
            titlePackages: "Service Packages",
            pkg1Title: "Starter",
            pkg1Desc: "Focus on Landing Pages & Local SEO",
            pkg1Feat1: "Custom Web Design",
            pkg1Feat2: "Responsive Development",
            pkg1Feat3: "Basic SEO Optimization",
            pkg2Title: "Business",
            pkg2Desc: "Peace of Mind: All-in-One Web Presence & Management (Time-saver)",
            pkg2Feat1: "Everything in Starter",
            pkg2Feat2: "CMS Integration",
            pkg2Feat3: "All-in-One: High-Speed Hosting & Maintenance",
            pkg3Title: "Custom",
            pkg3Desc: "E-Commerce & Complex Apps",
            pkg3Feat1: "Tailored Web Apps",
            pkg3Feat2: "E-Commerce Systems",
            pkg3Feat3: "API Integrations",
            titleLocalServices: "Focus: SMBs & Local Services",
            localServiceTitle: "Practices & Service Providers",
            localServiceDesc: "A professional, trust-building web design for medical practices, consultants, and local service providers. Integrated booking saves your team hours of phone time.",
            localBusinessTitle: "Small & Medium Businesses",
            localBusinessDesc: "A modern, custom web presence that highlights the quality of your craft or specialized business. Automate inquiries and save valuable time.",
            localSEOTitle: "Local Visibility (SEO)",
            localSEODesc: "Optimized for search engines and Google Maps so local clients in your region find you instantly when searching for your services.",
            trustTitle: "The CS Student Advantage",
            trustPoint1: "<strong>Cutting-edge Knowledge:</strong> Directly integrated from university studies into your web architecture.",
            trustPoint2: "<strong>Honesty & Fairness:</strong> Transparent student-pricing without bloated agency overhead.",
            trustPoint3: "<strong>Future-proof Code:</strong> Structured programming following the highest academic software standards.",
            pkgBtnStarter: "Book a Free Consultation",
            pkgBtnBusiness: "Book a Free Analysis",
            pkgBtnCustom: "Book a Free Consultation",
            backLink: "← Back to Homepage",
            titleBooking: "Ready for the next step? Book an initial consultation now.",
            bookingDescTitle: "Potential Analysis",
            bookingDescText: "Let's find out in a no-obligation conversation how we can take your digital presence to the next level.",
            bookingFeat1: "Analysis of your current website",
            bookingFeat2: "Concrete recommendations for action",
            bookingFeat3: "Presentation of suitable solutions",
            titleWhyUs: "Why Us",
            why1Title: "Focused on Your Success:",
            why1Desc: "We understand your unique challenges and budget constraints.",
            why2Title: "All-in-One Service:",
            why2Desc: "No need to juggle multiple vendors for design, domains, and hosting.",

            why4Title: "Dedicated Support:",
            why4Desc: "We are just an email or call away whenever you need an update.",
            titleContact: "Contact",
            contactDesc: "Ready to elevate your digital presence? Reach out to us today.",
            formName: "Your Name",
            formEmail: "Your Email",
            formMessage: "Tell us about your project...",
            formBtn: "Send Message",
            bookingPlaceholderTitle: "Interactive Calendar",
            bookingPlaceholderDesc: "Select your preferred date directly in our interactive calendar. Click below to load open slots.",
            bookingPlaceholderBtn: "Load Calendar Now",
            footerText: "&copy; 2026 D-Tech Solutions. All rights reserved.",
            footerImpressum: "Legal Notice",
            footerPrivacy: "Privacy Policy",
            langBtn: "DE"
        }
    };

    let currentLang = 'de';
    try {
        currentLang = localStorage.getItem('selectedLang') || 'de';
    } catch (e) {
        console.warn('LocalStorage not available');
    }
    const langBtn = document.getElementById('langToggle');

    function updateLanguage() {
        const t = translations[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                el.placeholder = t[key];
            }
        });
        const metaDesc = document.getElementById('meta-desc');
        if (metaDesc) metaDesc.content = t['desc'];
        
        document.documentElement.lang = currentLang;
        try {
            localStorage.setItem('selectedLang', currentLang);
        } catch (e) {}

        // Sync Cal.com widget language dynamically if present
        if (window.Cal && window.Cal.ns && window.Cal.ns["erstgesprach-potenzialanalyse"]) {
            try {
                window.Cal.ns["erstgesprach-potenzialanalyse"]("inline", {
                    elementOrSelector: "#my-cal-inline-erstgesprach-potenzialanalyse",
                    config: {
                        "layout": "month_view",
                        "useSlotsViewOnSmallScreen": "true",
                        "language": currentLang
                    },
                    calLink: "dominik-schenitzki-431sms/erstgesprach-potenzialanalyse",
                });
            } catch (e) {
                console.error("Failed to update Cal.com widget language", e);
            }
        }
    }

    // Initial translation call
    updateLanguage();

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'de' ? 'en' : 'de';
            updateLanguage();
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Portfolio Slider
    const track = document.querySelector('.portfolio-track');
    const slides = Array.from(document.querySelectorAll('.portfolio-slide'));
    const nextBtn = document.querySelector('.slider-btn.next');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const sliderContainer = document.querySelector('.portfolio-slider-container');
    
    if (track && slides.length > 0) {
        let currentSlideIndex = 0;

        const updateSlider = () => {
            const slideWidth = slides[0].offsetWidth; 
            track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
            
            // Update active class for animations
            slides.forEach((slide, index) => {
                if (index === currentSlideIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        };

        const nextSlide = () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            updateSlider();
        };

        const prevSlide = () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            updateSlider();
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }

        window.addEventListener('resize', updateSlider);
        
        // Initial setup
        updateSlider();
    }

    // Service Cards Accordion
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });


    // Web3Forms AJAX Submission
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = form.querySelector('button');
            
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            
            btn.textContent = currentLang === 'de' ? 'Wird gesendet...' : 'Sending...';
            
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let jsonRes = await response.json();
                if (response.status == 200) {
                    btn.textContent = currentLang === 'de' ? 'Nachricht Gesendet!' : 'Message Sent!';
                    btn.style.background = '#0070F3';
                    btn.style.color = '#fff';
                    form.reset();
                } else {
                    btn.textContent = currentLang === 'de' ? 'Fehler beim Senden' : 'Error sending';
                    btn.style.background = '#ff4444';
                    console.log(jsonRes);
                }
            })
            .catch(error => {
                console.log(error);
                btn.textContent = currentLang === 'de' ? 'Fehler beim Senden' : 'Error sending';
                btn.style.background = '#ff4444';
            })
            .finally(() => {
                setTimeout(() => {
                    btn.textContent = translations[currentLang].formBtn;
                    btn.style.background = '';
                }, 4000);
            });
        });
    }

    // Cal.com Lazy Loading (On-Click Injection)
    const loadBookingBtn = document.getElementById('load-booking-btn');
    let calWidgetLoaded = false;
    
    function loadCalWidget() {
        if (calWidgetLoaded) return;
        calWidgetLoaded = true;
        
        const placeholder = document.getElementById('booking-placeholder');
        const widgetDiv = document.getElementById('my-cal-inline-erstgesprach-potenzialanalyse');
        
        if (placeholder) placeholder.style.display = 'none';
        if (widgetDiv) widgetDiv.style.display = 'block';
        
        // Inject Cal.com script and initialize
        (function (C, A, L) { 
            let p = function (a, ar) { a.q.push(ar); }; 
            let d = C.document; 
            C.Cal = C.Cal || function () { 
                let cal = C.Cal; 
                let ar = arguments; 
                if (!cal.loaded) { 
                    cal.ns = {}; 
                    cal.q = cal.q || []; 
                    d.head.appendChild(d.createElement("script")).src = A; 
                    cal.loaded = true; 
                } 
                if (ar[0] === L) { 
                    const api = function () { p(api, arguments); }; 
                    const namespace = ar[1]; 
                    api.q = api.q || []; 
                    if(typeof namespace === "string"){
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar); 
                    return;
                } 
                p(cal, ar); 
            }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
        
        Cal("init", "erstgesprach-potenzialanalyse", {origin:"https://app.cal.com"});
        
        Cal.ns["erstgesprach-potenzialanalyse"]("inline", {
            elementOrSelector:"#my-cal-inline-erstgesprach-potenzialanalyse",
            config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","language": currentLang},
            calLink: "dominik-schenitzki-431sms/erstgesprach-potenzialanalyse",
        });
        
        Cal.ns["erstgesprach-potenzialanalyse"]("ui", {
            "cssVarsPerTheme":{"dark":{"cal-brand":"#0070F3"}},
            "hideEventTypeDetails":true,
            "layout":"month_view"
        });
    }

    if (loadBookingBtn) {
        loadBookingBtn.addEventListener('click', loadCalWidget);
    }

    // Intersection Observer for Scroll Reveal Animations
    const revealOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        revealObserver.observe(el);
    });
});
