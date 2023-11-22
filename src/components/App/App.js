import React, { useState } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults";
import songData from "../../Data.json";
//import Playlist from "../Playlist/Playlist";



const App = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm) => {
        const results = songData.filter(song =>
            Object.values(song).some(value =>
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
          setSearchResults(results);
    };
    return (
        <div>
            <h1>JAMMMing</h1>
            <div className="App">
               <SearchBar onSearch={handleSearch}/>
               <div className="App-playlist">
                 <SearchResults searchResults={searchResults}/>
                {/* <Playlist />*/}
               </div>
            </div>
        </div>
    )
}

export default App;