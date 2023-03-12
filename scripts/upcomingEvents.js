import data from "./amazing.js";
import {drawCards, upcomingEvents} from "./functions.js";

let container = document.getElementById("containerUpcomingCards");
drawCards(upcomingEvents(data, data.currentDate), container)