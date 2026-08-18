document.addEventListener('DOMContentLoaded', () => {
    // Translations
    const translations = {
        de: {
            title: "Webdesign & IT-Service in Frankfurt | D-Tech Solutions",
            desc: "Wir erstellen moderne, schnelle Websites & bieten zuverlässige WP-Wartung für lokale Betriebe in Frankfurt. Steigern Sie jetzt Ihre digitale Sichtbarkeit!",
            navServices: "Dienstleistungen",
            navPortfolio: "Referenzen",
            navWhyUs: "Warum Wir",
            navGetStarted: "Kontakt",
            navAbout: "Über Mich",
            heroTitle: 'D-Tech Solutions<br><span class="text-accent">Digital done right.</span>',
            heroSubtitle: "Premium Webdesign und IT-Service für lokale Unternehmen. Wir entwerfen, hosten und verwalten Ihre digitale Präsenz, damit Sie sich auf Ihr Geschäft konzentrieren können.",
            titleAbout: "Über Mich",
            aboutText: "Hi, ich bin Dominik, der Gründer von D-Tech Solutions. Ich habe dieses Unternehmen gegründet, um meine Leidenschaft für zukunftssichere Technologie und performante Webentwicklung mit echten Unternehmensbedürfnissen zu verbinden. Unser Ziel ist es, moderne und leistungsstarke Weblösungen zu schaffen, die Ihrem Unternehmen helfen, in der digitalen Welt nachhaltig erfolgreich zu sein.",
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
            titleServices: "Meine Dienstleistungen",
            svc1Title: "Webdesign & Entwicklung",
            svc1Desc: "Moderne, auf Conversions optimierte Websites, die auf jedem Gerät perfekt aussehen. Wir bauen Ihre digitale Verkaufsmaschine.",
            svc2Title: "WordPress Wartung & Sicherheit",
            svc2Desc: "Regelmäßige Core- & Plugin-Updates, tägliche Backups und proaktive Sicherheitsüberwachung für Ihren sorgenfreien Betrieb.",
            svc3Title: "High-Speed Hosting",
            svc3Desc: "Blitzschnelle Ladezeiten dank modernster Serverarchitektur. Wir garantieren maximale Performance und 99.9% Erreichbarkeit.",
            svc4Title: "Local SEO & Google Sichtbarkeit",
            svc4Desc: "Gezielte Optimierung für Google Maps und lokale Suchen. Damit Sie von Kunden aus Ihrer Region sofort gefunden werden.",
            btnBookConsult: "Kostenloses Erstgespräch buchen",
            titleLocalServices: "Fokus: Lokale Betriebe & Praxen",
            localServiceTitle: "Ärzte, Kanzleien & Kliniken",
            localServiceDesc: "Repräsentative, vertrauensbildende Webauftritte für medizinische Praxen, Kanzleien und Premium-Dienstleister. Mit intelligent integrierten Terminbuchungssystemen entlasten wir Ihr Team im Praxisalltag spürbar und optimieren interne Abläufe.",
            localBusinessTitle: "Mittelstand & Handwerk",
            localBusinessDesc: "Maßgeschneiderte digitale Lösungen, die die Qualität und Kompetenz Ihres Fachbetriebs im Web optimal zur Geltung bringen. Durch automatisierte Anfrageprozesse generieren Sie qualifizierte Neukunden und sparen wertvolle Ressourcen.",
            localSEOTitle: "Gastronomie & Dienstleister",
            localSEODesc: "Einladende Webseiten für Restaurants, Cafés, Salons und lokale Dienstleister. Wir integrieren Speisekarten, Online-Reservierungen und setzen Ihr Angebot visuell perfekt in Szene, um mehr Gäste anzuziehen.",
            trustTitle: "Technologische Expertise & Transparenz",
            trustPoint1: "<strong>Innovativer Tech-Stack:</strong> Einsatz modernster Technologien für eine performante und sichere Web-Architektur.",
            trustPoint2: "<strong>Ehrlichkeit & Fairness:</strong> Transparente Preisgestaltung ohne aufgeblähten Agentur-Overhead.",
            trustPoint3: "<strong>Zukunftssicherer Code:</strong> Strukturierte und skalierbare Programmierung nach höchsten Software-Standards.",
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
            googleReviewTitle: "Feedback & Bewertungen",
            googleReviewDesc: "Zufrieden mit Ihrer neuen Website? Helfen Sie uns zu wachsen und hinterlassen Sie uns eine Bewertung auf Google!",
            googleReviewBtn: "Jetzt bewerten",
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
            langBtn: "EN",
            titleKISeminare: "KI-Seminare & IT-Sensibilisierung",
            subKISeminare: "Praxisnahe Aufklärung für Schulen, Lehrkräfte und lokale Unternehmen",
            kiCard1Title: "Für Schüler & Jugendliche",
            kiCard1Feat1: "Deepfakes erkennen",
            kiCard1Feat2: "Sicherer Umgang mit Social Media",
            kiCard1Feat3: "ChatGPT fair nutzen",
            kiCard2Title: "Für Lehrkräfte & Kollegien",
            kiCard2Feat1: "KI im Unterricht nutzen",
            kiCard2Feat2: "Plagiate erkennen",
            kiCard2Feat3: "Datenschutz",
            kiCard3Title: "Für Unternehmen",
            kiCard3Feat1: "KI-Tools zur Effizienzsteigerung",
            kiCard3Feat2: "Cyber-Security Basics",
            kiCard3Feat3: "Mitarbeiter-Sensibilisierung",
            btnKISeminar: "Jetzt unverbindliches Seminar anfragen",
            linkedinTitle: "Lass uns auf LinkedIn vernetzen",
            linkedinSub: "Ich teile regelmäßig Insights zu Tech & Webentwicklung."
        },
        en: {
            title: "Web Design & IT Services in Frankfurt | D-Tech Solutions",
            desc: "We build modern, fast websites & offer reliable WP maintenance for local businesses in Frankfurt. Boost your digital visibility today!",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navWhyUs: "Why Us",
            navGetStarted: "Contact",
            navAbout: "About Me",
            heroTitle: 'D-Tech Solutions<br><span class="text-accent">Digital done right.</span>',
            heroSubtitle: "Premium web design and IT services for local businesses. We design, host, and manage your digital presence so you can focus on your business.",
            titleAbout: "About Me",
            aboutText: "Hi, I'm Dominik, the founder of D-Tech Solutions. I founded this company to combine my passion for future-proof technology and high-performance web development with real business needs. Our goal is to create modern and powerful web solutions that help your business succeed sustainably in the digital world.",
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
            titleServices: "My Services",
            svc1Title: "Web Design & Development",
            svc1Desc: "Modern, conversion-optimized websites that look perfect on any device. We build your digital sales engine.",
            svc2Title: "WordPress Maintenance & Security",
            svc2Desc: "Regular Core & Plugin updates, daily backups, and proactive security monitoring for peace of mind.",
            svc3Title: "High-Speed Hosting",
            svc3Desc: "Lightning-fast loading times thanks to modern server architecture. We guarantee maximum performance and 99.9% uptime.",
            svc4Title: "Local SEO & Google Visibility",
            svc4Desc: "Targeted optimization for Google Maps and local searches. So customers from your region can find you immediately.",
            btnBookConsult: "Book a Free Consultation",
            titleLocalServices: "Focus: Local Businesses & Practices",
            localServiceTitle: "Doctors, Law Firms & Clinics",
            localServiceDesc: "Prestigious, trust-building web presences for medical practices, law firms, and premium service providers. With intelligently integrated booking systems, we noticeably relieve your team's daily workload and optimize internal processes.",
            localBusinessTitle: "SMEs & Trades",
            localBusinessDesc: "Tailored digital solutions that perfectly showcase the quality and expertise of your specialized business online. Automated inquiry processes help you generate qualified leads and save valuable resources.",
            localSEOTitle: "Gastronomy & Services",
            localSEODesc: "Inviting websites for restaurants, cafes, salons, and local service providers. We integrate menus, online reservations, and visually highlight your offerings perfectly to attract more guests.",
            trustTitle: "Technological Expertise & Transparency",
            trustPoint1: "<strong>Innovative Tech Stack:</strong> Leveraging cutting-edge technologies for a high-performance and secure web architecture.",
            trustPoint2: "<strong>Honesty & Fairness:</strong> Transparent pricing structure without bloated agency overhead.",
            trustPoint3: "<strong>Future-proof Code:</strong> Structured and scalable programming following the highest software standards.",
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
            googleReviewTitle: "Feedback & Reviews",
            googleReviewDesc: "Happy with your new website? Help us grow by leaving us a review on Google!",
            googleReviewBtn: "Review Us Now",
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
            langBtn: "DE",
            titleKISeminare: "AI Seminars & IT Awareness",
            subKISeminare: "Practical education for schools, teachers, and local businesses",
            kiCard1Title: "For Students & Youth",
            kiCard1Feat1: "Recognizing Deepfakes",
            kiCard1Feat2: "Safe Social Media Use",
            kiCard1Feat3: "Using ChatGPT Fairly",
            kiCard2Title: "For Teachers & Staff",
            kiCard2Feat1: "AI in the Classroom",
            kiCard2Feat2: "Detecting Plagiarism",
            kiCard2Feat3: "Data Privacy",
            kiCard3Title: "For Businesses",
            kiCard3Feat1: "AI Tools for Efficiency",
            kiCard3Feat2: "Cyber Security Basics",
            kiCard3Feat3: "Employee Awareness Training",
            btnKISeminar: "Request a Seminar Now",
            linkedinTitle: "Let's connect on LinkedIn",
            linkedinSub: "I regularly share insights on tech & web development."
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
                    elementOrSelector: "#my-cal-inline",
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
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

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
                    window.location.href = '/danke';
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


    // Intersection Observer for Scroll Reveal Animations (optimized)
    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
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
