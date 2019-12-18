let card = document.querySelectorAll('.card');


card.forEach(function (c) {
    c.addEventListener('click', function () {
        c.classList.toggle('active');
    });
});
