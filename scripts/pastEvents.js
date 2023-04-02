const {createApp} = Vue;

const appPastEvents = createApp({
    data() {
        return {
            jsonData: '/data/amazing.json',
            events: [],
            pastEvents: [],
            eventsToShow: [],
            currentDate: "",
            categories: [],
            text: '',
            selectedCategories: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
                fetch(this.jsonData).then(response => response.json()).then(dataJSON => {
                    this.currentDate = dataJSON.currentDate;
                    this.events = dataJSON.events;
                    this.pastEvents = this.events.filter((dateEvent) => dateEvent.date<this.currentDate);
                this.eventsToShow = this.pastEvents;
                this.filterByCategories(this.pastEvents)
            }).catch(error => console.log(error.message))
                }, filterByCategories(arrData) {
                    arrData.forEach((itemArr) => {
                        if (!this.categories.includes(itemArr.category)) {
                            this.categories.push(itemArr.category);
                        }
                    });
                }, whatMonthIs(month) {
                    switch (month) {
                        case "01":
                            return "Jan";
                        case "02":
                            return "Feb";
                        case "03":
                            return "Mar";
                        case "04":
                            return "Apr";
                        case "05":
                            return "May";
                        case "06":
                            return "Jun";
                        case "07":
                            return "Jul";
                        case "08":
                            return "Aug";
                        case "09":
                            return "Sep";
                        case "10":
                            return "Oct";
                        case "11":
                            return "Nov";
                        case "12":
                            return "Dec";
                        default:
                            return "Nulls";
                    }
                }
            },
            computed : {
                filterTextAndCheckboxs() {
                    let firstFilter = this.pastEvents.filter(event => event.name.toLowerCase().includes(this.text.toLowerCase()))
                    if (!this.selectedCategories.length) {
                        this.eventsToShow = firstFilter
                    } else {
                        this.eventsToShow = firstFilter.filter(event => this.selectedCategories.includes(event.category))
                    }
                }
            }
        }
    ).mount("#app")
