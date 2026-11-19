function celsiusParaFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(1));
}

console.log("--- Testes da Função de Conversão ---");
console.log("30 °C =", celsiusParaFahrenheit(30), "°F");
console.log("0 °C =", celsiusParaFahrenheit(0), "°F");
console.log("-5 °C =", celsiusParaFahrenheit(-5), "°F");

console.log("\n--- Temperaturas da Semana ---");
const temperaturasSemanaCelsius = [28, 30, 31.5, 29, 27, 32, 30.5];

for (const tempC of temperaturasSemanaCelsius) {
  const tempF = celsiusParaFahrenheit(tempC);
  console.log(`${tempC} °C -> ${tempF} °F`);
}