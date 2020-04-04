let todoOne, todoTwo, todoThree, todoFour, todofive;

todoOne = 'More time with God';
todoTwo = 'Learn English';
todoThree = 'Get back to physical activities';
todoFour = 'Rest a little bit during week';
todofive = 'Learn Programming';

const todos = [todoOne, todoTwo, todoThree, todoFour, todofive];

console.log(`You have ${todos.length} todos`);

//first element
console.log(`Todo: ${todos[0]}`);

//second last element
console.log(`Todo: ${todos[todos.length - 2]}`);

console.log('Printing all elements');
console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[1]}`);
console.log(`Todo: ${todos[2]}`);
console.log(`Todo: ${todos[3]}`);
console.log(`Todo: ${todos[4]}`);