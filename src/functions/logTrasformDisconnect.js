export function parseDisconnectLog(logText) {
    // Define o padrão de expressão regular para extrair os valores
    const regex = /\*\*DISCONNECT\*\*\s*\*\*Passaporte:\*\*\s*```cs\s*- (\d+)\s*```[\s\S]*?\*\*Source:\*\*\s*```cs\s*- (\d+)\s*```[\s\S]*?\*\*Health:\*\*\s*```cs\s*- (\d+)\s*```[\s\S]*?\*\*Armour:\*\*\s*```cs\s*- (\d+)\s*```[\s\S]*?\*\*Motivo:\*\*\s*```cs\s*- ([^\n]+)\s*```[\s\S]*?\*\*Coordenadas:\*\*\s*```cs\s*(-?\d+\.\d+,-?\d+\.\d+,-?\d+\.\d+)\s*```[\s\S]*?\*\*Horario:\*\*\s*```cs\s*\[(\d{2}\/\d{2}\/\d{4})\s*/i;

    // Executa a expressão regular na string de entrada
    const matches = logText.match(regex);

    // Verifica se a expressão regular encontrou uma correspondência
    if (matches) {
        return {
            reported: matches[1], // O ID do passaporte
            source: matches[2],       // O ID de source
            health: matches[3],       // O valor de saúde
            armour: matches[4],       // O valor de armadura
            motivo: matches[5],       // O motivo
            cdsDisconnect: matches[6],  // As coordenadas
            horario: `${matches[7]} às ${matches[8]}` // Data e hora
        };
    } else {
        // Se não houver correspondência, retorna um objeto vazio ou uma mensagem de erro
        console.error('Formato do texto de desconexão não corresponde ao esperado.');
        return {};
    }
}
