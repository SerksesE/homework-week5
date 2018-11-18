const { Router } = require('express')
const Artists = require('./model')

const router = new Router()

router.get('/artists', (request, response) => {
  Artists
    .findAll()
    .then(artist => {
      response.json({ artist: artist })
    })
    .catch(error => {
      console.error(error)
      response
        .status(500)
        .json({ message: "Something went wrong, try again!" })
    })
})

module.exports = router