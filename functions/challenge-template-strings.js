let getTipTwo = function (total, tipPercent = .2) { //can be used 0.2 or .2
    let percent = tipPercent * 100;
    let tip = total * tipPercent;

    return `A ${percent}% tip on R$${total} would be R$${tip}`;
};

let getAverageScore = function (resultOne, resultTwo) {
    return `The average score is ${(resultOne + resultTwo)/2}`;
};

let resultOne = getTipTwo(200, .3);
console.log(resultOne);

let resultTwo = getTipTwo(2450, .5);
console.log(resultTwo);

let averageScore = getAverageScore(7.5, 9);
console.log(averageScore);