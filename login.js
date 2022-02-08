var loginemail = document.getElementById("loginemail");
var loginpassword = document.getElementById("loginpassword");
var icopasslogin = document.getElementById("icopasslogin")

var spanEmaillogin = document.getElementById("spanEmaillogin");
var spanPasswordlogin = document.getElementById("spanPasswordlogin");

var btnlogin = document.getElementById("btnlogin");

btnlogin.addEventListener('click', function (e) {
    e.preventDefault()

    validateLogin();
    validateLogin2();

    if (loginemail.value == getCookie("Email") && loginpassword.value == getCookie("password")) {
        window.location.replace("exam.html")
    }

})

function validateLogin() {
    if (loginemail.value === "") {
        spanEmaillogin.innerHTML = "Email is required"
        loginemail.style.borderColor = "red"
    }

    else if (loginemail.value !== getCookie("Email")) {
        spanEmaillogin.innerHTML = "Email should be right with register"
        loginemail.style.borderColor = "red"
    }
    else {
        spanEmaillogin.innerHTML = ""
        loginemail.style.borderColor = "black"
    }
}

function validateLogin2() {
    if (loginpassword.value === "") {
        spanPasswordlogin.innerHTML = "Password is required"
        loginpassword.style.borderColor = "red"
    }

    else if (loginpassword.value !== getCookie("password")) {
        spanPasswordlogin.innerHTML = "Password should be right with register"
        loginpassword.style.borderColor = "red"
    }
    else {
        spanPasswordlogin.innerHTML = ""
        loginpassword.style.borderColor = "black"
    }
}




icopasslogin.addEventListener('click', function () {
    if (loginpassword.type == "password") {
        loginpassword.type = "text"
        icopasslogin.classList.replace("fa-eye-slash", "fa-eye")
    }
    else {
        loginpassword.type = "password";
        icopasslogin.classList.replace("fa-eye", "fa-eye-slash")
    }
});
