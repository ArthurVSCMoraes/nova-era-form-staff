import React from "react";
import styled from 'styled-components';
import textForms from '../data/textsForForms';
import { FaRegCopy } from "react-icons/fa";

const TextBar = ({ filter, onTextSelect }) => {

    // Função para copiar o texto e atualizar o campo de julgamento
    const handleTextClick = async (textToCopy) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            console.log('Texto copiado para a área de transferência');
            // Atualiza o campo de julgamento com o texto clicado
            if (onTextSelect) {
                onTextSelect(textToCopy);
            }
        } catch (err) {
            console.log('Falha ao copiar o texto', err);
        }
    };

    // Filtra os textos com base no resultado fornecido
    const filteredTexts = textForms.filter(text => text.result === filter);

    return (
        <Sidebar>
            {filteredTexts.map(text => (
                <TextItem key={text.id}>
                    <h2>
                        {text.title}:
                        <FaRegCopy 
                            onClick={() => handleTextClick(text.Text)} 
                            style={{ marginLeft: '10px', cursor: 'pointer' }}
                        />
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
  background-color: #0a0a0a;
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
