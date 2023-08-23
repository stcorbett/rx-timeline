import { Controller } from "../../node_modules/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = ['link', 'display', 'toggle']

  connect () {
  }

  toggle(e) {
    this.toggleTargets.forEach((link, index ) => {
      link.classList.toggle("hidden")
    })
  }
}
