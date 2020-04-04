let name = 'Heitor';

if (true) {
    let name = 'Mateus';
    if (true) {
        name = 'Lucas';
        console.log('Name: ' + name);
    }
}

if (true) {
    console.log('Name: ' + name);
}

//  leaking global variable
if (true) {
    age = 35; // global variable
    if (true) {
        console.log('Age: ' + age);
    }
}

if (true) {
    console.log('Age: ' + age);
}

console.log('Age: ' + age);
