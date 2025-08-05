// API : 

async function loadData() {

    let responce = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await responce.json();
    console.log(data);

}

loadData();

async function postData() {
    try {

        let responce = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await responce.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

