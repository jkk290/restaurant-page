const HomePage = (function() {

    const contentSection = document.querySelector('#content');

    const createMainContent = function() {
        contentSection.textContent = '';

        
        const mainContent = document.createElement('div');
        mainContent.id = 'main-content';
        mainContent.innerHTML = "<h2>Da best local kine food!</h2>" +
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repellat rerum neque? Omnis amet alias vero dolorem voluptatibus.";

        const hours = document.createElement('div');
        hours.id = 'hours';
        hours.innerHTML = "<h3>Hours</h3>" +
                            "<p>Sunday: 8am - 8pm</p>" +

                            "<p>Monday: 6am - 6pm</p>" +

                            "<p>Tuesday: 6am - 6pm</p>" +

                            "<p>Wednesday: 6am - 6pm</p>" +

                            "<p>Thursday: 6am - 10pm</p>" +

                            "<p>Friday: 6am - 10pm</P>" +

                            "<p>Saturday: 8am - 10pm</p>";

        const location = document.createElement('div');
        location.id = 'location';
        location.innerHTML= "<h3>Location</h3>" +
                            "239 Nevamind";


        contentSection.appendChild(mainContent);
        mainContent.appendChild(hours);
        mainContent.appendChild(location);
    };

    return {
        createMainContent
    }

})();

export default HomePage;