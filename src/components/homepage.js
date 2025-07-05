import heroImg from '../assets/imgs/prancing-pony-drawing-1.webp';

const homePage = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const paragraph = document.createElement('p');
  const container = document.createElement('div');
  const textColumn = document.createElement('div');
  const imgColumn = document.createElement('div');
  const imgElement = document.createElement('img');

  section.classList.add('hero-section');
  container.classList.add('section-container');
  textColumn.classList.add('hero-text-column');
  imgColumn.classList.add('hero-img-column');

  imgElement.src = heroImg;

  title.textContent = 'Where Stories are Shared and Legends Begin';
  paragraph.textContent =
    'Welcome to Bree’s most beloved tavern — serving hearty food, frothy pints, and warm company for travelers and locals alike.';

  section.appendChild(container);
  container.appendChild(textColumn);
  container.appendChild(imgColumn);
  textColumn.appendChild(title);
  textColumn.appendChild(paragraph);
  imgColumn.appendChild(imgElement);

  return section;
};

export default homePage;
