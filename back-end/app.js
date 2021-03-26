const express = require("express")
const app = express()
const router = express.Router()
const path = require("path")

const interviewsRouter = require("./api/interviews")

const buildPath = path.join(__dirname, "../../dist")
const cors = require("cors")

// Serve the built client html
app.use(express.static(buildPath))

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))
// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.use(cors())

router.use("/interviews", interviewsRouter)

app.use(process.env.API_PATH, router)

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`))
})

module.exports = app
