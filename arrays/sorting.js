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

const numbers = [30, 55, 100, 1, 2, 88, 4, 789];

//sortNotes
const sortNotes = function (todos) {
    todos.sort(function (todo_one, todo_two) {
        if (todo_one.title.toLowerCase() < todo_two.title.toLowerCase()) {
            return -1;
        } else if (todo_one.title.toLowerCase() > todo_two.title.toLowerCase()) {
            return 1;
        } else {
            return 0
        }
    });
};

// sorting numbers list
const sortNumbers = function (numbers) {
    numbers.sort(function (num_one, num_two) {
        return num_one - num_two;
    });
};

console.log('Using sortNotes method');
sortNotes(notes);
console.log(notes);

console.log('Using sortNumbers method');
sortNumbers(numbers);
console.log(numbers);