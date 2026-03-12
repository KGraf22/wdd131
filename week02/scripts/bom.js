const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

buttonElement.addEventListener('click', function () {
    if (inputElement.value != '') {
        
        const li = document.createElement('li');
        li.textContent = inputElement.value;
        
        const deleteButton = document.createElement('button')
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove Chapter');

        deleteButton.addEventListener('click', function () {
            listElement.removeChild(li);
            inputElement.focus();
        });
        li.appendChild(deleteButton);
        listElement.appendChild(li);
        
        inputElement.value = '';

    }
    inputElement.focus();
});
