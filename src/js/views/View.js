export default class View {
  _clear() {
    this._parentEl.innerHTML = "";
  }

  renderSpinner() {
    const markup = `<div class="spinner">
      <i class="fa-solid fa-spinner"></i>
      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
