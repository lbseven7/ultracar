import React from 'react';
import ServiceCard from '../CardService';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const services = [
  {
    name: "Troca de óleo",
    description: "Troca de óleo do motor do veículo.",
    image: "https://example.com/troca-de-oleo.jpg"
  },
  {
    name: "Alinhamento e balanceamento",
    description: "Alinhamento e balanceamento das rodas do veículo.",
    imagem: "https://example.com/alinhamento-e-balanceamento.jpg"
  },
  {
    name: "Revisão preventiva",
    description: "Revisão completa do veículo para evitar problemas futuros.",
    imagem: "https://example.com/revisao-preventiva.jpg"
  }
];

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