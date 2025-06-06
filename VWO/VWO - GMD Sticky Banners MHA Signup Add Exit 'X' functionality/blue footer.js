document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('.close-banner-blue-v2');
    var promoBanner = document.querySelector('.promo-banner-blue-v2');
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


// With cookie added

src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"


    document.addEventListener('DOMContentLoaded', function() {
        // Check if the banner was previously closed
        var bannerClosed = Cookies.get('bannerClosed');
        var promoBanner = document.querySelector('.promo-banner-blue-v2');
        var footerBottom = document.querySelector('.footer-bottom');
        var closeButton = document.querySelector('.close-banner-blue-v2');
        
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

// Final script

<!-- Include js-cookie library -->
<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>

<!-- Early inline script to immediately hide the banner if closed -->
<script>
  if (Cookies.get('bannerClosed') === 'true') {
    // Add a class to the root element so the banner is hidden via CSS
    document.documentElement.classList.add('banner-hidden');
  }
</script>

<!-- CSS to hide the banner when the 'banner-hidden' class is present -->
<style>
  .banner-hidden .promo-banner-blue-v2 {
    display: none;
  }
</style>

<!-- Main script -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Check if the banner was previously closed
    var bannerClosed = Cookies.get('bannerClosed');
    var promoBanner = document.querySelector('.promo-banner-blue-v2');
    var footerBottom = document.querySelector('.footer-bottom');
    var closeButton = document.querySelector('.close-banner-blue-v2');
    
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
          // Set a session cookie indicating the banner is closed
          Cookies.set('bannerClosed', 'true');
          // Add the 'banner-hidden' class so the banner stays hidden immediately
          document.documentElement.classList.add('banner-hidden');
        }
      });
    } else {
      console.log("Close button not found.");
    }
  });
</script>
