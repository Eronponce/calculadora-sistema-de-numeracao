//declarações das variaveis globais
function getDecimal() {
    decimal = document.getElementById("inputDecimal").value;
    return decimal;
}
function setDecimal(decimal) {
    document.getElementById("inputDecimal").value = decimal;
}

function getBinario() {
    var binario = document.getElementById("inputBinario").value;
    return binario;
}
function setBinario(binario) {
    document.getElementById("inputBinario").value = binario;
}

function getOctal() {
    var octal = document.getElementById("inputOctal").value;
    return octal
}
function setOctal(octal) {
    document.getElementById("inputOctal").value = octal;
}

function getHexadecimal() {
    var hexadecimal = document.getElementById("inputHexadecimal").value;
    return hexadecimal
}
function setHexadecimal(hexadecimal) {
    document.getElementById("inputHexadecimal").value = hexadecimal;
}

function convertaDecimal() {

    console.log(getDecimal())
    setBinario(5);
    setHexadecimal(4)
    setOctal(6)

}