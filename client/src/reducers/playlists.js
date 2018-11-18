import { PLAYLISTS_FETCHED, PLAYLIST_CREATE_SUCCESS, PLAYLIST_DELETE_SUCCESS } from '../actions/playlists'

const playlistsReducer = (state = [], action) => {
  switch (action.type) {
    case PLAYLISTS_FETCHED:
      return action.playlists
      case PLAYLIST_CREATE_SUCCESS:
      return { playlists: state.playlists.concat(action.playlists)}
      case PLAYLIST_DELETE_SUCCESS:
      return { playlists: state.playlists.filter(playlist => playlist.id !== action.id)}
    default:
      return state
  }
}

export default playlistsReducer