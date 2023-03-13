const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const cardEvent = data.find(el => el._id == id);

