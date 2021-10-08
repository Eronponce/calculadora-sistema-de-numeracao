/**
Métodos utilizados para receber informações armazenadas nos campos de input
@param recebidos do HTML

@return o valor para ser feita a conta
*/
function getDecimal() {
    decimal = document.getElementById("inputDecimal").value;
    return decimal;
}
function getBinario() {
    var binario = document.getElementById("inputBinario").value;
    return binario;
}
function getOctal() {
    var octal = document.getElementById("inputOctal").value;
    return octal
}
function getHexadecimal() {
    var hexadecimal = document.getElementById("inputHexadecimal").value;
    return hexadecimal
}

/**
Métodos utilizados para atribuir informaçoes nos campos de input
@param dados fornecidos atravéz das funções sendo os tipos numéricos

@return será feita a atribuição do valor no campo input no HTML
*/
function setBinario(binario) {
    document.getElementById("inputBinario").value = binario;
}
function setOctal(octal) {
    document.getElementById("inputOctal").value = octal;
}
function setDecimal(decimal) {
    document.getElementById("inputDecimal").value = decimal;
}
function setHexadecimal(hexadecimal) {
    document.getElementById("inputHexadecimal").value = hexadecimal;
}

function limpaTabelas() {
    document.getElementById("tabelaBinaria").innerHTML = "";
    document.getElementById("tabelaOctal").innerHTML = "";
    document.getElementById("tabelaDecimal").innerHTML = "";
    document.getElementById("tabelaHexadecimal").innerHTML = "";
    document.getElementById("explicacaoBinaria").innerHTML = "";
    document.getElementById("explicacaoOctal").innerHTML = "";
    document.getElementById("explicacaoDecimal").innerHTML = "";
    document.getElementById("explicacaoHexadecimal").innerHTML = "";

}

function convertaDecimal() {
    limpaTabelas();
    decimalParaBinario();
    decimalParaOctal();

}


/**     
    Método para transformar números decimais para Binário
    @param recebe os valores nos html existentes

    @return os valores tratados binários para o devido html e a explicaçao em uma div
 */
function decimalParaBinario() {
    var tabelaBinaria = document.getElementById("tabelaBinaria");
    var valorFinal = getDecimal();
    var contador = 0;
    var bits = new Array();
    var temp = "";
    while (valorFinal != 0) {
        var valorDivisao = document.createTextNode("| 2");
        var linha = document.createElement("tr");
        var criarCelula = document.createElement("td");
        var valorFinalTabela = document.createTextNode(valorFinal);
        tabelaBinaria.appendChild(linha);

        //Lógica para traduzir decimal para binário feita
        divisao = valorFinal % 2;
        if (divisao == 1) {
            bits.push("1");
        } else {
            bits.push("0");
        }
        valorFinal = parseInt(valorFinal / 2);

        // adicionar espaços na tabela conforme o contador de linhas
        for (var i = 0; i <= contador; i++) {
            var criarCelula = document.createElement("td");
            linha.appendChild(criarCelula);
            criarCelula.appendChild(document.createTextNode(" "));
        }

        //adiciona os elementos temporarios, sendo o resto da divisão anterior
        var criarCelula = document.createElement("td");
        criarCelula.className = 'resto';
        linha.appendChild(criarCelula);
        criarCelula.appendChild(document.createTextNode(temp));

        //adiciona o valor na tabela depois da divisao
        var criarCelula = document.createElement("td");
        if (valorFinal == 0) {
            criarCelula.className = 'resto';
        }
        linha.appendChild(criarCelula);
        criarCelula.appendChild(valorFinalTabela);

        //adiciona o |2
        var criarCelula = document.createElement("td");
        linha.appendChild(criarCelula);
        criarCelula.appendChild(valorDivisao);

        // decide se o temporario é 1 ou 0 para adicionar ao resto no proximo loop
        if (divisao == 1) {
            temp = 1;
        } else if (divisao == 0) {
            temp = 0;
        }
        contador++;
    }
    // adiciona uma explicacao de como foi feita a conta em um div
    var explicacaoBinaria = document.getElementById("explicacaoBinaria");
    var explicacao = document.createElement("p");
    var explicacaoString = document.createTextNode("<--------------------------------- Para traduzir para um numero binário é nescessário que invertamos a ordem");
    explicacao.appendChild(explicacaoString);
    explicacaoBinaria.appendChild(explicacao);

    // reverte o array ,junta e cria uma string
    setBinario(bits.reverse().join(""));
}


/**     
Método para transformar números decimal para Octal
@param recebe os valores nos html existentes

@return os valores tratados Octais para o devido html e a explicaçao em uma div
*/
function decimalParaOctal() {
    var tabelaOctal = document.getElementById("tabelaOctal");
    var valorFinal = getDecimal();
    var contador = 0;
    var byte = new Array();
    var temp = "";
    while (valorFinal != 0) {
        var valorDivisao = document.createTextNode("| 8");
        var linha = document.createElement("tr");
        var criarCelula = document.createElement("td");
        var valorFinalTabela = document.createTextNode(valorFinal);
        tabelaOctal.appendChild(linha);

        //Lógica para traduzir decimal para octal feita
        divisao = valorFinal % 8;
        byte.push(divisao)
        valorFinal = parseInt(valorFinal / 8);

        // adicionar espaços na tabela conforme o contador de linhas
        for (var i = 0; i <= contador; i++) {
            var criarCelula = document.createElement("td");
            linha.appendChild(criarCelula);
            criarCelula.appendChild(document.createTextNode(" "));
        }

        //adiciona os elementos temporarios, sendo o resto da divisão anterior
        var criarCelula = document.createElement("td");
        criarCelula.className = 'resto';
        linha.appendChild(criarCelula);
        criarCelula.appendChild(document.createTextNode(temp));

        //adiciona o valor na tabela depois da divisao
        var criarCelula = document.createElement("td");
        if (valorFinal == 0) {
            criarCelula.className = 'resto';
        }
        linha.appendChild(criarCelula);
        criarCelula.appendChild(valorFinalTabela);

        //adiciona o | 8
        var criarCelula = document.createElement("td");
        linha.appendChild(criarCelula);
        criarCelula.appendChild(valorDivisao);

        // guarda o numero do resto no temp para adicionar no proximo loop
        temp = divisao;

        contador++;
    }
    // adiciona uma explicacao de como foi feita a conta em um div
    var explicacaoOctal = document.getElementById("explicacaoOctal");
    var explicacao = document.createElement("p");
    var explicacaoString = document.createTextNode("<--------------------------------- Para traduzir para um numero octal é nescessário que selecione os numeros na ordem contraria e junte-os");
    explicacao.appendChild(explicacaoString);
    explicacaoOctal.appendChild(explicacao);

    // reverte o array ,junta e cria uma string
    setOctal(byte.reverse().join(""));
}