import View from "./View";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");

  _generateMarkup() {
    // Page 1 and there are other pages
    // Page 1 , and there are NO other pages
    // Last page
    // Other page
  }
}

export default new PaginationView();
