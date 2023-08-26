// 1) Fazer um array de filmes e listar cada elemento com a formatação = "Filme 1 : {elemento}"

const filmes = {
    vingadores : 25,
    Avatar : 50,
    Gladiador : 60,
    Contatos3º : 90,
}

const filmesEntries = Object.entries(filmes);
document.querySelector("#objectEntries").innerHTML = filmesEntries;

var filmesArray = ["Vingadores","Avatar", "Gladiador", "Contatos3º", "Apocalipse Zumbi"];
document.querySelector("#objectArray").innerHTML = filmesArray;

var filmesMap = ["Vingadores","Avatar", "Gladiador", "Contatos3º", "Apocalipse Zumbi", "Alien x Predador"];
var filmesMapLista = filmesMap.map((filmesMap) => "<li>"+filmesMap+"</li>");
document.getElementById("map").innerHTML = `<ul> ${filmesMapLista} </ul>`;

//eram function

//var filmesMapLista = filmesMap.map((filmesMap) => `Filme`);