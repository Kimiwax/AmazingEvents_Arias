import data from "./amazing.js";
import {drawCards, filterByCategories, drawCheckboxs,filterCards, filterByName, pastEvents} from "./functions.js";
// Captura del container para dibujar las cards
let container = document.getElementById("containerPastCards");
let cardsPastEvents = pastEvents(data, data.currentDate)
drawCards(cardsPastEvents, container)
///Agrego clase a los elementos img past
backgroundWhiteAndBlack();

let containerChks = document.getElementById("containerChecks")
drawCheckboxs(filterByCategories(data.events), containerChks)

let checkBoxsOptions = document.querySelectorAll('input[class="form-check-input"]')
let input = document.getElementById("inputSearchs")
let searchContainer = document.getElementById("searchContainer")
let divChecks = document.querySelector(".form-check");// Captura del div que contiene los input para escuchar su cambio

divChecks.addEventListener("change", (e) => {
    let firstFilter = filterByName(cardsPastEvents, input.value);
    let secondFilter = filterCards(firstFilter, checkBoxsOptions);
    drawCards(secondFilter, container);
    backgroundWhiteAndBlack();

});

///Captura del inputSearch 

searchContainer.addEventListener("input",(e)=>{
    let firstFilter = filterByName(cardsPastEvents, input.value);
    let secondFilter = filterCards(firstFilter, checkBoxsOptions);
    drawCards(secondFilter, container);
    backgroundWhiteAndBlack();
})


function backgroundWhiteAndBlack (){
    let imgPast = document.querySelectorAll(".imgCards");
imgPast.forEach((img) => img.classList.add("imgPast"));
}
