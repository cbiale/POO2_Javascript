var crearContador = function () {
  var contador = 0;
  return function () {
    contador++;
    return contador;
  };
};

var contar = crearContador();
console.log(contar());
console.log(contar());
