import React, { useState } from "react";

function NewPlantForm() {


  const initialValue = {
    name: "",
    image: "",
    price: ""
  }

  const [formData, setFormData] = useState(initialValue)

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
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
