class Carro {
  constructor(fabricante, modelo, cor, ano) {
    this.frabricante = fabricante;
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
  }
}

const carro1 = new Carro('VW', 'Jetta', 'G6', 2016);

console.log(carro1);