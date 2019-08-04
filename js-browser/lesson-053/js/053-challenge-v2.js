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
let index = 0;
button.addEventListener('click', function () {
    if (index < todos.length) {
        const elem = todos[index];
        const paragraph = document.createElement('p');
        paragraph.textContent = `${index + 1} - ${elem.text} - ${elem.completed ? 'Completed' : 'Not Completed'}`;
        document.querySelector('body').appendChild(paragraph);
        ++index;
    }
})