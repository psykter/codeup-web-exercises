fetch("https://pokeapi.co/api/v2/pokemon/dragonite").then(response => response.json()).then(data => {
    console.log(data);
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");

    img.src = data.sprites.other.home.front_default;
    img.style.height = "200px";
    h2.innerText = data.name;
    div.appendChild(img);
    div.appendChild(h2);
    document.querySelector("#div-go-here").appendChild(div);
}).then(() => fetch("https://pokeapi.co/api/v2/pokemon/nidoking")).then(response => response.json()).then(data => {
    console.log(data);
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");

    img.src = data.sprites.other.home.front_default;
    img.style.height = "200px";
    h2.innerText = data.name;
    div.appendChild(img);
    div.appendChild(h2);
    document.querySelector("#div-go-here").appendChild(div);
}).then(() => fetch("https://pokeapi.co/api/v2/pokemon/geodude")).then(response => response.json()).then(data => {
    console.log(data);
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");

    img.src = data.sprites.other.home.front_default;
    img.style.height = "200px";
    h2.innerText = data.name;
    div.appendChild(img);
    div.appendChild(h2);
    document.querySelector("#div-go-here").appendChild(div);
}).catch(() => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");

    img.src = "images/you-were-close.webp";
    img.style.height = "200px";
    h2.innerText = "OOPS";
    div.appendChild(img);
    div.appendChild(h2);
    document.querySelector("#div-go-here").appendChild(div);
});