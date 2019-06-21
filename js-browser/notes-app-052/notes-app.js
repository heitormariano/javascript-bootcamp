// Adding a new element in the document
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from JavaScript';
// document.querySelector('body').appendChild(newParagraph);

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

let qtdTodo = 0;
todos.forEach(function (todo) {
    if (!todo.completed) {
        qtdTodo++;
    }
});

const qtdElement = document.createElement('h3');
qtdElement.textContent = `You have ${qtdTodo} todos left (highlighted in red)`;
document.querySelector('body').appendChild(qtdElement);

todos.forEach(function (todo) {
    if (!todo.completed) {
        const paragraph = document.createElement('p');
        paragraph.textContent = todo.text;
        paragraph.style.font = 'italic bold 14px arial,serif';
        paragraph.style.color = 'red';
        document.querySelector('body').appendChild(paragraph);

    } else {
        const paragraph = document.createElement('p');
        paragraph.textContent = todo.text;
        document.querySelector('body').appendChild(paragraph);
    }
});