// let front = document.querySelectorAll('.card__front');
// let back = document.querySelectorAll('.card__back');
let card = document.querySelectorAll('.card__back, .card__front');


card.forEach(function (c) {
    this.addEventListener('click', function () {
        c.classList.toggle('active');
    });
});

// front.forEach(function (f) {
//     f.addEventListener('click', function () {
//         f.classList.toggle('active');
//     });
// });

// back.forEach(function (b) {
//     b.addEventListener('click', function () {
//         b.classList.toggle('active');
//     });
// });