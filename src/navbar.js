const Navbar = (function() {
    const navbarSection = document.querySelector('nav');
    
    
    const createNavButtons = function() {
        const buttonHome = document.createElement('button');
        const buttonMenu = document.createElement('button');
        const buttonContact = document.createElement('button');

        buttonMenu.textContent = 'Menu';
        buttonHome.textContent = 'Home';
        buttonContact.textContent = 'Contact';

        navbarSection.appendChild(buttonHome);
        navbarSection.appendChild(buttonMenu);
        navbarSection.appendChild(buttonContact);

    };

    return {
        createNavButtons
    }
    
})();

export default Navbar;