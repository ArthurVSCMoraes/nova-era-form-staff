import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../components/navBar";
import staffResp from "../data/staffResp";
import Copyrigth from "@/components/copyrigth";
import TextBar from "@/components/TextBar";

export default function FormWithNoCds() {
    const [selectedStaff, setSelectedStaff] = useState("");
    const [judgment, setJudgment] = useState("");
    const [ticketNumber, setTicketNumber] = useState("");
    const [evidence, setEvidence] = useState("");
    const [selectPunishment, setSelectPunishment] = useState("");
    const [id, setId] = useState("");
    const [whistleblower, setWhistleblower] = useState("");
    const [isOutsideDiscord, setIsOutsideDiscord] = useState(false); // Estado para o checkbox

    const punishment = [
        { id: 1, law: "40.1 - QUEBRA DE IMERSÃO", pena: "200 MESES + @adv" },
        { id: 2, law: "40.3 - ABUSO DE BUG", pena: "150 MESES + @adv" },
        { id: 3, law: "40.5 - BIND EM AÇÃO", pena: "150 MESES + @adv" },
        { id: 4, law: "40.6 - FALAR MORTO [OCC, /ME, VOICE, PAINEL POLICE]", pena: "200 MESES + @adv" },
        { id: 5, law: "40.7 - ABUSO DE PODER", pena: "250 MESES + @adv" },
        { id: 6, law: "40.11 - LOOT INDEVIDO", pena: "600 MESES + @adv" },
        { id: 7, law: "40.12 - ANTI-RP", pena: "600 MESES + @adv" },
        { id: 8, law: "40.13 - META-GAMING", pena: "600 MESES + @adv" },
        { id: 9, law: "40.14 - ZARALHO NO HOSPITAL", pena: "600 MESES + @adv" },
        { id: 10, law: "40.15 - POWERGAMING", pena: "200 MESES + @adv" },
        { id: 11, law: "40.16 - ANTI AMOR A VIDA", pena: "600 MESES + @adv OU PD DE PERSONAGENS EM AÇÕES EXPRESSIVAS, À DEPENDER DE ANALÍSE PRÉVIA" },
        { id: 12, law: "40.18 - USO DE NO-PROPS", pena: ": @ban ATÉ A REMOÇÃO + APÓS CONVERSÃO EM 300 MESES + @adv." },
        { id: 13, law: "40.19 - SEQUESTRAR FORA DO HORÁRIO PERMITIDO (DENTRO DO HORÁRIO DE PISTA)", pena: "300 MESES + @adv" },
        { id: 14, law: "40.20 - SEQUESTRAR PROFISSIONAIS LEGAIS (MECÂNICOS E MÉDICOS) CARACTERIZADOS", pena: "350 MESES + @adv" },
        { id: 15, law: "40.22 - DAR VOZ DE ASSALTO FORA DO HORÁRIO PERMITIDO", pena: "200 MESES + @adv" },
        { id: 16, law: "40.24 - ROUBAR VEÍCULO EM ÀREA SAFE", pena: "450 MESES + @adv" },
        { id: 17, law: "41.1 - DARK RP", pena: "@ban" },
        { id: 18, law: "41.4 - INVASÃO A DP", pena: "@ban" }
    ];

    const [denunciadoTexto, setDenunciadoTexto] = useState(` Denunciado: ${id} | <@>`);
    const [tempoEPunicaoTexto, setTempoEPunicaoTexto] = useState(` Tempo e Punição: ${punishment.find(pun => pun.id === parseInt(selectPunishment))?.pena || "Nenhum selecionado"}`);

    const pRef = useRef(null);

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

    useEffect(() => {
        setDenunciadoTexto(` Denunciado: ${id} | ${isOutsideDiscord ? "(FORA DO DC)" : "<@>"}`);
    }, [id, isOutsideDiscord]);

    useEffect(() => {
        const selectedPunishment = punishment.find(pun => pun.id === parseInt(selectPunishment))?.pena || "Nenhum selecionado";
        if (isOutsideDiscord) {
            setTempoEPunicaoTexto(` Tempo e Punição: @ban ATÉ SUBIR SUPORTE. APÓS ${selectedPunishment}`);
        } else {
            setTempoEPunicaoTexto(` Tempo e Punição: ${selectedPunishment}`);
        }
    }, [selectPunishment, isOutsideDiscord]);

    const handleTextSelect = (text) => {
        setJudgment(text);
    };

    const handleJudgmentChange = (event) => setJudgment(event.target.value);
    const handleTicketNumberChange = (event) => setTicketNumber(event.target.value);
    const handleStaffChange = (event) => setSelectedStaff(event.target.value);
    const handleEvidenceChange = (event) => setEvidence(event.target.value);
    const handlePunishmentChange = (event) => setSelectPunishment(event.target.value);
    const handleIdChange = (event) => setId(event.target.value);
    const handleWhistleblowerChange = (event) => setWhistleblower(event.target.value);
    const handleCheckboxChange = () => setIsOutsideDiscord(prev => !prev); // Alternar estado do checkbox

    return (
        <>
            <NavBar />
            <DivGridForm>
                <MainDivHome>
                    <TitlePage>Formulário de aprovada a denúncia sem CDS</TitlePage>
                    <DivForm>
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
                                <FormGroup>
                                    <LabelForm>Denunciado</LabelForm>
                                    <Input type="text" value={id} onChange={handleIdChange} />
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
                                    <LabelForm>Motivo</LabelForm>
                                    <SelectInput id="punishment" name="punishmentSelect" onChange={handlePunishmentChange} value={selectPunishment}>
                                        <option value="">Selecione</option>
                                        {punishment.map((pun) => (
                                            <option key={pun.id} value={pun.id}>
                                                {pun.law}
                                            </option>
                                        ))}
                                    </SelectInput>
                                </FormGroup>
                                <FormGroup>
                                    <LabelForm>Prova</LabelForm>
                                    <Input type="text" value={evidence} onChange={handleEvidenceChange} />
                                </FormGroup>
                            </form>
                        </FormDiv>
                        <VerticalLine />
                        <FormAproveResult>
                            <FormResult ref={pRef}>
                                :baixinha7_duvidas:・**JULGAMENTO:**<br />
                                - {judgment} <br /> <br />
                                `1.` Resolvido por: &lt;@{staffResp.find(staff => staff.id === parseInt(selectedStaff))?.discId || "Nenhum selecionado"}&gt;<br />
                                `2.` Aprovado por:<br />
                                `3.` Ticket Nmr: {ticketNumber}<br />
                                `4.` Denunciante: {whistleblower} | @ <br />
                                `5.` {denunciadoTexto}<br />
                                `6.` Julgamento: **APROVADO**<br />
                                `7.` Motivo: {punishment.find(pun => pun.id === parseInt(selectPunishment))?.law || "Nenhum selecionado"}<br />
                                `8.` {tempoEPunicaoTexto}<br />
                                `9.` Provas: {evidence}
                            </FormResult>
                            <ButtonToCopy onClick={copyToClipboard}>Copiar Formulário</ButtonToCopy>
                        </FormAproveResult>
                    </DivForm>
                </MainDivHome>
                <TextBarDiv>
                    <TextBar filter='aproove' onTextSelect={handleTextSelect} />
                </TextBarDiv>
            </DivGridForm>
            <Copyrigth />
        </>
    );
}

const TitlePage = styled.h1`
  text-align: center;
  padding: 10px 0;
`;

const DivGridForm = styled.div`
  display: grid;
  grid-template-columns: 80vw 20vw;
  gap: 20px;
  width: 100vw;
  height: calc(100vh - 77px);
`;

const MainDivHome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  overflow: auto; /* Adiciona rolagem se necessário */
`;

const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 150px;
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
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormResult = styled.p`
  max-width: 450px;
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
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
  &:hover {
    background-color: #f8f8ff;
    color: #0e0e0e;
  }
`;

const VerticalLine = styled.div`
  width: 5px;
  background-color: white;
  height: 400px;
  margin: 25px 20px;
  border-radius: 20px;
  padding-top: 25px;
`;

const TextBarDiv = styled.div`
  overflow-y: auto;
  border-left: solid white 2px;
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
