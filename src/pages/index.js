import { useState } from "react";
import styled from "styled-components";
import { parseLogText } from "../functions/logTransform"; // Importe a função aqui
import NavBar from "../components/navBar";
export default function Home() {
  // Estados para armazenar os dados
  const [logText, setLogText] = useState("");
  const [parsedData, setParsedData] = useState({
    id: "",
    whistleblower: "",
    cdsAssassin: "",
    cdsVictim: ""
  });
  const [selectedStaff, setSelectedStaff] = useState("");
  const [judgment, setJudgment] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [evidence, setEvidence] = useState("");
  const [selectPunishment, setSelectPunishment] = useState("");

  // Array com IDs do staff
  const staffResp = [
    { id: 1, name: "Vulcano", discId: "660278234428080138" },
    { id: 2, name: "Gigi", discId: "942564213656797224" }
  ];

  const punishment = [
    { id: 1, law: "40.1 - QUEBRA DE IMERSÃO", pena: "200 MESES + @adv" },
    { id: 2, law: "40.2 - REVANGE KILL [LEMBRAR AÇÃO]", pena: "150 MESES + @adv" },
    { id: 3, law: "40.3 - ABUSO DE BUG", pena: "150 MESES + @adv" },
    { id: 4, law: "40.4 - MATAR EM ÁREA SAFE", pena: "150 MESES + @adv" },
    { id: 5, law: "40.5 - BIND EM AÇÃO", pena: "150 MESES + @adv" },
    { id: 6, law: "40.6 - FALAR MORTO [OCC, /ME, VOICE, PAINEL POLICE]", pena: "200 MESES + @adv" },
    { id: 7, law: "40.7 - ABUSO DE PODER", pena: "250 MESES + @adv" },
    { id: 8, law: "40.8 - ATIRAR DO MORRO", pena: "400 MESES + @adv" },
    { id: 9, law: "40.9 - RANDOM DEATHMATCH [RDM]", pena: "450 MESES + @adv" },
    { id: 10, law: "40.10 - VEHICLE DEATHMATCH [VDM]", pena: "450 MESES + @adv" },
    { id: 11, law: "40.11 - LOOT INDEVIDO", pena: "600 MESES + @adv" },
    { id: 12, law: "40.12 - ANTI-RP", pena: "600 MESES + @adv" },
    { id: 13, law: "40.13 - META-GAMING", pena: "600 MESES + @adv" },
    { id: 14, law: "40.14 - ZARALHO NO HOSPITAL", pena: "600 MESES + @adv" },
    { id: 15, law: "40.15 -  POWERGAMING", pena: "200 MESES + @adv" },
    { id: 16, law: "40.16 - ANTI AMOR A VIDA", pena: "600 MESES + @adv OU PD DE PERSONAGENS EM AÇÕES EXPRESSIVAS, À DEPENDER DE ANALÍSE PRÉVIA" },
    { id: 17, law: "40.18 - USO DE NO-PROPS E/OU NO-NIGHT", pena: "@ban ATÉ A REMOÇÃO + APÓS CONVERSÃO EM  300 MESES + @adv" },
    { id: 18, law: "40.19 -  SEQUESTRAR FORA DO HORÁRIO PERMITIDO (DENTRO DO HORÁRIO DE PISTA)", pena: "300 MESES + @adv" },
    { id: 19, law: "40.20 -  SEQUESTRAR PROFISSIONAIS LEGAIS (MECÂNICOS E MÉDICOS) CARACTERIZADOS", pena: "350 MESES + @adv" },
    { id: 20, law: "40.21 -  MATAR PROFISSIONAIS LEGAIS (MECÂNICOS E MÉDICOS)  CARACTERIZADOS (EM QUALQUER PERÍMETRO DA CIDADE)", pena: "500 MESES + @adv" },
    { id: 21, law: "40.22 -  DAR VOZ DE ASSALTO FORA DO HORÁRIO PERMITIDO", pena: "200 MESES + @adv" },
    { id: 22, law: "40.23 -  DRIVE BY (morte com a utilização de blindado) ", pena: "350 MESES + @adv" },
    { id: 23, law: "40.24 -  ROUBAR VEÍCULO EM ÀREA SAFE", pena: "450 MESES + @adv" },
    { id: 24, law: "40.25 - UTILIZAÇÃO DE VEÍCULOS LEGAIS NA PRÁTICA DE DELÍTOS (INCLUINDO BAQUES)", pena: "400 MESES + @adv" },
    { id: 25, law: "40.26 - COPYBAIT ENVOLVENDO O ILEGAL x LEGAL", pena: "600 MESES + @adv" },
    { id: 26, law: "41.1 - DARK RP", pena: "@ban" },
    { id: 27, law: "41.4 - INVASÃO A DP", pena: "@ban" }
  ];

  // Função para lidar com mudanças no texto do log
  const handleLogChange = (event) => {
    const text = event.target.value;
    setLogText(text);
    const data = parseLogText(text);
    setParsedData(data); // Atualiza os dados analisados
  };

  // Funções para atualizar os estados
  const handleJudgmentChange = (event) => setJudgment(event.target.value);
  const handleTicketNumberChange = (event) => setTicketNumber(event.target.value);
  const handleStaffChange = (event) => setSelectedStaff(event.target.value);
  const handleEvidenceChange = (event) => setEvidence(event.target.value);
  const handlePunishmentChange = (event) => setSelectPunishment(event.target.value);

  return (
    <>
      <NavBar />
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
              <LabelForm>Julgamento</LabelForm>
              <Input type="text" value={judgment} onChange={handleJudgmentChange} />
            </FormGroup>
            <FormGroup>
              <LabelForm>Número do Ticket</LabelForm>
              <Input type="text" value={ticketNumber} onChange={handleTicketNumberChange} />
            </FormGroup>
            <FormGroup>
              <LabelForm>Denunciante</LabelForm>
              <Input type="text" value={parsedData.whistleblower} readOnly />
            </FormGroup>
            <FormGroup>
              <LabelForm>Denunciado</LabelForm>
              <Input type="text" value={parsedData.id} readOnly />
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
            :1129discord:・**CDS**<br />
            **ASSASSINO:**<br /> <br />
            - CDS {parsedData.cdsAssassin}<br /> <br />
            **VÍTIMA:**<br /> <br />
            - CDS {parsedData.cdsVictim}<br /> <br />
            :baixinha7_duvidas:・**JULGAMENTO:**<br />
            - {judgment} <br /> <br />
            `1.` Resolvido por: &lt;@{staffResp.find(staff => staff.id === parseInt(selectedStaff))?.discId || "Nenhum selecionado"}&gt;<br />
            `2.` Aprovado por:<br />
            `3.` Ticket Nmr: {ticketNumber}<br />
            `4.` Denunciante: {parsedData.whistleblower} | @ <br />
            `5.` Denunciado: {parsedData.id} | &lt;@&gt; <br />
            `6.` Julgamento: **APROVADO**<br />
            `7.` Motivo: {punishment.find(staff => staff.id === parseInt(selectPunishment))?.law || "Nenhum selecionado"}<br />
            `8.` Tempo e Punição: {punishment.find(staff => staff.id === parseInt(selectPunishment))?.pena || "Nenhum selecionado"}<br />
            `9.` Provas: {evidence}
          </p>
        </FormAproveResult>
      </MainDivHome>
    </>
  );
}

const MainDivHome = styled.div`
padding: 50px;
display: flex;
    justify-content: space-around;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 25px;
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
  width: 350px;
`;

const SelectInput = styled.select`
width: 350px;
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
`;

//teste