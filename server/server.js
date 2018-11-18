const express = require('express');
const bodyParser = require('body-parser')
const playlistRouter = require('./playlists/routes')
const songsRouter = require('./songs/router')
const artistsRouter = require('./artists/router')

const app = express();
const port = process.env.PORT || 5000;

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app
  .use(bodyParser.json())
  .use(playlistRouter)
  .use(songsRouter)
  .use(artistsRouter)
  .listen(port, () => console.log(`Listening on port ${port}`));