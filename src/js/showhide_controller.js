import { Controller } from "../../node_modules/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = ['link', 'display', 'toggle', 'smToggle']

  connect () {
  }

  toggle(e) {
    this.toggleTargets.forEach((link, index ) => {
      link.classList.toggle("hidden")
    })

    this.smToggleTargets.forEach((link, index ) => {
      link.classList.toggle("tablet:flex")
    })
  }
}
