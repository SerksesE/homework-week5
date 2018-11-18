import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import PlaylistsContainer from './components/PlaylistsContainer'
import PlaylistDetailsContainer from './components/PlaylistDetailsContainer';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path='/' component={PlaylistsContainer} />
          <Route exact path='/playlists/:id' component={PlaylistDetailsContainer} />
        </div>
    );
  }
}

export default App;
