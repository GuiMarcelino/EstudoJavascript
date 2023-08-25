
function gets() {
  return 10;
}

function print(texto) {
  console.log(texto);
}


// lembrando que é importado para o outro arquivo somente oque é passado no module.exports
module.exports = {gets, print}