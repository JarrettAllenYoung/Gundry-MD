document.addEventListener('DOMContentLoaded', function () {
    let exitIntentTriggered = false;

    // Function to check if the popup has already been shown in this session
    function hasPopupShown() {
        return sessionStorage.getItem('popupShown') === 'true';
    }

    // Function to mark the popup as shown
    function markPopupAsShown() {
        sessionStorage.setItem('popupShown', 'true');
    }

    // Function to log messages for debugging
    function logMessage(message) {
        console.log(`[Exit Intent Popup]: ${message}`);
    }

    // Wait for Elementor Pro's popup module to load
    const waitForElementorPopup = setInterval(function () {
        if (typeof elementorProFrontend !== 'undefined' && typeof elementorProFrontend.modules.popup !== 'undefined') {
            clearInterval(waitForElementorPopup); // Stop checking
            logMessage('Elementor Popup module loaded successfully.');

            // Start a 30-second delay before attaching the exit intent listener
            setTimeout(function () {
                logMessage('30 seconds delay completed. Exit intent listener will now be added.');

                // Add the exit intent listener only after the delay
                document.addEventListener('mouseleave', function (event) {
                    if (!exitIntentTriggered && event.clientY < 0 && !hasPopupShown()) {
                        exitIntentTriggered = true;
                        const popupID = 37817; // Replace with your popup ID
                        try {
                            elementorProFrontend.modules.popup.showPopup({ id: popupID });
                            logMessage(`Popup with ID ${popupID} triggered.`);
                        } catch (error) {
                            console.error(`[Exit Intent Popup Error]: ${error.message}`);
                        }
                        markPopupAsShown();
                    }
                });
            }, 30000); // 30 seconds delay
        } else {
            logMessage('Waiting for Elementor Popup module...');
        }
    }, 500); // Check every 500ms

    // Safety timeout to stop waiting for Elementor after 10 seconds
    setTimeout(function () {
        if (typeof elementorProFrontend === 'undefined' || typeof elementorProFrontend.modules.popup === 'undefined') {
            clearInterval(waitForElementorPopup);
            logMessage('Stopped waiting for Elementor Popup module after 10 seconds.');
        }
    }, 10000); // 10 seconds max wait
});