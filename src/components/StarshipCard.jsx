const StarshipCard = ({ ship }) => {
    return (
      <div className="starship-card">
        <h2>{ship.name}</h2>
        <p><strong>Class:</strong> {ship.starship_class}</p>
        <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
        <p><strong>Model:</strong> {ship.model}</p>
      </div>
    );
  };
  
  export default StarshipCard;
  