function fizzBuzz(limite = 30) {
  for (let i = 1; i <= limite; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log("--- Teste 1: 1 a 30 (padrão) ---");
fizzBuzz();

console.log("\n--- Teste 2: 1 a 15 ---");
fizzBuzz(15);

console.log("\n--- Teste 3: 1 a 10 ---");
fizzBuzz(10);
