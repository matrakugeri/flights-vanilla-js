// import * as model from "./model.js";
// import View from "./View.js";
// import ResultsView from "./ResultsView.js";
import * as model from "./model.js";
import FlightView from "./views/FlightView.js";
import { API_URL } from "./config";

const controlFlight = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    // 0) Rendering spinner before asynchronous task is finished
    FlightView.renderSpinner();

    // 1) Loading flight,and storing it to the state.flight object
    await model.loadFlight(id);

    // 2) Rendering flight with the data stored in the state.
    FlightView.render(model.state.flight);
  } catch (err) {
    console.log(err);
  }
};

// controlSearchResults();

["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlFlight)
);

// window.addEventListener("hashchange", controlSearchResults);
// window.addEventListener("load", controlSearchResults);
