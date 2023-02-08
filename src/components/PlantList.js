import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants, onDeletePlant } ) {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {/* should add "?" */}
      {plants?.map(plant => <PlantCard key={plant.id} plant={plant} onDeletePlant={onDeletePlant} />)}
    </ul>
  );
}

export default PlantList;
