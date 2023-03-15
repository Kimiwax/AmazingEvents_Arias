import data from "./amazing.js";
import {drawCards, filterByCategories, drawCheckboxs,filterCards, filterByName, upcomingEvents} from "./functions.js";
// Captura del container para dibujar las cards
let container = document.getElementById("containerUpcomingCards");
let cardsUpcomingEvents = upcomingEvents(data, data.currentDate)
drawCards(cardsUpcomingEvents, container)

let containerChks = document.getElementById("containerChecks")
drawCheckboxs(filterByCategories(data.events), containerChks)

let checkBoxsOptions = document.querySelectorAll('input[class="form-check-input"]')
let input = document.getElementById("inputSearchs")
let searchContainer = document.getElementById("searchContainer")
let divChecks = document.querySelector(".form-check");// Captura del div que contiene los input para escuchar su cambio

divChecks.addEventListener("change", (e) => {
    let firstFilter = filterByName(cardsUpcomingEvents, input.value);
    let secondFilter = filterCards(firstFilter, checkBoxsOptions);
    drawCards(secondFilter, container);

});

///Captura del inputSearch 

searchContainer.addEventListener("input",(e)=>{
    let firstFilter = filterByName(cardsUpcomingEvents, input.value);
    let secondFilter = filterCards(firstFilter, checkBoxsOptions);
    drawCards(secondFilter, container);
})
