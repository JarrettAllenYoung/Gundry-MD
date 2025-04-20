document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('.close-banner-green-v2');
    var promoBanner = document.querySelector('.promo-banner-green-v2');
    var footerBottom = document.querySelector('.footer-bottom');
    
    console.log("Close button:", closeButton);
    console.log("Promo banner:", promoBanner);
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            console.log("Close button clicked.");
            
            if (promoBanner) {
                promoBanner.style.display = 'none'; // Hide the promo banner
                console.log("Promo banner hidden.");
                footerBottom.style.marginBottom = '-40px';
            }
        });
    } else {
        console.log("Close button not found.");
    }
});


// With cookie set

src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"

    document.addEventListener('DOMContentLoaded', function() {
        // Check if the banner was previously closed
        var bannerClosed = Cookies.get('bannerClosed');
        var promoBanner = document.querySelector('.promo-banner-green-v2');
        var footerBottom = document.querySelector('.footer-bottom');
        var closeButton = document.querySelector('.close-banner-green-v2');
        
        console.log("Banner closed cookie:", bannerClosed);
        
        // If the cookie indicates the banner was closed, hide it immediately
        if (bannerClosed === 'true') {
            if (promoBanner) {
                promoBanner.style.display = 'none';
            }
            if (footerBottom) {
                footerBottom.style.marginBottom = '-40px';
            }
            return; // Exit early since the banner is already hidden
        }
        
        // Attach the click event handler if the close button is present
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                console.log("Close button clicked.");
                if (promoBanner) {
                    promoBanner.style.display = 'none'; // Hide the promo banner
                    console.log("Promo banner hidden.");
                    if (footerBottom) {
                        footerBottom.style.marginBottom = '-40px';
                    }
                    // Set a cookie to remember that the banner has been closed (no expiration set)
                    Cookies.set('bannerClosed', 'true');
                }
            });
        } else {
            console.log("Close button not found.");
        }
    });

