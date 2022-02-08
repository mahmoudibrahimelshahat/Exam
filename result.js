var res = document.getElementById('theRes');
var inside = document.getElementById('inside');

inside.innerHTML = `Hello ${getCookie("firstName")} ${getCookie("lastName")} your grade is ${localStorage.getItem("degree")}`
res.append(inside)

function logout() {
    deleteCookie("firstName");
    deleteCookie("lastName");
    deleteCookie("Email");
    deleteCookie("password");

    window.location.replace("index.html")

}