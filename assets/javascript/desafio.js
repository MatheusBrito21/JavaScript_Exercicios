/**
 * Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, 
 * de 1 até N, inclusive N, se for o caso
 */

function calculaQuadrados(valor){
   
    for(let i = 1; i< valor; i++){
       if(i % 2 === 0){
        console.log(`${i} ^ 2 = ` + Math.pow(i,2));
       }
    }
}

calculaQuadrados(20);