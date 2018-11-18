const Sequelize = require('sequelize')
const sequelize = require('../db')

const Playlist = sequelize.define('playlists', {
  name: {
    type: Sequelize.STRING,
    field: 'playlist_name',
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'playlists'
})

Playlist.sync()

module.exports = Playlist