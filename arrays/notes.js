const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes);
console.log(`List length: ${notes.length}`);

console.log(`First Element: ${notes[0]}`);
console.log(`Second Element: ${notes[1]}`);
console.log(`Third Element: ${notes[2]}`);

console.log(notes[notes.length - 1]);
console.log(notes[notes.length - 2]);
console.log(notes[notes.length - 3]);

// Testing
notes[notes.length] = 'Note 4';
notes[notes.length] = 'Note 5';
console.log(notes);