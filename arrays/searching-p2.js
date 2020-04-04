
const notes = [{
    title: 'My next trip',
    body: 'I would like go to USA'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}
];

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
    return notes[index];
};

let note = findNote(notes, 'My next trip');
console.log(note);


// using find() method
const findNoteTwo = function (notes, noteTitle) {
    const note = notes.find(function (elem) {
        return elem.title.toLowerCase() === noteTitle.toLowerCase();
    });
    return note;
};

note = findNoteTwo(notes, 'Office modification');
console.log(note);

note = findNoteTwo(notes, 'Other title');
console.log(note);