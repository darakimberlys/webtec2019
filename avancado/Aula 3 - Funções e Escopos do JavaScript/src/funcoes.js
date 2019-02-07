// Função como Declaração
function soma(a, b) {
    return a + b;
};

var resultado = soma(10, 4);

console.log(resultado);

// Função como Expressão

var contador = function (vetor) {
    vetor.length;
}

contador([1, 2, 3, 4, 5]);

console.log(contador);

// Função como Método (curto/abreviado)

var colecao = {
    items: [],
    adicionar(...add){

    }
}