const form = document.querySelector(".feedback-form");
let saveInfo = {};
const storageKey = 'feedback-form-state';
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const saveForm = (evt) => {
  saveInfo[evt.target.name] = evt.target.value;
  localStorage.setItem(storageKey, JSON.stringify(saveInfo));
};
form.addEventListener('input', saveForm);
const loadForm = () => {
  const saveData = localStorage.getItem(storageKey);
  if (saveData) {
    saveInfo = JSON.parse(saveData) || {}; 
    emailInput.value = saveInfo.email || ''; 
    messageInput.value = saveInfo.message || '';
  }
};
loadForm();
form.addEventListener('submit', e => {
  e.preventDefault();
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Please, fill in all fields');
    return;
  }else{
    localStorage.removeItem(storageKey);
    form.reset();
    console.log(saveInfo);
  }
});