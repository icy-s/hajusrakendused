const url = "http://localhost:3000/data";
const response = fetch(url);

async function getJsonData() {
    const response = await fetch(url);
    console.log('status', response.status);
    console.log('isOK', response.ok);

    if (response.status == 200) {
    console.log("ok (read: im not ok)");

    } else if (response.status >= 400){
        console.log('error', response.statusText);
    }

    const myJson = await response.json();
    //console.log(myJson.store_name);

    myJson.products.forEach((element) => {
        console.log(element.title);
        console.log(element.name);
    });
}

//getJsonData();


const urlPost = "http://localhost:3000/send";

const data = [[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },]
]

async function sendData(){
    const response = await fetch(urlPost, {
        method: 'POST',
        headers: {"Content-type": 'application/json'},
        body: JSON.stringify(data)
    })

    if (response.ok && response == 200)
    {
        console.log(await response.json())
    } else {
        console.log('error')
    }
}

sendData()