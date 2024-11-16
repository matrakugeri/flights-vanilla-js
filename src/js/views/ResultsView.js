import View from "./View.js";

class ResultsView extends View {
  _data;
  _parentEl = document.querySelector(".search-results");

  _FormatData(data) {
    this._data = data;
    const date = new Date(this._data.departure);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      hour: "numeric", // Include hour
      minute: "2-digit", // Include minutes
      hour12: true, // Use 12-hour format
    }).format(date);
    return formattedDate;
  }
  render(data) {
    this._data = data;
    const departure = this._FormatData(this._data);
    const markup = `
   <li class="list-item">
              <a href="#${this._data.id}" class="list-link">
            <div class="list-div">
              <img
              src="https://i.imgur.com/5DmMjV9.jpeg"
              alt="airplane"
              class="image"
              />
              <div>
                <p class="departure">04:45</p>
                <p class="flight">${this._data.flightNumber}</p>
                </div>
                <div>
                  <h2 class="title">${this._data.title}</h2>
                  <p class="status">Status: ${this._data.status}</p>
                  </div>
                  </a>
                  </li> `;
  }
}

export default new ResultsView();
