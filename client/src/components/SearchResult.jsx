import React from "react";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const location = useLocation();
  const searchResults = location.state ? location.state.searchResults : [];

  return (
    <div className="search-results-container">
      {searchResults.length > 0 ? (
        searchResults.map((item) => (
          <div key={item.id} className="search-item">
            <img src={item.image} alt={item.name} />
            <div className="search-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: Rs {item.price}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="no-results">No results found</div>
      )}
    </div>
  );
};

export default SearchResult;
