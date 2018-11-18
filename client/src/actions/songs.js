import request from 'superagent'

export const SONG_CREATE_SUCCESS = 'SONG_CREATE_SUCCESS'
export const SONG_DELETE_SUCCESS = 'SONG_DELETE_SUCCESS'

const baseUrl = 'http://localhost:5000'

const SongCreateSuccess = songs => ({
  type: SONG_CREATE_SUCCESS,
  songs
})

const SongDeleteSuccess = song => ({
  type: SONG_DELETE_SUCCESS,
  song
})

export const createSong = (id, data) => dispatch => {
  request
    .post(`${baseUrl}/playlists/${id}/songs`)
    .send(data)
    .then(response => {
      dispatch(SongCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const deleteSong = (id) => (dispatch) => {
  request
    .delete(`${baseUrl}/playlists/:id/songs/${id}`)
    .then(response => {
      dispatch(SongDeleteSuccess(id))
    })
    .catch(console.error)
}