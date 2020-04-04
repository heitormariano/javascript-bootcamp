let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
};

let converterCelsiusToFahrenheit = function (celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
};

let printFahrenheitToCelsius = function (fahrenheit, celsius) {
    console.log(fahrenheit + '°F = ' + celsius + '°C');
};

let printCelsiusToFahrenheit = function (celsius, fahrenheit) {
    console.log(celsius + '°C = ' + fahrenheit + '°F');
};

// declared variables
let fahrenheitTemp;
let celsiusTemp;

fahrenheitTemp = 32;
celsiusTemp = convertFahrenheitToCelsius(fahrenheitTemp);
printFahrenheitToCelsius(fahrenheitTemp, celsiusTemp);

fahrenheitTemp = 68;
celsiusTemp = convertFahrenheitToCelsius(fahrenheitTemp);
printFahrenheitToCelsius(fahrenheitTemp, celsiusTemp);

celsiusTemp = 0;
fahrenheitTemp = converterCelsiusToFahrenheit(celsiusTemp);
printCelsiusToFahrenheit(celsiusTemp, fahrenheitTemp);

celsiusTemp = 20;
fahrenheitTemp = converterCelsiusToFahrenheit(celsiusTemp);
printCelsiusToFahrenheit(celsiusTemp, fahrenheitTemp);
