export function parseLogText(logText) {
    // Define o padrão de expressão regular para extrair os valores
    const regex = /\[ID\]:\s*(\d+)\s*-\s*'[^']+'\s*\[MATOU O ID\]:\s*(\d+)\s*-\s*'[^']+'\s*\[ARMA\]:\s*'[^']+'\s*\[HASH\]:\s*(-?\d+)\s*\[SPAWN\]:\s*\S+\s*\[LOCAL ASSASSINO\]:\s*(-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?)\s*\[LOCAL VITIMA\]:\s*(-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?)\s*\[Data\]:\s*(\d{2}\/\d{2}\/\d{2})\s*\[Hora\]:\s*(\d{2}:\d{2}:\d{2})/;

    // Executa a expressão regular na string de entrada
    const matches = logText.match(regex);

    // Verifica se a expressão regular encontrou uma correspondência
    if (matches) {
        return {
            id: matches[1], // O ID do denunciado
            whistleblower: matches[2], // O ID do denunciante
            hash: matches[3], // O HASH
            cdsAssassin: matches[4].trim(), // Local do assassino
            cdsVictim: matches[5].trim() // Local da vítima
        };
    } else {
        // Se não houver correspondência, retorna um objeto vazio ou uma mensagem de erro
        console.error('Formato do texto não corresponde ao esperado.');
        return {};
    }
}
