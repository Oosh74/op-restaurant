const contactPage = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const container = document.createElement('div');

  section.classList.add('hero-section');
  container.classList.add('section-container');

  title.textContent = 'Contact page';

  section.appendChild(container);
  container.appendChild(title);

  return section;
};

export default contactPage;
