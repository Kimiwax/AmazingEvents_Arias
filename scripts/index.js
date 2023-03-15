import data from "./amazing.js";
import {drawCards, filterByCategories, drawCheckboxs,filterCards, filterByName} from "./functions.js";
// Captura del container para dibujar las cards
let container = document.getElementById("containerCards");
drawCards(data.events, container);

let containerChks = document.getElementById("containerChecks")

drawCheckboxs(filterByCategories(data.events), containerChks)
let checkBoxsOptions = document.querySelectorAll('input[class="form-check-input"]')
let search = document.getElementById("searchContainer")
let input = document.getElementById("inputSearchs")
// Captura del div que contiene los input para escuchar su cambio


let divChecks = document.querySelector(".form-check");
divChecks.addEventListener("change", (e) => {
    let primerFiltro = filterByName(data.events, input.value);
    let segundoFiltro = filterCards(primerFiltro, checkBoxsOptions);
    drawCards(segundoFiltro, container);
});

///Captura del inputSearch 

search.addEventListener("input",(e)=>{
    console.log(input.value);
    let firstFilter = filterByName(data.events, input.value);
    let secondFilter = filterCards(firstFilter, checkBoxsOptions);
    drawCards(secondFilter, container);
})

