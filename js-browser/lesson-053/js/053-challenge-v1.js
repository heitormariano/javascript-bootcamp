const button = document.querySelector('button');
let qtd = 0;
button.addEventListener('click', function (e) {
    e.target.textContent = `clicked button - ${++qtd}x`;
    console.log('Clicked button!');
});