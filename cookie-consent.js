// Cookie Consent Banner Script
(function () {
    'use strict';

    const COOKIE_NAME = 'scalia_cookie_accepted';

    // Check if already accepted
    function isCookieAccepted() {
        return localStorage.getItem(COOKIE_NAME) === 'true';
    }

    // Set cookie as accepted
    function acceptCookie() {
        localStorage.setItem(COOKIE_NAME, 'true');
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.display = 'none';
            banner.remove();
        }
    }

    // Initialize banner
    function initBanner() {
        // Check if already accepted
        if (isCookieAccepted()) {
            console.log('Cookies already accepted');
            return;
        }

        // Create banner
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                background-color: #1a1a2e;
                border-top: 3px solid #703bbd;
                padding: 20px;
                z-index: 9999;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                font-family: Arial, sans-serif;
                box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
                flex-wrap: wrap;
            ">
                <div style="
                    color: #fff;
                    font-size: 14px;
                    flex: 1;
                    min-width: 200px;
                ">
                    <p style="margin: 0; line-height: 1.5;">
                        🍪 Utilizamos cookies para mejorar tu experiencia.
                        <a href="/privacy-policy.html" style="color: #00b1bf; text-decoration: none; font-weight: bold;">Leer más</a> | 
                        <a href="/cookies-policy.html" style="color: #00b1bf; text-decoration: none; font-weight: bold;">Política de Cookies</a>
                    </p>
                </div>
                <div style="display: flex; gap: 10px; flex-wrap: nowrap;">
                    <button onclick="window.acceptCookie()" style="
                        background-color: #703bbd;
                        color: white;
                        border: none;
                        padding: 10px 25px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                        transition: background-color 0.3s;
                        white-space: nowrap;
                    " onmouseover="this.style.backgroundColor='#764ba2'" onmouseout="this.style.backgroundColor='#703bbd'">
                        Aceptar
                    </button>
                </div>
            </div>
        `;

        // Append to body
        if (document.body) {
            document.body.appendChild(banner);
            console.log('Cookie banner added to page');
        }
    }

    // Expose accept function globally
    window.acceptCookie = acceptCookie;

    // Wait for DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBanner);
    } else {
        setTimeout(initBanner, 100);
    }
})();
