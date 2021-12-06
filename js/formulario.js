// block botão Adicionar

const checkBox = document.getElementById('chkAceito');
const button = document.getElementById('btn');

button.disabled = true;

checkBox.addEventListener('input', () => { 
    
    if(button.disabled === true){
        button.disabled = false; 
    } else {
        button.disabled = true;
    }
    
})

// validar se Title está vazio

const titleInput = document.getElementById('txtTitulo');

button.addEventListener('click', (event) => {

    event.stopPropagation();
    
    if(button.disabled === false && titleInput.value === ''){
        alert('insira um título');
    }

}, true)

// contador de caractere

const descriptionInput = document.getElementById('txtDescricao');
const count = document.querySelector('#contador span');

descriptionInput.addEventListener('input', (event) => {

    if(event.inputType === 'insertText'){
        count.textContent = (parseInt(count.textContent) - 1);
    }

    if(event.inputType === 'deleteContentBackward'){
        count.textContent = (parseInt(count.textContent) + 1);
    }

})
