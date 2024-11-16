import { API_URL, key, RES_PER_PAGE } from "./config";

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
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    console.log(data);
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

// await fetch(`${API_URL}?_start=10&_limit=10&q=${query}`);
