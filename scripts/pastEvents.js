import data from "./amazing.js";
import {drawCards, pastEvents} from "./functions.js";
let container = document.getElementById("containerPastCards");
drawCards(pastEvents(data, data.currentDate), container)

