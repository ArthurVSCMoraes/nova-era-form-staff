import React from 'react';
import styled from 'styled-components';
import textForms from '../data/textsForForms';
import { FaRegCopy } from 'react-icons/fa';

const TextBar = ({ filter, onTextSelect }) => {
    const handleCopyAndSelect = (text) => {
        onTextSelect(text);
    };

    const filteredTexts = textForms.filter(text => text.result === filter);

    return (
        <Sidebar>
            {filteredTexts.map(text => (
                <TextItem key={text.id}>
                    <h2>
                        {text.title}:
                        <FaRegCopy onClick={() => handleCopyAndSelect(text.Text)} />
                    </h2>
                    <p>{text.Text}</p>
                </TextItem>
            ))}
        </Sidebar>
    );
};

const Sidebar = styled.div`
  width: 100%; /* Ajuste a largura conforme necessário */
  padding: 20px;
  background-color: #0a0a0a;
  color: #fff;
  overflow-y: auto;
`;

const TextItem = styled.div`
  margin-bottom: 15px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 15px;
  cursor: pointer; /* Adiciona um cursor pointer para indicar que o texto é clicável */
`;

export default TextBar;
