// document.getElementById("login-button").addEventListener("click", function () {
//     var popupContainer = document.getElementById("popup-container");
//     var popup = document.getElementById("popup");
//     var popupMessage = document.getElementById("popup-message");

//     popupMessage.innerHTML = "Thanks for login!";
//     popupContainer.style.display = "flex";

//     document.getElementById("popup-close").addEventListener("click", function () {
//         popupContainer.style.display = "none";
//     });
// });






// const form = document.getElementById("login-form");
// const loginBtn = document.getElementById("login-btn");
// const username = document.getElementById("username");
// const password = document.getElementById("password");
// const popup = document.getElementById("popup");


// form.addEventListener("submit", (event) => {
//     if (username.value.trim() === "" || password.value.trim() === "") {
//         event.preventDefault();
//         alert("Please fill in all fields");
//     } else if (username.value === "ARSLAN" && password.value === "12345") {
//         // Redirect user to home page
//         window.location.href = "Home.html";
//     }
//     else {
//         // If the values don't match, show an error message
//         event.preventDefault();
//         alert("Incorrect username or password!");
//     }
// }

// );
// const loginForm = document.getElementById("login-form");
// const loginBtn = document.getElementById("login-btn");
// const popup = document.getElementById("popup");
// const errorPopup = document.getElementById("errorPopup");

// loginBtn.addEventListener("click", function (event) {
//     event.preventDefault(); // prevent the form from submitting

//     // get the username and password from the form
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // check if the username and password are empty
//     if (username === "" || password === "") {
//         alert("Please enter your username and password.");
//     } else {
//         // check if the username and password are correct
//         if (username === "ARSLAN" && password === "12345") {
//             // show the popup message
//             popup.classList.remove("hidden");

//             // redirect to the home page after 3 seconds
//             setTimeout(function () {
//                 window.location.href = "Home.html";
//             }, 3000);
//         } else {
//             // show the error message
//             errorPopup.classList.remove("hidden");
//         }
//     }
// });
const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("login-btn");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");

loginBtn.addEventListener("click", function (event) {
    event.preventDefault(); // prevent the form from submitting

    // get the username and password input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // check if the username and password are empty
    if (username === "" || password === "") {
        popupText.textContent = "Please fill in fields.";
        popup.classList.remove("hidden");
        setTimeout(function () {
            location.reload();
        }, 1000);
        return;
    }

    // check if the username and password are correct
    if (username === "ARSLAN" && password === "12345") {
        popupText.textContent = "Login successful!";
        popup.classList.remove("hidden");


        // redirect to the home page after 3 seconds
        setTimeout(function () {
            window.location.href = "Home.html";
        }, 3000);
    } else {
        popupText.textContent = "Please enter the correct username and password.\n Username:ARSLAN\nPassword:12345";
        popup.classList.remove("hidden");

        // refresh the login page after 3 seconds
        setTimeout(function () {
            location.reload();
        }, 3000);
    }
});




