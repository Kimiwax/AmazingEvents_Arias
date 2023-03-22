import {drawCardDetails, getDataJSON} from "./functions.js";
const dataJSON = await getDataJSON();

const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
let arrAux = dataJSON.events;
const cardEvent = arrAux.find((el) => el._id == id);
let containerCard = document.getElementById("containerCard");
drawCardDetails(cardEvent, containerCard);
