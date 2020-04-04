<<<<<<< HEAD
const todos = [
    {
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

const filters = {
    searchText: ''
};

const removeParagraphs = function () {
    document.querySelectorAll('p').forEach(function (elem) {
        elem.remove();
    });
};

const filterTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    removeParagraphs();
    filteredTodos.forEach(function (elem) {
        const paragraph = document.createElement('p');
        paragraph.textContent = elem.text;
        document.querySelector('body').appendChild(paragraph);
    });
};

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    filterTodos(todos, filters);
});

=======
const todos = [
    {
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

const filters = {
    searchText: ''
};

const removeParagraphs = function () {
    document.querySelectorAll('p').forEach(function (elem) {
        elem.remove();
    });
};

const filterTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    removeParagraphs();
    filteredTodos.forEach(function (elem) {
        const paragraph = document.createElement('p');
        paragraph.textContent = elem.text;
        document.querySelector('body').appendChild(paragraph);
    });
};

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    filterTodos(todos, filters);
});

>>>>>>> f3aba555973f28a476cb4250d690021b3cabb220
