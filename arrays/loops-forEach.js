//test 01

const names = ['Pedro', 'Joao', 'Tiago'];

const simplePrint = function () {
    console.log('Simple Test');
};

names.forEach(simplePrint);

names.forEach(function (item, index) {
    console.log(`Item: ${item} - Index: ${index}`);
});
