//Converter Fahrenheit em graus Celsius
//°C = (°F − 32) ÷ 1, 8
let getFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
};

//Converter Fahrenheit para Kelvin
//T(K) = (T(°F) + 459.67)× 5/9
let getFahrenheitToKenvin = function (fahrenheit) {
    let kelvin = (fahrenheit + 459.67) * 5 / 9;
    return kelvin;
};

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: getFahrenheitToCelsius(fahrenheit),
        kelvin: getFahrenheitToKenvin(fahrenheit)
    };
};

let printTemperatures = function (fahrenheit, convertTemp) {
    let temps = convertTemp(fahrenheit);
    console.log(`The temperature ${temps.fahrenheit}°F is equivalent to ${temps.celsius}°C and ${temps.kelvin}K`);
};

let fahrenheit = 74;
printTemperatures(fahrenheit, convertFahrenheit);