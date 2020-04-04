const todos = [{
    text: 'Go to the gym',
    completed: true
}, {
    text: 'Read a new book',
    completed: false
}, {
    text: 'Clean bedroom',
    completed: true
}, {
    text: 'Learn English',
    completed: false
}];

const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log('Did this work');
});