import React from "react";
import "./SearchResults.css";

//import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ data }) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            {data.map((value, key) => {
                return <div>
                    <h3>{value.name}</h3>
                    <p>
                        {value.artist} | {value.album}
                    </p>
                </div>
            })}
        </div>
    );
};

export default SearchResults;