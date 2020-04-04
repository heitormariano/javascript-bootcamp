let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;

    if (celsius <= 0) {
        let isFreezing = true;
        console.log('Is it freezing? ' + isFreezing);
    }
    return celsius;
};

let printFahrenheitToCelsius = function (fahrenheit, celsius) {
    console.log(fahrenheit + '°F = ' + celsius + '°C');
};

printFahrenheitToCelsius(32, convertFahrenheitToCelsius(32));
printFahrenheitToCelsius(68, convertFahrenheitToCelsius(68));