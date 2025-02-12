document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    // Add fade-in effect when page loads
    document.querySelector(".content").style.opacity = "1";
});

// Fix autoplay issue on mobile
window.onload = function () {
    let video = document.querySelector(".video-background video");
    if (window.innerWidth < 768) {
        video.setAttribute("playsinline", "true"); // Ensures mobile plays inline
        video.play().catch(error => console.log("Autoplay blocked by browser"));
    }
};
