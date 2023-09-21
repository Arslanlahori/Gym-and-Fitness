const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // show alert message
    alert(`Thank you, ${name}! Your message has been sent.`);

    // show pop-up message
    const popup = document.createElement('div');
    popup.textContent = `Thank you, ${name}! Your message has been sent.`;
    popup.classList.add('popup');
    document.body.appendChild(popup);

    setTimeout(function () {
        popup.remove();
    }, 3000);
});
