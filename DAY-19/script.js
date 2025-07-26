

// mouse events

let res = document.getElementById('container')

// 1
res.addEventListener('mouseenter', function() {
    container.style.backgroundColor = 'white';
    
});


//2


res.addEventListener('mouseleave', function() {
    container.style.backgroundColor = 'red';
});

// 3

res.addEventListener('mousemove', function(event) {
    container.style.backgroundColor = 'blue';
});




// Ex


let res2 = document.getElementById('box')
let box = document.getElementById('child');

res2.addEventListener('mousemove', function(e) {
    box.style.top = `${e.clientY/2}px`
    box.style.left = `${e.clientX/5}px`;
});

