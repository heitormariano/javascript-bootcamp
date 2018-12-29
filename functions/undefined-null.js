let name
name = 'Hector'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log('The name is: ' + name)
}

let printValue = function (num) {
    console.log(num)
}

printValue(); //undefined

let value = printValue();
console.log('Value: ' + value); // undefined

let square = function (num) {
    let result = num * num;
    console.log(result);
}

square();; //NaN

let age = 31;
age = null;

console.log('Age: ' + age);