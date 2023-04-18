import React from 'react';
import { CardContainerStyle, CardImage, CradTitle, CardDescriptionStyle } from './style';

function ServiceCard(props) {
  return (
    <CardContainerStyle className="card">
      <CardImage src={props.img} alt={props.alt} />
      <CradTitle>{props.name}</CradTitle>
      <CardDescriptionStyle>{props.description}</CardDescriptionStyle>
    </CardContainerStyle>
  );
}

export default ServiceCard;