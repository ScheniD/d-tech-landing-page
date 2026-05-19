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
            proj2Title: "E-Commerce Plattform",
            proj2Desc: "Entwicklung einer skalierbaren E-Commerce-Plattform für einen wachsenden Einzelhändler mit automatisiertem Inventar-Management.",
            proj3Title: "SaaS Web-App",
            proj3Desc: "Komplexe SaaS-Applikation mit nutzerfreundlichem Dashboard und Echtzeit-Datenverarbeitung.",
            btnStart: "Projekt Starten",
            btnExplore: "Dienstleistungen Entdecken",
            titlePackages: "Service-Pakete",
            pkg1Title: "Starter",
            pkg1Desc: "Fokus auf Landing Pages & Local SEO",
            pkg1Feat1: "Benutzerdefiniertes Web-Design",
            pkg1Feat2: "Responsive Entwicklung",
            pkg1Feat3: "Basis SEO-Optimierung",
            pkg2Title: "Business",
            pkg2Desc: "Komplette Webpräsenz + Management",
            pkg2Feat1: "Alles im Starter-Paket",
            pkg2Feat2: "CMS Integration",
            pkg2Feat3: "Hosting & Monatliche Wartung",
            pkg3Title: "Custom",
            pkg3Desc: "E-Commerce & komplexe Apps",
            pkg3Feat1: "Maßgeschneiderte Web-Apps",
            pkg3Feat2: "E-Commerce Systeme",
            pkg3Feat3: "API-Integrationen",
            pkgBtnPrimary: "Kostenlose Analyse buchen",
            pkgBtnOutline: "Kostenlose Analyse buchen",
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
            proj2Title: "E-Commerce Platform",
            proj2Desc: "Development of a scalable e-commerce platform for a growing retailer with automated inventory management.",
            proj3Title: "SaaS Web App",
            proj3Desc: "Complex SaaS application with user-friendly dashboard and real-time data processing.",
            btnStart: "Start Your Project",
            btnExplore: "Explore Services",
            titlePackages: "Service Packages",
            pkg1Title: "Starter",
            pkg1Desc: "Focus on Landing Pages & Local SEO",
            pkg1Feat1: "Custom Web Design",
            pkg1Feat2: "Responsive Development",
            pkg1Feat3: "Basic SEO Optimization",
            pkg2Title: "Business",
            pkg2Desc: "Complete Web Presence + Management",
            pkg2Feat1: "Everything in Starter",
            pkg2Feat2: "CMS Integration",
            pkg2Feat3: "Hosting & Monthly Maintenance",
            pkg3Title: "Custom",
            pkg3Desc: "E-Commerce & Complex Apps",
            pkg3Feat1: "Tailored Web Apps",
            pkg3Feat2: "E-Commerce Systems",
            pkg3Feat3: "API Integrations",
            pkgBtnPrimary: "Book a Free Analysis",
            pkgBtnOutline: "Book a Free Analysis",
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
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(10, 10, 15, 0.95)';
                navLinks.style.padding = '20px 0';
                navLinks.style.backdropFilter = 'blur(10px)';
            }
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
                if (window.innerWidth <= 992 && navLinks) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

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
});
