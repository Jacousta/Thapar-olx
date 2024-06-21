import React from "react";

function Search(){
  function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }

  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }
  return (
    <div>
      <div id="myOverlay" className="overlay">
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">
          x
        </span>
        <div className="overlay-content">
          <form action="/action_page.php">
            <input type="text" placeholder="Search" name="search" />
            <button type="submit">
              go
            </button>
          </form>
        </div>
      </div>
      <div>
      <button className="opensearch" onClick={openSearch}>
        Search
      </button>
      </div>
    </div>

  );
};

export default Search;
