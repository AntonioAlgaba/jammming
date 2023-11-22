import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults";
import songData from "../../Data.json";
//import Playlist from "../Playlist/Playlist";



const App = () => {
 
    return (
        <div>
            <h1>JAMMMing</h1>
            <div className="App">
               <SearchBar />
               <div className="App-playlist">
                 <SearchResults data={songData}/>
                {/* <Playlist />*/}
               </div>
            </div>
        </div>
    )
}

export default App;