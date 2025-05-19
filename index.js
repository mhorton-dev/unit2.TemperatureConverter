/*************************************************************************
 * Michael Horton
 * 2025-05-19
 * 
 * convertToCelsius:  This function takes a temperature in Fahrenheit and converts it to Celsius.
 * 
 * describeTemperature:  This function takes a temperature in Celsius and returns a string describing the temperature.
 */

function convertToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

function describeTemperature(celsius){
    let description =`Temparature (C&deg): ${celsius.toFixed(2)}C&deg`;
        if (celsius >= 40) {
            return description + " - It's very hot!";
        } if (celsius < 0) {
            return description + " - It's very cold!";
        } if (celsius < 20) {
            return description + " - It's cold.";
        } if (celsius < 30) {
            return description + " - It's warm.";
        } if (celsius < 40) {
            return description + " - It's hot!";
        }
}

main = document.createElement("main");
main.setAttribute("id", "main");
document.body.appendChild(main);

main.innerHTML=(`${describeTemperature(convertToCelsius(-9))}</br>`);
main.innerHTML+=(`${describeTemperature(convertToCelsius(39))}</br>`);
main.innerHTML+=(`${describeTemperature(convertToCelsius(69))}</br>`);
main.innerHTML+=(`${describeTemperature(convertToCelsius(89))}</br>`);
main.innerHTML+=(`${describeTemperature(convertToCelsius(109))}</br>`);

console.log(describeTemperature(convertToCelsius(-1))); // 0.00C&deg - It's very cold!
console.log(describeTemperature(convertToCelsius(19))); // 0.00C&deg - It's cold.
console.log(describeTemperature(convertToCelsius(59))); // 0.00C&deg - It's warm.
console.log(describeTemperature(convertToCelsius(59))); // 0.00C&deg - It's hot!
console.log(describeTemperature(convertToCelsius(79))); // 0.00C&deg - It's very hot!