function onButtonClick() {
    var settings = document.getElementById("PopoutSettings");
    if (settings.style.display === "none" || settings.style.display === "") {
        settings.style.display = "block"; // Show the settings panel
        settings.style.animationName = "slideIn"; // Apply slide-in animation
    } else {
        hideSettings(); // Hide the settings panel
    }
}

// JavaScript function to hide the PopoutSettings element
function hideSettings() {
    var settings = document.getElementById("PopoutSettings");
    settings.style.animationName = "slideOut"; // Apply slide-out animation
    setTimeout(function() {
        settings.style.display = "none"; // Hide the settings panel after animation completes
    }, 100); // Wait for animation to complete (0.1s)
}