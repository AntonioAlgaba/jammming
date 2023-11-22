import React from "react";
import "./SearchResults.css";

import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ searchResults, onAdd }) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={searchResults} onAdd={onAdd}/>
           {/* {data.map((song, key) => {
                return <div>
                    <h3>{song.name}</h3>
                    <p>
                        {song.artist} | {song.album}
                    </p>
                </div>
            })} */}
        </div>
    );
};

export default SearchResults;