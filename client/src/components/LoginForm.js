import React from 'react'

export default function LoginForm(props) {
  return (
  <form onSubmit={props.onSubmit}> 
    <label>
      <input type="text" name="email" value={props.values.email} onChange={props.onChange} placeholder="email"/>
      <input type="password" name="password" value={props.values.password} onChange={props.onChange} placeholder="password"/>
    </label>
    
    <button type="submit">Login</button>
  </form>)
}