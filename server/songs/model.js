const Sequelize = require('sequelize')
const sequelize = require('../db')

const Songs = sequelize.define('songs', {
  title: {
    type: Sequelize.STRING,
    field: 'title_songs',
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING,
    field: 'artist_name',
    allowNull: false
  },
  album: {
    type: Sequelize.STRING,
    field: 'album_name',
    allowNull: false
  },
}, {
    timestamps: false,
    tableName: 'songs'
  })

Songs.sync()

module.exports = Songs