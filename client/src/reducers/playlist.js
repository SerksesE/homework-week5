import { PLAYLIST_FETCHED } from '../actions/playlists'

const playlistReducer = (state = [], action) => {
  switch(action.type) {
    case PLAYLIST_FETCHED:
      return action.playlist
    default:
      return state
  }
}

export default playlistReducer