let greetUser = function () {
    console.log('Welcome user!');
};

greetUser();
greetUser();
greetUser();

let square = function (num) {
    let result = num * num;
    return result;
};

let value = square(3);
let otherValue = square(10);

console.log('Value: ' + value);
console.log('Other value: ' + otherValue);

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score;
};

let scoreText = getScoreText('Hector', 50);
console.log(scoreText);

scoreText = getScoreText(100); // 100 was received as first argument
console.log(scoreText);

scoreText = getScoreText(undefined, 35);
console.log(scoreText);

scoreText = getScoreText('John');
console.log(scoreText);

scoreText = getScoreText('Mary', undefined);
console.log(scoreText);