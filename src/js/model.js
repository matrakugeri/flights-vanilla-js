import { API_URL, key, RES_PER_PAGE } from "./config";
import { getJSON, sendJSON } from "./helpers.js";
export const state = {
  flight: {},
  search: {
    query: "",
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
    totalResults: 0,
  },
};

export const loadFlight = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    let flight = data;
    state.flight = {
      id: flight.id,
      arrivalTime: flight.arrivalTime,
      departureTime: flight.departureTime,
      destination: flight.destination,
      destinationFullName: flight.destinationFullName,
      flightNumber: flight.flightNumber,
      origin: flight.origin,
      originFullName: flight.originFullName,
      title: flight.title,
      status: flight.status,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loadSearchResults = async function (query, page = 1) {
  try {
    state.search.query = query;
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    // const data = await getJSON(`${API_URL}?q=${query}`);
    // const data = await getJSON(
    //   `${API_URL}?_start=${start}&_limit=${state.search.resultsPerPage}&q=${query}`
    // );

    const response = await fetch(
      `${API_URL}?_start=${start}&_limit=${state.search.resultsPerPage}&q=${query}`
    );

    // Get the total count from headers or response body
    const totalResults = response.headers.get("X-Total-Results");
    console.log(totalResults);

    const data = await response.json();

    state.search.results = data.map((el) => {
      return {
        id: el.id,
        arrivalTime: el.arrivalTime,
        departureTime: el.departureTime,
        destination: el.destination,
        destinationFullName: el.destinationFullName,
        flightNumber: el.flightNumber,
        origin: el.origin,
        originFullName: el.originFullName,
        title: el.title,
        status: el.status,
      };
    });
    state.search.totalResults = +totalResults;
    console.log(state.search.totalResults);
  } catch (err) {
    throw err;
  }
};

export const uploadFlight = async function (newFlight) {
  try {
    //
    const flight = {
      arrivalTime: newFlight.arrival,
      departureTime: newFlight.departure,
      destination: newFlight.destination,
      destinationFullName: newFlight.destinationFullName,
      flightNumber: newFlight.flightNumber,
      origin: newFlight.origin,
      originFullName: newFlight.originFullName,
      title: newFlight.title,
      status: newFlight.status,
    };
    const data = await sendJSON(`${API_URL}`, flight);
    state.flight = data;
    console.log(data);
    console.log(state.flight);
  } catch (err) {
    console.error(err);
  }
};

// await fetch(`${API_URL}?_start=10&_limit=10&q=${query}`);
