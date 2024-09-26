function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 
  // Tu código:
  return x === y;
}

module.exports = sonIguales;
console.log(sonIguales(5, 5));   // true
console.log(sonIguales(5, 8));   // false
console.log(sonIguales('5', 5)); // false (debido a que compara tipos estrictamente)
