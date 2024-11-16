import View from "./View.js";

class ResultsView extends View {
  _data;
  _parentEl = document.querySelector(".search-results");

  render(data) {
    this._data = data;

    // Define the formatTime function
    const formatTime = (timeString) => {
      const date = new Date(timeString); // Convert to a Date object
      return new Intl.DateTimeFormat("en-US", {
        month: "long", // Full month name (e.g., "November")
        day: "numeric", // Day of the month (e.g., "15")
        year: "numeric", // Full year (e.g., "2024")
        hour: "numeric", // Include hour
        minute: "2-digit", // Include minutes
        hour12: true, // Use 12-hour format
      }).format(date);
    };

    const markup = this._data
      .map((el) => {
        const formattedTime = formatTime(el.departureTime); // Format departureTime

        return ` <li class="list-item">
            <a href="${el.id}" class="list-link">
            <div class="list-div">
                <img
                src="./pexels.pixaba"
                alt="airplane"
                class="image"
                />
              <div>
                <p class="departure">${formattedTime}</p> <!-- Use formattedTime -->
                <p class="flight">${el.flightNumber}</p>
              </div>
              <div>
                <h2 class="title">${el.title}</h2>
                <p class="status">Status: ${el.status}</p>
              </div>
            </a>
          </li> `;
      })
      .join("");

    this._clear(); // Clear the parent element
    this._parentEl.insertAdjacentHTML("afterbegin", markup); // Insert the new markup
  }

  _generateMarkup() {
    return `
    <li class="list-item">
            <a href="#" class="list-link">
            <div class="list-div">
                <img
                src="img/pexels-pixabay-358319.jpg"
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
