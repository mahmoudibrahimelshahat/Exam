var fname = document.getElementById("Fname");
var lname = document.getElementById("Lname");
var email = document.getElementById("Email");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var btn = document.getElementById("btn");

var spanFname = document.getElementById("spanFname");
var spanLname = document.getElementById("spanLname");
var spanEmail = document.getElementById("spanEmail");
var spanPassword1 = document.getElementById("spanPassword1");
var spanPassword2 = document.getElementById("spanPassword2");
var icopass1 = document.getElementById("icopass1");
var icopass2 = document.getElementById("icopass2");


var regName = /^[a-zA-Z]+$/;
var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
var regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;



btn.addEventListener("click", function (e) {
    e.preventDefault();

    validateFname();
    validateLname();
    validateEmail();
    validatePassword1();
    validatePassword2();

    if (regName.test(lname.value) && regName.test(fname.value)
        && password2.value == password1.value
        && regEmail.test(email.value)
        && regPassword.test(password1.value)) {
        var result = [];
        result.push(fname.value, lname.value, email.value, password1.value)
        console.log(result)
        window.location.replace("login.html")
        setCookie("firstName", fname.value, "3/3/2024")
        setCookie("lastName", lname.value, "3/3/2024")
        setCookie("Email", email.value, "3/3/2024")
        setCookie("password", password1.value, "3/3/2024")
    }

})


function validateFname() {
    console.log(fname.value)
    if (fname.value === "") {
        spanFname.innerHTML = "FirstName is required"
        fname.style.borderColor = "red"
    }

    else if (!regName.test(fname.value)) {
        spanFname.innerHTML = "FirstName shouldn't be contain Number"
        fname.style.borderColor = "red"

    }
    else {
        spanFname.innerHTML = ""
        fname.style.borderColor = "black"

    }
}

function validateLname() {
    if (lname.value === "") {
        spanLname.innerHTML = "SecondName is required"
        lname.style.borderColor = "red"

    }

    else if (!regName.test(lname.value)) {
        spanLname.innerHTML = "SecondName shouldn't be contain Number"
        lname.style.borderColor = "red"

    }
    else {
        spanLname.innerHTML = ""
        lname.style.borderColor = "black"

    }

}

function validateEmail() {
    if (email.value === "") {
        spanEmail.innerHTML = "Email is required"
        email.style.borderColor = "red"
    }

    else if (!regEmail.test(email.value)) {
        spanEmail.innerHTML = "Email should be valide"
        email.style.borderColor = "red"

    }
    else {
        spanEmail.innerHTML = ""
        email.style.borderColor = "black"

    }
}

function validatePassword1() {
    if (password1.value === "") {
        spanPassword1.innerHTML = "Password is required"
        password1.style.borderColor = "red"

    }

    else if (!regPassword.test(password1.value)) {
        spanPassword1.innerHTML = "Password should be valide"
        password1.style.borderColor = "red"

    }
    else {
        spanPassword1.innerHTML = ""
        password1.style.borderColor = "black"
    }
}

function validatePassword2() {
    if (password2.value === "") {
        spanPassword2.innerHTML = "Password is required"
        password2.style.borderColor = "red"

    }
    else if (password2.value !== password1.value) {
        spanPassword2.innerHTML = "Password should be valide with above"
        password2.style.borderColor = "red"

    }
    else {
        spanPassword2.innerHTML = ""
        password2.style.borderColor = "black"

    }

}

icopass1.addEventListener('click', function () {
    if (password1.type == "password") {
        password1.type = "text"
        icopass1.classList.replace("fa-eye-slash", "fa-eye")
    }
    else {
        password1.type = "password";
        icopass1.classList.replace("fa-eye", "fa-eye-slash")
    }
});



icopass2.addEventListener('click', function () {
    if (password2.type == "password") {
        password2.type = "text"
        icopass2.classList.replace("fa-eye-slash", "fa-eye")
    }
    else {
        password2.type = "password";
        icopass2.classList.replace("fa-eye", "fa-eye-slash")
    }
});


