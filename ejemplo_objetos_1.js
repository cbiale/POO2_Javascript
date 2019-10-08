var obj = {
   unaPropiedad: "abcdef",
   objetoAnidado: {a: 1, b: 2, c: 3},
   func: function () {
     return 0;
   }
}
// formas de acceso
console.log(obj.unaPropiedad);
console.log(obj["unaPropiedad"]);
console.log(obj["objetoAnidado"].a);
console.log(obj.objetoAnidado.a);
console.log(obj["objetoAnidado"]["a"]);

// llamada a un método 
console.log(obj.func());
