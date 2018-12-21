//Conversões de temperatura
let tempCelsius;
let tempFahrenhei;
let tempKelvin;

//Converter Celsius em graus Fahrenhei
//°F = °C × 1, 8 + 32
tempCelsius = 50;
tempFahrenhei = tempCelsius * 1.8 + 32;

console.log(tempCelsius + '°C = ' + tempFahrenhei + '°F');

//Converter Fahrenheit em graus Celsius
//°C = (°F − 32) ÷ 1, 8
tempFahrenhei = 122;
tempCelsius = (tempFahrenhei - 32) / 1.8;
console.log(tempFahrenhei + '°F = ' + tempCelsius + '°C');


//Converter graus Celsius em Kelvin
//K = C + 273
tempCelsius = 90;
tempKelvin = tempCelsius + 273;
console.log(tempCelsius + '°C = ' + tempKelvin + 'K');

//Converter Kelvin em graus Celsius
//C = k - 273
tempKelvin = 363;
tempCelsius = tempKelvin - 273;
console.log(tempKelvin + 'K = ' + tempCelsius + '°C');

//Converter Fahrenheit para Kelvin
//T(K) = (T(°F) + 459.67)× 5/9
tempFahrenhei = 321;
tempKelvin = (tempFahrenhei + 459.67) * 5/9;
console.log(tempFahrenhei + '°F = ' + tempKelvin + 'K');

//Converter Kelvin para Fahrenheit
//T(°F) = T(K) × 9 / 5 - 459.67
tempKelvin = 433.7;
tempFahrenhei = tempKelvin * 9/5 - 459.67;
console.log(tempKelvin + 'K = ' + tempFahrenhei + '°F');