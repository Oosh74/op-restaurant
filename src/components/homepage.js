const homePage = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');

  title.textContent = 'Hello, world';

  section.appendChild(title);

  return section;
};

export default homePage;
