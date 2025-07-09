const menuPage = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const container = document.createElement('div');
  const menuGrid = document.createElement('div');

  section.classList.add('hero-section');
  container.classList.add('section-container', 'menu-section');
  menuGrid.classList.add('menu-grid');
  title.classList.add('menu-title');

  title.textContent = 'Menu page';

  section.appendChild(container);
  container.appendChild(title);
  container.appendChild(menuGrid);

  const createDivs = () => {
    let divArr = [];

    for (let i = 0; i < 5; i++) {
      let div = document.createElement('div');
      div.classList.add('menu-category');

      divArr.push(div);

      menuGrid.appendChild(div);
    }

    createTitle(divArr);
  };

  const createTitle = (divArr) => {
    console.log('grid array', divArr);
    divArr.map((div) => {
      const title = document.createElement('h2');
      title.textContent = 'Grid item';
      title.classList.add('menu-category-title');
      div.appendChild(title);
    });
  };

  //need to create 5 sections
  //5 titles
  //5 menu items each
  createDivs();

  return section;
};

export default menuPage;
