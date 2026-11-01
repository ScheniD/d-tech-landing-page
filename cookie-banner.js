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
        const secureFlag = window.location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax' + secureFlag;
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
        banner.setAttribute('role', 'region');
        banner.setAttribute('aria-label', 'Cookie-Einstellungen');
        banner.innerHTML = `
            <div class="cookie-content">
                <p>
                    <strong style="color:#f4f4f6; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; display:block; margin-bottom:4px;">// DATENSCHUTZ &amp; TELEMETRIE</strong>
                    Wir verwenden Cookies und Google Services, um die Funktionalität dieser Website zu verbessern und unseren Traffic zu analysieren. 
                    Dabei werden Daten (wie z.B. IP-Adressen) erhoben. <a href="datenschutz.html">Weitere Informationen</a>.
                </p>
                <div class="cookie-buttons">
                    <button id="cookie-reject" type="button" class="btn-secondary">ABLEHNEN</button>
                    <button id="cookie-accept" type="button" class="btn-primary">AKZEPTIEREN</button>
                </div>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            #cookie-consent-banner {
                position: fixed;
                bottom: 12px;
                left: 50%;
                transform: translateX(-50%);
                width: calc(100% - 24px);
                max-width: 860px;
                background-color: #0d0e11;
                border: 1px solid rgba(224, 122, 95, 0.45);
                border-top: 2px solid #e07a5f;
                border-radius: 0px;
                padding: 16px 18px;
                z-index: 9999;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: column;
                gap: 14px;
                font-family: 'Plus Jakarta Sans', sans-serif;
                color: #e3e2e6;
                animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .cookie-content {
                display: flex;
                flex-direction: column;
                gap: 14px;
            }
            @media (min-width: 768px) {
                #cookie-consent-banner {
                    bottom: 20px;
                    width: calc(100% - 40px);
                    padding: 20px 24px;
                }
                .cookie-content {
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                }
            }
            #cookie-consent-banner p {
                margin: 0;
                font-size: 0.8125rem;
                line-height: 1.5;
                color: #dbc1ba;
            }
            @media (min-width: 768px) {
                #cookie-consent-banner p {
                    font-size: 0.875rem;
                }
            }
            #cookie-consent-banner a {
                color: #ffb4a1;
                text-decoration: underline;
            }
            .cookie-buttons {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
                flex-shrink: 0;
                width: 100%;
            }
            @media (min-width: 768px) {
                .cookie-buttons {
                    display: flex;
                    width: auto;
                }
            }
            #cookie-reject, #cookie-accept {
                padding: 11px 16px;
                font-family: 'JetBrains Mono', monospace;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: 0.08em;
                border-radius: 0px;
                cursor: pointer;
                transition: all 0.1s linear;
                text-align: center;
            }
            #cookie-reject {
                background-color: #121316;
                color: #a38b86;
                border: 1px solid rgba(244, 244, 246, 0.14);
            }
            #cookie-reject:hover {
                border-color: #ffb68e;
                color: #f4f4f6;
            }
            #cookie-accept {
                background-color: #e07a5f;
                color: #0d0e11;
                border: 1px solid #e07a5f;
            }
            #cookie-accept:hover {
                background-color: #ffb4a1;
                border-color: #ffb4a1;
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translate(-50%, 16px); }
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
