let todoOne, todoTwo, todoThree, todoFour, todofive;

todoOne = 'More time with God';
todoTwo = 'Learn English';
todoThree = 'Get back to physical activities';
todoFour = 'Rest a little bit during week';
todofive = 'Learn Programming';

const todos = [todoOne, todoTwo, todoThree, todoFour, todofive];

console.log(todos);
console.log();

// Delete the 3rd item
console.log('### Delete ###');
console.log(`Element removed [3rd item]: ${todos.splice(2, 1)}`);
console.log(`Array: ${todos}`);
console.log('### End Delete ### \n');

// Add a new item onto the end
console.log('### Add ###');
console.log(`New length of the list: ${todos.push('To do a trip! [alement added]')}`);
console.log(`Array: ${todos}`);
console.log('### End Add ### \n');

// Remove the first item from the list
console.log('### Delete ###');
console.log(`Element removed [first item]: ${todos.shift()}`);
console.log(`Array: ${todos}`);
console.log('### End Delete ### \n');