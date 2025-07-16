const aboutPage = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const paragraph = document.createElement('p');
  const container = document.createElement('div');
  const textColumn = document.createElement('div');

  section.classList.add('hero-section');
  container.classList.add('section-container');
  textColumn.classList.add('hero-text-column');

  title.textContent = 'About Us';
  paragraph.textContent =
    "Bree's most beloved inn and meeting place for travelers, adventurers, and locals alike. Nestled at the crossroads of the Great East Road and the Greenway, our establishment has been serving fine ale, hearty meals, and warm beds since the Third Age. Owned and operated by the ever-hospitable Barliman Butterbur, The Prancing Pony offers more than just food and lodging. It's a place where stories are shared, songs are sung, and the unexpected often finds its way through the front door. Whether you're a ranger passing through, a hobbit far from home, or just someone in search of a good pint, there's always a seat by the fire waiting for you. So take off your cloak, rest your feet, and stay awhile. You never know who you'll meet — or what tale you'll become part of — at The Prancing Pony.";

  section.appendChild(container);
  container.appendChild(textColumn);
  textColumn.appendChild(title);
  textColumn.appendChild(paragraph);

  return section;
};

export default aboutPage;
