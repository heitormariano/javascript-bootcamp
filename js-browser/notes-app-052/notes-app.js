<<<<<<< HEAD
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

const body = document.querySelector('body');

const qtdElement = document.createElement('h3');
qtdElement.textContent = `You have ${qtdTodo} todos left (highlighted in red)`;
body.appendChild(qtdElement);

todos.forEach(function (todo) {
    if (!todo.completed) {
        const paragraph = document.createElement('p');
        paragraph.textContent = todo.text;
        paragraph.style.font = 'italic bold 14px arial,serif';
        paragraph.style.color = 'red';
        body.appendChild(paragraph);

    } else {
        const paragraph = document.createElement('p');
        paragraph.textContent = todo.text;
        body.appendChild(paragraph);
    }
=======
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

const body = document.querySelector('body');

const qtdElement = document.createElement('h3');
qtdElement.textContent = `You have ${qtdTodo} todos left (highlighted in red)`;
body.appendChild(qtdElement);

todos.forEach(function (todo) {
    if (!todo.completed) {
        const paragraph = document.createElement('p');
        paragraph.textContent = todo.text;
        paragraph.style.font = 'italic bold 14px arial,serif';
        paragraph.style.color = 'red';
        body.appendChild(paragraph);

    } else {
        const paragraph = document.createElement('p');
        paragraph.textContent = todo.text;
        body.appendChild(paragraph);
    }
>>>>>>> f3aba555973f28a476cb4250d690021b3cabb220
});