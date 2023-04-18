import React from 'react';
import ServiceCard from '../CardService';
import ServicesContainer from './style';
import services from '../../mocks/services';

function Services() {
  return (
    <ServicesContainer className="services-container">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          img={service.img}
          alt={service.alt}
          name={service.name}
          description={service.description}
        />
      ))}
    </ServicesContainer>
  )
}

export default Services;