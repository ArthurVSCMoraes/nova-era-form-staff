import React from 'react';
import styled from 'styled-components';
import textForms from '../data/textsForForms';
import { FaCannabis  } from "react-icons/fa";
const TextBar = ({ filter }) => {
    // Filtra os textos com base no resultado fornecido
    const filteredTexts = textForms.filter(text => text.result === filter);

    return (
        <Sidebar>
            {filteredTexts.map(text => (
                <TextItem key={text.id}>
                    <h2>{text.title}:
                    <FaCannabis />
                        <br />
                    </h2>
                    <p>
                        {text.Text}
                    </p>
                </TextItem>
            ))}
        </Sidebar>
    );
};

const Sidebar = styled.div`
  width: 300px;
  height: 100vh;
  overflow-y: auto;
  background-color: #0a0a0a;;
  padding: 20px;
  border-right: 2px solid #ccc;
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 75.56px;
  border-left: solid white 2px;
`;

const TextItem = styled.div`
  margin-bottom: 15px;
  border-bottom: solid white 2px;
  padding-bottom: 5px;
`;

export default TextBar;
