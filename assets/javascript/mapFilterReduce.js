/**
 * Utilize os metodos Map filter e reduce para realizar operações em um array
 */

let meuArray = [1,2,3,4,5,6,7,8,9,10];

// executa a funçao e retorna um array do mesmo tamanho
let dobro = meuArray.map((item) => item*2);

//retorna um array com os itens que satisfazem a condição da arrow função
let pares = meuArray.filter((item) => item%2 == 0);

//executa a função e retorna a soma total dos itens
let soma = meuArray.reduce((total, atual) => total + atual);

//passando o map como retorno de uma função
function multiplicaPor3(array){
    return array.map((item) => item*3);
}

function multiplicaArray(array, value){
    return array.map((item) => item* value);
}

function multiplicaArray2(array, value){    
    return array.map(function (item){return item * value},value);
}

console.log(dobro);
console.log(pares);
console.log(soma);

console.log(multiplicaPor3(meuArray));
console.log(multiplicaArray(meuArray,5));
console.log(multiplicaArray2(meuArray,4));

function sePar(valor){
    return valor % 2 === 0;
}

function filtraPares(array){
    return array.filter(sePar);
}

console.log(filtraPares(meuArray));