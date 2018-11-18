import React from 'react'
import { loadPlaylists } from '../actions/playlists'
import { connect } from 'react-redux'
import Playlists from './Playlists'
import {Link} from 'react-router-dom'

class PlaylistsContainer extends React.Component {
  componentDidMount() {
    this.props.loadPlaylists()
  }

  renderList = () => {
    if (!this.props.playlists) {
      return 'Loading playlists...'
    }
    return this.props.playlists.map(playlist => 
    <li key={playlist.id}><Link to={`/playlists/${playlist.id}`}>
    { playlist.name }</Link></li>)
  }

  render() {
    console.log(this.props.playlists)
    return <Playlists playlists={this.props.playlists} renderList={this.renderList}/>
  }
}

const mapStateToProps = state => ({
  playlists: state.playlistsReducer.playlists

})

export default connect(mapStateToProps, { loadPlaylists })(PlaylistsContainer)