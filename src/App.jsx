import { useState, useEffect } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import { fetchStarships } from "./services/starshipService.js";
import "./App.css";

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  useEffect(() => {
    fetchStarships()
      .then((data) => {
        setStarshipsData(data);
        setDisplayedStarships(data);
      })
      .catch((error) => console.error("Error fetching starships:", error));
  }, []);

  const handleSearch = (term) => {
    setPrevSearchTerm(term);
    const filtered = starshipsData.filter((ship) =>
      ship.name.toLowerCase().includes(term.toLowerCase())
    );
    setDisplayedStarships(filtered);
  };

  const resetSearch = () => {
    setDisplayedStarships(starshipsData);
    setSearchTerm("");
    setPrevSearchTerm("");
  };

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <StarshipSearch onSearch={handleSearch} searchTerm={searchTerm} resetSearch={resetSearch} />
      <p>Number of results: {displayedStarships.length}</p>
      <p>
        {prevSearchTerm
          ? `Last search: ${prevSearchTerm}`
          : "Search for a starship by name."}
      </p>
      <StarshipList starships={displayedStarships} />
    </div>
  );
};

export default App;

