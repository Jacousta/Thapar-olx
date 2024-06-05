import React from 'react';

function SearchContainer(){
  return (
    <div id="search-container">
      <input type="search" id="search-input" placeholder="Search Product Name Here!..." />
      <img id="search" src="images/search_btn.svg" alt="" />
    </div>
  );
};

export default SearchContainer;
