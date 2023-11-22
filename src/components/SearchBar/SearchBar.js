import React, { useState} from "react";
import "./SearchBar.css";




const SearchBar = ({ onSearch }) => {
   const [searchTerm, setSearchTerm] = useState("");

   const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
   }

   const handleSearch = () => {
    onSearch(searchTerm);
   }
    return (
        <div className="SearchBar">
            <input 
                type="text"
                placeholder="Enter a song"
                value={searchTerm}
                onChange={handleChange}
                
                />
            <button className="SearchButton" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;