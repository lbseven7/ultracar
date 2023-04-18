import React from 'react';

function ServiceCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.alt} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ServiceCard;