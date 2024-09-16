const textForms = [
    { id: 1, result: "aproove", title: "Limpar Julgamento", Text: "" },
    { id: 2, result: "denied", title: "Limpar Julgamento", Text: "" },
    { id: 3, result: "aproove", title: "Drive-by", Text: "Perante o clip anúnciado, foi constado que o denunciado alvejou o mesmo dentro de um blindado." },
    { id: 4, result: "aproove", title: "Fora de horário de assalto", Text: "No clip consta que o horário do clip se encontra em : 00:00, e estando fora de horário de assalto. Assim configurando a quebra de regra" },
    { id: 5, result: "denied", title: "Clip Insuficiente", Text: "Ticket negado por tamanho do clip não ser suficiente para comprovação da denúncia, assim impossibilitando correta avaliação." },
    { id: 6, result: "denied", title: "Clip sem id", Text: "Estarei negando por não constar em clip id do denúnciado, assim impossibilitando a identificação." },
    { id: 7, result: "denied", title: "Inatividade", Text: "Estarei negando o ticket por inatividade do autor." },
    { id: 8, result: "denied", title: "Sem log", Text: "Não consta registros dessa morte envolvendo quem está sendo denunciado, com isso não se dá para poder fazer a correta identificação do mesmo. Sendo assim, não é possível validar a denúncia." },
    { id: 9, result: "denied", title: "Abandono", Text: "O autor decidiu abandonar o ticket" },
    { id: 10, result: "denied", title: "Autor desistiu", Text: "O autor decidiu não prosseguir com a denúncia" },
    { id: 11, result: "denied", title: "Clip não disponivel", Text: "Após enviar a denúncia o clip se encontra indisponivel" },
    { id: 12, result: "aproove", title: "Morte de profissional legal", Text: "O profissional de serviço legal foi desmaiado enquanto se encontrava em seu serviço" },
    { id: 13, result: "aproove", title: "Sequestro de profissional legal", Text: "O profissional de serviço legal foi squestrado enquanto se encontrava prestando seu serviço" },
    { id: 14, result: "aproove", title: "Fora de horário de sequestro", Text: "No clip consta que o horário do clip se encontra em : 00:00, e estando em horário fora de sequestro. Assim configurando a quebra de regra" },
    { id: 15, result: "aproove", title: "No-props", Text: "No clip consta que ocorre a falta de props como segue os prints" },
    { id: 16, result: "aproove", title: "Combatlogging", Text: "O mesmo enquanto estava na ação ou desmaido, quitou para assim evitar o loot." },
    { id: 17, result: "aproove", title: "Loot indevido a policial", Text: "O player denunciado 0 cometeu Loot Indevido ao lootear o player denunciante 0 em uma ação de rua, já que o mesmo é policial" },
    { id: 18, result: "aproove", title: "Darkrp", Text: "Em clip da para se constatar com exatidão que o denunciado proferiu palavras de cunho preconceituoso assim configurando DarkRp" },
    { id: 19, result: "aproove", title: "Invasão a dp", Text: "Perante as provas apresentadas foi constado que o denunciado invadiu um base policial, que indepentende do intuito configura como quebra de regra gravissima" },
    { id: 20, result: "denied", title: "Abrir ticket no ilegal", Text: "O ticket deve ser aberto por um chefe ou frente através do discord do ilegal" },
    { id: 21, result: "denied", title: "Abrir solicitar tela", Text: "O ticket por se tratar de uma denúncia referente a possibilidade de uso de hack, deve ser aberto através do <#1242178126281179166> " },
    { id: 22, result: "denied", title: "Abrir ticket no ilegal", Text: "" }
    
];

export default textForms;
