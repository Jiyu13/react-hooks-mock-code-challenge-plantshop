import React, { useState } from "react";

function PlantCard( { plant, onDeletePlant } ) {
   
  const {id, name, image, price} = plant

  const [isInStock, setIsInSotck] = useState(true)

  const content = isInStock ? "In Stock" : "Out of Stock"
  const btnColor = isInStock ? "primary" : null

  function handleStock() {
    setIsInSotck(!isInStock)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(() => onDeletePlant(plant))
  }

  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className={btnColor} onClick={handleStock}>{content}</button>
      <button className="primary" onClick={handleDelete}>Delete</button>
      <button className="primary">Edit</button>
    </li>
  );
}

export default PlantCard;
