import {
    getDataJSON,
    filterByCategories,
    eventsAddPercentage,
    eventsStats,
    pastEvents,
    upcomingEvents,
    arrFirstTable,
    drawRowFirstTable,
    drawRowsTables
} from "./functions.js";
const dataJSON = await getDataJSON();
const dataJSONEvents = dataJSON.events;

// Array de objetos con nueva propiedad 'percentage'
const newDataJSON = eventsAddPercentage(dataJSONEvents);
// Se obtiene el container de la tabla y se dibuja la fila con sus correspondientes columnas
const containerTable = document.getElementById("eventsStatistics");
drawRowFirstTable(arrFirstTable(newDataJSON), containerTable);

// Array que contiene los eventos futuros filtrados por categoria y agrupados segun esa categoria, se obtiene el container de la tabla y se dibujan las filas en la segunda tabla
let arrUpcomingEvents = eventsStats(upcomingEvents(dataJSON, dataJSON.currentDate), filterByCategories(newDataJSON));
const containerUpcomingTable = document.getElementById("upcomingEvents");
drawRowsTables(arrUpcomingEvents, containerUpcomingTable);

// Array que contiene los eventos pasados filtrados por categoria y agrupados segun esa categoria, se obtiene el container de la tabla y se dibujan las filas en la tercer tabla
let arrPastEvents = eventsStats(pastEvents(dataJSON, dataJSON.currentDate), filterByCategories(newDataJSON));
const containerPastTable = document.getElementById("pastEvents");
drawRowsTables(arrPastEvents, containerPastTable);
