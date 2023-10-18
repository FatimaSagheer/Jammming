import React from "react";
import "./App.css";
import Tracks from "./components/SearchBar/Track";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const applicants = [ {
    name: 'Joe', 
    work: 'freelance-developer',
    blogs: '54', 
     id: '0',
  },
  {
    name: 'janet', 
    work: 'fullstack-developer', 
    blogs: '34', 
     id: '1',
  },

];

  // const [tracks, setTrack] = useState([]);
  return (
    <div className="App">
      <Title />
      <SearchBar />
      <div className="flex justify-between w-full bg-Fatima-playlistiv">
      <div className="bg-Fatima-playlistiv">
        <Tracks applicants={applicants}/>
      {/* {
      applicants.map(function(item) {
          <Tracks x={item.name}/>
         })
        } */}
      </div>
      <div>xmmdkmdkc</div>
    </div>
    </div>
  );
}

export default App;
