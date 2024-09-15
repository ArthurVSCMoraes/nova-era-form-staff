import React from 'react';
import { ImFire } from "react-icons/im";

import styled from 'styled-components';

function Copyrigth() {
  return (
    <StyledDiv>
      <Vulcano>
        VulcanoRJ <ImFire />
      </Vulcano>
    </StyledDiv>
  );
}

export default Copyrigth;

const Vulcano = styled.h4`
font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
`;

const StyledDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px;
  opacity: 80%;
  background-color: rgba(0, 0, 0, 0.5); /* Adiciona um fundo semitransparente */
  color: white; /* Define a cor do texto */
  border-radius: 5px; /* Opcional: arredonda os cantos do fundo */
  z-index: 1000; /* Garante que o elemento sobreponha outros */
  display: flex;
  align-items: center;

  h4 {
    margin: 0;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  svg {
    margin: 0 5px;
    font-size: 20px; /* Ajusta o tamanho dos ícones */
  }
`;
