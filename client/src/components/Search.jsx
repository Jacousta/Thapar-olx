import React, { useState } from "react";
import itemList from "../item"; // Assuming itemList contains your items data
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }

  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let filteredItems = itemList;

    if (selectedCategory) {
      filteredItems = itemList.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (searchQuery) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setSearchResults(filteredItems);
    navigate("/search-results", { state: { searchResults: filteredItems } });
  };

  return (
    <div>
      <div id="myOverlay" className="overlay">
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">
          x
        </span>
        <div className="overlay-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="clothing">Clothing</option>
              <option value="laptop">Laptop</option>
              <option value="vehicle">Vehicle</option>
              {/* Add more options as needed */}
            </select>
            <button type="submit">Go</button>
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
}

export default Search;
