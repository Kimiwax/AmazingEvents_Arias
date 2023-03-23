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
// /Funcion que dibuja la primer tabla
function drawRowFirstTable(arr, container) {
    let fragment = document.createDocumentFragment();
    let tr = document.createElement("tr");
    tr.classList = "table-secondary";
    arr.forEach(element => {
        let td = document.createElement("td")
        td.classList = "col-4 fw-bold text-center"
        td.innerText = element
        tr.appendChild(td)
    });
    fragment.appendChild(tr);
    container.appendChild(fragment);
}
// Funcion que dibuja la tabla 2 y 3
function drawRowsTables(arr, container) {
    let fragment = document.createDocumentFragment();
    arr.forEach(element => {
        let cont = document.createElement("tr");
        cont.classList = "table-secondary";
        cont.innerHTML = `  <td class=" col-4 text-center">${
            element.category
        }</td>
                            <td class="col-4 text-center">$${
            element.revenues.toLocaleString()
        }</td>
                            <td class="col-4 text-center">${
            element.percentageAttendace
        }%</td>`;
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
// Funcion que obtiene la informacion, la parsea y devuelve el objeto
async function getDataJSON() {
    let data = await fetch("/data/amazing.json").then((response) => response.json()).then((data) => {
        return data;
    }).catch(err => console.log(err));
    return data;
}
// Funcion que recibe un array de objetos y le agrega la propiedad porcentaje
function eventsAddPercentage(arrData) {
    const newArr = arrData.map(elementArr => {
        elementArr.percentage = elementArr.hasOwnProperty("assistance") ? (elementArr.assistance / elementArr.capacity * 100).toFixed(1) : (elementArr.estimate / elementArr.capacity * 100).toFixed(1)
        return elementArr
    })
    return newArr
}
// Funcion que recibe un array de informacion y un array de categorias, este devuelve un array con objetos agrupados segun categoria y luego los itera en un nuevo array que devuelve un array de objetos con su categoria, las ganancias referidas a dicha categoria y el porcentaje de asistencia
function eventsStats(arrData, arrCat) {
    const arrAux = [];
    const arrExport = [];
    let capacity = 0;
    let attendance = 0;
    let revenuesEl = 0;

    arrCat.forEach(elCategory => {
        const result = arrData.filter(elArrData => elArrData.category == elCategory)
        if (result.length > 0) {
            arrAux.push({category: elCategory, events: result})
        }
    })
    arrAux.forEach(arrEl => {
        arrEl.events.forEach(arrEventElement => {
            capacity += arrEventElement.capacity;
            attendance += arrEventElement.assistance ? arrEventElement.assistance : arrEventElement.estimate;
            revenuesEl += (arrEventElement.assistance ? arrEventElement.assistance : arrEventElement.estimate) * arrEventElement.price;
        })
        arrExport.push({
            category: arrEl.category,
            revenues: revenuesEl,
            percentageAttendace: (
                (attendance / capacity) * 100
            ).toFixed(1)
        })
        capacity = 0;
        attendance = 0;
        revenuesEl = 0;
        arrExport.sort((a, b) => {
            return b.percentageAttendace - a.percentageAttendace
        })
    })
    return arrExport
}
// funcion que devuelve un array con los 3 nombres de los eventos ya filtrados para la primer tabla
function arrFirstTable(arr) {
    let eventHighestAttendance = arr.sort((a, b) => b.percentage - a.percentage)[0].name;
    let eventLowestAttendance = arr.sort((a, b) => a.percentage - b.percentage)[0].name;
    let eventLargerCapacity = arr.sort((a, b) => b.capacity - a.capacity)[0].name
    return [eventHighestAttendance, eventLowestAttendance, eventLargerCapacity]
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
    eventsAddPercentage,
    eventsStats,
    arrFirstTable,
    drawRowFirstTable,
    drawRowsTables
};
