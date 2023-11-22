import React from "react";
import "./SearchBar.css";




const SearchBar = () => {
  
    return (
        <div className="SearchBar">
            <input 
                
                placeholder="Enter a song"
                
                />
            <button className="SearchButton">Search</button>
        </div>
    )
}

export default SearchBar;