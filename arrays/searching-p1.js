const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log('The index: ' + notes.indexOf('Note 2'));
console.log('The index: ' + notes.indexOf('Note 3'));

const notesTwo = [{}, {
    title: 'My next trip',
    body: 'I would like go to USA'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

console.log(`Length: ${notesTwo.length}`);
console.log(notesTwo);

console.log(`Index value: ${notesTwo.indexOf({})}`); // -1

console.log({} === {}); // false

let oneObject = {};
let otherObject = oneObject;
console.log(oneObject === otherObject); // true

const index = notesTwo.findIndex(function (note) {
    return note.title === 'Habbits to work on';
});

console.log(`Index value: ${index}`); // 2

