
// Objects in javascript 

// Object is collection of key value pair enclosed in {} brakets


let userName = {
    name : "ajinath",
    surname : "game",
    age : 22,


}

console.log(userName);
console.log(userName.name);
console.log(userName.surname);
console.log(userName.age);




let userinfo = {
    name : "ajinath",
    surname : "game",
    age : 22,
}


console.log(userinfo);
console.log(userinfo.name);
console.log(userinfo.surname);
console.log(userinfo.age);





let instaUser = {
    name : "ajinath",
    surname : "game",
    following :[{
        name : "ajinath",
        surname : "game",
        age : 22,
    },
    {
        name : "ajinath",
        surname : "game",
        age : 22,
        },
    {
        name : "ajinath",
        surname : "game",
        age : 22,
    }],

    follwers :[{
        name : "ajinath",
        surname : "game",
        age : 22,
    },  
    {
        name : "ajinath",
        surname : "game",
        age : 22,
    
    },
    {
        name : "ajinath",
        surname : "game",
        age : 22,
    }]


}


console.log(instaUser);
console.log(instaUser.name);
console.log(instaUser.surname);
console.log(instaUser.following);
console.log(instaUser.follwers);


for(let i = 0 ; i< instaUser.following.length ; i++)
{
    console.log(instaUser.following[i].name);
    console.log(instaUser.following[i].surname);
    console.log(instaUser.following[i].age);

}


