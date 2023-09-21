// const form = document.getElementById('my-form');

// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form from submitting

//     // Get form data
//     const formData = new FormData(form);
//     const name = formData.get('Username');
//     const email = formData.get('email');
//     const Gym = formData.get('Gym and fitness center:');
//     const city = formData.get('city');
//     const radio1 = formData.get('radio1');
//     const radio2 = formData.get('radio2');
//     const radio3 = formData.get('radio3');
//     const radio4 = formData.get('radio4');
//     const radio5 = formData.get('radio5');
//     const radio6 = formData.get('radio6');
//     const radio7 = formData.get('radio7');
//     const radio8 = formData.get('radio8');
//     const radio9 = formData.get('radio9');
//     const radio10 = formData.get('radio10');

//     // Show alert dialog with form data
//     alert(`Thank you !  Your Details are below.\n\n Comments : ${name}\n User Email : ${email}\n Gym and fitness center : ${Gym}\n City : ${city}\nSelected   : ${radio1}\nNot Selected:${radio2}\nNot Selected:${radio3}\nNot Selected:${radio4}\nNot Selected:${radio5}\nNot Selected:${radio6}\nNot Selected:${radio7}\nNot Selected:${radio8}\nNot Selected:${radio9}\nNot Selected:${radio10}`);
//     // alert(`Username: ${name}\nEmail: ${email}\nGym and fitness center: ${Gym}\nCity: ${city}\nSelected   : ${radio1}\nNot Selected:${radio2}\nNot Selected:${radio3}\nNot Selected:${radio4}\nNot Selected:${radio5}\nNot Selected:${radio6}\nNot Selected:${radio7}\nNot Selected:${radio8}\nNot Selected:${radio9}\nNot Selected:${radio10}`);
// });
var button = document.getElementById("popup-button");
var message = document.getElementById("popup-message");

button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    message.style.display = "block";
});

message.addEventListener("click", function () {
    message.style.display = "none";
});



