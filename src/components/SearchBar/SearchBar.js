import React from "react";

function SearchBar() {
 
  return (
     <>
     <div className='flex items-center flex-column mb-100  pt-40 mb-8'>  
      <input placeholder="Enter A Song, Album, or Artist .... " className=" border-0  px-4 py-2 w-72 mb-8" />
      <button className="bg-Fatima-btn  border-0 text-center w-28
      py-2 px-0 font-medium text-btnfontSize cursor-pointer rounded-full text-white hover:bg-Fatima-btnHover ">
        SEARCH</button>
    </div>
    
    </>
  );
}
export default SearchBar;
