import React from "react";
function Tracks(props) {
  // const { isRemoval, tracks, onAdd, onRemove } = props;
  // console.log(props.track,'tracks')
  const addTrack = () => {
    props.onAdd(props.track);
  };

  const removeTrack = () => {
    props.onRemove(props.track);
  };

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <p
          className="Track-action cursor-pointer p-2 text-lg transition-color duration-250 hover:text-gray-500"
          onClick={removeTrack}
        >
          -
        </p>
      );
    } else {
      return (
        <p
          className="Track-action cursor-pointer p-2 text-lg transition-color duration-250 hover:text-gray-500"
          onClick={addTrack}
        >
          +
        </p>
      );
    }
  };
  return (
    <>
      {/* <h2 className="font-sans text-3xl font-bold text-left pl-2.5">Results</h2> */}
      <div className="w-full">
      {/* {props.track.map((track, index) =>  */}
        <div   className="items-center flex border-b-white border-b ">
          <div className="flex flex-column h-50 justify-center grow py-2 px-0">
            <h3 className="text-left font-bold pl-2.5">{props.track.name}</h3>
            <p className="text-left pl-2.5">
              {props.track.artist} | {props.track.album}
            </p>
          </div>
          <a>{renderAction()}</a>
        </div>
         
      </div>
    </>
  );
}

export default Tracks;
