import {getDataJSON,filterByCategories, eventsPercentage, upcomingEventsStats,pastEvents, highestPercentage, lowestPercentage, eventLargerCapacity, upcomingEvents, test, drawRowTable, drawRowTable2} from "./functions.js";
const dataJSON = await getDataJSON();
const dataJSONEvents = dataJSON.events;
const newDataJSON = eventsPercentage(dataJSONEvents);

const prueba = test(highestPercentage(newDataJSON),lowestPercentage(newDataJSON,highestPercentage(newDataJSON)),eventLargerCapacity(newDataJSON) );
//console.log(prueba);
//console.log(highestPercentage(newDataJSON));
const containerTable = document.getElementById("eventsStatistics");
drawRowTable(prueba,containerTable )
//console.log(containerTable);

let arrUpcomingEvents = upcomingEventsStats(upcomingEvents(dataJSON, dataJSON.currentDate), filterByCategories(newDataJSON));

const containerUpcomingTable = document.getElementById("upcomingEvents")
drawRowTable2(arrUpcomingEvents, containerUpcomingTable)

let arrPastEvents = upcomingEventsStats(pastEvents(dataJSON, dataJSON.currentDate), filterByCategories(newDataJSON));
const containerPastTable = document.getElementById("pastEvents")
drawRowTable2(arrPastEvents, containerPastTable)

//console.log(arrUpcomingEvents);
//upcomingEventsDraw(arrUpcomingEvents)