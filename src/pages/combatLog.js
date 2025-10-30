import React, { useState, useRef } from "react";
import styled from "styled-components";
import NavBar from "@/components/navBar";
import staffResp from "../data/staffResp";
import Copyrigth from "@/components/copyrigth";
import { parseDisconnectLog } from "../functions/logTrasformDisconnect";
import TextBar from "@/components/TextBar";

function CombatLog() {
    // Estados para armazenar os dados
    const [logText, setLogText] = useState("");
    const [parsedData, setParsedData] = useState({
        whistleblower: "",
        cdsDisconnect: "",
        reported: "",
    });
    const [selectedStaff, setSelectedStaff] = useState("");
    const [judgment, setJudgment] = useState("");
    const [ticketNumber, setTicketNumber] = useState("");
    const [evidence, setEvidence] = useState("");
    const [whistleblower, setWhistleblower] = useState("");
    const [isOutsideDiscord, setIsOutsideDiscord] = useState(false); // Estado para o checkbox

    // Refs para acessar o conteúdo da tag <p>
    const pRef = useRef(null);

    // Função para lidar com mudanças no texto do log
    const handleLogChange = (event) => {
        const text = event.target.value;
        setLogText(text);
        const data = parseDisconnectLog(text);
        setParsedData(data); // Atualiza os dados analisados
    };

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

    const handleJudgmentChange = (event) => setJudgment(event.target.value);
    const handleTicketNumberChange = (event) => setTicketNumber(event.target.value);
    const handleStaffChange = (event) => setSelectedStaff(event.target.value);
    const handleEvidenceChange = (event) => setEvidence(event.target.value);
    const handleWhistleblowerChange = (event) => setWhistleblower(event.target.value);
    const handleCheckboxChange = () => setIsOutsideDiscord(prev => !prev); // Alternar estado do checkbox
    const handleIdChange = (event) => setParsedData(prev => ({ ...prev, reported: event.target.value })); // Atualiza o valor do denunciado
    const handleTextSelect = (text) => {
        setJudgment(text); // Ou outra lógica que você precise
    };

    return (
        <div>
            <NavBar />
            <TiltePage>Formulário para CombatLogging</TiltePage>
            <MainDivHome>
                <FormDiv>
                    <form>
                        <FormGroup>
                            <LabelForm>Log</LabelForm>
                            <InputTextArea value={logText} onChange={handleLogChange} />
                        </FormGroup>
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
                        <FormGroup>
                            <LabelForm>Denunciado</LabelForm>
                            <Input type="text" value={parsedData.reported} onChange={handleIdChange} />
                        </FormGroup>
                        <FormGroup>
                                    <LabelForm>Fora do Discord</LabelForm>
                                    <DivCheckbox>
                                        <Texte5_1><blond>SIM</blond></Texte5_1>
                                        <Texte5_2><blond>NÃO</blond></Texte5_2>
                                        <CheckboxInput
                                            type="checkbox"
                                            id="caseCocher5-1"
                                            checked={isOutsideDiscord}
                                            onChange={handleCheckboxChange}
                                        />
                                        <LabelCheckbox htmlFor="caseCocher5-1">&#128500;</LabelCheckbox>
                                    </DivCheckbox>
                                </FormGroup>
                        <FormGroup>
                            <LabelForm>Prova</LabelForm>
                            <Input type="text" value={evidence} onChange={handleEvidenceChange} />
                        </FormGroup>
                    </form>
                </FormDiv>
                <VerticalLine />
                <FormAproveResult>
                    <p ref={pRef}>
                        :discordnovaera:・**CDS**
                        <br />
                        **DISCONNECT:**
                        <br /> <br />- CDS {parsedData.cdsDisconnect}
                        <br /> <br />
                        :duvidasnovaera:・**JULGAMENTO:**
                        <br />- {judgment} <br /> <br />
                        `1.` Resolvido por: &lt;@
                        {staffResp.find((staff) => staff.id === parseInt(selectedStaff))?.discId || "Nenhum selecionado"}
                        &gt;
                        <br />
                        `2.` Aprovado por:
                        <br />
                        `3.` Ticket Nmr: {ticketNumber}
                        <br />
                        `4.` Denunciante: {whistleblower} | @ <br />
                        `5.` Denunciado: {parsedData.reported} |&lt;@&gt; <br />
                        `6.` Julgamento: **APROVADO**
                        <br />
                        `7.` Motivo: 40.17 - COMBAT LOGGING
                        <br />
                        `8.` Tempo e Punição: {isOutsideDiscord ? "@ban ATÉ SUBIR SUPORTE. APÓS 3 DIAS + @adv" : "3 DIAS + @adv"}
                        <br />
                        `9.` Provas: {evidence}
                    </p>
                    <ButtonToCopy onClick={copyToClipboard}>Copiar Formulário</ButtonToCopy>
                </FormAproveResult>
            </MainDivHome>
            <TextBar filter='aproove' onTextSelect={handleTextSelect} />
            <Copyrigth />
        </div>
    );
}

const TiltePage = styled.h1`
    text-align: center;
    padding: 10px 0px;
`;

const MainDivHome = styled.div`
    padding: 50px;
    display: flex;
    justify-content: space-around;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    padding-top: 25px;
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

const InputTextArea = styled.textarea`
    flex: 2;
    padding: 5px;
    height: 100px; /* Ajuste a altura conforme necessário */
    max-width: 350px;
    border-radius: 10px;
    resize: none;
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
    height: 400px;
    margin: 25px 20px; /* Ajuste a margem para dar espaço entre a linha e os outros componentes */
    border-radius: 20px;
    padding-top: 25px;
`;

const DivCheckbox = styled.div`
    position: relative;
    margin: 2px;
    width: 86px;
    height: 30px;
    border-radius: 15px;
    background: #0a0a0a;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid #2d2d2d;
`;


const LabelCheckbox = styled.label`
position: absolute;
cursor: pointer;
width: 40px;
height: 24px;
border-radius: 15px 0 0 15px;
    background: #000000;
    color: #ffffff;
    text-align: center;
 transition: transform 0.5s ease, background 0.5s ease, border-radius 0.5s ease; 
`;

const CheckboxInput = styled.input`
    visibility: hidden;
    &:checked + ${LabelCheckbox} {
        transform: translateX(42px); /* Move para a direita */
        border-radius: 0 15px 15px 0;
        background: #ff0000; /* Cor quando "SIM" */
    }
`;

const Texte5_1 = styled.div`
position: absolute;
    left: 4px;
    top: 4px;
    width: 40px;
    height: 24px;
    line-height: 24px;
    color: #ff0000;
    text-align: center;
`;

const Texte5_2 = styled.div`
    position: absolute;
    left: 44px;
    top: 4px;
    width: 40px;
    height: 24px;
    line-height: 24px;
    color: #1FA055; 
    text-align: center;
`;

export default CombatLog;
