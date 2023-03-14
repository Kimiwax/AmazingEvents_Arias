import data from "./amazing.js";
import {drawCards} from "./functions.js";
// Captura del container para dibujar las cards
let container = document.getElementById("containerCards");
drawCards(data.events, container);

let containerChks = document.getElementById("containerChecks")

categorys(data.events)
function categorys(arr){
    const result = [];
    arr.forEach((itemArr)=>{
        if(!result.includes(itemArr.category)){
            result.push(itemArr.category);
        }
    })
    return result
}

function drawCheckbox(arr, container){
    let fragment = document.createDocumentFragment();
    arr.forEach(element => {
        let divCheck = document.createElement("div");
        divCheck.classList = "form-check form-check-inline m-3"
        divCheck.innerHTML = `<input class="form-check-input" type="checkbox" id="${element.toString().toLowerCase()}" value=${element}><label class="form-check-label" for="${element.toString().toLowerCase()}">${element}</label>`
        fragment.appendChild(divCheck);
    });
    container.appendChild(fragment)
}


drawCheckbox(categorys(data.events), containerChks)

//let checkBoxsOptions = document.querySelectorAll('input[class="form-check-input"]')
//console.log(checkBoxsOptions);

function filterCards(arr){
    let checkBoxsOptions = document.querySelectorAll('input[class="form-check-input"]')
    let checkboxArr = Array.from(checkBoxsOptions);
    let checkboxChecked = checkboxArr.filter(chkEl => chkEl.checked)
    let checkboxMaped = checkboxChecked.map(chkEl => chkEl.id)
    if(checkboxMaped.length > 0){
        let arrFiltered = arr.filter(item => checkboxMaped.includes(item.category.toLowerCase()))
        return arrFiltered
    }
    return arr
}

// Captura del div que contiene los input para escuchar su cambio
let divChecks = document.querySelector(".form-check");
divChecks.addEventListener("click", () => {
document.getElementById("inputSearchs").value = "";

    let arrFil = filterCards(data.events)
    drawCards(arrFil, container)


    /*let prueba = test2(checkedCategories);
    filterCards(prueba);*/
});

let search = document.getElementById("searchContainer")
search.addEventListener("keyup",(e)=>{
    let arrFil = filterCards(data.events)
    drawCards(filterByName(arrFil, e.target.value), container)
})

function filterByName(arr, word){
const wordLowerCase = word.toLowerCase();
const filteredObj = arr.filter(arrEl =>{
    return (arrEl.name.toLowerCase().includes(wordLowerCase))
})
return filteredObj
}