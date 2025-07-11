const contactPage = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const container = document.createElement('div');
  const form = document.createElement('form');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const nameContainer = document.createElement('div');

  const submitBtn = document.createElement('button');

  section.classList.add('hero-section');
  container.classList.add('form-container');
  nameContainer.classList.add('form-element-container');

  title.textContent = 'Contact Us';
  nameLabel.textContent = 'First Name';
  nameLabel.setAttribute('for', 'first-name');
  nameInput.setAttribute('id', 'first-name');
  nameInput.setAttribute('type', 'text');

  submitBtn.textContent = 'Send Message';

  section.appendChild(container);
  container.appendChild(title);
  container.appendChild(form);
  form.appendChild(nameContainer);
  nameContainer.append(nameLabel, nameInput);

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
