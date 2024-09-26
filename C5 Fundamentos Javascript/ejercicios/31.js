// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  return Math.pow(num, 2);
}

module.exports = elevarAlCuadrado;

console.log(elevarAlCuadrado(6)); // 36
console.log(elevarAlCuadrado(0)); // 0
console.log(elevarAlCuadrado(4)); // 16
