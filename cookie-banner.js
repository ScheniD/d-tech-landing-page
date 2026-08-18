document.addEventListener('DOMContentLoaded', () => {
    const consentCookieName = 'dtech_cookie_consent';

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax';
    }

    function updateConsent(granted) {
        if (typeof gtag === 'function') {
            const state = granted ? 'granted' : 'denied';
            gtag('consent', 'update', {
                'ad_storage': state,
                'ad_user_data': state,
                'ad_personalization': state,
                'analytics_storage': state
            });
        }
    }

    const currentConsent = getCookie(consentCookieName);
    if (currentConsent === 'granted') {
        updateConsent(true);
    } else if (currentConsent === 'denied') {
        updateConsent(false);
    }

    if (!currentConsent) {
        showBanner();
    }

    function showBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>
                    Wir verwenden Cookies und Google Services, um die Funktionalität dieser Website zu verbessern und unseren Traffic zu analysieren. 
                    Dabei werden Daten (wie z.B. IP-Adressen) erhoben. <a href="datenschutz.html">Weitere Informationen</a>.
                </p>
                <div class="cookie-buttons">
                    <button id="cookie-reject" class="btn-secondary">Ablehnen</button>
                    <button id="cookie-accept" class="btn-primary">Akzeptieren</button>
                </div>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            #cookie-consent-banner {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                width: calc(100% - 40px);
                max-width: 800px;
                background-color: var(--bg-surface, #1e1e1e);
                border: 1px solid var(--border-color, #333);
                border-radius: 12px;
                padding: 20px;
                z-index: 9999;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                display: flex;
                flex-direction: column;
                gap: 16px;
                font-family: 'Inter', sans-serif;
                color: var(--text-main, #fff);
                animation: slideUp 0.5s ease-out;
            }
            .cookie-content {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            @media (min-width: 768px) {
                .cookie-content {
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                }
            }
            #cookie-consent-banner p {
                margin: 0;
                font-size: 0.95rem;
                line-height: 1.5;
                color: var(--text-muted, #a0a0a0);
            }
            #cookie-consent-banner a {
                color: var(--primary, #0070F3);
                text-decoration: underline;
            }
            .cookie-buttons {
                display: flex;
                gap: 12px;
                flex-shrink: 0;
            }
            #cookie-reject, #cookie-accept {
                padding: 10px 16px;
                font-size: 0.95rem;
                font-weight: 500;
                border-radius: 6px;
                cursor: pointer;
                transition: background-color 0.2s, color 0.2s;
                border: none;
            }
            #cookie-reject {
                background-color: transparent;
                color: var(--text-muted, #a0a0a0);
                border: 1px solid var(--border-color, #333);
            }
            #cookie-reject:hover {
                background-color: var(--border-color, #333);
                color: var(--text-main, #fff);
            }
            #cookie-accept {
                background-color: var(--primary, #0070F3);
                color: #fff;
            }
            #cookie-accept:hover {
                background-color: #005bb5;
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translate(-50%, 20px); }
                to { opacity: 1; transform: translate(-50%, 0); }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(banner);

        document.getElementById('cookie-accept').addEventListener('click', () => {
            setCookie(consentCookieName, 'granted', 365);
            updateConsent(true);
            banner.remove();
        });

        document.getElementById('cookie-reject').addEventListener('click', () => {
            setCookie(consentCookieName, 'denied', 365);
            updateConsent(false);
            banner.remove();
        });
    }
});
