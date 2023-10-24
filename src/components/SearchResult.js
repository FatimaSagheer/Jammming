import React from 'react';
import TrackList from './Tracklist';

function SearchResult(props){
  // console.log(props,'search Result')
    return (
      <div className="bg-Fatima-result bg-opacity-80  ml-123
     overflow-y-scroll p-2 w-1/2  overflow-hidden boxShadow-3xl md:mb-8 md:mb-8 sm:mb-6 sm:w-11/12 max-h-96 
     max-xl:mb-6 max-xl:w-11/12">
      <h2 className="font-sans text-3xl font-bold text-left pl-2.5">Results</h2>
      {/* <Tracks tracks={props.searchResult} onAdd={props.onAdd} isRemoval={false}/> */}
      <TrackList 
      tracks={props.searchResult} 
      onAdd={props.onAdd} 
      isRemoval={false}/>
      </div>
    );
}
export default SearchResult;
