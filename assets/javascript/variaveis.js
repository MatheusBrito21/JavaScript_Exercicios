/**
 * var -> variavel global e local. Pode ser redeclarada e/ou reatribuida
 * let -> variavel local/bloco. Pode ser reatribuida. É utilizada dentro de um bloco
 * const -> valor constante. Não pode ser redelcarado nem reatribuído 
 */

var a = 21;
var b = 7;

function testaVariavel(){
    var a = 30;
    let b = 14;
    /**
     * a variavel a foi redeclarada
     * a variavel b foi reatribuida. Seu novo valor so sera utilizado dentro da função.
     */
    console.log(`Valores locais: ${a}, ${b}`);
}

testaVariavel();
console.log(`Valores globais: ${a} , ${b}`);
console.log(`Tipo:${typeof(b)}`);

/**
 * Metodos do Array
 * push -> adiciona um item no fim do array(lastIndex)
 * pop -> remove o item do ultimo indice
 * unshift -> adiciona um item no inicio do array(firstIndex) 
 * shift -> remove o item do primeiro indice 
 * every -> similar ao AllMatch() -> array.every(item => item === 5)
 * some -> similar ao AnyMatch()
 */

//declarando um array
let array1 =[];
let array2 = new Array();

array1.push(1,2,3,4);
array2.push(5,6,7,8);

function imprimirArray(array){
    console.log("Array :");
    for(let i = 0 ; i < array.length; i++){
        console.log(array[i]);
    }
}

//chamada de função
imprimirArray(array1);
imprimirArray(array2)




