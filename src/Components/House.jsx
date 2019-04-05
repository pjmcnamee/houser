import React from "react";
import cross from '../images/delete_button.png'

export default function House(props) {
  return (
    <div className="house-card">
      <div>
        <img src={props.house.img} alt={props.house.name} />
      </div>
      <div>
        <p>Property Name: {props.house.name}</p>
        <p>Address: {props.house.address}</p>
        <p>City: {props.house.city}</p>
        <p>State: {props.house.state}</p>
        <p>Zip: {props.house.zip}</p>
      </div>
      <div>
        <p>Rent: {props.house.rent}</p>
        <p>Mortgage: {props.house.mortgage}</p>
      </div>
      <img className='delete' alt='delete' src={cross} onClick={() => props.deleteHouse(props.house.id)}/>
    </div>
  );
}
