import {
    drawCards,
    filterByCategories,
    drawCheckboxs,
    filterCards,
    filterByName,
    pastEvents,
    getDataJSON
} from "./functions.js";
let dataJSON = await getDataJSON();

// Captura del container para dibujar las cards
let container = document.getElementById("containerPastCards");
let cardsPastEvents = pastEvents(dataJSON, dataJSON.currentDate)
drawCards(cardsPastEvents, container)
// /Agrego clase a los elementos img past
backgroundWhiteAndBlack();

let containerChks = document.getElementById("containerChecks")
drawCheckboxs(filterByCategories(dataJSON.events), containerChks)

let checkBoxsOptions = document.querySelectorAll('input[class="form-check-input"]')
let input = document.getElementById("inputSearchs")
let searchContainer = document.getElementById("searchContainer")
let divChecks = document.querySelector(".form-check"); // Captura del div que contiene los input para escuchar su cambio

divChecks.addEventListener("change", (e) => {
    let firstFilter = filterByName(cardsPastEvents, input.value);
    let secondFilter = filterCards(firstFilter, checkBoxsOptions);
    drawCards(secondFilter, container);
    backgroundWhiteAndBlack();

});

// /Captura del inputSearch
searchContainer.addEventListener("input", (e) => {
    let firstFilter = filterByName(cardsPastEvents, input.value);
    let secondFilter = filterCards(firstFilter, checkBoxsOptions);
    drawCards(secondFilter, container);
    backgroundWhiteAndBlack();
})
// Funcion que colorea las cards en blanco y negro
function backgroundWhiteAndBlack() {
    let imgPast = document.querySelectorAll(".imgCards");
    imgPast.forEach((img) => img.classList.add("imgPast"));
}
