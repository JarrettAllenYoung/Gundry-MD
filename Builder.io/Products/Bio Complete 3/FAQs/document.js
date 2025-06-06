document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("ghm-logged-in")) {
        // Hide .show-vwo-blue-banner-v1
        document.querySelectorAll(".show-vwo-blue-banner-v1").forEach(function (element) {
            element.style.removeProperty("display"); // Removes inline styles if present
            element.style.setProperty("display", "none", "important"); // Hides it
        });

        // Show .hide-vwo-header2025
        document.querySelectorAll(".hide-vwo-header2025").forEach(function (element) {
            element.style.removeProperty("display"); // Removes any inline display settings
            element.style.setProperty("display", "block", "important");
            element.style.setProperty("visibility", "visible", "important");
            element.style.setProperty("opacity", "1", "important");
        });

        // Adjust margin-top for multiple classes
        const elementsToAdjust = [
            ".elementor-element-f103b24",
            ".elementor-element-0f42489",
            ".elementor-element-f59ff28",
            ".elementor-element-355b60b",
            ".elementor-element-5fc931b"
        ];

        elementsToAdjust.forEach(selector => {
            document.querySelectorAll(selector).forEach(function (element) {
                element.style.removeProperty("margin-top"); // Removes any inline styles
                element.style.setProperty("margin-top", "0px", "important"); // Sets margin-top
            });
        });
    }
});
