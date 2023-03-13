import data from "./amazing.js";
import {drawCards, upcomingEvents, filterCards,test2} from "./functions.js";

let container = document.getElementById("containerUpcomingCards");
drawCards(upcomingEvents(data, data.currentDate), container)

let optionFood = document.getElementById("foodFair");
let optionMuseum = document.getElementById("museum");
let optionCostumeP = document.getElementById("costumeParty");
let optionMusic = document.getElementById("musicConcert");
let optionRace = document.getElementById("race");
let optionBookExchange = document.getElementById("bookExchange");
let optionCinema = document.getElementById("cinema");
// /Captura de las cards que comparten clase
let containersFood = document.querySelectorAll(".classFoodFair");
let containersMuseum = document.querySelectorAll(".classMuseum");
let containersCostumeP = document.querySelectorAll(".classCostumeParty");
let containersMusic = document.querySelectorAll(".classMusicConcert");
let containersRace = document.querySelectorAll(".classRace");
let containersBookExchange = document.querySelectorAll(".classBookExchange");
let containersCinema = document.querySelectorAll(".classCinema");
// /Array de objetos que contiene los checkboxs y su card vinculada por categoria
let checkedCategories = [
    {
        checkbox: optionFood,
        category: containersFood
    },
    {
        checkbox: optionMuseum,
        category: containersMuseum
    },
    {
        checkbox: optionCostumeP,
        category: containersCostumeP
    },
    {
        checkbox: optionMusic,
        category: containersMusic
    }, {
        checkbox: optionRace,
        category: containersRace
    }, {
        checkbox: optionBookExchange,
        category: containersBookExchange
    }, {
        checkbox: optionCinema,
        category: containersCinema
    },
];
// Captura del div que contiene los input para escuchar su cambio
let divChecks = document.querySelector(".form-check");
divChecks.addEventListener("change", (el) => {
    console.log(el.target.value);
    let prueba = test2(checkedCategories);
    filterCards(prueba);
});
