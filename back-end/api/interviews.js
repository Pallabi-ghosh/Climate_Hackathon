const express = require("express")
const router = express.Router()
const knex = require("../database")

// 	Returns all interviews
router.get("/", async (req, res) => {
  try {
    console.log("working")
    const interviews = await knex("interviews")
    res.json(interviews)
  } catch (error) {
    throw error
  }
})

// 	Adds a new interview
// router.post("/", async (req, res) => {
//   try {
//     console.log("post interviews")
//     const addinterviews = await knex("interviews").insert({
//     })
//     res.send("done")
//   } catch (error) {
//     throw error
//   }
// })

// // Returns interview by id
// router.get("/:id", async (req, res) => {
//   try {
//     if (req.params.id) {
//       const interview = await knex("interviews").where({ id: req.params.id })
//       res.send(interview)
//     }
//   } catch (error) {
//     throw error
//   }
// })

module.exports = router
