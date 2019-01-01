let todoOne, todoTwo, todoThree, todoFour, todofive;

todoOne = 'More time with God';
todoTwo = 'Learn English';
todoThree = 'Get back to physical activities';
todoFour = 'Rest a little bit during week';
todofive = 'Learn Programming';

const todos = [todoOne, todoTwo, todoThree, todoFour, todofive];

todos.forEach(function (item, index) {
    console.log(`The ${index + 1}º item [Todo] is: ${item}`);
});

console.log('--------------#-----------------#-----------------#-----------------');
todos.forEach(function (item, index){
    const num = index + 1;
    console.log(`${num}. ${item}`);
});