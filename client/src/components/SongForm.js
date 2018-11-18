import React from 'react'

export default function SongForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>
          <input value={props.values.name} onChange={props.onChange} type="text" name="title" placeholder="Title" />
          <input value={props.values.name} onChange={props.onChange} type="text" name="artist" placeholder="Artist" />
          <input value={props.values.name} onChange={props.onChange} type="text" name="album" placeholder="Album" />
        </label>
        <input  type="submit" value="Add Song" />
      </form>
    </div>
  )
}