const notes = [
    {
        title: 'My next trip',
        body: 'I would like go to USA',
    },
    {
        title: 'Habits to work on',
        body: 'Exercise. Eating a bit better',
    },
    {
        title: 'Office modification',
        body: 'Get a new seat',
    },
];

const filters = {
    searchText: '',
};

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach(function (elem) {
        const paragraph = document.createElement('p');
        paragraph.textContent = elem.title;
        document.querySelector('#notes').appendChild(paragraph);
    });
};

document.querySelector('#search-text').addEventListener('input', function (event) {
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
});
