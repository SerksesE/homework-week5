import React from 'react'

export default function PlaylistForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>
          <input value={props.values.name} onChange={props.onChange} type="text" name="name" placeholder="Title" />
        </label>
        <input  type="submit" value="Add Playlist" />
      </form>
    </div>
  )
}