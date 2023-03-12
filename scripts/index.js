import data from "./amazing.js";
import { drawCards,} from "./functions.js";

let container = document.getElementById("containerCards");
drawCards(data.events, container);
