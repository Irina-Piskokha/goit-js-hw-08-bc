import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const keyObj = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(keyObj));
  //   const name = e.target.name;
  //   const message = e.target.value;
  //   localStorage.setItem(name, message);
}

function onWindowLoad() {
  //   const obj = localStorage.getItem('feedback-form-state');
  const saveObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(saveObj.email);
  refs.input.value = saveObj.email;
  refs.textarea.value = saveObj.message;

  //   const name = localStorage.getItem('email');
  //   const message = localStorage.getItem('message');
  //   refs.form.elements.email.value = name;
  //   refs.form.elements.message.value = message;
}

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = e.target.elements;
  const obj = {
    email: email.value,
    message: message.value,
  };
  console.log(obj);

  localStorage.removeItem('email');
  localStorage.removeItem('message');
  e.target.reset();
}

onWindowLoad();
