let string = "abba";

function testaPalindromo(palavra){

    if(!palavra){
         return 'A palavra está vazia.'}
    else if( palavra.split("").reverse().join("") === palavra){
        return `${palavra} é um palíndromo.`
    }else{
        return `${palavra} não é um palíndromo.`
    }
}

console.log("Matheus".split("").reverse());
console.log("Matheus".split("").reverse().join(""));
console.log(testaPalindromo(string));
console.log(testaPalindromo("Matheus"));