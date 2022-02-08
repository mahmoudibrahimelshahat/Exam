function setCookie(key, value, date) {
    var date = new Date(date);
    document.cookie = key + "=" + value + "; expires = " + date
}
function getCookie(key) {
    var date = document.cookie;
    var res = "not found";
    var arr = date.split("; ");
    arr.forEach(function (el) {
        var keyAndValue = el.split("=");
        if (keyAndValue[0] === key) {
            res = keyAndValue[1];
        }
    })
    return res;
}

getCookie()

function deleteCookie(key) {
    setCookie(key, "ghghgh", "1 / 1 / 1990");
}

deleteCookie("testkey")


function checkCookie(key) {
    if (!key) {
        throw "error"
    }

    var message = false;
    var checked = getCookie(key);
    if (checked !== "not found") {
        message = true;
        return message
    }
}

// function allCookie() {
//     var data = document.cookie;
//     var arr = data.split("; ");
//     arr.forEach(function (el) {
//         var keyAndValue = el.split("=");
//         console.log(keyAndValue);
//     })
// }

// allCookie();