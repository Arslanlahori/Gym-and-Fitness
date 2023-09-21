const form = document.getElementById('contact-form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (name.trim() === '') {
        displayError('Name is required');
        return;
    }

    if (email.trim() === '') {
        displayError('Email is required');
        return;
    }

    if (!isValidEmail(email)) {
        displayError('Email is not valid');
        return;
    }

    if (message.trim() === '') {
        displayError('Message is required');
        return;
    }

    const xhr = new XMLHttpRequest();
    const url = 'submit-form.php'; // Replace with your server-side script URL
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.responseText;
            if (response === 'success') {
                displaySuccess('Form submitted successfully');
                form.reset();
            } else {
                displayError('Something went wrong, please try again later');
            }
        }
    };
    const data = `name=${name}&email=${email}&message=${message}`;
    xhr.send(data);
}

function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = message;
}

function displaySuccess(message) {
    const successMessage = document.getElementById('success-message');
    successMessage.innerHTML = message;
}
