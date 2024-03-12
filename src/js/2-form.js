const form = document.querySelector('.form');

const saveForm = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('form', JSON.stringify(formData));
};

form.addEventListener('input', saveForm);

const loadForm = () => {
  const saveData = localStorage.getItem('form');
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};
form.addEventListener('submit', e => {
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
  e.preventDefault();
  localStorage.removeItem('form');
  form.reset();
});