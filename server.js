// Import Node.js modules.
require("dotenv").config()
const express = require("express")
const handlebars  = require("express-handlebars")
const fs = require("fs")

// Initialise Express.
const app = express()

// Render static files.
app.use(express.static("static"))

// Set the view engine to Handlebars, import the helpers and change the filename extension.
app.engine("hbs", handlebars.engine({ helpers: require("./helpers"), extname: ".hbs" }))
app.set("view engine", "hbs")

// Parse incoming requests.
app.use(express.urlencoded({ extended: true }))



// Listen to all GET requests on /.
app.get("/", (_req, res) => {
  res.render("index", {
    organization: "",
    repositories: "",
    year: ""
  })
})

// Set and log the port for Express.
const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Express running at http://localhost:${port}.`) })