let todoOne, todoTwo, todoThree, todoFour, todofive;

todoOne = { text: 'More time with God', completed: true };
todoTwo = { text: 'Learn English', completed: false };
todoThree = { text: 'Get back to physical activities', completed: true };
todoFour = { text: 'Rest a little bit during week', completed: true };
todofive = { text: 'Learn Programming', completed: false };

const todos = [todoOne, todoTwo, todoThree, todoFour, todofive];

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed === false;
    });
};

const getThingsToDoTwo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed;
    });
};

const getThingsCompleted = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed;
    });
};

console.log('Things to Do:');
console.log(getThingsToDo(todos));

console.log('Things to Do - V2:');
console.log(getThingsToDoTwo(todos));

console.log('Things Completed:');
