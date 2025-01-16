// DESKTOP
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


// DESKTOP & MOBILE (OLD)
document.addEventListener('DOMContentLoaded', function () {
    console.log('[Exit Intent Popup]: Script loaded.');
    let exitIntentTriggered = false; // Track if the popup has already been triggered
    let idleTimer = null; // Timer for idle time tracking (mobile)
    let idleTime = 0; // Idle time counter (mobile)
    const idleThreshold = 240; // 4 minutes in seconds
    const delayThreshold = 30000; // 30 seconds in milliseconds
    const popupID = 37817; // Replace with your popup ID
    // Function to detect mobile devices
    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || screen.width <= 1025;
    }
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
    // Function to trigger the popup
    function triggerPopup() {
        if (!exitIntentTriggered && !hasPopupShown()) {
            exitIntentTriggered = true;
            try {
                elementorProFrontend.modules.popup.showPopup({ id: popupID });
                logMessage(`Popup with ID ${popupID} triggered.`);
                markPopupAsShown();
            } catch (error) {
                console.error(`[Exit Intent Popup Error]: ${error.message}`);
            }
        }
    }
    // Desktop Exit Intent Logic
    function desktopExitIntent() {
        logMessage('Desktop exit intent logic enabled.');
        document.addEventListener('mouseleave', function (event) {
            if (!exitIntentTriggered && event.clientY < 0 && !hasPopupShown()) {
                logMessage('Exit intent detected on desktop.');
                triggerPopup();
            }
        });
    }
    // Mobile Exit Intent Logic
    function mobileExitIntent() {
        logMessage('Mobile exit intent logic enabled.');
        // 1. Back Button Press Detection
        window.addEventListener('popstate', function () {
            logMessage('Back button pressed.');
            triggerPopup();
        });
        // 2. Browser Tab Switching Detection
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'hidden') {
                logMessage('User switched tabs or minimized browser.');
                triggerPopup();
            }
        });
        // 3. Idle Time Detection
        function resetIdleTimer() {
            idleTime = 0; // Reset idle time counter
            logMessage('User activity detected. Idle timer reset.');
        }
        function startIdleTimer() {
            // Increment idle time every second
            idleTimer = setInterval(function () {
                idleTime++;
                logMessage(`Idle time: ${idleTime} seconds.`);
                if (idleTime >= idleThreshold) {
                    logMessage('User has been idle for 4 minutes.');
                    triggerPopup();
                    clearInterval(idleTimer); // Stop the idle timer after triggering
                }
            }, 1000); // Increment every second
        }
        // Reset idle timer on user interaction
        ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll'].forEach((event) => {
            document.addEventListener(event, resetIdleTimer);
        });
        // Initialize idle timer
        startIdleTimer();
    }
    // Initialize Exit Intent Logic After Delay
    setTimeout(function () {
        logMessage('30 seconds delay completed.');
        if (isMobileDevice()) {
            mobileExitIntent(); // Enable mobile-specific behaviors
        } else {
            desktopExitIntent(); // Enable desktop-specific behaviors
        }
    }, delayThreshold);
});

// DESKTOP & MOBILE (NEW)
document.addEventListener('DOMContentLoaded', function () {
    console.log('[Exit Intent Popup]: Script loaded.');
    let exitIntentTriggered = false; // Track if the popup has already been triggered
    let idleTimer = null; // Timer for idle time tracking (mobile)
    let idleTime = 0; // Idle time counter (mobile)
    const idleThreshold = 240; // 4 minutes in seconds
    const delayThreshold = 30000; // 30 seconds in milliseconds
    const popupID = 37817; // Replace with your popup ID
    let hasScrolledDown = false; // Track if the user has scrolled down (mobile)

    // Function to detect mobile devices
    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || screen.width <= 1025;
    }

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

    // Function to trigger the popup
    function triggerPopup() {
        if (!exitIntentTriggered && !hasPopupShown()) {
            exitIntentTriggered = true;
            try {
                elementorProFrontend.modules.popup.showPopup({ id: popupID });
                logMessage(`Popup with ID ${popupID} triggered.`);
                markPopupAsShown();
            } catch (error) {
                console.error(`[Exit Intent Popup Error]: ${error.message}`);
            }
        }
    }

    // Desktop Exit Intent Logic
    function desktopExitIntent() {
        logMessage('Desktop exit intent logic enabled.');
        document.addEventListener('mouseleave', function (event) {
            if (!exitIntentTriggered && event.clientY < 0 && !hasPopupShown()) {
                logMessage('Exit intent detected on desktop.');
                triggerPopup();
            }
        });
    }

    // Mobile Scroll-Up Trigger Logic
    function mobileScrollUpTrigger() {
        logMessage('Mobile scroll-up trigger enabled.');

        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;

            // If user scrolls down, mark it as "hasScrolledDown"
            if (scrollPosition > 50) {
                hasScrolledDown = true;
            }

            // If user scrolls back up after scrolling down, trigger popup
            if (hasScrolledDown && scrollPosition < 10) {
                logMessage('User scrolled back up after scrolling down.');
                triggerPopup();
            }
        });
    }

    // Mobile Idle Detection Logic (Preserved for Future Use)
    function mobileIdleDetection() {
        logMessage('Mobile idle detection logic enabled.');

        // Idle Time Detection
        function resetIdleTimer() {
            idleTime = 0; // Reset idle time counter
            logMessage('User activity detected. Idle timer reset.');
        }

        function startIdleTimer() {
            // Increment idle time every second
            idleTimer = setInterval(function () {
                idleTime++;
                logMessage(`Idle time: ${idleTime} seconds.`);
                if (idleTime >= idleThreshold) {
                    logMessage('User has been idle for 4 minutes.');
                    triggerPopup();
                    clearInterval(idleTimer); // Stop the idle timer after triggering
                }
            }, 1000); // Increment every second
        }

        // Reset idle timer on user interaction
        ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll'].forEach((event) => {
            document.addEventListener(event, resetIdleTimer);
        });

        // Initialize idle timer
        startIdleTimer();
    }

    // Initialize Exit Intent Logic After Delay
    setTimeout(function () {
        logMessage('30 seconds delay completed.');
        if (isMobileDevice()) {
            mobileScrollUpTrigger(); // Enable mobile-specific scroll-up behavior
        } else {
            desktopExitIntent(); // Enable desktop-specific behavior
        }
    }, delayThreshold);
});


// DESKTOP & MOBILE (2-DAY INTERVAL)
document.addEventListener('DOMContentLoaded', function () {
    console.log('[Exit Intent Popup]: Script loaded.');
    let exitIntentTriggered = false; // Track if the popup has already been triggered
    let idleTimer = null; // Timer for idle time tracking (mobile)
    let idleTime = 0; // Idle time counter (mobile)
    const idleThreshold = 240; // 4 minutes in seconds
    const delayThreshold = 30000; // 30 seconds in milliseconds
    const popupID = 37817; // Replace with your popup ID
    let hasScrolledDown = false; // Track if the user has scrolled down (mobile)

    // 2-Day Interval Logic
    const dismissKey = 'popupDismissedAt'; // Key for storing dismissal timestamp
    const intervalInDays = 2; // 2-day interval
    const intervalInMs = intervalInDays * 24 * 60 * 60 * 1000; // Convert to milliseconds

    // Function to detect mobile devices
    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || screen.width <= 1025;
    }

    // Log whether a mobile device is detected
    if (isMobileDevice()) {
        console.log('[Exit Intent Popup]: Mobile device detected.');
    } else {
        console.log('[Exit Intent Popup]: Non-mobile device detected.');
    }

    // Function to check if the popup can be displayed (2-day interval logic)
    function canDisplayPopup() {
        const lastDismissedAt = localStorage.getItem(dismissKey);

        if (!lastDismissedAt) {
            // No dismissal timestamp stored, allow the popup
            return true;
        }

        const timeElapsed = Date.now() - new Date(lastDismissedAt).getTime();
        return timeElapsed >= intervalInMs; // Return true if 2 days have passed
    }

    // Function to mark the popup as dismissed
    function markPopupAsDismissed() {
        localStorage.setItem(dismissKey, new Date().toISOString());
        console.log(`[Exit Intent Popup]: Popup dismissed at ${new Date().toISOString()}`);
    }

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

    // Function to trigger the popup
    function triggerPopup() {
        if (!exitIntentTriggered && !hasPopupShown() && canDisplayPopup()) {
            exitIntentTriggered = true;
            try {
                elementorProFrontend.modules.popup.showPopup({ id: popupID });
                logMessage(`Popup with ID ${popupID} triggered.`);
                markPopupAsShown();

                // Mark the popup as dismissed when closed
                document.addEventListener('click', function (event) {
                    if (
                        event.target.classList.contains('elementor-popup-modal-close') || // Close button
                        event.target.classList.contains('elementor-popup-modal') // Overlay
                    ) {
                        markPopupAsDismissed();
                    }
                });
            } catch (error) {
                console.error(`[Exit Intent Popup Error]: ${error.message}`);
            }
        } else {
            logMessage('[Exit Intent Popup]: Popup cannot be displayed again due to 2-day interval.');
        }
    }

    // Desktop Exit Intent Logic
    function desktopExitIntent() {
        logMessage('Desktop exit intent logic enabled.');
        document.addEventListener('mouseleave', function (event) {
            if (!exitIntentTriggered && event.clientY < 0) {
                logMessage('Exit intent detected on desktop.');
                logMessage('[Exit Intent Popup]: Popup cannot be displayed again due to 2-day interval.');
                triggerPopup();
            }
        });
    }

    // Mobile Scroll-Up Trigger Logic
    function mobileScrollUpTrigger() {
        logMessage('Mobile scroll-up trigger enabled.');
    
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
    
            // If user scrolls down, mark it as "hasScrolledDown"
            if (scrollPosition > 50 && !hasScrolledDown) {
                hasScrolledDown = true;
                logMessage('User has scrolled down on mobile.');
            }
    
            // If user scrolls back up after scrolling down, trigger popup
            if (hasScrolledDown && scrollPosition < 10) {
                logMessage('User scrolled back up after scrolling down.');
                triggerPopup();
            }
        });
    }    

    // Initialize Exit Intent Logic After Delay
    setTimeout(function () {
        logMessage('30 seconds delay completed.');
        if (isMobileDevice()) {
            mobileScrollUpTrigger(); // Enable mobile-specific scroll-up behavior
        } else {
            desktopExitIntent(); // Enable desktop-specific behavior
        }
    }, delayThreshold);
});
