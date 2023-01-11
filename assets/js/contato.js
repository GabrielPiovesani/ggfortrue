let inputName = document.querySelector('#nome')
let email = document.querySelector('#email')
let caixaTexto = document.querySelector('#textArea')
let assunto = document.querySelector('#assunto')
// inputName.style.border = 'rgba(0, 0, 0, 0.4)'
// email.style.border = 'rgba(0, 0, 0, 0.4)'
// caixaTexto.style.border = 'rgba(0, 0, 0, 0.4)'


function validaName(){
    if(Number.isNaN(inputName)){
        inputName.style.background = 'rgba(0, 0, 0, 0.4)'

    }
}

function assuntos(){
    if(assunto == 'Sujestão de melhoria'){
        var escolhaAssunto = document.querySelector('#labelAssunto')
        escolhaAssunto.setAttribute('')
    }
}


while(true){
    
}