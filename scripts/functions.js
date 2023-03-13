// //Funcion que dibuja las cards en base a un array y un container
function drawCards(array, container) {
  let fragment = document.createDocumentFragment();

  array.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("col");
    card.classList.add(`${classMapper(element.category)}`);
    card.style.width = "25rem";
    card.innerHTML = `
      <div class="card shadow-sm h-100">
      <div class="date"><span class="day">${element.date.slice(
        8,
        10
      )}</span><span class="month">${whatMonthIs(
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
                      <a href="/pages/details.html?id=${element._id}" class="btn btn-sm btn-outline-success btn-circle d-flex align-items-center">More
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
///Funcion que verifica un array de checkbox si estan en true o false y en base a eso las habilita o deshabilita de la vista en la pagina web
function filterCards(arr) {
  arr.forEach((arrEl) => {
    if (arrEl.non !== undefined) {
      if (Object.keys(arrEl.non).length == 7) {
        arrEl.non.forEach((el) => {
          el.category.forEach((i) => {
            i.setAttribute("style", "display:block; width:25rem;");
          });
        });
      } else {
        arrEl.non.forEach((el) => {
          el.category.forEach((i) => {
            i.setAttribute("style", "display:none; width:25rem;");
          });
        });
      }
    } else if (arrEl.si !== undefined) {
      arrEl.si.forEach((el) => {
        el.category.forEach((i) => {
          i.setAttribute("style", "display:block; width:25rem;");
        });
      });
    }
  });
}
// Funcion que crea un array de checkbox en base a si estan habilitados o deshabilitados
function test2(arr) {
  let checked = arr.filter((el) => el.checkbox.checked);
  let unchecked = arr.filter((el) => el.checkbox.checked == false);
  return [
    {
      non: unchecked,
    },
    {
      si: checked,
    },
  ];
}
// Funcion que otorga clases a los containers de las cards en base a su categoria
function classMapper(dataCategory) {
  switch (dataCategory) {
    case "Food Fair":
      return "classFoodFair";
    case "Museum":
      return "classMuseum";
    case "Costume Party":
      return "classCostumeParty";
    case "Music Concert":
      return "classMusicConcert";
    case "Race":
      return "classRace";
    case "Book Exchange":
      return "classBookExchange";
    case "Cinema":
      return "classCinema";
    default:
      return "Nulls";
  }
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

export { drawCards, pastEvents, upcomingEvents, filterCards, test2 };
