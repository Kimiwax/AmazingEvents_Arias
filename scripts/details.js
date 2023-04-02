const {createApp} = Vue;

const appDetails = createApp({
    data() {
        return {jsonData: '/data/amazing.json', events: [], currentEvent: []}
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            fetch(this.jsonData).then(response => response.json()).then(dataJSON => {
                this.events = dataJSON.events;
                const queryString = location.search;
                const params = new URLSearchParams(queryString);
                const id = params.get("id");
                this.currentEvent = this.events.find((eventEl => eventEl._id == id));
            }).catch(error => console.log(error.message))
        }
    }
}).mount('#app');
