// import * as model from "./model.js";
// import View from "./View.js";
// import ResultsView from "./ResultsView.js";
import * as model from "./model.js";
import FlightView from "./views/FlightView.js";
import { API_URL } from "./config";
import ResultsView from "./views/ResultsView.js";
import searchView from "./views/searchView.js";
import addRecipeView from "./views/addRecipeView.js";
// ......
import PaginationView from "./views/paginationView.js";
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
  } catch (err) {
    console.log(err);
  }
};

const controlAddRecipe = function (newRecipe) {
  console.log(newRecipe);

  // Upload the new recipe data
};

// .................
// const controlPagination = function (goToPage) {
//   // 1) Load new page results
//   model.loadSearchResults(model.state.search.query, goToPage);

//   // 2) Render new results
//   ResultsView.render(model.state.search.results);

//   // 3) Update pagination buttons
//   PaginationView.render(model.state.search);
// };
// // ......
// PaginationView.addHandlerClick(controlPagination);

const init = function () {
  FlightView.addHandlerRender(controlFlight);
  searchView.addHandlerSearch(controlSearchResults);
  addRecipeView._addHandlerUpload(controlAddRecipe);
};
init();
