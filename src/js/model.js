import { API_URL, key, RES_PER_PAGE } from "./config";
import { getJSON } from "./helpers.js";
export const state = {
  flight: {},
  search: {
    query: "",
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 0,
  },
};

const query = document.querySelector(".search");

export const loadFlight = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    let flight = data;
    state.flight = {
      id: flight.id,
      arrival: flight.arrivalTime,
      departure: flight.departureTime,
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

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?q=${query}`);
    state.search.results = data.map((el) => {
      return {
        id: el.id,
        arrival: el.arrivalTime,
        departure: el.departureTime,
        destination: el.destination,
        destinationFullName: el.destinationFullName,
        flightNumber: el.flightNumber,
        origin: el.origin,
        originFullName: el.originFullName,
        title: el.title,
        status: el.status,
      };
    });
  } catch (err) {
    throw err;
  }
};

// await fetch(`${API_URL}?_start=10&_limit=10&q=${query}`);
