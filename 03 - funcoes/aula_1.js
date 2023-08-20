function meuNome(name) {
  console.log('Your name is: ' + name);
}

function quadrado(valor) {
  return valor * valor;
}

function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrecimo = (percentualJuros / 100) * valor;

  return valor + valorDeAcrecimo;
}

// passando o valor 'Guilherme' para a function 'meuNome' e essa function exibe o nome no console 
meuNome('Guilherme');


// passando o valor de 10 para a function 'quadrado' e já exibindo o valor no console 
console.log(quadrado(10))

// passando valor e percentual para calcular acrecimo de juros 
console.log(incrementarJuros(120, 12).toFixed(2))