

// Date Module in javascript

// Date object

let date = new Date();
console.log(date); // Current date and time


console.log(date.getFullYear()); // Current year
console.log(date.getMonth()); // Current month (0-11, where 0 is January
console.log(date.getDate()); // Current day of the month (1-31)
console.log(date.getDay()); // Current day of the week (0-6, where 0 is Sunday)


let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



let myData = ()=>{
    let date = new Date();
    
    console.log(`${date.getDate()} / ${month[date.getMonth()]} / ${date.getFullYear()}`);
}

myData(); // Outputs current date in DD/MM/YYYY format



// time

let time = new Date();
console.log(time.getHours()); // Current hour (0-23)

console.log(time.getMinutes()); // Current minutes (0-59)

console.log(time.getSeconds()); // Current seconds (0-59)

console.log(time.getMilliseconds()); // Current milliseconds (0-999)

// Function to display current time in HH:MM:SS format
// Using modulo operator to convert 24-hour format to 12-hour format

let myTime = ()=>{
    let time = new Date();
    console.log(`${time.getHours()%12} : ${time.getMinutes()} : ${time.getSeconds()}`); // Outputs current time in HH:MM:SS format
}

myTime();