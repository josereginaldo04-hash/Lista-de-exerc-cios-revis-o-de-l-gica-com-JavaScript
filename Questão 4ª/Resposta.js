function mostrarTabuada(numero) {
  console.log(`\n--- Tabuada do ${numero} ---`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

mostrarTabuada(7);
mostrarTabuada(3);
mostrarTabuada(9);