


// Objects methods


let person = {
    user_name :'ajinath',
    age : 20,
    education : 'bcs' 

}


// 1


console.log(Object.keys(person))    // this is used to print only keys in object


// 2


console.log(Object.values(person))  // this is used to print only values in object


// 3


console.log(Object.entries(person))  // this is used to print both keys and values in object



// 4


Object.freeze(person)  // this is used to freeze the object we canot change in object


console.log(person);


//  for of


// for of is work only on array


let color = ['red','green','blue','yellow','pink']

for(let i of color)
{
    console.log(i);
}


// for in 


// for in is work only on object


let person1 = {
    user_name :'ajinath',
    age : 20,
    education : 'bcs' 

}

for(let i in person1)
{
    console.log(i);      // this line print only keys on console
    console.log(person1[i]);    //this line print only values on console

}