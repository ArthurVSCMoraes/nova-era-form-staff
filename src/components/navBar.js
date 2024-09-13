import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Distribui os itens horizontalmente com espaçamento igual */
  width: 100%; /* Garante que o contêiner ocupe toda a largura da tela */
`;

const StyledLink = styled(Link)`
  display: block;
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  width: 100%; /* Faz com que cada link ocupe toda a largura disponível */
  max-width: 200px; /* Define um limite máximo de largura para cada botão */
  box-sizing: border-box; /* Inclui padding e border no cálculo da largura total */
  &:hover {
    background-color: darkgray; /* Alterar a cor ao passar o mouse */
  }
`;

export default NavBar;
