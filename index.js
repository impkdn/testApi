fetch('https://api.publicapis.org/entries')
  .then((response) => response.json())
  .then((data) => displayData(data))
  

let fetchedData;


function displayData(data, total = 4) {
  fetchedData = data;
  console.log(fetchedData)
  let item = '';

  for (let i = 0; i < total; i++) {
    item += `<th>${data.entries[i].API}</th>`;
}
    document.getElementById("item").innerHTML = item;
}

function showAll() {
  displayData(fetchedData, 200)
  console.log()
}

fetch("https://randomuser.me/api/")
.then((response) => response.json())
.then((data) => displayUser(data))

let fetchUser;

function displayUser(data) {
    fetchUser = data;
    console.log(fetchUser.results[0]);
}

