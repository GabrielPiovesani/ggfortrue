const nome = document.querySelector('#nome') 
const email = document.querySelector('#email') 
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
 

// Criando Função que verificar o campo nome do formulário 
function validaNome() {

    const nomeValor = nome.value.trim()

    if (nomeValor === '') {
        mensagemErro(nome, 'Nome não pode ficar vazio')
    }
    else if (nomeValor.length < 5) {
        mensagemErro(nome, 'Tamanho mínimo de 5 letras')
    }

    else {
        mesgAcerto(nome, 'Legal, está ok!')
        return true
    }
}


// Verificando o campo email
function validaEmail() {

    const emailValor = email.value.trim()

    if (regexEmail.test(emailValor)) {
        mesgAcerto(email, 'Email validado!')
        return true
    }

    else {
        mensagemErro(email, 'Ops, email inválido!')
    }
}

// função que envia o formulário


function mensagemErro(input, msg) {

    const controle = input.parentElement
    controle.className = 'spanErro'
    const texto = controle.querySelector('small')
    texto.innerHTML = msg

}

function mesgAcerto(input, msg) {
    const controle = input.parentElement
    controle.className = 'spanAcerto'

    const texto = controle.querySelector('small')
    texto.innerHTML = msg
}



function validarFormulario() {
    
    // Verificar se todas as funções retornaram 'true'
    if (validaNome() && validaEmail()){
        alert('Formulário enviado!')
        return true
    }
    else {
        alert('Ops, parece que um ou mais campos não foram preenchidos corretamnte!')
    }
}




























// function validaFormulario(){
//     const uName = inputName.value.trim()
//     const inputEmail = email.value.trim()

//     if(uName < 3){
//         apresentaErro(uName, 'Mínimo de 3 caracteres')
//     }else{
//         apresentaAcerto()
//     }
// }

// function validaName(){  
//     if(inputs[0].value.length < 3){
        
//     }else{

//     }
// }

// function apresentaErro(uName, msg){
//     inputName.className = 'estilizaErro'

//     //adiciona erro do texto
//     const textError = inputs.paretElement
//     textError.className = 'boxInput'

//     const input = document.querySelector('input')
//     input.innerHTML = msg
// }

// function assuntos(){
    
// }

// function borderInput(){

// }







