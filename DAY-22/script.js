let person={
    "name":"aditya",
    "age":18
}


let res=JSON.stringify(person);
console.log(res);

// little differnce in object and JSON

// if we want in object form

let res2=JSON.parse(res);
console.log(res2);

//Local storage=storage provided by browser 
//average capacity is 5mb

localStorage.setItem("user_name","aditya")

localStorage.setItem("user_age","18")

let obj={
    "name":"aditya",
    "age":18
}

localStorage.setItem("user_obj",JSON.stringify(obj))

//all above for save

//now for read
let res3=localStorage.getItem("user_name")
console.log(res3);

//now for remove iteam

localStorage.removeItem("user_name")
//

localStorage.setItem("my_thought","shout your mouth")
localStorage.removeItem("my_thought")

//clear  for clear

localStorage.clear()

//