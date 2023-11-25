import React from "react";
import "./Tracklist.css";

import Track from "../Track/Track";

const Tracklist = ({ tracks, onAdd, onRemove, isRemoval }) => {
   return (
    <div className="Tracklist">
        {tracks.map((track) => {
                return (
                <Track 
                track={track}
                key={track.id}
                onAdd={onAdd}
                onRemove={onRemove}
                isRemoval={isRemoval}/>
                );
            })} 
    </div>
   );
};

export default Tracklist;