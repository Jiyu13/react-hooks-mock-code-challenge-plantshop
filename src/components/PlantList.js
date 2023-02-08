import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants, onDeletePlant, onEditPrice } ) {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {/* should add "?" */}
      {plants?.map(plant => <PlantCard key={plant.id} 
                                       plant={plant} 
                                       onDeletePlant={onDeletePlant}
                                       onEditPrice={onEditPrice}
                            />
      )}
    </ul>
  );
}

export default PlantList;
