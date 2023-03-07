import data from "./amazing.js";

AllCards(data);

function AllCards(arr) {
    const container = document.getElementById("containerCards");
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < arr.events.length; i++) {
        if (arr.events[i].date) {
            const card = document.createElement("div");
            card.classList.add("col");
            card.style.width = "25rem";
            card.innerHTML = `
            <div class="card shadow-sm h-100">
                <img src="${arr.events[i].image}" class="card-img-top imgCards" alt="People in the cinema">
                <div class="card-body d-flex justify-content-between flex-column">
                    <h5 class="card-title text-center fw-bold text-bg-myK">${arr.events[i].name}</h5>
                    <p class="card-text text-center">${arr.events[i].description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a href="/pages/details.html" class="btn btn-sm btn-outline-success btn-circle d-flex align-items-center">More
                                Info</a>
                        </div>
                        <small class="text-muted fw-bold">Price: $${arr.events[i].price}</small>
                    </div>
                </div>
            </div>`
            fragment.appendChild(card);
        }
    }
    container.appendChild(fragment);
}
