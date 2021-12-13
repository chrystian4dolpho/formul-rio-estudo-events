'use strict';
const checkBox = document.getElementById('chkAceito');
const button = document.getElementById('btn');
const titleInput = document.getElementById('txtTitulo');
const form = document.querySelector('.formCadastro');
const descriptionInput = document.getElementById('txtDescricao');
const count = document.querySelector('#contador span');
const feedbackMessage = document.getElementById('feedbackMessage');
const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0];

// block botão Adicionar
checkBox.checked = false;
button.disabled = true;

checkBox.addEventListener('input', () => { 

    if(button.disabled === true){
        button.disabled = false; 
    } else {
        button.disabled = true;
    }
    
})

// validar se Title está vazio

form.addEventListener('submit', (event) => {
    
    if(!titleInput.value){
        showErrorMessage('Insira um título', function(){
            //callback executado para dar foco no input de titulo
            titleInput.focus()
        });
        event.preventDefault(); //bloqueia o submit do form
    }

})

//feedback

function showErrorMessage(msg, focusCb){

    let message = feedbackMessage.getElementsByTagName('p')[0];
    message.textContent = msg;
    feedbackMessage.classList.add('show');

    feedbackMessageCloseBtn.focus();

    function hideMessage(){
        feedbackMessage.classList.remove('show');

        //para removermos um listener, deve-se ter um função nomeada, pois assim tem-se a referencia
        feedbackMessageCloseBtn.removeEventListener('click', hideMessage);
        feedbackMessageCloseBtn.removeEventListener('keyup', hideMessage);
        focusCb();
    }

    function hideMessageByESCPressed(event){
        if(event.key === 'Escape'){
            hideMessage();
        }
    }
    
    feedbackMessageCloseBtn.addEventListener('click', hideMessage);
    feedbackMessageCloseBtn.addEventListener('keyup', hideMessageByESCPressed);
}

// contador de caractere

showNumberCount(descriptionInput.maxLength - descriptionInput.value.length);

descriptionInput.addEventListener('input', (event) => {

    console.log(event);
    if(event.inputType === 'insertFromPaste'){
        showNumberCount(parseInt(count.textContent) - descriptionInput.value.length);
    }

    if(event.inputType === 'insertText'){
        showNumberCount(parseInt(count.textContent) - 1);
    }

    if(event.inputType === 'deleteContentBackward'){
        showNumberCount(parseInt(count.textContent) + 1);
    }

})

function showNumberCount(num){
    count.textContent = num;
}
