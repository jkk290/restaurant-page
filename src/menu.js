const Menu = (function() {
    
    const contentSection = document.querySelector('#content');

    const createMenuContent = function() {
        contentSection.textContent = '';

        const menuContent = document.createElement('div');
        contentSection.appendChild(menuContent);

        const menuTitle = document.createElement('h3');
        menuTitle.textContent = 'Menu';
        menuContent.appendChild(menuTitle);

        const menuItems = [];

        class MenuItem {
            constructor(name, price) {
                this.name = name;
                this.price = price;
            }
        };

        function addItem(name,price) {
            let item = new MenuItem(name,price);

            menuItems.push(item);
        };

        addItem('Dish 1', 5.00);
        addItem('Dish 2', 4.00);
        addItem('Drink 1', 2.00);
        addItem('Drink 2', 1.00);

        
    };


})();