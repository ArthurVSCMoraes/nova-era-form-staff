import { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/navBar";
export default function FormNegative() {

    const [selectedStaff, setSelectedStaff] = useState("");
    const [judgment, setJudgment] = useState("");
    const [ticketNumber, setTicketNumber] = useState("");
    const [whistleblower, setWhistleblower] = useState("");

    // Array com IDs do staff
    const staffResp = [
        { id: 1, name: "Vulcano", discId: "660278234428080138" },
        { id: 2, name: "Gigi", discId: "942564213656797224" }
    ];

    // Funções para atualizar os estados
    const handleJudgmentChange = (event) => setJudgment(event.target.value);
    const handleTicketNumberChange = (event) => setTicketNumber(event.target.value);
    const handleStaffChange = (event) => setSelectedStaff(event.target.value);
    const handleWhistleblowerChange = (event) => setWhistleblower(event.target.value);

    return (
        <>
            <div>
                <NavBar />
                <TiltePage>Formulário de denúncia negada</TiltePage>
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
                <FormAproveResult>
                    <p>
                        :baixinha7_duvidas:・**JULGAMENTO:**<br />
                        - {judgment} <br /> <br />
                        `1.` Resolvido por: &lt;@{staffResp.find(staff => staff.id === parseInt(selectedStaff))?.discId || "Nenhum selecionado"}&gt;<br />
                        `2.` Aprovado por:<br />
                        `3.` Ticket Nmr: {ticketNumber}<br />
                        `4.` Denunciante: {whistleblower} | @ <br />
                        `6.` Julgamento: **NEGADO**<br />
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
