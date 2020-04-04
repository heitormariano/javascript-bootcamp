let todoOne, todoTwo, todoThree, todoFour, todofive;

todoOne = 'More time with God';
todoTwo = 'Learn English';
todoThree = 'Get back to physical activities';
todoFour = 'Rest a little bit during week';
todofive = 'Learn Programming';

const todos = [todoOne, todoTwo, todoThree, todoFour, todofive];

for (let count = 0; count < todos.length; count++) {
    const num = count + 1;
    const todo = todos[count];

    console.log(`${num}. ${todo}`);
}