const nome = document.querySelector('#nome') 
const email = document.querySelector('#email') 
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
 

// Criando Função que verificar o campo nome do formulário 
function verificarNome() {

    const nomeValor = nome.value.trim()

    if (nomeValor === '') {
        mensagemErro(nome, 'Ops, não pode ficar vazio!')
    }
    else if (nomeValor.length < 5) {
        mensagemErro(nome, 'Tamanho mínimo de 5 letras')
    }

    else {
        mensagemAcerto(nome, 'Legal, está ok!')
        return true
    }
}


// Verificando o campo email
function verificarEmail() {

    // Atribuindo o valor do campo email à variável emailValor
    const emailValor = email.value.trim()

    // Usando um regex para validade se o email inserido está dentro do padrão
    if (regexEmail.test(emailValor)) {
        mensagemAcerto(email, 'Ok, email válido!')
        return true
    }

    // Caso esteja preenchido o padrão respeitado: texto@texto.texto 
    else {
        mensagemErro(email, 'Ops, email inválido!')
    }
}

/* 
Verificando se todos os campos foram preenchidos corretamente. 
Note que as funçãos acima, quando recebem um valor aceitável de
acordo com o teste, elas retornam 'true'. Desta forma, basta verificar
se todos elas retornaram 'true', alguma não retornar, subentende-se
que aquele campo não foi preenchido corretamente e o form não poderá
ser enviado.
*/
function enviarForm() {
    
    // Verificar se todas as funções retornaram 'true'
    if (verificarNome() && verificarEmail()){
        alert('Formulário enviado com sucesso!')
    }
    else {
        alert('Ops, parece que um ou mais campos não foram preenchidos corretamnte!')
    }
}



/* 
Função que será executada sempre que existir um erro no formulário
de acordo com as validações acima... Estas funções recebem, o nome do
campo e a mensagem que será apresentada de forma dinamica dentro 
da tag span.
*/
function mensagemErro(entrada, msg) {

    /* Criando uma variável que receberá acesso ao pai do elemento informado.
        Exemplo, se passado o elemento com id='nome', ela irá ganhar acesso
        ele elemento pai dele no HTML, ou seja, se ele estiver dentro de uma 
        div chamada 'leo', a variável controle agora teria acesso sobre a 
        div leo.
    */
    const controle = entrada.parentElement

    // Agora estamos alterando o nome da div (pai do elemento) para uma nova
    controle.className = 'caixadetextoErro'

    // Aqui estamos acessando a tag span de dentro da classe 'caixadetextoErro'
    const texto = controle.querySelector('span')

    // Pós acessar a tag span, estamos escrevendo dentro dela 
    texto.innerHTML = msg

}

function mensagemAcerto(entrada, msg) {
    const controle = entrada.parentElement
    controle.className = 'caixadetextoAcerto'

    const texto = controle.querySelector('span')
    texto.innerHTML = msg
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







