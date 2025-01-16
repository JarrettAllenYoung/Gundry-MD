    document.addEventListener('DOMContentLoaded', function() {
        var closeButton = document.querySelector('.close-banner-blue-v2');
        var promoBanner = document.querySelector('.promo-banner-blue-v2');
        
        console.log("Close button:", closeButton);
        console.log("Promo banner:", promoBanner);
        
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                console.log("Close button clicked.");
                
                if (promoBanner) {
                    promoBanner.style.display = 'none'; // Hide the promo banner
                    console.log("Promo banner hidden.");
                }
            });
        } else {
            console.log("Close button not found.");
        }
    });