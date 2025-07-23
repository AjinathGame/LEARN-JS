

// Types of function 



// 1  anonimas function 
// anonimas function means function without name


let sum = function(a,b){
      console.log(a+b)
}

sum(10,20)



let new1 = function(){
     return("hiiii")
}

let res = new1()

console.log(res)



// 2 arrow function 

let ab = ()=>{
    console.log("helloooo")
}


ab()

let muls = ()=>{
    console.log(10*20)
}

// 3 higher order function 

// function recived another function is called as higher order function

let sums = (a,b)=>{
       console.log(a+b)

}

let sub = (a,b)=>{
    console.log(a-b)
}

let mul = (a,b)=>{
    console.log(a*b)
}

let div = (a,b)=>{
    console.log(a/b)
}



let calculator = (sum,sub,mul,div)=>{
    sum(10,20)
    sub(10,20)
    mul(10,20)
    div(10,20)

}


calculator(sums,sub,mul,div)


let name = ()=>{
    console.log('ajinath')
}


let info = (func)=>{
     console.log('hiii')
     func()
}

info(name)      // this is call by function

// call by function means function pass another function is called as call by function