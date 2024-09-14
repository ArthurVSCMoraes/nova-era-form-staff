import { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/navBar";
import staffResp from "../data/staffResp";
export default function FormWithNoCds() {
  const [selectedStaff, setSelectedStaff] = useState("");
  const [judgment, setJudgment] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [evidence, setEvidence] = useState("");
  const [selectPunishment, setSelectPunishment] = useState("");
  const [id, setId] = useState("");
  const [whistleblower, setWhistleblower] = useState(""); 

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
    { id: 12, law: "40.18 - USO DE NO-PROPS E/OU NO-NIGHT", pena: "@ban ATÉ A REMOÇÃO + APÓS CONVERSÃO EM 300 MESES + @adv" },
    { id: 13, law: "40.19 - SEQUESTRAR FORA DO HORÁRIO PERMITIDO (DENTRO DO HORÁRIO DE PISTA)", pena: "300 MESES + @adv" },
    { id: 14, law: "40.20 - SEQUESTRAR PROFISSIONAIS LEGAIS (MECÂNICOS E MÉDICOS) CARACTERIZADOS", pena: "350 MESES + @adv" },
    { id: 15, law: "40.22 - DAR VOZ DE ASSALTO FORA DO HORÁRIO PERMITIDO", pena: "200 MESES + @adv" },
    { id: 16, law: "40.24 - ROUBAR VEÍCULO EM ÀREA SAFE", pena: "450 MESES + @adv" },
    { id: 17, law: "41.1 - DARK RP", pena: "@ban" },
    { id: 18, law: "41.4 - INVASÃO A DP", pena: "@ban" }
  ];

  // Funções para atualizar os estados
  const handleJudgmentChange = (event) => setJudgment(event.target.value);
  const handleTicketNumberChange = (event) => setTicketNumber(event.target.value);
  const handleStaffChange = (event) => setSelectedStaff(event.target.value);
  const handleEvidenceChange = (event) => setEvidence(event.target.value);
  const handlePunishmentChange = (event) => setSelectPunishment(event.target.value);
  const handleIdChange = (event) => setId(event.target.value);
  const handleWhistleblowerChange = (event) => setWhistleblower(event.target.value); 

  return (
    <>
      <div>
        <NavBar />
        <TiltePage>Formulário de aprovada a denúncia sem CDS</TiltePage>
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
              <Input type="text" value={whistleblower} onChange={handleWhistleblowerChange} /> {/* Corrigido */}
            </FormGroup>
            <FormGroup>
              <LabelForm>Denunciado</LabelForm>
              <Input type="text" value={id} onChange={handleIdChange} />
            </FormGroup>
            <FormGroup>
              <LabelForm>Motivo</LabelForm>
              <SelectInput id="punishment" name="punishmentSelect" onChange={handlePunishmentChange} value={selectPunishment}>
                <option value="">Selecione</option>
                {punishment.map((punishment) => (
                  <option key={punishment.id} value={punishment.id}>
                    {punishment.law}
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
        <FormAproveResult>
          <p>
            - {judgment} <br /> <br />
            `1.` Resolvido por: &lt;@{staffResp.find(staff => staff.id === parseInt(selectedStaff))?.discId || "Nenhum selecionado"}&gt;<br />
            `2.` Aprovado por:<br />
            `3.` Ticket Nmr: {ticketNumber}<br />
            `4.` Denunciante: {whistleblower} | @ <br /> {/* Corrigido */}
            `5.` Denunciado: {id} | &lt;@&gt; <br />
            `6.` Julgamento: **APROVADO**<br />
            `7.` Motivo: {punishment.find(pun => pun.id === parseInt(selectPunishment))?.law || "Nenhum selecionado"}<br />
            `8.` Tempo e Punição: {punishment.find(pun => pun.id === parseInt(selectPunishment))?.pena || "Nenhum selecionado"}<br />
            `9.` Provas: {evidence}
          </p>
        </FormAproveResult>
      </div>
    </>
  );
}

const TiltePage = styled.h1`
text-align: center;
padding: 10px 0px;
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
`;

const Input = styled.input`
  flex: 2;
  padding: 5px;
`;

const SelectInput = styled.select`
  width: 397.41px;
`;

const FormAproveResult = styled.div`
  padding: 0% 25% 0% 25%;
`;
