import React from 'react';
import Link from 'next/link';
import styled,{ keyframes } from 'styled-components';

function NavBar() {
    return (
        <NavContainer>
            <StyledLink href="/">
                Formulário Aprovado
            </StyledLink>
            <StyledLink href="/FormWithNoCds">
                Formulário Sem CDS
            </StyledLink>
            <StyledLink href="/combatLog">
                Formulário Combat-Logging
            </StyledLink>
            <StyledLink href="/FormNegative">
                Formulário Negado
            </StyledLink>
        </NavContainer>
    );
};

const NavContainer = styled.div`
display: flex;
justify-content: space-around; /* Distribui os itens horizontalmente com espaçamento igual */
width: 100%; /* Garante que o contêiner ocupe toda a largura da tela */
padding: 20px;
border-bottom: solid white 2px;
`
;

// Animação para a borda giratória
const scaleBorder = keyframes`
0% {
    transform: scale(0.1, 1);
    opacity: 0;
}
100% {
    transform: scale(1, 1);
    opacity: 1;
}
`
;

// Animação para o fundo do botão
const fadeBackground = keyframes`
0% {
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 1;
}
100% {
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 0;
};
`


const StyledLink = styled(Link)`
display: block;
background-color: #0e0e0e;
color: white;
padding: 10px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  width: 100%; /* Faz com que cada link ocupe toda a largura disponível */
  max-width: 200px; /* Define um limite máximo de largura para cada botão */
  box-sizing: border-box; /* Inclui padding e border no cálculo da largura total */
  position: relative; /* Necessário para posicionar os pseudo-elementos */
  overflow: hidden; /* Garante que os pseudo-elementos não ultrapassem os limites do botão */
  transition: all 0.3s; /* Transição suave para todas as propriedades */
  
  /* Estilo do texto dentro do botão */
  span {
    transition: all 0.3s;
}

/* Pseudo-elemento para a borda superior e inferior */
&::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255, 255, 255, 0.5);
    border-bottom-color: rgba(255, 255, 255, 0.5);
    transform: scale(0.1, 1);
}

/* Pseudo-elemento para o fundo do botão */
&::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.1);
}

/* Efeito de hover */
&:hover {
    color: black;
    background-color: #f8f8ff; /* Cor de fundo ao passar o mouse */
}

&:hover span {
    letter-spacing: 2px; /* Espaçamento das letras ao passar o mouse */
}

&:hover::before {
    animation: ${scaleBorder} 0.3s forwards;
}

&:hover::after {
    animation: ${fadeBackground} 0.3s forwards;
}
;
`


export default NavBar;