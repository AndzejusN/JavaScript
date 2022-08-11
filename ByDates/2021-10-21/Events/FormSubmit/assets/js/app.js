document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();

        console.log('form submit');
    });

    document.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        
        console.log('a click');

        return false;
    });
});