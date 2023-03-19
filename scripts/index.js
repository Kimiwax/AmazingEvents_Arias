import {drawCards, filterByCategories, drawCheckboxs,filterCards, filterByName,getDataJSON} from "./functions.js";
let dataJSON = await getDataJSON();
let dataJSONEvents = dataJSON.events;
// Captura del container para dibujar las cards
let container = document.getElementById("containerCards");
drawCards(dataJSONEvents, container);

let containerChks = document.getElementById("containerChecks")
drawCheckboxs(filterByCategories(dataJSONEvents), containerChks)
let checkBoxsOptions = document.querySelectorAll('input[class="form-check-input"]')
let search = document.getElementById("searchContainer")
let input = document.getElementById("inputSearchs")
// Captura del div que contiene los input para escuchar su cambio

let divChecks = document.querySelector(".form-check");
divChecks.addEventListener("change", (e) => {
    let firstFilter = filterByName(dataJSONEvents, input.value);
    let secondFilter = filterCards(firstFilter, checkBoxsOptions);
    drawCards(secondFilter, container);
});

///Captura del inputSearch 

search.addEventListener("input",(e)=>{
    let firstFilter = filterByName(dataJSON.events, input.value);
    let secondFilter = filterCards(firstFilter, checkBoxsOptions);
    drawCards(secondFilter, container);
})

