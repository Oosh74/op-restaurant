const menuPage = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const container = document.createElement('div');
  const menuGrid = document.createElement('div');

  section.classList.add('hero-section');
  container.classList.add('section-container', 'menu-section');
  menuGrid.classList.add('menu-grid');

  title.textContent = 'Menu';

  section.appendChild(container);
  container.appendChild(title);
  container.appendChild(menuGrid);

  const createItem = (itemName, itemPrice, itemDescp) => ({
    itemName,
    itemPrice,
    itemDescp,
  });

  class MenuSection {
    constructor(title, items) {
      this.name = title;
      this.items = items;
    }

    render() {
      const div = document.createElement('div');
      div.classList.add('menu-section');
      const title = document.createElement('h2');

      title.textContent = this.name;

      menuGrid.appendChild(div);
      div.appendChild(title);

      this.items.map((item) => {
        const { itemName, itemPrice, itemDescp } = item;

        const itemNameTitle = document.createElement('h3');
        const desc = document.createElement('p');
        const price = document.createElement('p');
        const menuItemCont = document.createElement('div');

        menuItemCont.classList.add('sub-menu-item');

        itemNameTitle.textContent = itemName;
        desc.textContent = itemDescp;
        price.textContent = itemPrice;

        menuItemCont.append(itemNameTitle, price, desc);
        div.appendChild(menuItemCont);
      });
    }
  }

  const heartyMeals = new MenuSection('Hearty Meals', [
    createItem(
      'Bree-land Stew',
      '8 cp',
      'A rich and savory lamb and root vegetable stew, slow-cooked with barley and wild herbs. Served with a crust of brown bread.'
    ),
    createItem(
      'Second Breakfast Platter',
      '9 cp',
      'Fried eggs, rashers of bacon, grilled tomatoes, and fried bread — perfect for hobbits and hungry humans alike.'
    ),
    createItem(
      'Ranger’s Roast',
      '10 cp',
      'Smoked venison haunch glazed with honey and mead, accompanied by roasted tubers and pickled mushrooms.'
    ),
    createItem(
      'Shire Pie',
      '10 cp',
      'A thick-crusted pie stuffed with seasonal greens, leeks, and cheese from the Southfarthing.'
    ),
    createItem(
      'Mushroom Medley',
      '6 cp',
      'Sautéed mushrooms from Farmer Maggot’s fields, tossed with garlic, onions, and a splash of ale.'
    ),
  ]);

  const snacks = new MenuSection('Snacks & Sides', [
    createItem(
      'Pony Pickles',
      '2 cp',
      'A jar of pickled vegetables and herbs, made in-house.'
    ),
    createItem(
      'Cheese & Crackers Board',
      '4 cp',
      'Assorted Bree cheeses with oatcakes and a dab of gooseberry jam.'
    ),
    createItem(
      'Hot Buttered Turnips',
      '10 cp',
      'Roasted golden turnips with melted butter and cracked black pepper.'
    ),
  ]);

  const drinks = new MenuSection('Ales, Brews, and Beverages', [
    createItem(
      'Butterbur’s Best Bitter (House Ale)',
      '3 cp',
      'Malty and dark, with notes of oak and toffee.'
    ),
    createItem(
      'Bree Blonde',
      '3 cp',
      'A light, crisp ale brewed in town — a favorite among travelers.'
    ),
    createItem(
      'Old Toby’s Reserve Cider',
      '4 cp',
      'Tart apple cider with a dash of cinnamon and clove.'
    ),
    createItem(
      'Traveler’s Mulled Wine',
      '5 cp',
      'Spiced red wine, served warm. A winter favorite.'
    ),
    createItem(
      'Dwarven Stout (LIMITED)',
      '6 cp',
      'Heavy and smoky, with hints of stonefruit. Brewed deep in the Blue Mountains. Ask Barliman if it’s in stock.'
    ),
  ]);

  const dessert = new MenuSection('Sweet Treats', [
    createItem(
      'Honey-Cakes',
      '3 cp',
      'Sweet and spongy, made with real wildflower honey.'
    ),
    createItem(
      'Seedcake Slice',
      '2 cp',
      'A dense, nutty treat perfect with cider or tea.'
    ),
    createItem(
      'Berry Crumble',
      '4 cp',
      'Served warm, with seasonal berries from the Chetwood.'
    ),
  ]);

  heartyMeals.render();
  snacks.render();
  drinks.render();
  dessert.render();

  return section;
};

export default menuPage;
