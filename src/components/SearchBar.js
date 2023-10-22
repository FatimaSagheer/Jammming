import React, { useState } from "react";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const search = (e) => {
    props.onSearch(searchTerm);
  }
  return (
    <>
      <div className="flex items-center flex-col mb-100  pt-40 mb-8">
        <input
        
          onChange={handleTermChange}
          type="text"
          id="searchTerm"
          placeholder="Enter A Song, Album, or Artist .... "
          className="block flex-1 border-0 
      bg-Fatima-textColor py-1.5 
      pl-1 text-gray-900   text-Fatima-bgTextInput  border-white text-center text-lg my-6 py-2 px-0  w-72"
        ></input>
        <button
          className="bg-Fatima-btn  border-0 text-center w-28
      py-2 px-0 font-medium text-btnfontSize cursor-pointer rounded-full text-white hover:bg-Fatima-btnHover "
      onClick={search}
        >
          SEARCH
        </button>
      </div>
     
    </>
  );
}
export default SearchBar;
