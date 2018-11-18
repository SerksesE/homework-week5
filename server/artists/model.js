const Sequelize = require('sequelize')
const sequelize = require('../db')

const Artists = sequelize.define('artists', {
  name: {
    type: Sequelize.STRING,
    field: 'artist_name',
    allowNull: false
  },
  song: {
    type: Sequelize.STRING,
    field: 'artist_song',
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'artists'
})

Artists.sync()

module.exports = Artists