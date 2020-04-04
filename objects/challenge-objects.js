let person = {
    name: 'John',
    age: 31,
    location: 'Seattle',
};

console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.location);

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
