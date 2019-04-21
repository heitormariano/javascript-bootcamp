let todoOne, todoTwo, todoThree, todoFour, todofive;

todoOne = { text: 'More time with God', completed: true };
todoTwo = { text: 'Learn English', completed: false };
todoThree = { text: 'Get back to physical activities', completed: true };
todoFour = { text: 'Rest a little bit during week', completed: true };
todofive = { text: 'Learn Programming', completed: false };

const todos = [todoOne, todoTwo, todoThree, todoFour, todofive];

const sortTodos = function (todos) {
    todos.sort(function (todo_one, todo_two) {
        if (!todo_one.completed && todo_two.completed) {
            return -1;
        } else if (todo_one.completed && !todo_two.completed) {
            return 1;
        } else {
            return 0;
        }
    });
};

sortTodos(todos);
console.log(todos);