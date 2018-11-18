const { Router } = require('express')
const Songs = require('./model')

const router = new Router()

router.post('/playlists/:id/songs', (request, response) => {
  Songs
    .create(request.body)
    .then(song => {
      response.status(201).json({ song: song })
    })
    .catch(error => {
      console.error(error)
      response
        .status(500)
        .json({ message: "Something went wrong, try again!" })
    })
})

router.put('/playlists/:id/songs/:id', (request, response) => {
  const id = request.params.id
  Songs
    .findById(id)
    .then(song => {
      if (!song) {
        return response.status(404).json({ message: "Not found!" })
      }
      const fields = Object.keys(request.body)

      song.update(request.body, fields)
        .then(updatedSong =>
          response.status(201).json({ song: updatedSong }))
    })
    .catch(error => {
      console.error(error)
      response
        .status(500)
        .json({ message: "Something went wrong, try again!" })
    })
})

router.delete('/playlists/:id/songs/:id', (request, response) => {
  const id = request.params.id
  Songs
    .findById(id)
    .then(song => {
      if (!song) {
        return response.status(404).json({ message: "Not found!" })
      }
      song.destroy()
        .then(_ => {
          response.status(204).json()
        })
    })
    .catch(error => {
      console.error(error)
      response
        .status(500)
        .json({ message: "Something went wrong, try again!" })
    })
})


module.exports = router