// //Funcion que dibuja las cards en base a un array y un container
function drawCards(array, container) {
    let fragment = document.createDocumentFragment();
    if (array.length === 0) {
        container.innerHTML = "";
        let cards = document.createElement("div");
        cards.classList.add("div-es");
        cards.style.width = "46rem";
        cards.style.height = "20rem";
        cards.innerHTML = `<h3 class="display-6 h2 text-center text-secondary m-5 fw-bold text-not">The searched element does not exist</h3>`;
        fragment.appendChild(cards);
        container.appendChild(fragment);
    } else {
        container.innerHTML = "";
        array.forEach((element) => {
            let card = document.createElement("div");
            card.classList.add("col");
            card.style.minWidth = "20rem";
            card.style.maxHeight = "40rem";
            card.innerHTML = `<div class="card shadow-sm h-100">
            <div class="date">
                <span class="day">${
                element.date.slice(8, 10)
            }</span>
                <span class="month">${
                whatMonthIs(element.date.slice(5, 7))
            }</span>
                <span class="year">${
                element.date.slice(0, 4)
            }</span>
            </div>
            <img src="${
                element.image
            }" class="card-img-top imgCards" alt="People in the cinema" />
            <div class="card-body d-flex justify-content-between flex-column">
                <h5 class="card-title text-center fw-bold text-bg-myK">${
                element.name
            }</h5>
                <p class="card-text text-center">${
                element.description
            }</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <a href="/pages/details.html?id=${
                element._id
            }"
                            class="btn btn-sm btn-outline-success btn-circle d-flex align-items-center">More Info</a>
                    </div>
                    <small class="text-muted fw-bold">Price: $${
                element.price
            }</small>
                </div>
            </div>
        </div>
        `;
            fragment.appendChild(card);
        });
        container.appendChild(fragment);
    }
}

function drawCardDetails(array, container) {
    let fragment = document.createDocumentFragment();
    [array].forEach((element) => {
        let card = document.createElement("div");
        card.classList.add("row");
        card.innerHTML = `<div class="col-md-4">
        <img src="${
            element.image
        }" class="w-100 h-100 object-fit-cover img-details" alt="people in cinema">
    </div>
    <div class="col-md-8 px-3">
        <div class="card-body px-3 container-text-details">
            <h2 class="card-title text-center text-dark fw-bold">${
            element.name
        }</h2>
            <p class="card-text"><small class="text-muted d-flex justify-content-end">${
            element.date
        }</small></p>
            <p class="card-text card-text-p text-center mb-4">${
            element.description
        }</p>
            <div class="container">
                <div class="row gx-2 ">
                    <div class="col-md-6 col-12 d-flex flex-column align-items-center container-text-details">
                        <p class="card-text fw-bold"><small class="text-body">Category: ${
            element.category
        }</small></p>
                        <p class="card-text fw-bold"><small class="text-body">Place: ${
            element.place
        }</small></p>
                    </div>
                    <div class="col-md-6 col-12 d-flex flex-column align-items-center container-text-details">
                        <p class="card-text fw-bold"><small class="text-body">Capacity: ${
            element.capacity
        }</small>
                        </p>
                        <p class="card-text fw-bold"><small class="text-body">Estimate: ${
            element.estimate === undefined ? element.assistance : element.estimate
        }</small></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <p class="card-text fw-bold"><small class="text-success-emphasis">Price: $${
            element.price
        }</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}

function filterByCategories(arrData) {
    const result = [];
    arrData.forEach((itemArr) => {
        if (! result.includes(itemArr.category)) {
            result.push(itemArr.category);
        }
    });
    return result;
}


function drawCheckboxs(arrData, container) {
    let fragment = document.createDocumentFragment();
    arrData.forEach((element) => {
        let divCheck = document.createElement("div");
        divCheck.classList = "form-check form-check-inline m-3";
        divCheck.innerHTML = `<input class="form-check-input" type="checkbox" id="${
            element.toString().toLowerCase()
        }" value=${element}><label
        class="form-check-label" for="${
            element.toString().toLowerCase()
        }">${element}</label>`;
        fragment.appendChild(divCheck);
    });
    container.appendChild(fragment);
}

function drawRowTable(arr, container) {
    let fragment = document.createDocumentFragment();
    arr.forEach(element => {
        let cont = document.createElement("td");
        cont.classList = "col-4 text-muted text-center";
        cont.innerHTML = `${
            element.name
        }`;
        fragment.appendChild(cont);
    });
    container.appendChild(fragment);
}

function drawRowTable2(arr, container){
    let fragment = document.createDocumentFragment();
    arr.forEach(element => {
        let cont = document.createElement("tr");
        cont.classList = "table-secondary";
        cont.innerHTML = `  <td class=" col-4 text-center">${element.category}</td>
                            <td class="col-4 text-center">$${element.revenues.toLocaleString()}</td>
                            <td class="col-4 text-center">${element.percentageAttendace}%</td>`;
        fragment.appendChild(cont);
    });
    container.appendChild(fragment);
}

function filterCards(arrData, checkBoxsOptions) {
    let checkboxArr = Array.from(checkBoxsOptions);
    let checkboxChecked = checkboxArr.filter((chkEl) => chkEl.checked);
    let checkboxMaped = checkboxChecked.map((chkEl) => chkEl.id);
    let arrFiltered = arrData.filter((item) => checkboxMaped.includes(item.category.toLowerCase()));
    if (checkboxMaped.length > 0) {
        return arrFiltered;
    }
    return arrData;
}

function filterByName(arrData, letterWord) {
    const wordLowerCase = letterWord.toLowerCase();
    const filteredObj = arrData.filter((arrEl) => {
        return arrEl.name.toLowerCase().includes(wordLowerCase);
    });
    return filteredObj;
}

function pastEvents(arrData, date) {
    let arrAux = [];
    arrAux = arrData.events.filter((dateEvent) => dateEvent.date < date);
    return arrAux;
}

function upcomingEvents(arrData, date) {
    let arrAux = [];
    arrAux = arrData.events.filter((dateEvent) => dateEvent.date > date);
    return arrAux;
}

// /Funcion que evalua la fecha del mes en numeros y devuelve el mes en palabras
function whatMonthIs(month) {
    switch (month) {
        case "01":
            return "Jan";
        case "02":
            return "Feb";
        case "03":
            return "Mar";
        case "04":
            return "Apr";
        case "05":
            return "May";
        case "06":
            return "Jun";
        case "07":
            return "Jul";
        case "08":
            return "Aug";
        case "09":
            return "Sep";
        case "10":
            return "Oct";
        case "11":
            return "Nov";
        case "12":
            return "Dec";
        default:
            return "Nulls";
    }
}

async function getDataJSON() {
    let data = await fetch("/data/amazing.json").then((response) => response.json()).then((data) => {
        return data;
    });
    console.log(data);
    return data;
}

function eventsPercentage(arr) {
    const newArr = arr.map(e => {
        e.percentage = e.hasOwnProperty("assistance") ? (e.assistance / e.capacity * 100).toFixed(1) : (e.estimate / e.capacity * 100).toFixed(1)
        return e
    })

    return newArr
}

function upcomingEventsStats(arrData, arrCat) {
    const arrAux = [];
    const arrFinal = [];
    let capacity = 0;
    let attendance = 0;
    let revenuesEl = 0;

    arrCat.forEach(e => {
        const result = arrData.filter(el => el.category == e)
        if (result.length > 0) {
            arrAux.push({category: e, events: result})
        }
    })

    arrAux.forEach(arrEl => {
        arrEl.events.forEach(arrElemento => {
            capacity += arrElemento.capacity;
            attendance += arrElemento.assistance ? arrElemento.assistance: arrElemento.estimate;
            revenuesEl += (arrElemento.assistance ? arrElemento.assistance: arrElemento.estimate) * arrElemento.price;
        })
        arrFinal.push({
            category: arrEl.category,
            revenues: revenuesEl,
            percentageAttendace: (
                (attendance / capacity) * 100
            ).toFixed(1)
        })
        capacity = 0;
        attendance = 0;
        revenuesEl = 0;
        arrFinal.sort((a, b) => {
            return b.percentageAttendace - a.percentageAttendace
        })
    })


    return arrFinal
}
/*
function upcomingEventsDraw (arrData){
    let arrayAux = [];
    arrData.forEach(elementObj => {
        elementObj.map(e =>{
            return {category: e.category}
        })
    });
}
*/
function test(arr1, arr2, arr3) {
    let arrAux = [];
    arrAux.push(arr1, arr2, arr3)
    return arrAux
}

function highestPercentage(arr) {
    let highePercentage = 0;
    let objReturn = {};

    arr.forEach(arrEl => {
        let currentPercentage = parseFloat(arrEl.percentage);
        if (currentPercentage > highePercentage) {
            highePercentage = currentPercentage;
            objReturn = arrEl;
        }
    })
    return objReturn
}

function lowestPercentage(arr, highPercentage) {
    let lowePercentage = highPercentage.percentage;
    let objReturn = {};

    arr.forEach(arrEl => {
        const currentPercentage = parseFloat(arrEl.percentage);
        console.log(currentPercentage);
        if (currentPercentage < lowePercentage) {
            lowePercentage = currentPercentage;
            objReturn = arrEl;
        }
    })

    return objReturn
}

function eventLargerCapacity(arr) {
    let highC = 0;
    let objReturn = {};

    arr.forEach(arrEl => {
        const currentCapacity = arrEl.capacity;
        if (currentCapacity > highC) {
            highC = currentCapacity;
            objReturn = arrEl;
        }
    })
    return objReturn
}


export {
    drawCards,
    pastEvents,
    upcomingEvents,
    filterCards,
    drawCardDetails,
    filterByCategories,
    drawCheckboxs,
    filterByName,
    getDataJSON,
    eventsPercentage,
    upcomingEventsStats,
    highestPercentage,
    lowestPercentage,
    eventLargerCapacity,
    test,
    drawRowTable,
    drawRowTable2
    // upcomingEventsDraw
};
