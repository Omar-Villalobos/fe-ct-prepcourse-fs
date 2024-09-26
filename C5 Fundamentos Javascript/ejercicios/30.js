function deEuroAdolar(euro) {
  // La función recibe un argumento llamado euro el cual es un numero.
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Suponiendo que 1 euro equivale a 1.20 dólares.
  // Retornar el valor en dolares.
  // Por ejemplo: 
  // 1 ---> 1.20
  // 0 ---> 0
  // Tu código:
  return 1.20 * euro;
}

module.exports = deEuroAdolar;

console.log(deEuroAdolar(1)); // 1.20
console.log(deEuroAdolar(0)); // 0
console.log(deEuroAdolar(2)); // 2.40
