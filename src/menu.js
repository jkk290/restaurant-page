const Menu = (function() {
    
    const contentSection = document.querySelector('#content');

    const createMenuContent = function() {
        contentSection.innerHTML = '';

        const menuContent = document.createElement('div');
        menuContent.id = 'menu';
        contentSection.appendChild(menuContent);

        const menuTitle = document.createElement('h3');
        menuTitle.textContent = 'Menu';
        menuContent.appendChild(menuTitle);

        const menuItems = [];

        console.log(menuItems);

        class MenuItem {
            constructor(name, price) {
                this.name = name;
                this.price = price;
            }

            info() {
                return `${this.name}............$ ${this.price}`;
            };
        };

        function addItem(name, price) {
            let item = new MenuItem(name, price);

            menuItems.push(item);
        };

        addItem('Dish 1', 5);
        addItem('Dish 2', 4);
        addItem('Drink 1', 2);
        addItem('Drink 2', 1);

        const menuItemsContainer = document.createElement('div');
        menuItemsContainer.id = 'menu-items-container'

        menuItems.forEach((item) => {
            const lineItem = document.createElement('p');

            lineItem.textContent = item.info();
            menuItemsContainer.appendChild(lineItem);
        });

        menuContent.appendChild(menuItemsContainer);
        
    };

    return {
        createMenuContent
    }


})();

export default Menu;