var clickCount = 0;

function toggleEffect() {
    var section3 = document.querySelector('.section3');
    var container = document.querySelector('.container');

    clickCount++;

    if (clickCount % 2 === 1) {
        container.classList.add('active');
    } else {
        container.classList.remove('active');
    }
}