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

}

function convertaDecimal() {
    limpaTabelas();
    decimalParaBinario();

}
/**
    Método para transformar números decimais para Binário
    @param recebe os valores nos html existentes

    @return os valores tratados binários para o devido html
 */

function decimalParaBinario() {
    var tabelaBinaria = document.getElementById("tabelaBinaria");
    var valorFinal = getDecimal();
    var contador = 0;
    var bits = "";
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
            bits += "1";
        } else {
            bits +="0";
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
        if(valorFinal == 0){
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
        } else if(divisao == 0) {
            temp = 0;
        }
        contador++;
    }
    // split() pra fazer array reverse() pra inverter join() pra juntar
    setBinario(bits.split("").reverse().join(""));
}


