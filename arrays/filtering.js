<<<<<<< HEAD
const notes = [{
    title: 'My next trip',
    body: 'I would like go to USA'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];


const filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('ne');
    const isBodyMatch = note.body.toLowerCase().includes('ne');

    return isTitleMatch || isBodyMatch;
});

const filteredNotesTwo = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('office');
    const isBodyMatch = note.body.toLowerCase().includes('office');;

    return isTitleMatch || isBodyMatch;
});

// creating a function to find notes
const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query);
        const isBodyMatch = note.body.toLowerCase().includes(query);

        return isTitleMatch || isBodyMatch;
    });
};

console.log('First Result:');
console.log(filteredNotes);

console.log('Second Result:');
console.log(filteredNotesTwo);

//the query has to be used with lowercase letters
console.log('Using findNotes method');
console.log(findNotes(notes, 'my'));
=======
const notes = [{
    title: 'My next trip',
    body: 'I would like go to USA'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];


const filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('ne');
    const isBodyMatch = note.body.toLowerCase().includes('ne');

    return isTitleMatch || isBodyMatch;
});

const filteredNotesTwo = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('office');
    const isBodyMatch = note.body.toLowerCase().includes('office');;

    return isTitleMatch || isBodyMatch;
});

// creating a function to find notes
const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query);
        const isBodyMatch = note.body.toLowerCase().includes(query);

        return isTitleMatch || isBodyMatch;
    });
};

console.log('First Result:');
console.log(filteredNotes);

console.log('Second Result:');
console.log(filteredNotesTwo);

//the query has to be used with lowercase letters
console.log('Using findNotes method');
console.log(findNotes(notes, 'my'));
>>>>>>> f3aba555973f28a476cb4250d690021b3cabb220
console.log(findNotes(notes, 'eating'));