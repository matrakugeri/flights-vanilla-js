import View from "./View";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".pagination-btn");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page; // Current page
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    ); // Total pages

    if (currentPage === 1 && numPages > 1) {
      // Page 1, and other pages exist
      return `
          <button data-goto="${currentPage + 1}" class="pagination-btn">
            <span>Page ${
              currentPage + 1
            } <i class="fa-solid fa-arrow-right"></i></span>
          </button>
        `;
    }

    if (currentPage === numPages && numPages > 1) {
      // Last page
      return `
          <button data-goto="${currentPage - 1}" class="pagination-btn">
            <span><i class="fa-solid fa-arrow-left"></i> Page ${
              currentPage - 1
            }</span>
          </button>
        `;
    }

    if (currentPage < numPages) {
      // Other pages
      return `
          <button data-goto="${currentPage - 1}" class="pagination-btn">
            <span><i class="fa-solid fa-arrow-left"></i> Page ${
              currentPage - 1
            }</span>
          </button>
          <button data-goto="${currentPage + 1}" class="pagination-btn">
            <span>Page ${
              currentPage + 1
            } <i class="fa-solid fa-arrow-right"></i></span>
          </button>
        `;
    }

    // Page 1, and no other pages exist
    return "";
  }
}

export default new PaginationView();

// class PaginationView extends View {
//   _parentEl = document.querySelector(".pagination");

//   _generateMarkup() {
//     // Page 1 and there are other pages
//     // Page 1 , and there are NO other pages
//     // Last page
//     // Other page
//   }
// }

// export default new PaginationView();
