// push() / pop() — add/remove elements from the END of the array
const names = ['Paulo', 'Marcos', 'Mateus', 'Lucas'];
console.log(names);

console.log('--> push() / pop()');

names.push('Beatriz');
console.log(names);

names.push('Joao');
console.log(names);

names.pop();
console.log(names);

names.pop();
console.log(names);

// unshift() / shift() — add / remove elements from the beginning of the array
const letters = ['c', 'd', 'e', 'f'];
console.log(letters);

console.log('--> unshift() / shift()');
letters.unshift('b');
console.log(letters);

letters.unshift('a');
console.log(letters);

// concat() — returns a new array comprised of this array joined with other array(s) and/or value(s)
const numsPiece01 = [1, 2, 3];
const numsPiece02 = [4, 5, 6];

console.log('--> concat()');
const numbers = numsPiece01.concat(numsPiece02);
console.log(numbers);

// splice()
// Examples inspired in MDN page about Arrays
console.log('--> splice()');

const notes = ['note 01', 'note 02', 'note 03'];
console.log(notes);

// Remove 0 (zero) elements from index 2, and insert "new note"
let elemRemoved = notes.splice(2, 0, 'new note');
console.log(`Element(s) removed: ${elemRemoved}`);
console.log(notes);

// Remove 0 (zero) elements from index 1, and insert "note 04" e "note 05"
elemRemoved = notes.splice(1, 0, 'note 04', 'note 05');
console.log(`Element(s) removed: ${elemRemoved}`);
console.log(notes);

// Remove 1 element from index 3
elemRemoved = notes.splice(3, 1);
console.log(`Element(s) removed: ${elemRemoved}`);
console.log(notes);

//Remove 1 element from index 2, and insert "another note"
elemRemoved = notes.splice(2, 1, 'another note');
console.log(`Element(s) removed: ${elemRemoved}`);
console.log(notes);

// Remove 2 elements from index 0, and insert "special note 01", "special note 02" and "special note 03"
elemRemoved = notes.splice(0, 2, 'special note 01', 'special note 02', 'special note 03');
console.log(`Element(s) removed: ${elemRemoved}`);
console.log(notes);

// Remove 1 element from index -2
elemRemoved = notes.splice(-2, 1);
console.log(`Element(s) removed: ${elemRemoved}`);
console.log(notes);

// Remove all elements after index 2 (incl.)
elemRemoved = notes.splice(2);
console.log(`Element(s) removed: ${elemRemoved}`);
console.log(notes);
