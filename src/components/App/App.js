import React, { useState } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults";
//import songData from "../../Data.json";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";



const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const handleSearch = (searchTerm) => {
      Spotify.search(searchTerm)
      .then((results) => {
        setSearchResults(results);
      })
      .catch((error) => {
        console.error('Error searching for tracks:', error);
      });
    };

    const addTrackToPlaylist = (track) => {
      setPlaylistTracks([...playlistTracks, track]);
    }
    const removeTrackFromPlaylist = (track) => {
      const updatedPlaylist = playlistTracks.filter((t) => t.id !== track.id);
      setPlaylistTracks(updatedPlaylist);
  };

    return (
        <div>
            <h1>JAMMMing</h1>
            <div className="App">
               <SearchBar onSearch={handleSearch}/>
               <div className="App-playlist">
                 <SearchResults searchResults={searchResults} onAdd={addTrackToPlaylist}/>
                 <Playlist playlistTracks={playlistTracks} onRemove={removeTrackFromPlaylist}/>
               </div>
            </div>
        </div>
    )
}

export default App;