import View from "./View";

class editFlightView extends View {
  _parentEl = document.querySelector(".hidden-form-edit");
  _parentEl2 = document.querySelector(".container-2");
  _window = document.querySelector(".new-flight-edit");
  _overlay = document.querySelector(".form-information-edit");

  _btnOpen = document.querySelector(".edit");
  _btnClose = document.querySelector(".pos-edit");

  constructor() {
    super();
    // this.addHandlerClick();
    this.addHandlerRemove();
  }

  addHandlerDelete(handler) {
    this._parentEl2.addEventListener("click", (e) => {
      const clicked = e.target.closest(".delete");
      if (!clicked) return;
      handler();
    });
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  addHandlerEditButton(handler) {
    this._parentEl2.addEventListener("click", (e) => {
      const clicked = e.target.closest(".edit");
      if (!clicked) return;
      handler();
    });
  }

  addHandlerRemove() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerEdit(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      console.log(data);
      handler(data);
    });
  }
}

export default new editFlightView();
