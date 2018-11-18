import request from 'superagent'

export const PLAYLISTS_FETCHED = 'PLAYLISTS_FETCHED'
export const PLAYLIST_FETCHED = 'PLAYLIST_FETCHED'
export const PLAYLIST_CREATE_SUCCESS = 'PLAYLIST_CREATE_SUCCESS'
export const PLAYLIST_DELETE_SUCCESS = 'PLAYLIST_DELETE_SUCCESS'

const baseUrl = 'http://localhost:5000'

const playlistsFetched = playlists => ({
  type: PLAYLISTS_FETCHED,
  playlists
})

const playlistFetched = playlist => ({
  type: PLAYLIST_FETCHED,
  playlist
})

const PlaylistCreateSuccess = playlists => ({
  type: PLAYLIST_CREATE_SUCCESS,
  playlists
})

const PlaylistDeleteSuccess = playlist => ({
  type: PLAYLIST_DELETE_SUCCESS,
  playlist
})

export const loadPlaylists = () => (dispatch, getState) => {
  if (getState().playlists) return

  request(`${baseUrl}/playlists`)
    .then(response => {
      dispatch(playlistsFetched(response.body))
    })
    .catch(console.error)
}

export const loadPlaylist = (id) => (dispatch, getState) => {
  const state = getState().playlist
  if (state && state.id === id) return

  request(`${baseUrl}/playlists/${id}`)
    .then(response => {
      dispatch(playlistFetched(response.body))
    })
    .catch(console.error)
}

export const createPlaylist = (data) => dispatch => {
  request
    .post(`${baseUrl}/playlists`)
    .send(data)
    .then(response => {
      dispatch(PlaylistCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const deletePlaylist = (id) => (dispatch) => {
  request
    .delete(`${baseUrl}/playlists/${id}`)
    .then(response => {
      dispatch(PlaylistDeleteSuccess(id))
    })
    .catch(console.error)
}

