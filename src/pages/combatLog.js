import React from 'react'
import styled from "styled-components";
import { useState } from "react";
import NavBar from '@/components/navBar';


function combatLog() {

    const [selectedStaff, setSelectedStaff] = useState("");
    const [judgment, setJudgment] = useState("");
    const [ticketNumber, setTicketNumber] = useState("");
    const [evidence, setEvidence] = useState("");
    const [whistleblower, setWhistleblower] = useState("");
    const [id, setId] = useState("");
    const [cdsDisconnect, setCdsDisconnect] = useState("");

    const staffResp = [
        { id: 1, name: "Vulcano", discId: "660278234428080138" },
        { id: 2, name: "Gigi", discId: "942564213656797224" }
    ];

    const handleJudgmentChange = (event) => setJudgment(event.target.value);
    const handleTicketNumberChange = (event) => setTicketNumber(event.target.value);
    const handleStaffChange = (event) => setSelectedStaff(event.target.value);
    const handleEvidenceChange = (event) => setEvidence(event.target.value);
    const handleWhistleblowerChange = (event) => setWhistleblower(event.target.value);
    const handleIdChange = (event) => setId(event.target.value);
    const handleCdsDisconnectChange = (event) => setCdsDisconnect(event.target.value);
    return (
        <div>        <FormDiv>
            <form>
                <NavBar />
                <h1>CombatLogging</h1>
                <FormGroup>
                    <LabelForm>CDS</LabelForm>
                    <Input type="text" value={cdsDisconnect} onChange={handleCdsDisconnectChange} />
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
                    <Input type="text" value={id} onChange={handleIdChange} />
                </FormGroup>
                <FormGroup>
                    <LabelForm>Prova</LabelForm>
                    <Input type="text" value={evidence} onChange={handleEvidenceChange} />
                </FormGroup>
            </form>
        </FormDiv>
            <FormAproveResult>
                <p>
                    :1129discord:・**CDS**<br />
                    **DISCONNECT:**<br /> <br />
                    - CDS {cdsDisconnect}<br /> <br />
                    :baixinha7_duvidas:・**JULGAMENTO:**<br />
                    - {judgment} <br /> <br />
                    `1.` Resolvido por: &lt;@{staffResp.find(staff => staff.id === parseInt(selectedStaff))?.discId || "Nenhum selecionado"}&gt;<br />
                    `2.` Aprovado por:<br />
                    `3.` Ticket Nmr: {ticketNumber}<br />
                    `4.` Denunciante: {whistleblower} | @ <br />
                    `5.` Denunciado: {id} |&lt;@&gt; <br />
                    `6.` Julgamento: **APROVADO**<br />
                    `7.` Motivo: 40.17 - COMBAT LOGGING<br />
                    `8.` Tempo e Punição: 3 DIAS + @adv<br />
                    `9.` Provas: {evidence}
                </p>
            </FormAproveResult>
        </div>
    )
}
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
`;

const Input = styled.input`
  flex: 2;
  padding: 5px;
`;

const InputTextArea = styled.textarea`
  flex: 2;
  padding: 5px;
  height: 100px; /* Ajuste a altura conforme necessário */
`;

const SelectInput = styled.select`
width: 397.41px;
`;

const FormAproveResult = styled.div`
  padding: 0% 25% 0% 25%;
`;

export default combatLog