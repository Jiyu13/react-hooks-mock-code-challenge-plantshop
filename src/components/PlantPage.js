import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantData => setPlants(plantData))
  }, [])


  function onAddPlant(newObj) {
    setPlants([...plants, newObj])
  }

  function onSearchPlant(search) {
    setSearchText(search)
  }

  function onDeletePlant(deletedItem) {
    console.log(deletedItem)
    const updatedItems = plants.filter(plant => plant.id !== deletedItem.id) 
    setPlants(updatedItems)
  }

  const searchResults = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search onSearchPlant={onSearchPlant}/>
      <PlantList plants={searchResults} onDeletePlant={onDeletePlant}/>
    </main>
  );
}

export default PlantPage;
