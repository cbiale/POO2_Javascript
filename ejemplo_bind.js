var imprimirNumero = {
  numero : 3,
  imprimir2xNumero : function () {
    var doblar = function () {
      return 2 * this.numero;
    }.bind(this);
    console.log(doblar());
  }
};

imprimirNumero.imprimir2xNumero();
imprimirNumero.imprimir2xNumero();
