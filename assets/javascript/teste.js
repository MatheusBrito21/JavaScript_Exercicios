//pega o elemento html pelo id
var number = document.getElementById("currentNumber");
var current_number = 0;

function increment(){
    current_number += 1;
    //acessa o conteúdo dentro da tag html 
    number.innerHTML = current_number;
}

function decrement(){
    current_number -= 1;
    number.innerHTML = current_number;
}

function seNegativo(){
    if(current_number < 0){
        number.style.color = 'red';
    }else{
        number.style.color = 'black';
    }
}

function somaMais10(){
    current_number +=10;
    number.innerHTML = current_number;
}

function sub10(){
    current_number -=10;
    number.innerHTML = current_number;
}

function resetaContador(){
    current_number = 0;
    number.innerHTML = current_number;
}


