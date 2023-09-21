const images = document.querySelectorAll('.image');
const details = document.querySelectorAll('.details');

images.forEach((image, index) => {
    image.addEventListener('mousemove', (e) => {
        const { offsetX: x, offsetY: y } = e;
        const { offsetWidth: width, offsetHeight: height } = image;
        const xPos = (x / width) * 100;
        const yPos = (y / height) * 100;
        image.style.transformOrigin = `${xPos}% ${yPos}%`;
    });

    image.addEventListener('mouseenter', (e) => {
        details[index].classList.add('active');
    });

    image.addEventListener('mouseleave', (e) => {
        details[index].classList.remove('active');
    });
});

const colorSelect = document.getElementById('color');
const fontSelect = document.getElementById('fontsize');
const body = document.body;

colorSelect.addEventListener('change', function () {
    switch (this.value) {
        case 'default':
            body.style.background = 'linear-gradient(135deg, #69d2e7 0%, #a7dbd8 25%, #e0e4cc 46%, #e0e4cc 54%, #f38630 75%, #fa6900 100%)';
            details.forEach((detail) => {
                detail.style.backgroundColor = '#e0e4cc';
            });
            break;
        case 'dark':
            body.style.background = '#222';
            details.forEach((detail) => {
                detail.style.backgroundColor = '#444';
            });
            break;
        case 'blue':
            body.style.background = 'blue';
            details.forEach((detail) => {
                detail.style.backgroundColor = '#ccc';
            });
            break;
        case 'brown':
            body.style.background = 'brown';
            details.forEach((detail) => {
                detail.style.backgroundColor = '#d9d3c9';
            });
            break;
        case 'yellow':
            body.style.background = 'yellow';
            details.forEach((detail) => {
                detail.style.backgroundColor = '#ebebeb';
            });
            break;
    }
});
