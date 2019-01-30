//*---------------Microinteractie toevoegen aan verhaal
var microster = document.querySelector('.microster');
var ster = document.querySelector('p + button');

function begin() {
    microster.classList.toggle('starten');
}

function beginSter() {
    buttonster.classList.toggle('beginSter');
}


ster.addEventListener('click', begin);
ster.addEventListener('click', beginSter);


//*-------------Filter aan of ut zetten
var filter = document.querySelector('form + form');
var button = document.querySelector('fieldset + button');

function aan() {
    filter.classList.toggle('aan');
}

function uit() {
    button.classList.toggle('uit');
}

button.addEventListener('click', aan);
button.addEventListener('click', uit);
