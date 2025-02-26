import { useState } from "react";

const StarshipSearch = ({ onSearch, searchTerm, resetSearch }) => {
  const [input, setInput] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Starships..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchTerm && <button onClick={resetSearch}>Show all starships</button>}
    </div>
  );
};

export default StarshipSearch;
