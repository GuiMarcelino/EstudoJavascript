class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
      console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const pessoa1 = new Pessoa('Carlos', 26);
const pessoa2 = new Pessoa('Bia', 13);


pessoa1.descrever();
pessoa2.descrever();