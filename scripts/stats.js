const {createApp} = Vue;

const appStats = createApp({
    data() {
        return {
            jsonData: '/data/amazing.json',
            currentDate: "",
            events: [],
            eventsWithPercentage: [],
            eventsFirstTable: [],
            eventsSecondTable: [],
            eventsThirdTable: [],
            pastEvents: [],
            upcomingEvents: [],
            categories: [],
            categoriesUpcomingEvents: [],
            categoriesPastEvents: []
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            fetch(this.jsonData).then(response => response.json()).then(dataJSON => {
                this.events = dataJSON.events;
                this.currentDate = dataJSON.currentDate;
                this.eventsToShow = this.events;
                this.eventsAddPercentage(this.events);

                this.arrFirstTable(this.eventsWithPercentage);
                this.pastEvents = this.eventsWithPercentage.filter((dateEvent) => dateEvent.date<this.currentDate);
                    this.upcomingEvents = this.eventsWithPercentage.filter((dateEvent) => dateEvent.date > this.currentDate);

                this.filterByCategories(this.upcomingEvents)
                this.categoriesUpcomingEvents = this.categories;
                this.eventsSecondTable = this.eventsStats(this.upcomingEvents, this.categoriesUpcomingEvents)

                this.filterByCategories(this.pastEvents)
                this.categoriesPastEvents = this.categories;
                this.eventsThirdTable = this.eventsStats(this.pastEvents, this.categoriesPastEvents)

            }).catch(error => console.log(error.message))
        },
        filterByCategories(arrData) {
            arrData.forEach((itemArr) => {
                if (!this.categories.includes(itemArr.category)) {
                    this.categories.push(itemArr.category);
                }
            });
        },
        eventsAddPercentage(arrData) {
            const newArr = arrData.map(elementArr => {
                elementArr.percentage = elementArr.hasOwnProperty("assistance") ? (elementArr.assistance / elementArr.capacity * 100).toFixed(1) : (elementArr.estimate / elementArr.capacity * 100).toFixed(1)
                return elementArr
            })
            this.eventsWithPercentage = newArr;
        },
        arrFirstTable(arr) {
            let eventHighestAttendance = arr.sort((a, b) => b.percentage - a.percentage)[0].name;
            let eventLowestAttendance = arr.sort((a, b) => a.percentage - b.percentage)[0].name;
            let eventLargerCapacity = arr.sort((a, b) => b.capacity - a.capacity)[0].name
            this.eventsFirstTable = [eventHighestAttendance, eventLowestAttendance, eventLargerCapacity]
        },
        eventsStats(arrData, arrCat) {
            const arrAux = [];
            const arrExport = [];
            let capacity = 0;
            let attendance = 0;
            let revenuesEl = 0;

            arrCat.forEach(elCategory => {
                const result = arrData.filter(elArrData => elArrData.category == elCategory)
                if (result.length > 0) {
                    arrAux.push({category: elCategory, events: result})
                }
            })
            arrAux.forEach(arrEl => {
                arrEl.events.forEach(arrEventElement => {
                    capacity += arrEventElement.capacity;
                    attendance += arrEventElement.assistance ? arrEventElement.assistance : arrEventElement.estimate;
                    revenuesEl += (arrEventElement.assistance ? arrEventElement.assistance : arrEventElement.estimate) * arrEventElement.price;
                })
                arrExport.push({
                    category: arrEl.category,
                    revenues: revenuesEl,
                    percentageAttendace: (
                        (attendance / capacity) * 100
                    ).toFixed(1)
                })
                capacity = 0;
                attendance = 0;
                revenuesEl = 0;
                arrExport.sort((a, b) => {
                    return b.percentageAttendace - a.percentageAttendace
                })
            })
            return arrExport
        }
    },
    mounted() {}
}).mount("#app")
