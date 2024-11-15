import View from "./View.js";

class ResultsView extends View {
  _data;
  _parentEl = document.querySelector(".search-results");

  _generateMarkup() {
    return `
    <li class="list-item">
            <a href="#" class="list-link">
            <div class="list-div">
                <img
                src="../pexels-pixabay-358319.jpg"
                alt="airplane"
                class="image"
                />
              <div>
                <p class="departure">04:45</p>
                <p class="flight">UA820</p>
              </div>
              <div>
                <h2 class="title">Rome to San Francisco</h2>
                <p class="status">Status: Scheduled</p>
              </div>
            </a>
          </li> 
`;
  }
}

export default new ResultsView();
