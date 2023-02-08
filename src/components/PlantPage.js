import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantData => setPlants(plantData))
  }, [])


  function onAddPlant(newObj) {
    setPlants([...plants, newObj])
  }

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
