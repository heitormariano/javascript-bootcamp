document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'Clicked Button';
    console.log('create note');
});
document.querySelector('#remove-all').addEventListener('click', function () {
    console.log('remove all');
});
