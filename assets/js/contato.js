const nome = document.querySelector('#nome') 
const email = document.querySelector('#email') 
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
 

// Criando Função que verificar o campo nome do formulário 
function validaNome() {// função valida nome

    const nomeValor = nome.value.trim()

    if (nomeValor === '') { //verifica se o nome está vazio
        mensagemErro(nome, 'Nome não pode ficar vazio') 
    }
    else if (nomeValor.length < 5) { // verifica se há menos que 5 caracteres
        mensagemErro(nome, 'Tamanho mínimo de 5 letras')
    }

    else { // executa caso as duas condições sejam falsas
        mesgAcerto(nome, 'Legal, está ok!')
        return true
    }
}


// Verificando o campo email
function validaEmail() { // função valida e-mail

    const emailValor = email.value.trim()

    if (regexEmail.test(emailValor)) { //compara as regras(expressões) do email regex com a entrada do input
        mesgAcerto(email, 'Email validado!')
        return true 
    }

    else {
        mensagemErro(email, 'Ops, email inválido!')
    }
}

// função que envia o formulário


function mensagemErro(input, msg) { // função de mensagem de erro

    const controle = input.parentElement  // pega a div pai do input e atribui a uma variável
    controle.className = 'spanErro' // atribui uma classe a variável
    const texto = controle.querySelector('small') //  pega a tag small dentro da div pai do input, ou seja, de dentro da label e adiciona a váriavel texto 
    texto.innerHTML = msg // adiciono texto msg para ser declarada na função ao chama-la

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
        alert('Por Favor, preencha os dados corretamente')
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







