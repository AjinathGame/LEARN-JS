
let clock = document.getElementById("clock");
let date = document.getElementById("date");

month =["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]


let updateClock = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    clock.innerHTML = `${hours % 12 || 12} :: ${minutes} :: ${seconds}`
    date.innerHTML = `${now.getDate()} ${month[now.getMonth()]} ${now.getFullYear()}`;
}

setInterval(updateClock, 1000);
