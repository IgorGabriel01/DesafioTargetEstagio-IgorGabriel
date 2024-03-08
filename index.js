//1 Questão
let soma = 0;
for (let k = 0; k < 13; k++) {
    soma = soma + k;
}

const questao1 = document.getElementById('questao1');
questao1.innerText = `O valor da variável SOMA = ${soma}`;

//2 Questão 

const questao2 = document.getElementById('questao2');
const inputQuestao2 = document.getElementById('inputQ2');
const inputSubmitQ2 = document.getElementById('inputSubmitQ2');
const resultado = document.createElement('p');

inputSubmitQ2.addEventListener('click', e => {
    
    resultado.innerText = '';

    e.preventDefault;

    let pegarValor = inputQuestao2.value;

    let resultFibonacci = [0, 1];
    let num1 = 0;
    let num2 = 1;
    let valor; 

    for(let i = 0; i <= pegarValor; i++){

        valor = num1 + num2; 

        resultFibonacci.push(valor);

        num1 = num2;
        num2 = valor

    }

    for(let i = 0; i < resultFibonacci.length; i++){
        if(pegarValor == resultFibonacci[i]){
            resultado.innerText = `O número recebido pertence a sequência de Fibonacci.`;
            questao2.appendChild(resultado);
            break
        } else {
            resultado.innerText = `O número recebido não pertence a sequência de Fibonacci.`;
            questao2.appendChild(resultado);
        }
    }

})


//Questão 5

const questao5 = document.getElementById('questao5');
const inputQ5 = document.getElementById('inputQ5');
const buttonQ5 = document.getElementById('buttonQ5');

const campoResposta = document.createElement('p');

buttonQ5.addEventListener('click', e =>{

    e.preventDefault;

    let pegarValor = inputQ5.value;

    let guardarValorInvertido = '';

    for(let i = pegarValor.length - 1; i >= 0; i--){

        guardarValorInvertido += pegarValor[i];
    }

    questao5.appendChild(campoResposta);

    campoResposta.innerText = `O texto recebido foi ${pegarValor} e o texto invertido é ${guardarValorInvertido}.`
});

