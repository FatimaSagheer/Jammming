import React from "react";
function Tracks(props) {
  console.log(props.applicants)
  // props.applicants.map((item)=>{
  //   console.log(item.name)
  //  })
  return (
    <div className="Track">
      <div 
      // className="Track-info"
       className="flex flex-column w-67 bg=blue-700">
       <h3>dkcckdndkcn</h3>
       
        <p>Track List</p>
      </div>
      <button class="Add-Track">+</button>
    </div>
  );
}

export default Tracks;
