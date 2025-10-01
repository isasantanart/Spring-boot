document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recarregar a página

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;

    let resultado = null;
    let erro = "";

    switch (operacao) {
        case "somar":
            resultado = num1 + num2;
            break;
        case "subtrair":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 === 0) {
                erro = "Divisão por zero não é permitida.";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            erro = "Operação inválida.";
    }

    // Exibe o resultado ou erro
    document.getElementById('erro').textContent = erro;
    document.getElementById('resultado').textContent = 
        resultado !== null && erro === "" ? `Resultado: ${resultado}` : "";
});
