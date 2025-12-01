const url = "https://jsonplaceholder.typicode.com/posts/"
const urlPatch = "https://jsonplaceholder.typicode.com/posts/1"

async function getData(){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    // get DOM, get element by id
    const divData = document.getElementById("jsondata")
    //divData.innerText = "Hello";
    data.forEach(post => {
        divData.innerHTML += post.title + "</br>";
    })
}

getData()

const title = document.getElementById('title')
const body = document.getElementById('body')
const userId = document.getElementById('userId')
const btn = document.getElementById('btnSend')

console.log('btn', btn);

const json = {
    title: '',
    body: '',
    userId: -1
}

btn.addEventListener('click', (event) => {
    json.title = title.value
    json.body = body.value
    json.userId = userId.value

    console.log('------')

    getOptions()
})




async function sendPost(_body){ // REST analog of SQL INSERT (create new data)

    await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(_body)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}





async function sendPatch(_body){ // REST analog of SQL UPDATE (modify data)

    await fetch(urlPatch, {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(_body)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}





async function getOptions(){

    await fetch(url, {
        method: "OPTIONS",
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}





async function fetchPostsAsync(){

    try
    {
        await fetch(url, {
        method: "OPTIONS",
        headers: {
            'Content-type': 'application/json'
    },

    catch(Exception, e)
    {
       console.log('error')
    },

    try
    {
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
    },

    catch(Exception, e)
    {
       console.log('error')
    }
})}