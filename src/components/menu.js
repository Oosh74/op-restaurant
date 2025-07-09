const menuPage = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const container = document.createElement('div');
  const menuGrid = document.createElement('div');

  section.classList.add('hero-section');
  container.classList.add('section-container', 'menu-section');
  menuGrid.classList.add('menu-grid');

  title.textContent = 'Menu page';

  section.appendChild(container);
  container.appendChild(title);
  container.appendChild(menuGrid);

  class MenuSection {
    constructor(title, items) {
      this.name = title;
      this.items = items;
    }

    render() {
      const div = document.createElement('div');
      const title = document.createElement('h2');

      title.textContent = this.name;

      menuGrid.appendChild(div);
      div.appendChild(title);

      this.items.map((item) => {
        const { itemName, itemPrice, itemDescp } = item;

        const itemNameTitle = document.createElement('h3');
        const desc = document.createElement('p');
        const price = document.createElement('p');

        itemNameTitle.textContent = itemName;
        desc.textContent = itemDescp;
        price.textContent = itemPrice;

        div.appendChild(itemNameTitle);
        div.appendChild(price);
        div.appendChild(desc);
      });

      // console.log(this.name, this.items);
    }
  }

  const heartyMeals = new MenuSection('Hearty Meals', [
    {
      itemName: 'Bree-land Stew',
      itemPrice: '8 cp',
      itemDescp:
        'A rich and savory lamb and root vegetable stew, slow-cooked with barley and wild herbs. Served with a crust of brown bread.',
    },
    {
      itemName: 'Second Breakfast Platter',
      itemPrice: '9 cp',
      itemDescp:
        'Fried eggs, rashers of bacon, grilled tomatoes, and fried bread — perfect for hobbits and hungry humans alike.',
    },
    {
      itemName: 'Ranger’s Roast ',
      itemPrice: '10 cp',
      itemDescp:
        'Smoked venison haunch glazed with honey and mead, accompanied by roasted tubers and pickled mushrooms.',
    },
    {
      itemName: 'Shire Pie',
      itemPrice: '10 cp',
      itemDescp:
        'A thick-crusted pie stuffed with seasonal greens, leeks, and cheese from the Southfarthing.',
    },
    {
      itemName: 'Mushroom Medley',
      itemPrice: '6 cp',
      itemDescp:
        'Sautéed mushrooms from Farmer Maggot’s fields, tossed with garlic, onions, and a splash of ale.',
    },
  ]);

  heartyMeals.render();

  return section;
};

export default menuPage;
