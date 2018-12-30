let num = 104.965;

console.log(num.toFixed(1));
console.log(num.toFixed(2));
console.log(num.toFixed(6));


let numTwo = 56.659;

console.log(Math.round(numTwo));
console.log(Math.floor(numTwo));
console.log(Math.ceil(numTwo));


console.log(Math.random());

let getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};

console.log(getRandomInt(10));

console.log('Executions');
for (let i = 0; i < 10; i++) {
    console.log(getRandomInt(10));
}

let getRandomIntTwo = function (max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
};

console.log(getRandomIntTwo(10));
console.log(getRandomIntTwo(10));
console.log(getRandomIntTwo(10));

let myRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


console.log(myRandomNum(5, 10)); // min = 5 and max = 10
console.log(myRandomNum(30, 60));
console.log(myRandomNum(100, 200));