import React, { useState } from "react";

function PlantCard( { plant } ) {
   
  const {id, name, image, price} = plant

  const [isInStock, setIsInSotck] = useState(true)

  const content = isInStock ? "In Stock" : "Out of Stock"
  const btnColor = isInStock ? "primary" : null

  function handleStock() {
    setIsInSotck(!isInStock)
  }

  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className={btnColor} onClick={handleStock}>{content}</button>
    </li>
  );
}

export default PlantCard;
