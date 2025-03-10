    document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('.close-banner-blue-v1');
    var promoBanner = document.querySelector('.promo-banner-blue-v1');
    
    // Select the sections you want to adjust the margin for
    var targetSections = document.querySelectorAll('.ob-is-breaking-bad.gh-unicorn-34347-50150cf7');
    console.log("Target sections found:", targetSections);
    
    console.log("Close button:", closeButton);
    console.log("Promo banner:", promoBanner);
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            console.log("Close button clicked.");
            
            if (promoBanner) {
                promoBanner.style.display = 'none'; // Hide the promo banner
                console.log("Promo banner hidden.");
            }
            
            // Loop through all target sections and set margin-top to 0px
            targetSections.forEach(function(section) {
                section.style.setProperty('margin-top', '-90px', 'important');
                console.log("Margin-top for target section set to 0px.");
            });
            targetSections.forEach(function(section) {
                section.style.setProperty('margin-top', '-90px', 'important');
                console.log("Margin-top for target section set to 0px.");
            });
        });
    } else {
        console.log("Close button not found.");
    }
});






document.addEventListener('DOMContentLoaded', function() {
var closeButton = document.querySelector('.close-banner-blue-v1');
var promoBanner = document.querySelector('.promo-banner-blue-v1');

// Select the sections you want to adjust the margin for
var targetSectionsDesktop = document.querySelectorAll('.elementor-element-f103b24');
console.log("Target sections found:", targetSectionsDesktop);
var targetSectionsMobile = document.querySelectorAll('.elementor-element-0f42489');
console.log("Target sections found:", targetSectionsMobile);

console.log("Close button:", closeButton);
console.log("Promo banner:", promoBanner);

if (closeButton) {
    closeButton.addEventListener('click', function() {
        console.log("Close button clicked.");
        
        if (promoBanner) {
            promoBanner.style.display = 'none'; // Hide the promo banner
            console.log("Promo banner hidden.");
        }
        
        // Loop through all target sections and set margin-top to 0px
        targetSectionsDesktop.forEach(function(section) {
            section.style.setProperty('margin-top', '-90px', 'important');
            console.log("Margin-top for target section set to 0px.");
        });
        targetSectionsMobile.forEach(function(section) {
            section.style.setProperty('margin-top', '-70px', 'important');
            console.log("Margin-top for target section set to 0px.");
        });
    });
} else {
    console.log("Close button not found.");
}
});






document.addEventListener('DOMContentLoaded', function() {
var closeButton = document.querySelector('.close-banner-green-v1');
var promoBanner = document.querySelector('.promo-banner-green-v1');

// Select the sections you want to adjust the margin for
var targetSectionsDesktop = document.querySelectorAll('.elementor-element-f103b24');
console.log("Target sections found:", targetSectionsDesktop);
var targetSectionsMobile = document.querySelectorAll('.elementor-element-0f42489');
console.log("Target sections found:", targetSectionsMobile);

console.log("Close button:", closeButton);
console.log("Promo banner:", promoBanner);

if (closeButton) {
    closeButton.addEventListener('click', function() {
        console.log("Close button clicked.");
        
        if (promoBanner) {
            promoBanner.style.display = 'none'; // Hide the promo banner
            console.log("Promo banner hidden.");
        }
        
        // Loop through all target sections and set margin-top to 0px
        targetSectionsDesktop.forEach(function(section) {
            section.style.setProperty('margin-top', '-90px', 'important');
            console.log("Margin-top for target section set to 0px.");
        });
        targetSectionsMobile.forEach(function(section) {
            section.style.setProperty('margin-top', '-70px', 'important');
            console.log("Margin-top for target section set to 0px.");
        });
    });
} else {
    console.log("Close button not found.");
}
});
