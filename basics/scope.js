let varOne = 'varOne';

if (true) {
    console.log('Variable one: ' + varOne);
    let varTwo = 'varTwo';
    console.log('Variable two: ' + varTwo);

    if (true) {
        let varThree = 'varThree'
        console.log('Variable three:' + varThree);
        console.log('Variable one and two: ' + varOne + ', ' + varTwo);
    }
}

if (true) {
    let varFour = 'varFour';
    console.log('Variable four: ' + varFour);
    //console.log('Variable three: ' + varThree); // ReferenceError: varThree is not defined
}

//console.log('Variable two: ' + varTwo); // ReferenceError: varTwo is not defined