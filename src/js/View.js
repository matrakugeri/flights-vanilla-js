export default class View {
  _clear() {
    this._parentEl.innerHTML = "";
  }

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
                src="./pexels.pixabay"
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

  renderSpinner() {
    const markup = `<div class="spinner">
      <i class="fa-solid fa-spinner"></i>
      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
