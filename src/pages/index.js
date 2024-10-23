import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { parseLogText } from "../functions/logTransform";
import NavBar from "../components/navBar";
import staffResp from "../data/staffResp";
import Copyrigth from "@/components/copyrigth";
import TextBar from "@/components/TextBar";

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
  const [isOutsideDiscord, setIsOutsideDiscord] = useState(false); // Estado para o checkbox

  // Função para atualizar o estado do campo de julgamento
  const handleTextSelect = (text) => {
    setJudgment(text);
  };

  // Refs para acessar o conteúdo da tag <p>
  const pRef = useRef(null);

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
    { id: 15, law: "40.15 - POWERGAMING", pena: "200 MESES + @adv" },
    { id: 16, law: "40.16 - ANTI AMOR A VIDA", pena: "600 MESES OU PD DE PERSONAGENS + @adv " },
    { id: 17, law: "40.18 - USO DE NO-PROPS", pena: ": @ban ATÉ A REMOÇÃO + APÓS CONVERSÃO EM  300 MESES + @adv." },
    { id: 18, law: "40.19 - SEQUESTRAR FORA DO HORÁRIO PERMITIDO (DENTRO DO HORÁRIO DE PISTA)", pena: "300 MESES + @adv" },
    { id: 19, law: "40.20 - SEQUESTRAR PROFISSIONAIS LEGAIS (MECÂNICOS E MÉDICOS) CARACTERIZADOS", pena: "350 MESES + @adv" },
    { id: 20, law: "40.21 - MATAR PROFISSIONAIS LEGAIS (MECÂNICOS E MÉDICOS) CARACTERIZADOS (EM QUALQUER PERÍMETRO DA CIDADE)", pena: "500 MESES + @adv" },
    { id: 21, law: "40.22 - DAR VOZ DE ASSALTO FORA DO HORÁRIO PERMITIDO", pena: "200 MESES + @adv" },
    { id: 22, law: "40.23 - DRIVE BY (morte com a utilização de blindado)", pena: "350 MESES + @adv" },
    { id: 23, law: "40.24 - ROUBAR VEÍCULO EM ÁREA SAFE", pena: "450 MESES + @adv" },
    { id: 24, law: "40.25 - UTILIZAÇÃO DE VEÍCULOS LEGAIS NA PRÁTICA DE DELÍTOS (INCLUINDO BAQUES)", pena: "400 MESES + @adv" },
    { id: 25, law: "40.26 - COPYBAIT ENVOLVENDO O ILEGAL x LEGAL", pena: "600 MESES + @adv" },
    { id: 26, law: "41.1 - DARK RP", pena: "@ban" },
    { id: 27, law: "41.4 - INVASÃO A DP", pena: "@ban" }
  ];

  const [denunciadoTexto, setDenunciadoTexto] = useState(`5. Denunciado: ${parsedData.id} | <@>`);
  const [tempoEPunicaoTexto, setTempoEPunicaoTexto] = useState(`8. Tempo e Punição: ${punishment.find(pun => pun.id === parseInt(selectPunishment))?.pena || "Nenhum selecionado"}`);

  // Função para lidar com mudanças no texto do log
  const handleLogChange = (event) => {
    const text = event.target.value;
    setLogText(text);
    const data = parseLogText(text);
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

  useEffect(() => {
    setDenunciadoTexto(`5. Denunciado: ${parsedData.id} | ${isOutsideDiscord ? "(FORA DO DC)" : "<@>"}`);
}, [parsedData.id, isOutsideDiscord]);

useEffect(() => {
  const selectedPunishment = punishment.find(pun => pun.id === parseInt(selectPunishment))?.pena || "Nenhum selecionado";
  if (isOutsideDiscord) {
      setTempoEPunicaoTexto(``8.` Tempo e Punição: @ban ATÉ SUBIR SUPORTE. APÓS ${selectedPunishment}`);
  } else {
      setTempoEPunicaoTexto(``8.` Tempo e Punição: ${selectedPunishment}`);
  }
}, [selectPunishment, isOutsideDiscord]);

  // Funções para atualizar os estados
  const handleJudgmentChange = (event) => setJudgment(event.target.value);
  const handleTicketNumberChange = (event) => setTicketNumber(event.target.value);
  const handleStaffChange = (event) => setSelectedStaff(event.target.value);
  const handleEvidenceChange = (event) => setEvidence(event.target.value);
  const handlePunishmentChange = (event) => setSelectPunishment(event.target.value);
  const handleCheckboxChange = () => setIsOutsideDiscord(prev => !prev); // Alternar estado do checkbox

  return (
    <>
      <NavBar />
      <TiltePage>Formulário de denúncia aprovada</TiltePage>
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
              <LabelForm>Número do Tike</LabelForm>
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
        <VerticalLine />
        <FormAproveResult>
          <p ref={pRef}>
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
            {denunciadoTexto}<br />
            `6.` Julgamento: **APROVADO**<br />
            `7.` Motivo: {punishment.find(staff => staff.id === parseInt(selectPunishment))?.law || "Nenhum selecionado"}<br />
            {tempoEPunicaoTexto}<br />
            `9.` Provas: {evidence}
          </p>
          <ButtonToCopy onClick={copyToClipboard}>Copiar Formulário</ButtonToCopy>
        </FormAproveResult>
      </MainDivHome>
      <TextBar filter='aproove' onTextSelect={handleTextSelect} />
      <Copyrigth />
    </>
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
