import React from "react";
import TrackList from "./Tracklist";
function Playlist(props) {
  // console.log(props)
  const handleNameChange = (e) => {
    props.onNameChange(e.target.value);
  }
  return (
    <>
      <div
        className="bg-Fatima-result bg-opacity-70   md:mb-8 mr-123 
     overflow-y-scroll p-2 w-1/3 ml-60 overflow-hidden boxShadow-3xl 
     sm:w-11/12 sm-item-center max-h-96 max-xl:w-11/12 "
      >
        <div className="w-full">
        <input  className="font-sans text-3xl font-bold bg-transparent text-left pl-2.5 mr-25" 
        value={props.playlistName} onChange={handleNameChange} />
        <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true}/>
          <button
            className="bg-Fatima-saveToSpot  border-0 text-center w-48 my-5
      py-2 px-0 font-medium text-btnfontSize cursor-pointer rounded-full text-white hover:bg-Fatima-saveHover "
      onClick={props.onSave}
          >
            SAVE TO SPOTIFY
          </button>
        </div>
      </div>
    </>
  );
}
export default Playlist;
