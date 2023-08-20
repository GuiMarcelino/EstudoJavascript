class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'Pedro';
pessoa1.idade = 25;

pessoa1.descrever();

const pessoa2 = new Pessoa();
pessoa2.nome = 'Maria';
pessoa2.idade = 29;

pessoa2.descrever();
