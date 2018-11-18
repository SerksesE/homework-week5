import React from 'react'
import { connect } from 'react-redux'
import PlaylistDetails from './PlaylistDetails'
import { loadPlaylist, deletePlaylist } from '../actions/playlists'

class PlaylistDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadPlaylist(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deletePlaylist(Number(this.props.playlist.id))
    this.props.history.push('/')
  }

  render() {
    return (<PlaylistDetails
      onDelete={this.onDelete}
      playlist={this.props.playlist} />)
  }
}

const mapStateToProps = state => ({
  playlist: state.playlistReducer.playlist
})

export default connect(mapStateToProps, { loadPlaylist, deletePlaylist })(PlaylistDetailsContainer)