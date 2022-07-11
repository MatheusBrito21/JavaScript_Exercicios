var num1 = 5;
var num2 = 7;

function sePar(valor){
    (valor % 2 ==0) ? console.log("É par") : console.log("Não é par");
}

function soma(v1 , v2){
    var soma = v1+v2;
    return soma;
}

function maior10menor20(){
    var valorSoma = soma(num1,num2);
    if(valorSoma>10 && valorSoma<20){
        console.log("A soma dos números é maior que 10 e menor que 20");
    }else if (valorSoma > 20) {
        console.log("A soma dos números é maior que 20");
    }else{
        console.log("A soma dos números é menor que 10");
    }
}


sePar(num1);
console.log(soma(num1,num2));
maior10menor20(num1,num2);