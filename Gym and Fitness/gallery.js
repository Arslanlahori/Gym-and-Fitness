const images = document.querySelectorAll('.image');
const testcolor = document.querySelectorAll('.details');
const body = document.body;

images.forEach((image) => {
    image.addEventListener('mousemove', (e) => {
        const { offsetX: x, offsetY: y } = e;
        const { offsetWidth: width, offsetHeight: height } = image;
        const xPos = (x / width) * 100;
        const yPos = (y / height) * 100;
        image.style.transformOrigin = `${xPos}% ${yPos}%`;
    });
});

const colorSelect = document.getElementById('color');
const fontSelect = document.getElementById('fontsize');

colorSelect.addEventListener('change', function () {
    switch (this.value) {
        case 'default':
            body.style.background = 'linear-gradient(135deg, #69d2e7 0%, #a7dbd8 25%, #e0e4cc 46%, #e0e4cc 54%, #f38630 75%, #fa6900 100%)';
            testcolor.forEach((detail) => {
                detail.style.backgroundColor = 'linear-gradient(135deg, #69d2e7 0%, #a7dbd8 25%, #e0e4cc 46%, #e0e4cc 54%, #f38630 75%, #fa6900 100%)';
            });
            break;
        case 'dark':
            body.style.background = '#222';
            testcolor.forEach((detail) => {
                detail.style.backgroundColor = '#222';
            });
            break;
        case 'blue':
            body.style.background = 'blue';
            testcolor.forEach((detail) => {
                detail.style.backgroundColor = 'blue';
            });
            break;
        case 'brown':
            body.style.background = 'brown';
            testcolor.forEach((detail) => {
                detail.style.backgroundColor = 'brown';
            });
            break;
        case 'yellow':
            body.style.background = 'yellow';
            testcolor.forEach((detail) => {
                detail.style.backgroundColor = 'yellow';
            });
            break;
    }
});

fontSelect.addEventListener('change', function () {
    if (this.value === 'small') {
        body.classList.add('small');
    } else {
        body.classList.remove('small');
    }
    if (this.value === 'medium') {
        body.classList.add('medium');
    } else {
        body.classList.remove('medium');
    }
    if (this.value === 'large') {
        body.classList.add('large');
    } else {
        body.classList.remove('large');
    }
});
