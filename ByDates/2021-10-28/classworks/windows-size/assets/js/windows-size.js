// Parašykite JavaScript kodą, karis rodytu lango plotį ir aukštį H1 elemente (kiekvieną kartą, kai keičiamas lango dydis).

function getSize() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    }
}

function updateWindowSizeText(element, {w, h}) {
    element.innerText = `Width: ${w}, Height: ${h}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.createElement('h1');

    document.body.prepend(h1);

    updateWindowSizeText(h1, getSize());

    window.addEventListener('resize', function() {
        updateWindowSizeText(h1, getSize());
    });
});