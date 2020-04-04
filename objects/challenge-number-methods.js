// Ges  sing Game

let myRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let myMakeGuess = function (guess, min, max) {
    let randomNumber = myRandomNum(min, max);
    return guess === randomNumber;
};

console.log(myMakeGuess(10, 5, 12));
console.log(myMakeGuess(10, 0, 100));

console.log('---- for loop -----');
for (let i = 0; i < 20; i++) {
    console.log(myMakeGuess(12, 5, 20));
}
