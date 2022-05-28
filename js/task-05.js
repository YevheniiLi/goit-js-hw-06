const myInput = document.querySelector('#name-input' );
const mySpan = document.querySelector('#name-output');

myInput.addEventListener('input', newInput);

function newInput(event) {
    
    mySpan.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        mySpan.textContent = 'Anonymous'
    }
}