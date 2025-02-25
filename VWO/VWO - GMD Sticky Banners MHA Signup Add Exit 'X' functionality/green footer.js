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