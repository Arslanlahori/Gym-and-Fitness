// Wait for the page to load
window.addEventListener('load', function () {

    // Get the splash screen element
    var splash = document.getElementById('splash-container');

    // Hide the splash screen after 4 seconds
    setTimeout(function () {
        splash.style.opacity = 0;
        setTimeout(function () {
            splash.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000);
    }, 4000);

});


const zoomImage = document.getElementById("zoom-image");
zoomImage.addEventListener("mouseenter", () => {
    zoomImage.style.transform = "scale(1.1)";
});
const zoomImage1 = document.getElementById("zoom-image1");
zoomImage1.addEventListener("mouseenter", () => {
    zoomImage1.style.transform = "scale(1.1)";
});
const zoomImage2 = document.getElementById("zoom-image2");
zoomImage2.addEventListener("mouseenter", () => {
    zoomImage2.style.transform = "scale(1.1)";
});
const zoomImage3 = document.getElementById("zoom-image3");
zoomImage3.addEventListener("mouseenter", () => {
    zoomImage3.style.transform = "scale(1.1)";
});
const zoomImage4 = document.getElementById("zoom-image4");
zoomImage4.addEventListener("mouseenter", () => {
    zoomImage4.style.transform = "scale(1.1)";
});
const zoomImage5 = document.getElementById("zoom-image5");
zoomImage5.addEventListener("mouseenter", () => {
    zoomImage5.style.transform = "scale(1.1)";
});
zoomImage.addEventListener("mouseleave", () => {
    zoomImage.style.transform = "scale(1)";
});
zoomImage1.addEventListener("mouseleave", () => {
    zoomImage1.style.transform = "scale(1)";
});
zoomImage2.addEventListener("mouseleave", () => {
    zoomImage2.style.transform = "scale(1)";
});
zoomImage3.addEventListener("mouseleave", () => {
    zoomImage3.style.transform = "scale(1)";
});
zoomImage4.addEventListener("mouseleave", () => {
    zoomImage4.style.transform = "scale(1)";
});
zoomImage5.addEventListener("mouseleave", () => {
    zoomImage5.style.transform = "scale(1)";
});


