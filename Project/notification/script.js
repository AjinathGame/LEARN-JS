let input_text = document.getElementById("input-text");
let btn = document.getElementById("btn");
let notify = document.getElementById("notification-box");



let res = (notification_text="default",time=4000)=>{
    notify.innerText = notification_text;
    notify.style.top = "10px"

    setTimeout(()=>{
        notify.style.top = "-40%"


    },time)
    
}

btn.addEventListener("click",()=>{
    let text = input_text.value;
    if (text == "") {
        res("Please enter a notification message", 3000);
        
        
    } else {
        res(text);
        input_text.value = ""; 
    }
    
})