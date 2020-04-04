let name = 'Heitor';
let age = 28;

console.log(`Hey, my name is ${name}. I am ${age} years old`);

let getScoreTextTwo = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreTextTwo('Heitor', 99);
console.log(scoreText);
