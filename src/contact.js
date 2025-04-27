const Contact = (function() {

    const contentSection = document.querySelector('#content');

    const createContactContent = function() {
        contentSection.innerHTML = '';

        const contactContent = document.createElement('div');
        contentSection.appendChild(contactContent);

        const contactTitle = document.createElement('h3');
        contactTitle.textContent = 'Contact';
        contactContent.appendChild(contactTitle);

        const contactInfo = document.createElement('div');
        contactInfo.innerHTML = '<p>Jared Kuromoto</p>' +
                                '<p>jared.kuromoto@dabest.fake</p>' +
                                '<p>(808)555-5555</p>';

        contactContent.appendChild(contactInfo);

    };

    return {
        createContactContent
    };

})();

export default Contact;