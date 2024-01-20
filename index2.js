let contador = 1; // Inicializa o contador fora da função para que seja persistente

document.getElementById('seuFormularioId').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    realizarPagamento();
});

function realizarPagamento() {
    const bank = parseInt(document.getElementById('cardNumber').value);
    const money = parseFloat(document.getElementById('amount').value);
    const x = document.getElementById('cash').value;
    const y = document.getElementById('money').value;

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = '';

    const mensagemElemento = document.createElement('p');

    if (validarPagamento(bank, x, y)) {
        mensagemElemento.textContent = `Pagamento bem-sucedido! Valor: R$${money.toFixed(2)}`;
        mensagemElemento.style.color = '#4caf50';

        // Gera o código de autenticação
        const codigoAutenticacao = gerarCodigoAutenticacao();
        
        // Exibe o alerta com o código de autenticação
        alert(`Seu código de autenticação é: ${codigoAutenticacao}`);
    } else {
        mensagemElemento.textContent = '*Pagamento falhou. Tente novamente.';
        mensagemElemento.style.color = '#f44336';
    }

    resultadoElemento.appendChild(mensagemElemento);

    event.preventDefault();
}

function validarPagamento(bank, x, y) {
    return (
        (bank >= 2009 && bank <= 2024  && bank >= 2018 && bank <= 2013) &&
        (['Pedro', 'Maria', 'Luiz', 'Álvaro'].includes(x)) &&
        (['Pedro', 'Maria', 'Luiz', 'Álvaro'].includes(y))
    );
}

function gerarCodigoAutenticacao() {
    const codigo = contador.toString().padStart(3, '0');
    contador++;
    return codigo;
}
