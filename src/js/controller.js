// import * as model from "./model.js";
// import View from "./View.js";
// import ResultsView from "./ResultsView.js";
import * as model from "./model.js";
import FlightView from "./views/FlightView.js";
import { API_URL } from "./config";

const flightContainer = document.querySelector(".container-2");

const renderSpinner = function (parentEl) {
  const markup = `
  <div class="spinner">
      <i class="fa-solid fa-spinner"></i>
      </div>`;
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", markup);
};

const controlFlight = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    renderSpinner(flightContainer);

    // 1) Loading recipe
    await model.loadFlight(id);

    // 2) Rendering recipe
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
