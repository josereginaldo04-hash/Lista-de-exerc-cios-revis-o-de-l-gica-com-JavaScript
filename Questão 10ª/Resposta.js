// --- Versão tradicional (com laços) ---
function calcularMediaTurma(alunos) {
  if (!Array.isArray(alunos) || alunos.length === 0) {
    return 0;
  }

  let somaNotas = 0;
  for (const aluno of alunos) {
    somaNotas += aluno.nota;
  }

  return Number((somaNotas / alunos.length).toFixed(2));
}

function alunosAprovados(alunos) {
  const aprovados = [];

  for (const aluno of alunos) {
    if (aluno.nota >= 7) {
      aprovados.push(aluno.nome);
    }
  }

  return aprovados;
}

// --- Bônus: usando reduce, filter e map ---
function calcularMediaTurmaBonus(alunos) {
  if (!Array.isArray(alunos) || alunos.length === 0) {
    return 0;
  }

  const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
  return Number((somaNotas / alunos.length).toFixed(2));
}

function alunosAprovadosBonus(alunos) {
  return alunos
    .filter((aluno) => aluno.nota >= 7)
    .map((aluno) => aluno.nome);
}

// --- Testes com três turmas/entradas diferentes ---
const turmaA = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carla", nota: 7.0 },
  { nome: "Diego", nota: 5.5 },
];

const turmaB = [
  { nome: "Eduarda", nota: 9.0 },
  { nome: "Felipe", nota: 7.5 },
  { nome: "Gabriela", nota: 8.0 },
];

const turmaC = [
  { nome: "Henrique", nota: 4.5 },
  { nome: "Isabela", nota: 6.5 },
  { nome: "João", nota: 7.0 },
];

for (const [indice, turma] of [turmaA, turmaB, turmaC].entries()) {
  console.log(`\n=== Turma ${indice + 1} ===`);
  console.log("Média (tradicional):", calcularMediaTurma(turma));
  console.log("Aprovados >= 7 (tradicional):", alunosAprovados(turma));
  console.log("Média (bônus reduce):", calcularMediaTurmaBonus(turma));
  console.log("Aprovados >= 7 (bônus filter + map):", alunosAprovadosBonus(turma));
}