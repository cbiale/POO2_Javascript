class Auto {
  constructor () {/* */}
  
  conducir() {
    console.log('se conduce');
  }
  
  static esAuto(c) {
    return c instanceof Auto;
  }
}

let ford = new Auto();
ford.conducir();
console.log(Auto.esAuto(ford));
