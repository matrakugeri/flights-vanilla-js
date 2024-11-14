import * as model from "./model.js";
import View from "./View.js";
import ResultsView from "./ResultsView.js";

const controlSearchResults = async function () {
  try {
    // ResultsView.renderSpinner();
    await model.loadSearchResults();
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();
