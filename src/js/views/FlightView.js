import View from "./View.js";
class FlightView extends View {
  _parentEl = document.querySelector(".container-2");
  _data;
  _message = `Flight successfully deleted`;

  FormatArrival(data) {
    this._data = data;
    const date = new Date(this._data.arrivalTime);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long", // Full month name (e.g., "November")
      day: "numeric", // Day of the month (e.g., "15")
      year: "numeric", // Full year (e.g., "2024")
      hour: "numeric", // Include hour
      minute: "2-digit", // Include minutes
      hour12: true, // Use 12-hour format
    }).format(date);
    return formattedDate;
  }

  FormatData(data) {
    this._data = data;
    const date = new Date(this._data.departureTime);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long", // Full month name (e.g., "November")
      day: "numeric", // Day of the month (e.g., "15")
      year: "numeric", // Full year (e.g., "2024")
      hour: "numeric", // Include hour
      minute: "2-digit", // Include minutes
      hour12: true, // Use 12-hour format
    }).format(date);
    return formattedDate;
  }

  _generateMarkup() {
    const departure = this.FormatData(this._data);
    const arrival = this.FormatArrival(this._data);
    return `
    <div class="flight-div">
          <img
            src="https://i.imgur.com/5DmMjV9.jpeg"
            alt="airplane"
            class="flight-image"
          />
        </div>

        <div class="second-div">
          <h2 class="paragraph">
            ${this._data.title} <span class="coleur">${this._data.flightNumber}</span>
          </h2>

          <div class="grid-container">
            <div>
              <h2>Origin</h2>
              <p class="lower">From</p>
              <p>${this._data.originFullName}(${this._data.origin})</p>
            </div>
            <div class="departure">
              <p class="lower">Departure Time</p>
              <p class="bolder">${departure}</p>
            </div>
            <div class="destination">
              <h2>Destination</h2>
              <p class="lower">To</p>
              <p>${this._data.destinationFullName}(${this._data.destination})</p>
            </div>
            <div class="arrival">
              <p class="lower">Arrival Time</p>
              <p class="bolder">${arrival}</p>
            </div>
            <div class="flight-status">
              <h2>Flight</h2>
              <p class="lower">Status</p>
              <p>${this._data.status}</p>
            </div>
          </div>
          <div class="buttons">
                  <button class="edit">
                    Edit&nbsp;&nbsp;<i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="delete">
                      Delete&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i>
                      </button>
                      </div>
        </div>
        `;
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
}

export default new FlightView();
