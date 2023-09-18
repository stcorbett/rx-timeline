import { Controller } from "../../node_modules/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = ['link', 'display', 'page']

  connect () {
  }

  navigate(e) {
    e.preventDefault()

    this.linkTargets.forEach((link, index ) => {
      link.classList.remove("-mb-0.5", "border-b-[5px]", "border-[#e65e28]")
    })

    e.currentTarget.classList.add("-mb-0.5", "border-b-[5px]", "border-[#e65e28]")

    this.pageTargets.forEach((page, index ) => {
      if( index == this.linkTargets.indexOf(e.currentTarget) ) {
        page.classList.remove('hidden', 'lg:hidden')
      } else {
        page.classList.add('hidden', 'lg:hidden')
      }
    })
  }
}
