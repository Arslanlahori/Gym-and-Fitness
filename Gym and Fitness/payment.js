const inputField = document.getElementById("adr");
const editButton = document.querySelector(".input-wrapper::after");

editButton.addEventListener("click", function () {
    if (inputField.readOnly) {
        inputField.readOnly = false;
        editButton.textContent = "Save";
        inputField.focus();
    } else {
        inputField.readOnly = true;
        editButton.textContent = "Edit";
    }
});

const form = document.getElementById("login-form");
const Fullname = document.getElementById("firstname");
const Email = document.getElementById("email");
const Address = document.getElementById("address");
const City = document.getElementById("city");
const State = document.getElementById("state");
const Zip = document.getElementById("zip");
const Cardname = document.getElementById("cardname");
const Cardnumber = document.getElementById("cardnumber");
const ExpMonth = document.getElementById("expmonth");
const ExpYear = document.getElementById("expyear");
const CVV = document.getElementById("cvv");
const requiredFields = [Fullname, Email, Address, City, State, Zip, Cardname, Cardnumber, ExpMonth, ExpYear, CVV];

form.addEventListener("submit", (event) => {
    let allFieldsFilled = true;
    for (const field of requiredFields) {
        if (field.value.trim() === "") {
            allFieldsFilled = false;
            break;
        }
    }

    if (!allFieldsFilled) {
        event.preventDefault();
        alert("Please fill in all fields");
    } else {

        window.location.href = "Home.html";
    }

}
);


