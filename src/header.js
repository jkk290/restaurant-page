const Header = (function() {
    const headerSection = document.querySelector('header');
    const header = document.createElement('h1');
    
    const createHeader = function(title) {
        header.textContent = title;
        headerSection.appendChild(header);
    };

    return {
        createHeader
    };

})();

export default Header;

