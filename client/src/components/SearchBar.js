import React, { useState, useEffect } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchOptions(query);
  }, [query]);

  const fetchOptions = (query) => {
    // TODO: build a endpoint that returns options for the users
  };
  return (
    <div>
      <div className={"search-header"}>
        <label for="search">Input a key word...</label>
      </div>
      <div>
        <input
          id="search"
          type="text"
          className={"search-input"}
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
