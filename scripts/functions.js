function drawCards(array, container) {
  let fragment = document.createDocumentFragment();

  array.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("col");
    card.style.width = "25rem";
    card.innerHTML = `
      <div class="card shadow-sm h-100">
      <div class="date"><span class="day">${element.date.slice(8, 10)}</span><span class="month">${whatMonthIs(
        element.date.slice(5, 7)
      )}</span><span class="year">${element.date.slice(0, 4)}</span></div>
          <img src="${
            element.image
          }" class="card-img-top imgCards" alt="People in the cinema">
          <div class="card-body d-flex justify-content-between flex-column">
              <h5 class="card-title text-center fw-bold text-bg-myK">${
                element.name
              }</h5>
              <p class="card-text text-center">${element.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                      <a href="/pages/details.html" class="btn btn-sm btn-outline-success btn-circle d-flex align-items-center">More
                          Info</a>
                  </div>
                  <small class="text-muted fw-bold">Price: $${
                    element.price
                  }</small>
              </div>
          </div>
      </div>`;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

function pastEvents(arrData, date){
  let arrAux  = [];
  arrAux = arrData.events.filter(dateEvent => dateEvent.date < date);
  return arrAux
}

///Funcion que evalua la fecha del mes en numeros y devuelve el mes en palabras
function whatMonthIs(month) {
  switch (month) {
    case "01":
      return "January";
    case "02":
      return "February";
    case "03":
      return "March";
    case "04":
      return "April";
    case "05":
      return "May";
    case "06":
      return "June";
    case "07":
      return "July";
    case "08":
      return "August";
    case "09":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
      default:
        return "Nulls"
  }
}

export { drawCards, pastEvents };
