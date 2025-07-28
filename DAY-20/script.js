

//  setTimeout

setTimeout(() => {
    console.log("Hello World");
}, 2000); // 2 seconds





// setInterval

setInterval(() => {
    console.log("Hello World");
}, 2000); // 2 seconds



// clearInterval

let intervalId = setInterval(() => {
    console.log("Hello World");
}, 2000); // 2 seconds

setTimeout(() => {
    clearInterval(intervalId);
}, 5000); // 5 seconds