import React, { useState } from "react";

function PlantCard( { plant } ) {
   
  const {id, name, image, price} = plant

  const [isInStock, setIsInSotck] = useState(true)

  function handleStock() {
    setIsInSotck(!isInStock)
  }

  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
