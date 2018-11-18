import React from 'react'
import SongFormContainer from './SongFormContainer';

export default function PlaylistDetails(props) {
  return (
    <div>
      {!props.playlist && 'Loading playlist data...'}
      {props.playlist && <div>
        <h1>{props.playlist.name}</h1>
        <button onClick={props.onDelete}>Delete</button>
      </div>}
      <SongFormContainer/>
    </div>
  )
}