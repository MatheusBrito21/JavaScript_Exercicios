const darkModeClass = 'dark-mode';
const titulo = document.getElementById('title-page');
const botao = document.getElementById('bt-mode');
const corpo = document.getElementsByTagName('body')[0];
const rodape = document.getElementsByTagName('footer')[0];

function mudaModo(){
    mudaClasse();
    mudaTitulo();
}

function mudaClasse(){
    titulo.classList.toggle(darkModeClass);
    botao.classList.toggle(darkModeClass);
    corpo.classList.toggle(darkModeClass);
    rodape.classList.toggle(darkModeClass);
}

function mudaTitulo(){
    let lightMode = 'Light Mode';
    let darkMode = 'Dark Mode';
    
    if(titulo.classList.contains(darkModeClass)){

        titulo.innerHTML = darkMode; 
        botao.innerHTML =  lightMode;
        return;
    }else{
        titulo.innerHTML = lightMode; 
        botao.innerHTML =  darkMode;
    }
}

botao.addEventListener('click', mudaModo);