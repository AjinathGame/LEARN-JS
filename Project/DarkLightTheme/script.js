
let btn = document.getElementById("btn");

let DarkLight = true;

btn.addEventListener("click", function () {
    if (DarkLight) {
        document.body.style.backgroundColor = "black"
        btn.style.color = "white";
        btn.style.backgroundColor = "red";
        DarkLight = false;
    } else {
        document.body.style.backgroundColor = "white"
        btn.style.color = "black";
        btn.style.backgroundColor = "aqua";
        DarkLight = true;
    }
})