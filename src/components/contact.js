const contactPage = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const container = document.createElement('div');
  const form = document.createElement('form');
  const firstNameLabel = document.createElement('label');
  const lastNameLabel = document.createElement('label');
  const emailLabel = document.createElement('label');
  const msgLabel = document.createElement('label');
  const firstNameInput = document.createElement('input');
  const lastNameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const msgInput = document.createElement('textarea');
  const firstNameContainer = document.createElement('div');
  const lastNameContainer = document.createElement('div');
  const emailContainer = document.createElement('div');
  const msgContainer = document.createElement('div');

  const submitBtn = document.createElement('button');

  section.classList.add('hero-section');
  container.classList.add('form-container');
  firstNameContainer.classList.add('form-element-container');
  lastNameContainer.classList.add('form-element-container');
  emailContainer.classList.add('form-element-container');
  msgContainer.classList.add('form-element-container');

  title.textContent = 'Contact Us';
  firstNameLabel.textContent = 'First Name';
  lastNameLabel.textContent = 'Last Name';
  emailLabel.textContent = 'Email';
  msgLabel.textContent = 'Message';
  firstNameLabel.setAttribute('for', 'first-name');
  lastNameLabel.setAttribute('for', 'last-name');
  emailLabel.setAttribute('for', 'email');
  msgLabel.setAttribute('for', 'msg');
  firstNameInput.setAttribute('id', 'first-name');
  firstNameInput.setAttribute('type', 'text');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  lastNameInput.setAttribute('id', 'last-name');
  lastNameInput.setAttribute('type', 'input');
  msgInput.setAttribute('id', 'msg');
  msgInput.setAttribute('form', 'contact-form');
  form.setAttribute('id', 'contact-form');

  submitBtn.textContent = 'Send Message';

  section.appendChild(container);
  container.appendChild(title);
  container.appendChild(form);
  form.append(
    firstNameContainer,
    lastNameContainer,
    emailContainer,
    msgContainer
  );
  firstNameContainer.append(firstNameLabel, firstNameInput);
  lastNameContainer.append(lastNameLabel, lastNameInput);
  emailContainer.append(emailLabel, emailInput);
  msgContainer.append(msgLabel, msgInput);

  form.append(submitBtn);

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    form.remove();
    let msgSent = document.createElement('p');
    msgSent.textContent = 'Message has been sent!';
    container.append(msgSent);
  });

  return section;
};

export default contactPage;
