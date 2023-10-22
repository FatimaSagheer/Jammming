import React, { useState } from "react";
import "./App.css";

import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import Playlist from "./components/PlayList";
import { Spotify } from "./utils/Spotify";


function App() {        

  const [searchResult, setSearchResult] = useState([
    {
      name:'FATIMA SAGHEER 1',
      artist:'artist 1',
      id:'1',
      album:'album 1'
  },
  {
    name:'AMINA SAGHEER 2',
    artist:'artist 2',
    id:'2',
    album:'album 2'
},
{
  name:'OMER HAIDER SAGHEER 3',
  artist:'artist 3',
  id:'3',
  album:'album 3'
}
  ]);
  const [playlistName, setPlaylistName] = useState('My playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name:'FATIMA SAGHEER 4',
      artist:'artist 4',
      id:'4',
      album:'album 4'
  },
  {
    name:'FATIMA SAGHEER 5',
    artist:'artist 5',
    id:'5',
    album:'album 5'
},
{
  name:'FATIMA SAGHEER 6',
  artist:'artist 6',
  id:'6',
  album:'album 6'
}
  ]);
// to add track in playlist
  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  };

  // remove from list 
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(item => item !== track));
  };

  //update play list 
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  //
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs);
    setPlaylistName('My playlist');
    setPlaylistTracks([]);
  };
  //
  const search = (searchTerm) => {
    Spotify.search(searchTerm)
      .then(tracks => setSearchResult(tracks));
  };

  return (
    <div className="App">
      <Title />
      <SearchBar onSearch={search} />
      <div className="flex justify-around w-full space-x-4 lg:flex lg:flex-row 
      lg:items-start lg:justify-around md:flex md:flex-col md:items-center md:justify-center ">
      <SearchResult  searchResult={searchResult} onAdd={addTrack}/>
      <Playlist playlistTracks={playlistTracks} 
       playlistName={playlistName} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}
     />
      </div>
      
    </div>
  );
}

export default App;
