import React, { useState } from "react";

function NewPlantForm( { onAddPlant } ) {


  const initialValue = {
    name: "",
    image: "",
    price: ""
  }

  const [formData, setFormData] = useState(initialValue)

  function handleInput(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData, [name]:value})
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: parseInt(formData.price)
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(newObj => onAddPlant(newObj))

    setFormData(initialValue)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name}
          onChange={handleInput}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={handleInput}/>
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          value={formData.price}
          onChange={handleInput} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
