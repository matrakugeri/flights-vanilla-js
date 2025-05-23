import View from "./View";

class addFlightView extends View {
  _parentEl = document.querySelector(".hidden-form");

  _window = document.querySelector(".new-flight");
  _overlay = document.querySelector(".form-information");

  _btnOpen = document.querySelector(".add-btn");
  _btnClose = document.querySelector(".pos");

  message = `Flight successfully uploaded !`;

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerCloseWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  //   addHandlerRemoveWindow() {
  //     this._overlay.classList.add(".hidden");
  //     this._window.classList.add(".hidden");
  //   }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      console.log(data);
      handler(data);
    });
  }
}

export default new addFlightView();
