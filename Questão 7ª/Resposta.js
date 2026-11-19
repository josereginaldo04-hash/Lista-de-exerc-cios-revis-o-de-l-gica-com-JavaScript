function senhaValida(senha) {
  if (typeof senha !== "string") {
    return false;
  }

  const temTamanhoMinimo = senha.length >= 8;
  const temNumero = /\d/.test(senha);

  return temTamanhoMinimo && temNumero;
}

console.log("--- Testes: Senha Forte ---");
console.log('"backend2026" ->', senhaValida("backend2026"));
console.log('"senha" ->', senhaValida("senha"));
console.log('"soletraslonga" ->', senhaValida("soletraslonga"));
console.log('"curta1" ->', senhaValida("curta1"));