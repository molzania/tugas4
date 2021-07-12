//Rumus Fahrenheit to Celcius
//(32°F − 32) × 5/9 = 0°C

function FahrenheitToCelsius(suhuFahrenheit) {
	return (suhuFahrenheit - 32) * (5/9);
}

FahrenheitToCelsius(15);

//Rumus Celcius to Fahrenheit
//(0°C × 9/5) + 32 = 32°F

function CelciustoFahrenheit(suhuCelcius) {
    return (suhuCelcius * 9/5) + 32;
}

CelciustoFahrenheit(20);