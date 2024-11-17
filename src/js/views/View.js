export default class View {
  _clear() {
    this._parentEl.innerHTML = "";
  }

  renderError() {
    const markup = `
  <div class="error">
              <p>No flight founded for your query!<br />Please try again!</p>
            </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `<div class="spinner">
      <i class="fa-solid fa-spinner"></i>
      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
