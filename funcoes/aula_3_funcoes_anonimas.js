function calcular(valor1, valor2) {
  return valor1 + valor2;
}

// function anonima pois não tem nome e tabm é uma função de invocação
// imediata ou seja ela cria e se executa;
(function () {
  let valor1 = 78;
  let valor2 = 11;

  const soma = calcular(valor1, valor2);
  console.log(soma);    
}());