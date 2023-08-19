var a = 5;
var b = '5';
var c = 10;

console.log('a =', a, ', b =', b, ', c =', c);

console.log('a == b:', a == b);  // verdadeiro, porque os valores são iguais, mas os tipos são diferentes
console.log('a === b:', a === b); // falso, porque os valores são iguais, mas os tipos são diferentes
console.log('a  b:', a != b);  // falso, porque os valores são iguais
console.log('a !== b:', a !== b); // verdadeiro, porque os tipos são diferentes

console.log('a > c:', a > c);  // falso, porque 5 não é maior que 10
console.log('a >= c:', a >= c); // falso, porque 5 não é maior ou igual a 10
console.log('a < c:', a < c);  // verdadeiro, porque 5 é menor que 10
console.log('a <= c:', a <= c); // verdadeiro, porque 5 é menor ou igual a 10


const numero = 0;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if (numero === 0) {
    console.log('Número Zero não pode ser dividido');
} else if (numeroPar) {
    console.log('Número Par');
} else {
    console.log('Número Impar');
}
