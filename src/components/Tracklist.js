import React from "react";
import Tracks from "./Tracks";

function TrackList(props) {
  // console.log(props.tracks, "tracklist");
  return (
    <div className="w-full">
        { props.tracks.map(track => 
        <Tracks key={track.id} track={track} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}/>) }
    </div>
  );

}
export default TrackList;
