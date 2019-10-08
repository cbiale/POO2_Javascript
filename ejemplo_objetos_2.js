var obj = {
   propiedad : 1,
   printPropiedad : function () {
     console.log(this.propiedad++);
   }
};

obj.printPropiedad();
obj.printPropiedad();
obj.printPropiedad();
