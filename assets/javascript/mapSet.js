/**
 * Criar uma funcao que retorna as chaves de um map com valor Admin
 */

function getAdmins(map){
    
    let listaAdmins = [];

    for([key,value] of map ){
        if(value === 'Admin'){
            listaAdmins.push(key);
        }
    }
    return listaAdmins;
}

const usuarios = new Map();

usuarios.set('Matheus', 'Admin');
usuarios.set('Carlos', 'Admin');
usuarios.set('Beatriz', 'User');
usuarios.set('Leonardo', 'Admin');

console.log(getAdmins(usuarios));
//--------------------------------------
/**
 * criar uma funcao que recebe um array, passa para um set que tera somente valores unicos
 * e retornar um novo array
 */
const meuArray = [30,30,40,5,223,2049,3004,5];

function valoresUnicos(arr){

    //Set so aceita valores unicos
    const mySet = new Set(arr);
    //notacao ... pega todos os itens do set e atribui a um array
    return [...mySet];
}

console.log(valoresUnicos(meuArray));