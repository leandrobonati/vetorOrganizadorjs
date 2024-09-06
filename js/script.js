// vetor geral
var numeros = [];

//adiciona um número ao vetor e mostrar a lista de números
function enviar() {
    var inputElement = document.getElementById('numeros');
    var numero = parseFloat(inputElement.value);

    // adiciona o número ao vetor
    if (!isNaN(numero)) {
        numeros.push(numero);
        // atualiza a exibição dos números
        document.getElementById('numeros1').innerText = `A ordem de números é ${numeros}`;
        // limpa a caixa
        inputElement.value = '';
    } else {
        document.getElementById('numeros1').innerText = 'Por favor, insira um número válido.';
    }
}

function verma() {
    if (numeros.length > 0) {
        var maior = Math.max(...numeros);
        document.getElementById('numaior').innerText = `O maior número é ${maior}`;
    } else {
        document.getElementById('numaior').innerText = 'Nenhum número inserido.';
    }
}

function verme() {
    if (numeros.length > 0) {
        var menor = Math.min(...numeros);
        document.getElementById('numenor').innerText = `O menor número é ${menor}`;
    } else {
        document.getElementById('numenor').innerText = 'Nenhum número inserido.';
    }
}

function soma() {
    if (numeros.length > 0) {
        var soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        document.getElementById('soma').innerText = `A soma dos números é ${soma}`;
    } else {
        document.getElementById('soma').innerText = 'Nenhum número inserido.';
    }
}

function ordem() {
    if (numeros.length > 0) {
        numeros.sort((a, b) => a - b);
        document.getElementById('ordem').innerText = `A ordem certa é ${numeros}`;
    } else {
        document.getElementById('ordem').innerText = 'Nenhum número inserido.';
    }
}
