const livro ={
  nome: 'Código limpo',
  autor: 'Robert C. Martin',
  editora: 'Alta Books'
};

console.log(livro.nome);
console.log(livro.autor);
console.log(livro.editora);
console.log(livro);


// adicionando valor no meu obj livro

livro.pagina = 92;
console.log(livro);

// deletando nome do meu obj livro

delete livro.nome;
console.log(livro);

// podemos criar funções dentro do meu obj livro1

const livro1 = {
  nome: 'Código limpo',
  autor: 'Robert C. Martin',
  editora: 'Alta Books',

  descricao: function () {
    console.log('Segue descrição do livro: nome:${this.nome}, autor: ${this.autor}, editora: ${this.editora');
  }
};

livro1.descricao;

// acesso dinamico dos valores do objeto
console.log(livro1['nome']);

// posso reatribuir os valores do objeto
 livro1['nome'] = 'Tudo é possível';
 console.log(livro1['nome']);