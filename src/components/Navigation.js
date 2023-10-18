import React from "react";
function Navigation() {
  const getMusic = async () => {
    console.log("dnjfnjn");
    try {
      // https://v1.nocodeapi.com/fatimasagheer/spotify/XIlmIXHmaegvUNQb/following
      let data = await fetch(
        "https://v1.nocodeapi.com/fatimasagheer/spotify/XIlmIXHmaegvUNQb/following"
      );
      // let data = await fetch("https://v1.nocodeapi.com/fatimasagheer/spotify/XIlmIXHmaegvUNQb/search?q=tracks");
      console.log("1");
      let convertedData = await data.json();
      console.log(convertedData,"2");
      const tracks = convertedData.tracks; // Assuming "tracks" is a property in the response
      console.log("3");
      if (tracks && tracks.items) {
        console.log(tracks.items); // Access the "items" array
      } else {
        console.log("Data structure not as expected.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand">Navbar</p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2 w-100"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                onClick={getMusic}
                className="btn btn-outline-warning"
                type="submit"
              >
                Get Music
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navigation;
