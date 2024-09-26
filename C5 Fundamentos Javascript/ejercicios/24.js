function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:
  return str +  "!";
}

module.exports = agregarSimboloExclamacion;
console.log(agregarSimboloExclamacion("hello world ")); //hello world!
console.log(agregarSimboloExclamacion("hola")); //hola!
console.log(agregarSimboloExclamacion("SoyHenry"));     // "SoyHenry!"
