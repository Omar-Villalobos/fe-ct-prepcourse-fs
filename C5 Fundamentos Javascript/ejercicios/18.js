function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  // Verificamos que solo sea una letra
  if (letra.length === 1) {
    // Comprobamos si es una vocal
    if ("aeiouAEIOU".includes(letra)) {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
  } else {
    return "Dato incorrecto";
  }
}

module.exports = esVocal;

console.log(esVocal("a"));           // "Es vocal"
console.log(esVocal("u"));           // "Es vocal"
console.log(esVocal("n"));           // "Dato incorrecto"
console.log(esVocal("texto largo")); // "Dato incorrecto"
