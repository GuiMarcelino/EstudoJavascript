/*
  Faça um algoritmo que dado as 3 notas de um aluno será calculado sua média e
  sua classificação conforme a tabela abaixo:

  Classificação:
  - Média menor que 5, reprovado;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, passou de semestre;
*/


let nota1 = 8
let nota2 = 6.5
let nota3 = 7

const mediaAluno = (nota1 + nota2 + nota3) / 3;

if (mediaAluno < 5) {
  console.log("Reprovado")
  
} else if (mediaAluno > 5 && mediaAluno < 7) {
  console.log("Recuperação")
} else {
  console.log("Aprovado")
};
