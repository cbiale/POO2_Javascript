arreglo = ['hola', 'mundo', 'poo2'];

// acceso a una pos. del arreglo
console.log("El contenido de arreglo [0] es: " +  arreglo[0]);
console.log("El contenido de arreglo es: " + arreglo);

// agrego un elemento al final
arreglo.push(3);
console.log("El contenido de arreglo es: " + arreglo);

// quito el último elemento
valor = arreglo.pop();
console.log("El contenido de arreglo es: " + arreglo);
console.log("Valor = " + valor);

// agrego un elemento al inicio
arreglo.unshift(true);
console.log("El contenido de arreglo es: " + arreglo);

// quito el primer elemento
logico = arreglo.shift();
console.log("El contenido de arreglo es: " + arreglo);
console.log("logico = " + logico);

// obtengo parte de un arreglo
nuevoArreglo = arreglo.slice(1,2);
console.log("El contenido de nuevoArreglo es: " + nuevoArreglo);
