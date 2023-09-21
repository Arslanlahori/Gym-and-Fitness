const imageContainer = document.querySelector('.image-container');
const imageDetails = document.querySelector('.image-details');

imageContainer.addEventListener('mouseover', function () {
    imageDetails.textContent = 'Your image details';
    imageDetails.style.opacity = 1;
});

imageContainer.addEventListener('mouseout', function () {
    imageDetails.style.opacity = 0;
});
