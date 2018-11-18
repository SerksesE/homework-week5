import React from 'react'
import { connect } from 'react-redux'
import { createPlaylist } from '../actions/playlists'
import PlaylistForm from './PlaylistForm'

class PlaylistFromContainer extends React.Component {
  state = {
    name: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: ''
    })
    this.props.createPlaylist(this.state)
  }

  render() {
    return (<PlaylistForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createPlaylist})(PlaylistFromContainer)