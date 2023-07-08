const loginorout = document.getElementById("loginText")

if(window.localStorage.getItem("token")){
    loginorout.appendChild(`<a href="./login.html">Logout</a>`)
}