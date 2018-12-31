let isRaining = true;
isRaining = false;
console.log(isRaining);

const isMarried = true;
// isMarried = false; // TypeError: Assignment to constant variable.
console.log(isMarried);

const person = {
    name: 'John',
    age: 36
};
console.log(person);

//person = {}; // TypeError: Assignment to constant variable.

person.name = 'Richard';
person.age = 48;

console.log(person);