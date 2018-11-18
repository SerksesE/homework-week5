import React from 'react'
import PlaylistFormContainer from './PlaylistFormContainer';

export default function Playlists(props) {
  return (
    <div>
      <h1>You have {props.playlists && props.playlists.length} Playlists!</h1>
      <ul>
        {props.renderList()}
      </ul>
      <PlaylistFormContainer/>
    </div>
  )
}