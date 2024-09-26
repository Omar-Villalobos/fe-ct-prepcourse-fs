function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor;
}

module.exports = esTipoDato;

console.log(esTipoDato("texto"));    // "string"
console.log(esTipoDato(22));         // "number"
console.log(esTipoDato(true));       // "boolean"
console.log(esTipoDato({}));         // "object"
console.log(esTipoDato(undefined));  // "undefined"