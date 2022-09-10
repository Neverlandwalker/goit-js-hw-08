import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    formEl: document.querySelector('.feedback-form'),
    formEmail: document.querySelector('.feedback-form input'),
    formText: document.querySelector('.feedback-form textarea'),
    formSubmit: document.querySelector('.feedback-form button')
}

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEmail.addEventListener('input', onEmailInput);
refs.formText.addEventListener('input', throttle(onTextInput, 1000));
refs.formSubmit.addEventListener('click', onSubmitClick)

populateTextArea();
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}

function onEmailInput(evt) {
    
}

function onTextInput(evt) {
    formData[evt.target.name] = evt.target.value; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}


function populateTextArea(evt) {
    const savedMessage = localStorage.getItem(STORAGE_KEY);


    if (savedMessage) {
        refs.formText.value = formData.message || '';
        refs.formEmail.value = formData.email || '';
    }
}