const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });
    if (index > -1) {
        return todos.splice(index, 1);
    } else {
        return [];
    }
};

const printElements = function (todo) {
    console.log(`Todo: ${todo.text}. Status: ${todo.completed ? 'Completed' : 'Not Completed'}`);
};

let todoOne, todoTwo, todoThree, todoFour, todofive;

todoOne = { text: 'More time with God', completed: true };
todoTwo = { text: 'Learn English', completed: false };
todoThree = { text: 'Get back to physical activities', completed: true };
todoFour = { text: 'Rest a little bit during week', completed: true };
todofive = { text: 'Learn Programming', completed: false };

const todos = [todoOne, todoTwo, todoThree, todoFour, todofive];

console.log('-- Before --');
todos.forEach(printElements);

let elems = deleteTodo(todos, 'Learn Programming'); // elems is an array
if (elems !== null && elems !== undefined && elems.length !== 0) {
    console.log('Element removed:');
    elems.forEach(printElements);
} else {
    console.log('Element removed: Not found');
}

console.log('-- Afeter --');
todos.forEach(printElements);
