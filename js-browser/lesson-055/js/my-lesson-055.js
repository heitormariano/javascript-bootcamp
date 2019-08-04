const createTodos = function () {
    return [{
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
};

const removeParagraphs = function () {
    document.querySelectorAll('p').forEach(function (elem) {
        elem.remove();
    });
};

const todos = createTodos();

let filteredList = [];
document.querySelector('#search-text').addEventListener('input', function (e) {
    removeParagraphs();
    filteredList = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(e.target.value.toLowerCase());
    });
    filteredList.forEach(function (elem) {
        const body = document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = elem.text;
        body.appendChild(p);
    });
});

