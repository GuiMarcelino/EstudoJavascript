class Carro {
  constructor(frabricante, modelo, cor, ano) {
    this.frabricante = frabricante;
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
  }
}

const carro1 = new Carro('VW', 'Gol', 'G6', 2013);

console.log(carro1);