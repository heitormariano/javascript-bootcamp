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
    console.log('Name: ' + name);
    console.log('Score: ' + score);
};

getScoreText('Hector', 50);
getScoreText(100); // 100 was received as first argument
getScoreText(undefined, 35);
getScoreText('John');
getScoreText('Mary', undefined);