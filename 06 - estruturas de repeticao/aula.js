const notas = []

notas.push(5, 7, 8, 2, 5, 8);


for (let i = 0; i < 10; i++) {
    console.log(i);
}

const nome = 'Guilherme Marcelino'

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    soma = soma + nota
}

const media = soma / notas.length;
console.log(media);