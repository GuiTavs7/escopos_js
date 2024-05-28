// A variável "mensagem", por ter sido criada no escopo global, pode ser chamada em qualquer parte do código

const mensagem = "Olá";

console.log(mensagem);

// Escopo de Bloco) A variável "mensagem2" só existe no escopo de bloco criado pela condicional "if"

if(true){
    const mensagem2 = "Olá";
}

console.log(mensagem2); // Erro no console

// Blocos Autônomos) Qualquer bloco de código delimitado por "{ }"

{
    let mensagem3 = "Olá";
    console.log(mensagem3);
}

console.log(mensagem3); // Erro no console

{
    var mensagemVar = "Olá";
    console.log(mensagemVar);
}

console.log(mensagemVar);

// Escopo de Função)

function falar(){
    var mensagem = "Olá Mundo!";
    console.log(mensagem);
}

falar();
console.log(mensagem); // Erro no console

let numero = 123;

function falar_2(){
    const mensagem = "Olá mundo!";
    console.log(mensagem);
    function falarOutraCoisa(){

    }

    falarOutraCoisa()
    console.log(falarOutraCoisa);
    console.log(numero);
}

falar();
console.log(falarOutraCoisa);

// Escopo Global) Mais externo e geral

console.log(url);