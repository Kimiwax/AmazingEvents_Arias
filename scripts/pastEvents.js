import data from "./amazing.js";
import { drawCards, pastEvents } from "./functions.js";

let container = document.getElementById("containerPastCards");
drawCards(pastEvents(data, data.currentDate), container);
///Capturo container img y le agrego clase para modificarlo
let imgPast = document.querySelectorAll(".imgCards");
imgPast.forEach((img) => img.classList.add("imgPast"));
