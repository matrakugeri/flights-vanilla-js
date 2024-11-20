import View from "./View.js";

class ResultsView extends View {
  _data;
  _parentEl = document.querySelector(".search-results");

  _FormatData(data) {
    console.log(data.departureTime);
    const date = new Date(data.departureTime);

    console.log(date); // Use the provided data directly
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      hour: "numeric", // Include hour
      minute: "2-digit", // Include minutes
      hour12: true, // Use 12-hour format
    }).format(date);
    return formattedDate;
  }

  _generateMarkup() {
    return this._data
      .map((el) => {
        const formattedDeparture = this._FormatData(el); // Format the departure time for each element
        return `
            <li class="list-item">
                <a href="#${el.id}" class="list-link">
                    <div class="list-div">
                        <img
                            src="https://i.imgur.com/5DmMjV9.jpeg"
                            alt="airplane"
                            class="image"
                        />
                        <div>
                            <p class="departure">${formattedDeparture}</p> 
                            <p class="flight">${el.flightNumber}</p>
                        </div>
                        <div>
                            <h2 class="title">${el.title}</h2>
                            <p class="status">Status: ${el.status}</p>
                        </div>
                    </div>
                </a>
            </li>`;
      })
      .join("");
  }
}

export default new ResultsView();
