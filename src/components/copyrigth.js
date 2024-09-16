import React from 'react';
import { ImFire } from "react-icons/im";
import styled from 'styled-components';

function Copyrigth() {
  return (
    <StyledDiv>
      <Vulcano>
        VulcanoRJ
      </Vulcano>
      <ImFire />
    </StyledDiv>
  );
}

export default Copyrigth;

const Vulcano = styled.h4`
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: white; /* Garante que a cor da fonte é branca */
  margin: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const StyledDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px;
  opacity: 75%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
  border-radius: 5px; /* Opcional: arredonda os cantos do fundo */
  z-index: 1000; /* Garante que o elemento sobreponha outros */
  display: flex;
  align-items: center;
  background-image: url(https://c.tenor.com/5RKB-LuSHb0AAAAC/fire.gif); /* Imagem de fundo de fogo */
  background-size: cover; /* Ajusta o tamanho da imagem de fundo */
  background-repeat: no-repeat; /* Evita a repetição da imagem de fundo */
  background-position: center; /* Centraliza a imagem de fundo */

  svg {
    margin: 0 5px;
    font-size: 20px; /* Ajusta o tamanho dos ícones */
  }
`;
