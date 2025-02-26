import StarshipCard from "./StarshipCard";

const StarshipList = ({ starships }) => {
  return (
    <div className="starship-list">
      {starships.length > 0 ? (
        starships.map((ship, index) => <StarshipCard key={index} ship={ship} />)
      ) : (
        <p>No starships found.</p>
      )}
    </div>
  );
};

export default StarshipList;
