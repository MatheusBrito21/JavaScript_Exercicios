/**
 * Adicionar em uma lista os alunos aprovados com uma determinada media
 */
//array de objetos
const alunos = [
    {
        nome: 'Joao',
        nota: 5,
        turma:'1B',
    },
    {
        nome:'Pedro',
        nota: 7,
        turma:'2B'
    },
    {
        nome:'Beatriz',
        nota: 7.5,
        turma:'1A'
    },
];

//funcao que recebe um array de alunos e uma media
function verificaMedia(arr, media){
    //array final com nome dos aprovados
    let listaAprovados = [];
    //percorre o array passado como parametro
    for(let i=0; i< arr.length;i++){
      
        if(arr[i].nota >= media){
            //acessa o atributo nome do objeto atual
            listaAprovados.push(arr[i].nome);
        }
    }

    return listaAprovados;
}

console.log(verificaMedia(alunos,7));
//------------------------------------
/**
 * A partir da funcao calculaIdade utilize os metodos call e apply
 */

//essa funcao recebera um objeto como parametro 
//*atraves do metodo call e deve receber tem um valor para anos, separado por virgula
//*atraves do metodo apply, o valor de anos devera ser passado dentro de um array
//os atributos do objeto atual sao acessados pela palavra This
function calculaIdade(anos){
    return `Daqui a ${anos} anos ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome:'Pedro',
    idade: 20,
}

const pessoa2 = {
    nome:'Maria',
    idade: 42,
}

console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(pessoa2,[20]));