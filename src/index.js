import { Application } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"

import NavController from "./js/nav_controller.js"

window.Stimulus = Application.start()

Stimulus.register("nav", NavController)
