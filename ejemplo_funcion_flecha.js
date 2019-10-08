class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  
  esperarEImprimirNombre() {
    setTimeout(() => {
      console.log(this.nombre);
    }, 2000);
  }
}

var a = new Persona('pepe');
a.esperarEImprimirNombre();
