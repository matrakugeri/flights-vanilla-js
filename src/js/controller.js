// import * as model from "./model.js";
// import View from "./View.js";
// import ResultsView from "./ResultsView.js";
import * as model from "./model.js";
import FlightView from "./views/FlightView.js";
import { API_URL, MODAL_SEC } from "./config";
import ResultsView from "./views/ResultsView.js";
import searchView from "./views/searchView.js";
import addFlightView from "./views/addFlightView.js";
import PaginationView from "./views/paginationView.js";
import editFlightView from "./views/editFlightView.js";

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

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    // 0) Render the spinner before async task is finished
    ResultsView.renderSpinner();

    // 1) Loading flights,and storing it to the search results in states
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
    // 2)Rendering flight with the data stored in the state.search.results
    ResultsView.render(model.state.search.results);

    // Rendering buttons
    PaginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlAddFlight = async function (newFlight) {
  try {
    //Spinner before loading
    FlightView.renderSpinner();
    // Loading flight and store it to the state.flight
    await model.uploadFlight(newFlight);

    // Rendering the flight with the data stored in state
    FlightView.render(model.state.flight);

    // addFlightView.renderMessage();

    // Change the window history pushstate
    window.history.pushState(null, "", `#${model.state.flight.id}`);

    // Hide modal after uploading
    setTimeout(function () {
      addFlightView.toggleWindow();
    }, MODAL_SEC * 700);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = async function (goToPage) {
  try {
    // 1) Load new page results
    await model.loadSearchResults(model.state.search.query, goToPage);
    console.log(goToPage);
    // 2) Render new results
    ResultsView.render(model.state.search.results);

    // 3) Update pagination buttons
    PaginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlEditButton = async function () {
  try {
    editFlightView.toggleWindow();

    model.makeChanges();
  } catch (err) {
    console.log(err);
  }
};

const controlEdit = async function (newFlight) {
  try {
    FlightView.renderSpinner();
    // await the savechanges and store the object to the state flight
    await model.saveChanges(newFlight);
    // Rendering the flight with the data stored in state
    FlightView.render(model.state.flight);
    ResultsView.render(model.state.search.results);
    // Hide modal after uploading
    editFlightView.toggleWindow();
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  FlightView.addHandlerRender(controlFlight);
  searchView.addHandlerSearch(controlSearchResults);
  addFlightView.addHandlerUpload(controlAddFlight);
  PaginationView.addHandlerClick(controlPagination);
  editFlightView.addHandlerEditButton(controlEditButton);
  editFlightView.addHandlerEdit(controlEdit);
};
init();
