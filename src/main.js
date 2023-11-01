const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Lucas', nota: 4 },
];

function obterAlunosAprovados(alunos) {
    const aprovados = [];
    for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 6) {
        aprovados.push(alunos[i]);
    }
    }
    return aprovados;
}

const alunosAprovados = obterAlunosAprovados(alunos);

console.log(alunosAprovados);
