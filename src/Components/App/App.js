import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {id: 1, name: 'Come Together', artist: 'The Beatles', album: 'Abbey Road'},
        {id: 2, name: 'The Great Gig in the Sky', artist: 'Pink Floyd', album: 'Dark Side of the Moon'},
        {id: 3, name: 'Teardrop', artist: 'Massive Attach', album: 'Mezzanine'}
      ],
      playlistName: "Default",
      playlistTracks: [
        {id: 4, name: "Can't Stand It", artist: 'The Greenhornes', album: 'The Greenhornes'},
        {id: 5, name: 'There is An End', artist: 'The Greenhornes', album: 'Dual Mono'}
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    let trackExists = false;

    // check if the selected track is already in the existing playlist
    tracks.forEach(selectedTrack => {
      if (selectedTrack.id === track.id) {
        trackExists = true;
      }
    });

    // if the track is not in the playlist, add it!
    if(!trackExists) {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(selectedTrack => selectedTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
