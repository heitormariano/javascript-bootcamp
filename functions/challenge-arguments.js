let getTip = function (total, percent = .2) { //can be used 0.2 or .2
    let tip = total * percent;
    return tip;
};

let result01 = getTip(1400, .3);
console.log(result01);

let result02 = getTip(10000, 0.4);
console.log(result02);

let result03 = getTip(500);
console.log(result03);


