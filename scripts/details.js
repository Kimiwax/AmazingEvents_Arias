import data from "./amazing.js";
import {drawCardDetails} from "./functions.js";

const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

let arrAux = data.events;

const cardEvent = arrAux.find((el) => el._id == id);

console.log(cardEvent);

let containerCard = document.getElementById("containerCard");

drawCardDetails(cardEvent, containerCard);

