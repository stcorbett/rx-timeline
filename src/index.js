import { Application } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"

import NavController from "./js/nav_controller.js"
import ShowhideController from "./js/showhide_controller.js"
import SlidesController from "./js/slides_controller.js"

window.Stimulus = Application.start()

Stimulus.register("nav", NavController)
Stimulus.register("showhide", ShowhideController)
Stimulus.register("slides", SlidesController)
