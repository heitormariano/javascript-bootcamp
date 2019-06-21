//challenge
const todos = [{
    text: 'Go to the gym',
    completed: true
}, {
    text: 'Read a new book',
    completed: false
}, {
    text: 'Clean badroom',
    completed: true
}, {
    text: 'Learn English',
    completed: false
}];

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function (todo) {
    const paragraph = document.createElement('p');
    paragraph.textContent = todo.text;
    document.querySelector('body').appendChild(paragraph);
});