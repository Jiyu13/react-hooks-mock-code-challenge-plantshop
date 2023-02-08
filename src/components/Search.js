import React from "react";

function Search( { onSearchPlant } ) {

  

  function handleSearch(e) {
    const search = e.target.value
    onSearchPlant(search)

  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
