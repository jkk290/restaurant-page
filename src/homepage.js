const HomePage = (function() {

    const contentSection = document.querySelector('#content');

    const createMainContent = function() {
        const mainContent = document.createElement('div');
        mainContent.id = 'main-content';
        mainContent.textContent = 'Da best local kine food!'

        contentSection.appendChild(mainContent);
    };

    return {
        createMainContent
    }

})();

export default HomePage;