import React, { useState } from "react";

function PlantCard( { plant, onDeletePlant, onEditPrice } ) {
   
  const {id, name, image, price} = plant

  const [isInStock, setIsInSotck] = useState(true)
  const [isEditPrice, setEditPrice] = useState(false)

  const content = isInStock ? "In Stock" : "Out of Stock"
  const btnColor = isInStock ? "primary" : null
  const display = isEditPrice ? "none" : ""

  function handleStock() {
    setIsInSotck(!isInStock)
  }

  function handleEditClick() {
    setEditPrice(!isEditPrice)
    console.log(isEditPrice)
  }
  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(() => onDeletePlant(plant))
  }

  function handleEdit(e) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        price: parseInt(e.target.value)
      })
    })
    .then(res => res.json())
    .then(plant => onEditPrice(plant))
  }

  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {
        isEditPrice ? 
        <input placeholder="Enter New Price:" onChange={handleEdit}></input> : 
        <p>Price: {price}</p>
      }
      <button className={btnColor} onClick={handleStock} style={{display:display}}>{content}</button>
      <button className="primary" onClick={handleDelete} style={{display:display}}>Delete</button>
      <button className="primary" onClick={handleEditClick}>{isEditPrice ? "Save" : "Edit"}</button>
    </li>
  );
}

export default PlantCard;
