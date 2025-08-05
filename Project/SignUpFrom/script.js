let userName = document.getElementById("userName");
let password = document.getElementById("pass");
let emailadd = document.getElementById("email");
let login = document.getElementById("submit-btn");
let form = document.getElementById("form");
let errorcontainer = document.getElementById("error-container");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let username = userName.value;
    let pass = password.value;
    let email = emailadd.value;
    console.log(username);

    if (username.length <= 4) {
        errorcontainer.style.display = "block"
        errorcontainer.innerText = "user name must be greater than 4 letter"
        errorcontainer.style.color = "red"
    } else if (!email.includes("@")) {
        errorcontainer.style.display = "block"
        errorcontainer.innerText = "enter a valid email"
        errorcontainer.style.color = "red"
    } else if (pass.length <= 4) {
        errorcontainer.style.display = "block"
        errorcontainer.innerText = "password must be greater than 4 letter"
        errorcontainer.style.color = "red"
    } else {
        errorcontainer.style.display = "block"
        errorcontainer.innerText = "sign In Successfully"
        errorcontainer.style.color = "white"
    }
})