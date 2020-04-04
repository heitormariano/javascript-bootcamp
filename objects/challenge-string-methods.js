/**
let isValidPassword = function (password) {
    if (password.length >= 8 && !password.includes('password')) {
        return true;
    } else {
        return false;
    }
};
*/

let isValidPassword = function (password) {
    return password.length >= 8 && !password.includes('password');
};

// multiple declaration
let passwordOne, passwordTwo, passwordThree;

passwordOne = '123';
passwordTwo = 'super@hiper@mega@ultra';
passwordThree = '456passwordABCD';

// testing the isValidPassword method
console.log(isValidPassword(passwordOne)); // false
console.log(isValidPassword(passwordTwo)); // true
console.log(isValidPassword(passwordThree)); // false