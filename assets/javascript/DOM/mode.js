const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const corpo = document.getElementsByTagName('body')[0];
const rodape = document.getElementsByTagName('footer')[0];


function mudaModo(){
    mudaClasse();
    mudaTexto();
}

function mudaClasse(){
    h1.classList.toggle('darkModeClass');
    button.classList.toggle('darkModeClass');
    corpo.classList.toggle('darkModeClass');
    rodape.classList.toggle('darkModeClass');
}

function mudaTexto(){
    let light = 'Light Mode';
    let dark = 'Dark Mode';

    if(corpo.classList.contains(darkModeClass)){
        button.innerHTML = light;
        h1.innerHTML = dark + 'ON';
        return;
    }
        button.innerHTML = dark ;
        h1.innerHTML = light+ 'ON';
    
}

button.addEventListener('click',mudaModo);
