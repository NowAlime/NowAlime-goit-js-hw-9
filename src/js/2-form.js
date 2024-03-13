const form = document.querySelector(".feedback-form");
let saveInfo;

const saveForm = () => {
  const formData = {
    email: saveInfo.elements.email.value.trim(),
    message: saveInfo.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(saveInfo));
};

const loadForm = () => {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    saveInfo.elements.email.value = email;
    saveInfo.elements.message.value = message;
  }
};
loadForm();

form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.elements.email.value === '') {
    alert('Please enter your email');
  }
  if (form.elements.message.value === '') {
    alert('Please enter your message');
  }

  console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  });

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
