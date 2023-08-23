import { Controller } from "../../node_modules/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = ['slide']

  connect () {
    this.slideIndex = 0
  }

  advance(e) {
    this.slideIndex += 1
    if(this.slideIndex > (this.slideTargets.length - 1)) this.slideIndex = 0

    this.slideTargets.forEach((slide, index ) => {
      if( index == this.slideIndex ) {
        slide.classList.remove('hidden', 'sm:hidden')
      } else {
        slide.classList.add('hidden', 'sm:hidden')
      }
    })
  }
}
