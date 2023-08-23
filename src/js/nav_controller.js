import { Controller } from "../../node_modules/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = ['link', 'display', 'page']

  connect () {
  }

  navigate(e) {
    this.linkTargets.forEach((link, index ) => {
      link.classList.remove("-mb-0.5", "border-b-[5px]", "border-[#e55b24]")
    })

    e.currentTarget.classList.add("-mb-0.5", "border-b-[5px]", "border-[#e55b24]")


    this.pageTargets.forEach((page, index ) => {
      if( index == this.linkTargets.indexOf(e.currentTarget) ) {
        page.classList.remove('hidden')
      } else {
        page.classList.add('hidden')
      }
    })
  }
}
