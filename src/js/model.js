import { API_URL, key, RES_PER_PAGE } from "./config";
import { editJSON, getJSON, sendJSON } from "./helpers.js";
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

let flightNumber = document.getElementById("flight-numberEdit");
let origin = document.getElementById("originEdit");
let originFullName = document.getElementById("originFullNameEdit");
let destination = document.getElementById("destinationEdit");
let destinationFullName = document.getElementById("destinationFullNameEdit");
let title = document.getElementById("titleEdit");
let departure = document.getElementById("departureEdit");
let arrival = document.getElementById("arrivalEdit");
let status = document.getElementById("statusEdit");

export const loadFlight = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    state.flight = {
      id: data.id,
      arrivalTime: data.arrivalTime,
      departureTime: data.departureTime,
      destination: data.destination,
      destinationFullName: data.destinationFullName,
      flightNumber: data.flightNumber,
      origin: data.origin,
      originFullName: data.originFullName,
      title: data.title,
      status: data.status,
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

export const saveChanges = async function (newFlight) {
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
  const id = window.location.hash.slice(1);
  const data = await editJSON(`${API_URL}${id}`, flight);
  state.flight = { id, ...flight };
  console.log(state.flight);
  console.warn(state.search.results);
  const flightIndex = state.search.results.findIndex((el) => +el.id === +id);
  state.search.results[flightIndex] = state.flight;
  console.log(flightIndex);
  console.log(data);
};

export const makeChanges = function () {
  flightNumber.value = state.flight.flightNumber;
  origin.value = state.flight.origin;
  originFullName.value = state.flight.originFullName;
  destination.value = state.flight.destination;
  destinationFullName.value = state.flight.destinationFullName;
  title.value = state.flight.title;
  departure.value = state.flight.departureTime;
  arrival.value = state.flight.arrivalTime;
  status.value = state.flight.status;
  console.log(title.value);
  console.log(state.flight.title);
  console.log(arrival.value);
  console.log(departure.value);
  console.log(status.value);
};

// await fetch(`${API_URL}?_start=10&_limit=10&q=${query}`);
