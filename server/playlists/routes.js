const { Router } = require('express')
const Playlist = require('./model')

const router = new Router()

router.get('/playlists', (request, response) => {
  Playlist
    .findAll()
    .then(playlists => {
      response.json({ playlists: playlists })
    })
    .catch(error => {
      console.error(error)
      response
        .status(500)
        .json({ message: "Something went wrong, try again!" })
    })
})

router.get('/playlists/:id', (request, response) => {
  const id = request.params.id
  Playlist
    .findById(id)
    .then(playlist => {
      if (!playlist) {
        return response.status(404).json({ message: "Not found!" })
      }
      response.json({ playlist: playlist })
    })
    .catch(error => {
      console.error(error)
      response
        .status(500)
        .json({ message: "Something went wrong, try again!" })
    })

})

router.post('/playlists', (request, response) => {
  Playlist
    .create(request.body)
    .then(playlist => {
      response.status(201).json({ playlist: playlist })
    })
    .catch(error => {
      console.error(error)
      response
        .status(500)
        .json({ message: "Something went wrong, try again!" })
    })
})

router.delete('/playlists/:id', (request, response) => {
  const id = request.params.id
  Playlist
    .findById(id)
    .then(playlist => {
      if (!playlist) {
        return response.status(404).json({ message: "Not found!" })
      }
      playlist.destroy()
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