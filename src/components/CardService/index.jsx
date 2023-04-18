import React from 'react';
import { CardContainerStyle, CardImageStyle, CardTitleStyle, CardDescriptionStyle } from './style';

function ServiceCard(props) {
  return (
    <CardContainerStyle className="card">
      <CardImageStyle src={props.img} alt={props.alt} />
      <CardTitleStyle>{props.name}</CardTitleStyle>
      <CardDescriptionStyle>{props.description}</CardDescriptionStyle>
    </CardContainerStyle>
  );
}

export default ServiceCard;