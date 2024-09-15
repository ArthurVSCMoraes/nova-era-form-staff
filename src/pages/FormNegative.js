import { useState, useRef } from "react";
import styled from "styled-components";
import NavBar from "../components/navBar";
import staffResp from "../data/staffResp";
import TextBar from "@/components/TextBar";

export default function FormNegative() {

    const [selectedStaff, setSelectedStaff] = useState("");
    const [judgment, setJudgment] = useState("");
    const [ticketNumber, setTicketNumber] = useState("");
    const [whistleblower, setWhistleblower] = useState("");

    // Refs para acessar o conteúdo da tag <p>
    const pRef = useRef(null);

    // Função para copiar o texto
    const copyToClipboard = async () => {
        try {
            if (pRef.current) {
                const textToCopy = pRef.current.innerText;
                await navigator.clipboard.writeText(textToCopy);
                console.log('Texto copiado para a área de transferência');
            }
        } catch (err) {
            console.log('Falha ao copiar o texto', err);
        }
    };

    // Função para atualizar o estado do campo de julgamento
    const handleTextSelect = (text) => {
        setJudgment(text);
    };

    // Funções para atualizar os estados
    const handleJudgmentChange = (event) => setJudgment(event.target.value);
    const handleTicketNumberChange = (event) => setTicketNumber(event.target.value);
    const handleStaffChange = (event) => setSelectedStaff(event.target.value);
    const handleWhistleblowerChange = (event) => setWhistleblower(event.target.value);

    return (
        <>
            <NavBar />
            <TiltePage>Formulário de denúncia negada</TiltePage>
            <MainDiv>
                <FormDiv>
                    <form>
                        <FormGroup>
                            <LabelForm>Resolvido por:</LabelForm>
                            <SelectInput id="staff" name="staffDiscId" onChange={handleStaffChange} value={selectedStaff}>
                                <option value="">Selecione</option>
                                {staffResp.map((staff) => (
                                    <option key={staff.id} value={staff.id}>
                                        {staff.name}
                                    </option>
                                ))}
                            </SelectInput>
                        </FormGroup>
                        <FormGroup>
                            <LabelForm>JULGAMENTO</LabelForm>
                            <Input type="text" value={judgment} onChange={handleJudgmentChange} />
                        </FormGroup>
                        <FormGroup>
                            <LabelForm>Número do Ticket</LabelForm>
                            <Input type="text" value={ticketNumber} onChange={handleTicketNumberChange} />
                        </FormGroup>
                        <FormGroup>
                            <LabelForm>Denunciante</LabelForm>
                            <Input type="text" value={whistleblower} onChange={handleWhistleblowerChange} />
                        </FormGroup>
                    </form>
                </FormDiv>
                <VerticalLine />
                <FormAproveResult>
                    <p ref={pRef}>
                        :baixinha7_duvidas:・**JULGAMENTO:**<br />
                        - {judgment} <br /> <br />
                        `1.` Resolvido por: &lt;@{staffResp.find(staff => staff.id === parseInt(selectedStaff))?.discId || "Nenhum selecionado"}&gt;<br />
                        `2.` Aprovado por:<br />
                        `3.` Ticket Nmr: {ticketNumber}<br />
                        `4.` Denunciante: {whistleblower} | @ <br />
                        `6.` Julgamento: **NEGADO**<br />
                    </p>
                    <ButtonToCopy onClick={copyToClipboard}>Copiar Formulário</ButtonToCopy>
                </FormAproveResult>
            </MainDiv>
            <TextBar filter='denied' onTextSelect={handleTextSelect} />
        </>
    );
}

const TiltePage = styled.h1`
text-align: center;
padding: 10px 0px;
`;

const MainDiv = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding-top: 25px;
  justify-content: space-evenly;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const LabelForm = styled.label`
  flex: 1;
  margin-right: 10px;
  text-align: right;
  width: 150px; /* Ajuste o valor conforme necessário */
`;

const Input = styled.input`
  flex: 2;
  padding: 5px;
  max-width: 350px;
  border-radius: 10px;
  height: 30px;
`;

const SelectInput = styled.select`
  width: 350px;
  border-radius: 10px;
  height: 30px;
`;

const FormAproveResult = styled.div`
  min-width: 500px;
  border: solid white 3px;
  border-radius: 20px;
  margin: 25px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonToCopy = styled.button`
  display: block;
  background-color: #0e0e0e;
  color: white;
  padding: 10px;
  margin: 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  width: 100%; /* Faz com que cada link ocupe toda a largura disponível */
  max-width: 200px; /* Define um limite máximo de largura para cada botão */
  box-sizing: border-box; /* Inclui padding e border no cálculo da largura total */
  &:hover {
    background-color: #f8f8ff;
    color: #0e0e0e; 
  }
`;

const VerticalLine = styled.div`
  width: 5px;
  background-color: white;
  height: 300px;
  margin: 25px 20px; /* Ajuste a margem para dar espaço entre a linha e os outros componentes */
  border-radius: 20px;
  padding-top: 25px;
`;
