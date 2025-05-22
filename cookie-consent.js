// cookie-consent.js

document.addEventListener('DOMContentLoaded', () => {
    const cookieConsentBanner = document.getElementById('cookie-consent-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const declineCookiesBtn = document.getElementById('decline-cookies');

    // Functie om de cookiebanner te tonen
    function showCookieBanner() {
        cookieConsentBanner.classList.add('show');
    }

    // Functie om de cookiebanner te verbergen
    function hideCookieBanner() {
        cookieConsentBanner.classList.remove('show');
    }

    // Functie om cookievoorkeur op te slaan in localStorage
    function setCookieConsent(consent) {
        localStorage.setItem('cookie_consent', consent);
        hideCookieBanner();
    }

    // Controleer bij het laden van de pagina of er al toestemming is gegeven
    const userConsent = localStorage.getItem('cookie_consent');

    if (!userConsent) {
        // Als er geen toestemming is, toon de banner
        showCookieBanner();
    } else {
        // Als er wel toestemming is, kun je hier eventueel logica toevoegen
        // om analytische/marketing cookies te laden als 'accepted'
        // Voor nu verbergen we de banner gewoon als er al een keuze is gemaakt.
        hideCookieBanner();
    }

    // Event listener voor 'Accepteren' knop
    acceptCookiesBtn.addEventListener('click', () => {
        setCookieConsent('accepted');
        // Hier kun je eventueel code toevoegen om analytische/marketing cookies te laden
        // Bijvoorbeeld: loadGoogleAnalytics(); loadFacebookPixel();
    });

    // Event listener voor 'Weigeren' knop
    declineCookiesBtn.addEventListener('click', () => {
        setCookieConsent('declined');
        // Hier kun je eventueel code toevoegen om te zorgen dat analytische/marketing cookies NIET geladen worden
        // En bestaande niet-essentiële cookies te verwijderen
    });
});
