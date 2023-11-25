import React, { useState} from "react";
import "./Playlist.css";

import Tracklist from "../Tracklist/Tracklist";


const Playlist = ({ playlistTracks, onRemove }) => {
    const [playlistName, setPlaylistName] = useState("");

const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
};
    return (
        <div className="Playlist">
           <input value={playlistName} onChange={handleNameChange} placeholder="New Playlist"/>
           <Tracklist tracks={playlistTracks} onAdd={() => {}} onRemove={onRemove} isRemoval={true} />
           <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;